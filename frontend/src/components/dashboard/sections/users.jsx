"use client"

import { useState } from "react"
import { Shield, Mail, User, MoreVertical, X, Eye, EyeOff, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"
import axios from "axios"
const users = [
    { id: 1, name: "Sarah Johnson", email: "sarah@example.com", role: "Admin", joined: "Jan 15, 2024", avatarColor: "bg-blue-500" },
    { id: 2, name: "Mike Chen", email: "mike@example.com", role: "Editor", joined: "Feb 20, 2024", avatarColor: "bg-green-500" },
    { id: 3, name: "Emma Davis", email: "emma@example.com", role: "Viewer", joined: "Mar 10, 2024", avatarColor: "bg-purple-500" },
    { id: 4, name: "John Smith", email: "john@example.com", role: "Editor", joined: "Mar 25, 2024", avatarColor: "bg-yellow-500" },
]

const roleColors = {
    Admin: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
    Editor: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    Viewer: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
}

const roleOptions = [
    { value: "Admin", label: "Administrator", description: "Full access to all features" },
    { value: "Manager", label: "Manager", description: "Can manage teams and projects" },
    { value: "Employee", label: "Employee", description: "Basic access to assigned tasks" },
]

export default function UsersSection() {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.name.trim() || !formData.email.trim() || !formData.password) {
            toast.error("Please fill in all required fields")
            return
        }
        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters")
            return
        }
        setIsSubmitting(true)
        try {
            const res = await axios.post("http://localhost:5000/api/auth/create-user", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            }, { withCredentials: true })
            toast.success(<div className="flex flex-col">
                <span className="font-semibold">User Created Successfully!</span>
                <span className="text-sm opacity-90">
                    {formData.name} has been added as {formData.role}
                </span>
            </div>,
                {
                    duration: 4000,
                    icon: "👤",
                })
            setFormData({
                name: "",
                email: "",
                password: "",
                role: "Employee",
            })
            setShowModal(false)
        }
        catch (error) {
            toast.error(
                err.response?.data?.message || "Failed to create user"
            )
        }
        finally {
            setIsSubmitting(false)
        }
    }

    const getRoleDescription = () => {
        const role = roleOptions.find(r => r.value === formData.role)
        return role ? role.description : ""
    }

    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    className: "dark:bg-gray-800 dark:text-white",
                    style: {
                        borderRadius: "12px",
                        background: "rgb(30 41 59)",
                        color: "#fff",
                    },
                    success: {
                        iconTheme: {
                            primary: "#10b981",
                            secondary: "#fff",
                        },
                    },
                }}
            />

            <div className="p-6 lg:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight dark:text-white">Users</h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">Manage team members and permissions</p>
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2.5 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start group"
                    >
                        <User size={18} className="group-hover:rotate-12 transition-transform" />
                        Add User
                    </button>
                </div>

                {/* Users Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 ${user.avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}>
                                        {user.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold dark:text-white">{user.name}</h3>
                                        <span className={`px-2 py-1 ${roleColors[user.role]} rounded text-xs font-medium mt-1 inline-flex items-center gap-1`}>
                                            <Shield size={10} />
                                            {user.role}
                                        </span>
                                    </div>
                                </div>
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                    <MoreVertical size={16} className="text-gray-500 dark:text-gray-400" />
                                </button>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Mail size={14} />
                                    {user.email}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">Joined {user.joined}</span>
                                    <div className="flex gap-2">
                                        <button className="text-xs px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                            Message
                                        </button>
                                        <button className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add User Modal */}
                <AnimatePresence>
                    {showModal && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setShowModal(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            />

                            {/* Modal */}
                            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                    className="relative w-full max-w-md"
                                >
                                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                        {/* Header */}
                                        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h2 className="text-2xl font-bold dark:text-white">Add New User</h2>
                                                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                                        Invite a new team member to the dashboard
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => setShowModal(false)}
                                                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                                                >
                                                    <X size={20} className="text-gray-500 dark:text-gray-400" />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Form */}
                                        <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                            {/* Name Field */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            {/* Email Field */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                            </div>

                                            {/* Password Field */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Password *
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type={showPassword ? "text" : "password"}
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleInputChange}
                                                        placeholder="At least 8 characters"
                                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none dark:text-white pr-12"
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff size={18} />
                                                        ) : (
                                                            <Eye size={18} />
                                                        )}
                                                    </button>
                                                </div>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    Password must be at least 8 characters long
                                                </p>
                                            </div>

                                            {/* Role Dropdown */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                                    Role *
                                                </label>
                                                <div className="relative">
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                                                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-between hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
                                                        disabled={isSubmitting}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                                                <Shield size={14} className="text-white" />
                                                            </div>
                                                            <div className="text-left">
                                                                <span className="font-medium dark:text-white">
                                                                    {roleOptions.find(r => r.value === formData.role)?.label}
                                                                </span>
                                                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                                    {getRoleDescription()}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <ChevronDown size={16} className={`text-gray-500 transition-transform ${showRoleDropdown ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    {/* Dropdown Menu */}
                                                    <AnimatePresence>
                                                        {showRoleDropdown && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg overflow-hidden"
                                                            >
                                                                {roleOptions.map((role) => (
                                                                    <button
                                                                        key={role.value}
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setFormData(prev => ({ ...prev, role: role.value }))
                                                                            setShowRoleDropdown(false)
                                                                        }}
                                                                        className={`w-full p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors ${formData.role === role.value ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                                                                    >
                                                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-linear-to-br from-blue-500/10 to-cyan-500/10">
                                                                            <Shield size={14} className="text-blue-500 dark:text-blue-400" />
                                                                        </div>
                                                                        <div className="flex-1 text-left">
                                                                            <div className="font-medium dark:text-white">{role.label}</div>
                                                                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                                                                {role.description}
                                                                            </div>
                                                                        </div>
                                                                    </button>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`w-full py-3.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${isSubmitting
                                                        ? 'bg-linear-to-r from-blue-400 to-cyan-400 cursor-not-allowed'
                                                        : 'bg-linear-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30'
                                                        }`}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            Creating User...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <User size={18} />
                                                            Create User Account
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            </div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}