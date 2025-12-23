"use client"

import { Activity, Users, FileText, TrendingUp } from "lucide-react"

const stats = [
    { label: "Total Services", value: "9", icon: FileText, trend: "+2.4%" },
    { label: "Total Users", value: "1,234", icon: Users, trend: "+12.5%" },

]

export default function OverviewSection() {
    return (
        <div className="p-6 lg:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back, manage your website content</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <div
                            key={stat.label}
                            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</h3>
                                <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                                    <Icon size={20} className="text-gray-600 dark:text-gray-300" />
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                                    {stat.trend}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Recent Activity</h2>
                    <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                        View all
                    </button>
                </div>
                <div className="space-y-4">
                    {[
                        { action: "Updated homepage banner", time: "2 hours ago", user: "Admin", type: "update" },
                        { action: "Published new blog post", time: "5 hours ago", user: "Editor", type: "publish" },
                        { action: "Modified contact page", time: "1 day ago", user: "Admin", type: "edit" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${item.type === 'update' ? 'bg-blue-50 dark:bg-blue-900/20' : item.type === 'publish' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-700'}`}>
                                    {item.type === 'update' && <Activity size={16} className="text-blue-600 dark:text-blue-400" />}
                                    {item.type === 'publish' && <FileText size={16} className="text-green-600 dark:text-green-400" />}
                                    {item.type === 'edit' && <TrendingUp size={16} className="text-gray-600 dark:text-gray-400" />}
                                </div>
                                <div>
                                    <p className="font-medium text-sm">{item.action}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.user}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}