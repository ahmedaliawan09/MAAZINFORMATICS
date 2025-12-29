"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import {
    Plus, Trash2, Save, Loader2, ChevronLeft, Edit2, X, Check,
    LayoutDashboard, Palette, Type, Layers, Sparkles, ChevronRight,
    Eye, Copy, Search, MoreVertical, Grid, List, Filter,
    ArrowUpRight, Calendar, Users, TrendingUp, BarChart3
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const iconOptions = [
    "CheckCircle", "Clock", "Shield", "TrendingUp", "Users", "Award", "Zap",
    "Globe", "Phone", "Code", "FileText", "DollarSign", "Headphones", "Cpu", "Heart"
]

const colorPalette = {
    primary: "#7C3AED",
    secondary: "#10B981",
    accent: "#3B82F6",
    dark: "#0F172A",
    light: "#F8FAFC",
    gray: "#64748B"
}

export default function ServicesSection() {
    const [services, setServices] = useState([])
    const [selectedService, setSelectedService] = useState(null)
    const [newServiceName, setNewServiceName] = useState("")
    const [editingServiceId, setEditingServiceId] = useState(null)
    const [editServiceName, setEditServiceName] = useState("")
    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [query, setQuery] = useState("")
    const [viewMode, setViewMode] = useState("grid")
    const [activeTab, setActiveTab] = useState("content")

    const fetchServices = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/service/getservices")
            setServices(res.data.services || [])
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchServices()
    }, [])

    const handleAddService = async (e) => {
        e.preventDefault()
        if (!newServiceName.trim()) return
        setLoading(true)
        setErrorMsg("")
        try {
            await axios.post("http://localhost:5000/api/service/addservices",
                { service_name: newServiceName.trim() },
                { withCredentials: true }
            )
            setNewServiceName("")
            fetchServices()
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Failed to add")
        } finally {
            setLoading(false)
        }
    }

    const startEdit = (service) => {
        setEditingServiceId(service.id)
        setEditServiceName(service.service_name)
    }

    const saveEdit = async () => {
        if (!editServiceName.trim()) return
        try {
            await axios.put(`http://localhost:5000/api/service/updateservice/${editingServiceId}`,
                { service_name: editServiceName.trim() },
                { withCredentials: true }
            )
            fetchServices()
            setEditingServiceId(null)
            setEditServiceName("")
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Update failed")
        }
    }

    const deleteService = async (id) => {
        if (!confirm(`Delete "${services.find(s => s.id === id)?.service_name}" and all its content?`)) return
        try {
            await axios.delete(`http://localhost:5000/api/service/deleteservice/${id}`,
                { withCredentials: true }
            )
            fetchServices()
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Delete failed")
        }
    }

    const loadServiceContent = async (service) => {
        try {
            setLoading(true)
            const res = await axios.get(`http://localhost:5000/api/service/content/${service.id}`)
            setSelectedService({
                ...service,
                sections: res.data.service.sections || [],
                hero_title: res.data.service.hero_title || service.service_name,
                hero_subtitle: res.data.service.hero_subtitle || "Premium Service",
                icon_name: res.data.service.icon_name || "FileText",
                primary_color: res.data.service.primary_color || colorPalette.primary,
                gradient_from: res.data.service.gradient_from || colorPalette.primary,
                gradient_to: res.data.service.gradient_to || colorPalette.accent
            })
        } catch (err) {
            setErrorMsg("Failed to load content")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const saveContent = async () => {
        try {
            setSaving(true)
            setErrorMsg("")

            const payload = {
                basic: {
                    hero_title: selectedService.hero_title,
                    hero_subtitle: selectedService.hero_subtitle,
                    icon_name: selectedService.icon_name,
                    primary_color: selectedService.primary_color,
                    gradient_from: selectedService.gradient_from,
                    gradient_to: selectedService.gradient_to,
                },
                sections: selectedService.sections.map(sec => ({
                    id: sec.id && !sec.isNew ? sec.id : undefined,
                    section_type: sec.section_type,
                    title: sec.title || "",
                    subtitle: sec.subtitle || "",
                    content: sec.content
                }))
            }

            await axios.put(`http://localhost:5000/api/service/content/${selectedService.id}`, payload, {
                withCredentials: true
            })

            // Success notification
            const successEl = document.createElement('div')
            successEl.className = 'fixed top-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg z-50'
            successEl.textContent = '✅ Content saved successfully!'
            document.body.appendChild(successEl)
            setTimeout(() => successEl.remove(), 3000)

            loadServiceContent(selectedService)
        } catch (err) {
            setErrorMsg(err.response?.data?.message || "Save failed")
            console.error(err)
        } finally {
            setSaving(false)
        }
    }

    const addSection = (type) => {
        const newSection = {
            id: `temp-${Date.now()}`,
            section_type: type,
            title: type.charAt(0).toUpperCase() + type.slice(1),
            subtitle: "",
            content: [],
            isNew: true
        }
        setSelectedService(prev => ({ ...prev, sections: [...prev.sections, newSection] }))
    }

    const deleteSection = (index) => {
        setSelectedService(prev => ({
            ...prev,
            sections: prev.sections.filter((_, i) => i !== index)
        }))
    }

    const addItem = (sectionIndex) => {
        setSelectedService(prev => {
            const sections = prev.sections.map((section, idx) => {
                if (idx !== sectionIndex) return section

                let newItem = {}
                const type = section.section_type

                if (type === "features") {
                    newItem = {
                        id: `item-${Date.now()}`,
                        icon_name: "CheckCircle",
                        title: "New Feature",
                        description: "Description",
                        highlight: ""
                    }
                } else if (["stats", "benefits"].includes(type)) {
                    newItem = {
                        id: `item-${Date.now()}`,
                        value: "99%",
                        label: "Success Rate",
                        trend: ""
                    }
                } else if (type === "process") {
                    newItem = {
                        id: `item-${Date.now()}`,
                        step_number: "01",
                        title: "Step Title",
                        description: "Details here",
                        highlight: ""
                    }
                } else if (["industries", "technologies"].includes(type)) {
                    newItem = {
                        id: `item-${Date.now()}`,
                        icon_name: "Globe",
                        title: "New Item",
                        description: "Description",
                        highlight: ""
                    }
                }

                return {
                    ...section,
                    content: [...(section.content || []), newItem]
                }
            })

            return { ...prev, sections }
        })
    }

    const updateItem = (sectionIndex, itemIndex, field, value) => {
        setSelectedService(prev => {
            const sections = [...prev.sections]
            sections[sectionIndex].content[itemIndex][field] = value
            return { ...prev, sections }
        })
    }

    const deleteItem = (sectionIndex, itemIndex) => {
        setSelectedService(prev => {
            const sections = [...prev.sections]
            sections[sectionIndex].content.splice(itemIndex, 1)
            return { ...prev, sections }
        })
    }

    // List View
    if (!selectedService) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
                {/* Header */}
                <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services Manager</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage and customize service pages</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setViewMode("grid")}
                                        className={`px-3 py-2 ${viewMode === "grid" ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400" : "text-gray-500"}`}
                                    >
                                        <Grid className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setViewMode("list")}
                                        className={`px-3 py-2 ${viewMode === "list" ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400" : "text-gray-500"}`}
                                    >
                                        <List className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Services</p>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{services.length}</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                    <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Active</p>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{services.length}</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Performance</p>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Excellent</h3>
                                </div>
                                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Add Service Card */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 mb-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white">Create New Service</h3>
                                <p className="text-purple-100 mt-1">Add a new service page to your portfolio</p>
                            </div>
                            <form onSubmit={handleAddService} className="flex gap-2">
                                <input
                                    type="text"
                                    value={newServiceName}
                                    onChange={(e) => setNewServiceName(e.target.value)}
                                    placeholder="Enter service name"
                                    className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-white/50 w-64"
                                    disabled={loading}
                                />
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
                                >
                                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Services Grid */}
                    {viewMode === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {services.filter(s => !query || s.service_name.toLowerCase().includes(query.toLowerCase())).map((service) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div
                                        className="h-2 w-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${service.gradient_from || colorPalette.primary}, ${service.gradient_to || colorPalette.accent})`
                                        }}
                                    />
                                    <div className="p-5">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{service.service_name}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">/services/{service.slug}</p>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                                                Active
                                            </span>
                                            {service.updated_at && (
                                                <span className="text-xs text-gray-500">
                                                    Updated {new Date(service.updated_at).toLocaleDateString()}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => loadServiceContent(service)}
                                                className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => window.open(`/services/${service.slug}`, "_blank")}
                                                className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                                title="Preview"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        /* Table View */
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200 dark:border-gray-800">
                                        <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Service</th>
                                        <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                                        <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Last Updated</th>
                                        <th className="text-left p-4 text-sm font-medium text-gray-500 dark:text-gray-400">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {services.filter(s => !query || s.service_name.toLowerCase().includes(query.toLowerCase())).map((service) => (
                                        <tr key={service.id} className="border-b border-gray-200 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${service.gradient_from || colorPalette.primary}20, ${service.gradient_to || colorPalette.accent}20)`
                                                        }}
                                                    >
                                                        <Layers className="w-5 h-5" style={{ color: service.primary_color || colorPalette.primary }} />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-gray-900 dark:text-white">{service.service_name}</h4>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">/services/{service.slug}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className="px-3 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                                    Active
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-500 dark:text-gray-400 text-sm">
                                                {service.updated_at ? new Date(service.updated_at).toLocaleDateString() : 'Never'}
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => loadServiceContent(service)}
                                                        className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors flex items-center gap-2"
                                                    >
                                                        <Edit2 className="w-3 h-3" />
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => deleteService(service.id)}
                                                        className="px-3 py-1.5 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        )
    }

    // Content Editor View
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            {/* Editor Header */}
            <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                <div className="px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="flex items-center gap-2 px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                                <span>Back to Services</span>
                            </button>
                            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">{selectedService.service_name}</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Editing service content</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => window.open(`/services/${selectedService.slug}`, "_blank")}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Eye className="w-4 h-4" />
                                Preview
                            </button>
                            <button
                                onClick={() => navigator.clipboard?.writeText(`/services/${selectedService.slug}`)}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <Copy className="w-4 h-4" />
                                Copy URL
                            </button>
                            <button
                                onClick={saveContent}
                                disabled={saving}
                                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                Save Changes
                            </button>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-1 mt-4">
                        {["content"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab
                                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Editor Content */}
            <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Panel - Basic Settings */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Basic Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Service Name</label>
                                    <input
                                        type="text"
                                        value={selectedService.service_name}
                                        readOnly
                                        className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hero Title</label>
                                    <input
                                        type="text"
                                        value={selectedService.hero_title}
                                        onChange={(e) => setSelectedService(prev => ({ ...prev, hero_title: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hero Subtitle</label>
                                    <textarea
                                        value={selectedService.hero_subtitle}
                                        onChange={(e) => setSelectedService(prev => ({ ...prev, hero_subtitle: e.target.value }))}
                                        rows={3}
                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5">
                            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Design Settings</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Icon</label>
                                    <select
                                        value={selectedService.icon_name}
                                        onChange={(e) => setSelectedService(prev => ({ ...prev, icon_name: e.target.value }))}
                                        className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                                    >
                                        {iconOptions.map(i => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Primary Color</label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="color"
                                            value={selectedService.primary_color}
                                            onChange={(e) => setSelectedService(prev => ({
                                                ...prev,
                                                primary_color: e.target.value,
                                                gradient_from: e.target.value
                                            }))}
                                            className="w-12 h-12 rounded-lg cursor-pointer"
                                        />
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                value={selectedService.primary_color}
                                                onChange={(e) => setSelectedService(prev => ({
                                                    ...prev,
                                                    primary_color: e.target.value,
                                                    gradient_from: e.target.value
                                                }))}
                                                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 font-mono text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gradient Colors</label>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex-1">
                                            <div className="text-xs text-gray-500 mb-1">From</div>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="color"
                                                    value={selectedService.gradient_from}
                                                    onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_from: e.target.value }))}
                                                    className="w-8 h-8 rounded cursor-pointer"
                                                />
                                                <input
                                                    type="text"
                                                    value={selectedService.gradient_from}
                                                    onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_from: e.target.value }))}
                                                    className="flex-1 px-2 w-26 py-1 border border-gray-200 dark:border-gray-700 rounded text-sm font-mono"
                                                />
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                        <div className="flex-1">
                                            <div className="text-xs text-gray-500 mb-1">To</div>
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="color"
                                                    value={selectedService.gradient_to}
                                                    onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_to: e.target.value }))}
                                                    className="w-8 h-8 rounded cursor-pointer"
                                                />
                                                <input
                                                    type="text"
                                                    value={selectedService.gradient_to}
                                                    onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_to: e.target.value }))}
                                                    className="flex-1 px-2 w-24 py-1 border border-gray-200 dark:border-gray-700 rounded text-sm font-mono"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="h-20 rounded-lg mt-2 border border-gray-200 dark:border-gray-700"
                                        style={{
                                            background: `linear-gradient(90deg, ${selectedService.gradient_from}, ${selectedService.gradient_to})`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Sections */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-5 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Content Sections</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Manage sections and their content</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {["features", "stats", "process", "benefits"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => addSection(type)}
                                            className="px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            Add {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                {selectedService.sections.map((section, sIdx) => (
                                    <div key={section.id || sIdx} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
                                        <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                                    <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-900 dark:text-white">{section.title}</h4>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{section.section_type} • {section.content?.length || 0} items</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => addItem(sIdx)}
                                                    className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm hover:bg-purple-700 transition-colors"
                                                >
                                                    Add Item
                                                </button>
                                                <button
                                                    onClick={() => deleteSection(sIdx)}
                                                    className="px-3 py-1.5 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-4 space-y-3">
                                            {section.content.map((item, iIdx) => (
                                                <div key={item.id} className="flex items-start gap-3 p-3 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900">
                                                    <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{iIdx + 1}</span>
                                                    </div>

                                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-2">
                                                        {section.section_type === "features" && (
                                                            <>
                                                                <input
                                                                    className="md:col-span-3 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.title || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)}
                                                                    placeholder="Title"
                                                                />
                                                                <input
                                                                    className="md:col-span-6 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.description || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)}
                                                                    placeholder="Description"
                                                                />
                                                                <input
                                                                    className="md:col-span-3 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.highlight || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "highlight", e.target.value)}
                                                                    placeholder="Badge"
                                                                />
                                                            </>
                                                        )}

                                                        {["stats", "benefits"].includes(section.section_type) && (
                                                            <>
                                                                <input
                                                                    className="md:col-span-4 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.value || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "value", e.target.value)}
                                                                    placeholder="Value"
                                                                />
                                                                <input
                                                                    className="md:col-span-5 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.label || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "label", e.target.value)}
                                                                    placeholder="Label"
                                                                />
                                                                <input
                                                                    className="md:col-span-3 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.trend || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "trend", e.target.value)}
                                                                    placeholder="Trend"
                                                                />
                                                            </>
                                                        )}

                                                        {section.section_type === "process" && (
                                                            <>
                                                                <input
                                                                    className="md:col-span-2 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.step_number || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "step_number", e.target.value)}
                                                                    placeholder="Step"
                                                                />
                                                                <input
                                                                    className="md:col-span-4 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.title || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)}
                                                                    placeholder="Title"
                                                                />
                                                                <input
                                                                    className="md:col-span-6 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                                                                    value={item.description || ""}
                                                                    onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)}
                                                                    placeholder="Description"
                                                                />
                                                            </>
                                                        )}
                                                    </div>

                                                    <button
                                                        onClick={() => deleteItem(sIdx, iIdx)}
                                                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors flex-shrink-0"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="sticky bottom-6">
                            <button
                                onClick={saveContent}
                                disabled={saving}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                            >
                                {saving ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Saving Changes...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-5 h-5" />
                                        Save All Changes
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}