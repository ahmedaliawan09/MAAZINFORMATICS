"use client"

import { useState, useEffect } from "react"
import { Shield, Mail, User, X, Eye, EyeOff, ChevronDown, Sparkles, Calendar, Key, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"

const roleConfig = {
    Admin: {
        color: "from-red-500 to-pink-600",
        badge: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-300 dark:border-red-800",
        iconColor: "text-red-500"
    },
    Manager: {
        color: "from-purple-500 to-indigo-600",
        badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-800",
        iconColor: "text-purple-500"
    },
    Employee: {
        color: "from-emerald-500 to-teal-600",
        badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-800",
        iconColor: "text-emerald-500"
    },
}

const roleOptions = [
    { value: "Admin", label: "Administrator", description: "Full access to all features and settings", permissions: ["All permissions", "User management", "System settings"] },
    { value: "Manager", label: "Manager", description: "Can manage content and team members", permissions: ["Content management", "Team oversight", "Limited settings"] },
    { value: "Employee", label: "Employee", description: "Standard access with limited permissions", permissions: ["View only", "Basic actions", "No settings"] },
]

export default function UsersSection() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "Employee"
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showRoleDropdown, setShowRoleDropdown] = useState(false)

    const fetchUsers = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/auth/users")
            setUsers(res.data.users || [])
        } catch (err) {
            toast.error("Failed to load users")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
            toast.error("All fields are required")
            return
        }
        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters")
            return
        }

        setIsSubmitting(true)
        try {
            await axios.post("http://localhost:5000/api/auth/create-user", formData, { withCredentials: true })
            toast.success("User created successfully! 🎉")
            setShowModal(false)
            setFormData({ name: "", email: "", password: "", role: "Employee" })
            fetchUsers()
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to create user")
        } finally {
            setIsSubmitting(false)
        }
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    const getRoleConfig = (role) => roleConfig[role] || roleConfig.Employee

    // Close dropdown when clicking outside
    useEffect(() => {
        if (!showRoleDropdown) return
        const handleClickOutside = () => setShowRoleDropdown(false)
        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [showRoleDropdown])

    // Selected role display
    const SelectedRole = ({ role }) => {
        const roleConfig = getRoleConfig(role)
        const roleOption = roleOptions.find(r => r.value === role)

        return (
            <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${roleConfig.color} flex items-center justify-center`}>
                    <Shield size={18} className="text-white" />
                </div>
                <div>
                    <p className="font-medium text-white text-sm">{roleOption?.label}</p>
                    <p className="text-xs text-gray-400">{roleOption?.description}</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <Toaster position="top-right" />
            <div className="p-6 lg:p-8 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Users</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage team members and permissions</p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowModal(true)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
                    >
                        <Sparkles size={16} />
                        Add User
                    </motion.button>
                </div>

                {/* Table */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">User</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {loading ? (
                                    Array(6).fill().map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
                                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32" />
                                                </div>
                                            </td>
                                            <td className="px-6 py-5"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48" /></td>
                                            <td className="px-6 py-5"><div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20" /></td>
                                            <td className="px-6 py-5"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24" /></td>
                                        </tr>
                                    ))
                                ) : users.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                                            <User size={48} className="mx-auto mb-4 opacity-50" />
                                            <p className="text-lg">No users found</p>
                                            <p className="text-sm mt-1">Click "Add User" to create the first one</p>
                                        </td>
                                    </tr>
                                ) : (
                                    users.map((user) => {
                                        const role = getRoleConfig(user.role)
                                        return (
                                            <motion.tr
                                                key={user.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.04)" }}
                                                className="transition-colors"
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${role.color} p-0.5`}>
                                                            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center text-white font-bold">
                                                                {user.name.charAt(0).toUpperCase()}
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                                                            <p className="text-xs text-gray-500">ID: #{user.id}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                                    <Mail size={14} />
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium border ${role.badge}`}>
                                                        <Shield size={12} className="inline mr-1" />
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-1.5">
                                                    <Calendar size={14} />
                                                    {formatDate(user.created_at)}
                                                </td>
                                            </motion.tr>
                                        )
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* COMPACT REDESIGNED Add User Modal */}
                <AnimatePresence>
                    {showModal && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                                onClick={() => setShowModal(false)}
                            />
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="bg-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                                    {/* Compact Header */}
                                    <div className="px-6 py-4 border-b border-gray-800 flex items-center justify-between">
                                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                            <div className="p-1.5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                                                <User size={20} className="text-white" />
                                            </div>
                                            Create New User
                                        </h2>
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="p-1.5 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                        {/* Basic Info Fields - Vertical Compact Layout */}
                                        <div className="space-y-4">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-xs font-medium text-gray-300 mb-1.5">Full Name</label>
                                                <div className="relative">
                                                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                                        placeholder="Enter full name"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-xs font-medium text-gray-300 mb-1.5">Email Address</label>
                                                <div className="relative">
                                                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                                        placeholder="user@company.com"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            {/* Password */}
                                            <div>
                                                <label className="block text-xs font-medium text-gray-300 mb-1.5">Password</label>
                                                <div className="relative">
                                                    <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        className="w-full pl-10 pr-10 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                                        placeholder="Min. 8 characters"
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                                    >
                                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                    </button>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
                                            </div>
                                        </div>

                                        {/* Role Selection - Full Width, Clean List */}
                                        <div className="space-y-3">
                                            <label className="block text-xs font-medium text-gray-300">Role</label>

                                            {/* Selected Role Preview */}
                                            <div className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                                                <SelectedRole role={formData.role} />
                                            </div>

                                            {/* Dropdown Trigger */}
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setShowRoleDropdown(!showRoleDropdown)
                                                }}
                                                className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-left flex items-center justify-between text-sm text-gray-300 hover:border-blue-500 transition"
                                            >
                                                Choose a different role
                                                <ChevronDown size={18} className={`text-gray-400 transition-transform ${showRoleDropdown ? "rotate-180" : ""}`} />
                                            </button>

                                            {/* Dropdown List - Compact but full-width role names */}
                                            <AnimatePresence>
                                                {showRoleDropdown && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -8 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="py-2 border border-gray-700 rounded-lg bg-gray-800/80 backdrop-blur">
                                                            {roleOptions.map((option) => {
                                                                const isSelected = formData.role === option.value
                                                                const config = getRoleConfig(option.value)

                                                                return (
                                                                    <button
                                                                        key={option.value}
                                                                        type="button"
                                                                        onClick={(e) => {
                                                                            e.stopPropagation()
                                                                            setFormData(prev => ({ ...prev, role: option.value }))
                                                                            setShowRoleDropdown(false)
                                                                        }}
                                                                        className={`w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-700/50 transition ${isSelected ? "bg-blue-500/10" : ""}`}
                                                                    >
                                                                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${config.color} flex items-center justify-center flex-shrink-0`}>
                                                                            <Shield size={18} className="text-white" />
                                                                        </div>
                                                                        <div className="flex-1 min-w-0">
                                                                            <p className="font-medium text-white text-sm truncate">{option.label}</p>
                                                                            <p className="text-xs text-gray-400 truncate">{option.description}</p>
                                                                        </div>
                                                                        {isSelected && <Check size={18} className="text-blue-500 flex-shrink-0" />}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-800">
                                            <button
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                                className="px-5 py-2 text-sm text-gray-400 hover:text-white font-medium transition"
                                            >
                                                Cancel
                                            </button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 transition-all flex items-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Creating...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Sparkles size={16} />
                                                        Create User
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}