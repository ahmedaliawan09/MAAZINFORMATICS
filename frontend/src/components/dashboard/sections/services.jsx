"use client"

import { Plus, Edit2, Save, X, Trash2 } from "lucide-react"
import { useState, useEffect } from "react"
import axios from "axios"

export default function ServicesSection() {
    const [services, setServices] = useState([])
    const [newServiceName, setNewServiceName] = useState("")
    const [loading, setLoading] = useState(false)
    const [editingId, setEditingId] = useState(null)
    const [editName, setEditName] = useState("")
    const [errorMsg, setErrorMsg] = useState("")

    const fetchServices = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/service/getservices")
            setServices(res.data.services || [])
        } catch (err) {
            console.error("Fetch failed:", err)
        }
    }

    useEffect(() => {
        fetchServices()
        const interval = setInterval(fetchServices, 10000)
        return () => clearInterval(interval)
    }, [])

    const handleAddService = async (e) => {
        e.preventDefault()
        if (!newServiceName.trim()) return

        setLoading(true)
        setErrorMsg("")
        try {
            await axios.post(
                "http://localhost:5000/api/service/addservices",
                { service_name: newServiceName },
                { withCredentials: true }
            )
            setNewServiceName("")
            fetchServices()
        } catch (err) {
            const msg = err.response?.data?.message || "Failed to add service"
            setErrorMsg(msg)
        } finally {
            setLoading(false)
        }
    }

    const startEdit = (service) => {
        setEditingId(service.id)
        setEditName(service.service_name)
    }

    const cancelEdit = () => {
        setEditingId(null)
        setEditName("")
    }

    const saveEdit = async () => {
        if (!editName.trim()) return
        setErrorMsg("")
        try {
            await axios.put(
                `http://localhost:5000/api/service/updateservice/${editingId}`,
                { service_name: editName.trim() },
                { withCredentials: true }
            )
            fetchServices()
            cancelEdit()
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Update failed")
        }
    }

    const deleteService = async (id) => {
        if (!confirm("Are you sure you want to delete this service?")) return
        setErrorMsg("")
        try {
            await axios.delete(
                `http://localhost:5000/api/service/deleteservice/${id}`,
                { withCredentials: true }
            )
            fetchServices()
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Delete failed")
        }
    }

    return (
        <div className="p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Services</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage services displayed in navbar</p>
                </div>
            </div>

            {errorMsg && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg">
                    {errorMsg}
                </div>
            )}

            {/* Add Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-lg font-semibold mb-4">Add New Service</h2>
                <form onSubmit={handleAddService} className="flex gap-3">
                    <input
                        type="text"
                        value={newServiceName}
                        onChange={(e) => setNewServiceName(e.target.value)}
                        placeholder="e.g., Medical Billing"
                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-70"
                    >
                        <Plus size={18} />
                        Add
                    </button>
                </form>
            </div>

            {/* List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700 border-b">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">Service Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">ID</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500 dark:text-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-8 text-center text-gray-500">
                                        No services added yet
                                    </td>
                                </tr>
                            ) : (
                                services.map((service) => (
                                    <tr key={service.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                        <td className="px-6 py-4">
                                            {editingId === service.id ? (
                                                <input
                                                    type="text"
                                                    value={editName}
                                                    onChange={(e) => setEditName(e.target.value)}
                                                    className="px-3 py-1 border border-blue-500 rounded w-full"
                                                    autoFocus
                                                />
                                            ) : (
                                                <span className="font-medium">{service.service_name}</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">#{service.id}</td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                {editingId === service.id ? (
                                                    <>
                                                        <button onClick={saveEdit} className="p-1.5 hover:bg-green-100 dark:hover:bg-green-900/30 rounded">
                                                            <Save size={16} className="text-green-600" />
                                                        </button>
                                                        <button onClick={cancelEdit} className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                                            <X size={16} className="text-gray-600" />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button onClick={() => startEdit(service)} className="p-1.5 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded">
                                                        <Edit2 size={16} className="text-blue-600" />
                                                    </button>
                                                )}
                                                <button onClick={() => deleteService(service.id)} className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded">
                                                    <Trash2 size={16} className="text-red-600" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}