"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import {
    Plus, Trash2, Save, Loader2, ChevronLeft, Settings, Edit2, X, Check,
    LayoutDashboard, Palette, Type, Layers, Sparkles
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

            const successEl = document.createElement('div')
            successEl.className = 'fixed top-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg z-50'
            successEl.textContent = '✅ All content saved successfully!'
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
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:to-gray-900 p-4 md:p-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                                <LayoutDashboard className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services Management</h1>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Manage your service pages</p>
                            </div>
                        </div>
                    </div>

                    <AnimatePresence>
                        {errorMsg && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                            >
                                <div className="flex items-center gap-3 text-red-700 dark:text-red-300">
                                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    {errorMsg}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                                <Plus className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Add New Service</h2>
                        </div>
                        <form onSubmit={handleAddService} className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                                <input
                                    value={newServiceName}
                                    onChange={(e) => setNewServiceName(e.target.value)}
                                    placeholder="Enter service name..."
                                    className="w-full px-4 py-3 pl-11 text-sm bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    disabled={loading}
                                />
                                <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={loading || !newServiceName.trim()}
                                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 text-sm font-medium transition-all"
                            >
                                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                                Add Service
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg"
                    >
                        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Services List</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{services.length} services available</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-300">Service Name</th>
                                        <th className="px-6 py-4 text-left font-semibold text-gray-700 dark:text-gray-300">Slug</th>
                                        <th className="px-6 py-4 text-right font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {services.map((service, index) => (
                                        <motion.tr
                                            key={service.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="hover:bg-gray-50/50 dark:hover:bg-gray-700/30 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                                                    {editingServiceId === service.id ? (
                                                        <input
                                                            value={editServiceName}
                                                            onChange={(e) => setEditServiceName(e.target.value)}
                                                            className="px-3 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                                            autoFocus
                                                        />
                                                    ) : (
                                                        <span className="font-medium text-gray-900 dark:text-white">{service.service_name}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <code className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 px-3 py-1.5 rounded-lg font-mono">
                                                    /services/{service.slug}
                                                </code>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    {editingServiceId === service.id ? (
                                                        <>
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={saveEdit}
                                                                className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                                                            >
                                                                <Check className="w-4 h-4" />
                                                            </motion.button>
                                                            <motion.button
                                                                whileHover={{ scale: 1.1 }}
                                                                whileTap={{ scale: 0.9 }}
                                                                onClick={() => { setEditingServiceId(null); setEditServiceName("") }}
                                                                className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </motion.button>
                                                        </>
                                                    ) : (
                                                        <motion.button
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            onClick={() => startEdit(service)}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </motion.button>
                                                    )}
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => deleteService(service.id)}
                                                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </motion.button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => loadServiceContent(service)}
                                                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                                                    >
                                                        <Settings className="w-4 h-4 inline mr-2" />
                                                        Edit Content
                                                    </motion.button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        )
    }

    // Content Editor View
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:to-gray-900 p-4 md:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex items-center justify-between mb-8">
                    <motion.button
                        whileHover={{ x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedService(null)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to List
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={saveContent}
                        disabled={saving}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg disabled:opacity-50 flex items-center gap-2 text-sm font-medium transition-all"
                    >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Save All Changes
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 dark:from-purple-500/5 dark:via-pink-500/5 dark:to-indigo-500/5 rounded-2xl border border-purple-200 dark:border-purple-800"
                >
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Editing: <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{selectedService.service_name}</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">Customize your service page content and design</p>
                </motion.div>

                {/* Basic Settings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-8 shadow-lg"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                            <Palette className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Basic Settings</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hero Title</label>
                            <input
                                value={selectedService.hero_title}
                                onChange={(e) => setSelectedService(prev => ({ ...prev, hero_title: e.target.value }))}
                                className="w-full px-4 py-3 text-sm bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Hero Subtitle</label>
                            <input
                                value={selectedService.hero_subtitle}
                                onChange={(e) => setSelectedService(prev => ({ ...prev, hero_subtitle: e.target.value }))}
                                className="w-full px-4 py-3 text-sm bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Icon</label>
                            <select
                                value={selectedService.icon_name}
                                onChange={(e) => setSelectedService(prev => ({ ...prev, icon_name: e.target.value }))}
                                className="w-full px-4 py-3 text-sm bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            >
                                {iconOptions.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Primary Color</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    value={selectedService.primary_color}
                                    onChange={(e) => setSelectedService(prev => ({ ...prev, primary_color: e.target.value, gradient_from: e.target.value }))}
                                    className="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600"
                                />
                                <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{selectedService.primary_color}</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gradient From</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    value={selectedService.gradient_from}
                                    onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_from: e.target.value }))}
                                    className="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600"
                                />
                                <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{selectedService.gradient_from}</span>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Gradient To</label>
                            <div className="flex items-center gap-3">
                                <input
                                    type="color"
                                    value={selectedService.gradient_to}
                                    onChange={(e) => setSelectedService(prev => ({ ...prev, gradient_to: e.target.value }))}
                                    className="w-12 h-12 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600"
                                />
                                <span className="text-sm font-mono text-gray-600 dark:text-gray-400">{selectedService.gradient_to}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sections */}
                <div className="space-y-8">
                    {selectedService.sections.map((section, sIdx) => (
                        <motion.div
                            key={section.id || sIdx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                                        <Layers className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                                        {section.title || section.section_type}
                                    </h3>
                                    <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-full">
                                        {section.content.length} items
                                    </span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => deleteSection(sIdx)}
                                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </motion.button>
                            </div>

                            <div className="space-y-6">
                                {section.content.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="p-6 bg-gradient-to-r from-slate-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-600"
                                    >
                                        {/* Features Section */}
                                        {section.section_type === "features" && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Icon Name</label>
                                                    <select
                                                        value={item.icon_name || "CheckCircle"}
                                                        onChange={(e) => updateItem(sIdx, iIdx, "icon_name", e.target.value)}
                                                        className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                                                    >
                                                        {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Title</label>
                                                    <input
                                                        value={item.title || ""}
                                                        onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)}
                                                        placeholder="Feature title"
                                                        className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Description</label>
                                                    <input
                                                        value={item.description || ""}
                                                        onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)}
                                                        placeholder="Short description"
                                                        className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Highlight (optional)</label>
                                                    <input
                                                        value={item.highlight || ""}
                                                        onChange={(e) => updateItem(sIdx, iIdx, "highlight", e.target.value)}
                                                        placeholder="e.g. Most Popular"
                                                        className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Stats / Benefits */}
                                        {["stats", "benefits"].includes(section.section_type) && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Value</label>
                                                    <input value={item.value || ""} onChange={(e) => updateItem(sIdx, iIdx, "value", e.target.value)} placeholder="99%" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Label</label>
                                                    <input value={item.label || ""} onChange={(e) => updateItem(sIdx, iIdx, "label", e.target.value)} placeholder="Success Rate" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Trend (optional)</label>
                                                    <input value={item.trend || ""} onChange={(e) => updateItem(sIdx, iIdx, "trend", e.target.value)} placeholder="+15%" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Process */}
                                        {section.section_type === "process" && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Step Number</label>
                                                    <input value={item.step_number || ""} onChange={(e) => updateItem(sIdx, iIdx, "step_number", e.target.value)} placeholder="01" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Title</label>
                                                    <input value={item.title || ""} onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)} placeholder="Step Title" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Description</label>
                                                    <input value={item.description || ""} onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)} placeholder="Details" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Highlight</label>
                                                    <input value={item.highlight || ""} onChange={(e) => updateItem(sIdx, iIdx, "highlight", e.target.value)} placeholder="Optional" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Industries / Technologies */}
                                        {["industries", "technologies"].includes(section.section_type) && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Icon Name</label>
                                                    <select value={item.icon_name || "Globe"} onChange={(e) => updateItem(sIdx, iIdx, "icon_name", e.target.value)} className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                                                        {iconOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Title</label>
                                                    <input value={item.title || ""} onChange={(e) => updateItem(sIdx, iIdx, "title", e.target.value)} placeholder="Item Title" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Description</label>
                                                    <input value={item.description || ""} onChange={(e) => updateItem(sIdx, iIdx, "description", e.target.value)} placeholder="Description" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Highlight</label>
                                                    <input value={item.highlight || ""} onChange={(e) => updateItem(sIdx, iIdx, "highlight", e.target.value)} placeholder="Optional" className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500" />
                                                </div>
                                            </div>
                                        )}

                                        <div className="mt-6 flex justify-end">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => deleteItem(sIdx, iIdx)}
                                                className="px-4 py-2 text-sm font-medium bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                                            >
                                                Remove Item
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => addItem(sIdx)}
                                className="mt-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:shadow-lg flex items-center gap-2 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                Add Item
                            </motion.button>
                        </motion.div>
                    ))}

                    {/* Add New Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 shadow-lg text-center"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                                <Plus className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add New Section</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                            {["features", "stats", "process", "industries", "technologies", "benefits"].map((type) => (
                                <motion.button
                                    key={type}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => addSection(type)}
                                    className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 text-sm font-medium capitalize transition-all hover:shadow-md"
                                >
                                    + {type}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}