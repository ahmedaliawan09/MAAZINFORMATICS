"use client"

import { Shield, Mail, User, MoreVertical } from "lucide-react"

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

export default function UsersSection() {
    return (
        <div className="p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Users</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage team members and permissions</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                    <User size={18} />
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
                                    <h3 className="font-semibold">{user.name}</h3>
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
        </div>
    )
}