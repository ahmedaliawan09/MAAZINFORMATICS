"use client"
import { Save, Bell, Lock, Globe, Moon, Sun, Loader2 } from "lucide-react"
import { useState } from "react"
import axios from "axios"  // 👈 FIXED: Missing import!

export default function SettingsSection() {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const handleChangePassword = async () => {
        // Basic validation
        if (!currentPassword || !newPassword) {
            setMessage("Please fill both fields")
            return
        }
        if (newPassword.length < 8) {
            setMessage("New password must be at least 8 characters")
            return
        }

        setLoading(true)
        setMessage("")
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/change-password",
                { currentPassword, newPassword },
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                },
            )
            setMessage(res.data.message || "Password changed successfully!")
            setCurrentPassword("")
            setNewPassword("")
        } catch (err) {
            console.error("Change password error:", err.response?.data || err)
            setMessage(err.response?.data?.message || "Error changing password")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-6 lg:p-8 space-y-6 max-w-2xl mx-auto">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400">Configure your dashboard preferences securely</p>
            </div>

            {/* Security Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                    <Lock size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Security</h2>
                </div>

                <div className="space-y-3">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Current Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your current password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            New Password (min 8 chars)
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
                            disabled={loading}
                        />
                    </div>
                </div>

                <button
                    onClick={handleChangePassword}
                    disabled={loading || !currentPassword || !newPassword}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-all duration-200 font-medium shadow-sm hover:shadow-md disabled:shadow-none"
                >
                    {loading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Updating...
                        </>
                    ) : (
                        <>
                            <Save size={20} />
                            Change Password
                        </>
                    )}
                </button>

                {message && (
                    <div className={`p-3 rounded-lg text-sm text-center transition-all ${message.includes("success") || message.includes("changed")
                            ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800"
                            : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800"
                        }`}>
                        {message}
                    </div>
                )}

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center pt-2">
                    Your new password must be at least 8 characters long
                </p>
            </div>
        </div>
    )
}