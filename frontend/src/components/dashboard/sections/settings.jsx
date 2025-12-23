"use client"

import { Save, Bell, Lock, Globe, Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function SettingsSection() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className="p-6 lg:p-8 space-y-6 max-w-2xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Configure your dashboard preferences</p>
            </div>

            {/* Settings Sections */}
            <div className="space-y-6">

                {/* Security */}
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Lock size={20} className="text-blue-600 dark:text-blue-400" />
                        <h2 className="text-lg font-semibold">Security</h2>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left">
                            Change Password
                        </button>
                        <button className="w-full px-4 py-2.5 border border-red-300 dark:border-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left text-red-600 dark:text-red-400">
                            Two-Factor Authentication
                        </button>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <Save size={18} />
                    Save Changes
                </button>
                <button className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Cancel
                </button>
            </div>
        </div>
    )
}