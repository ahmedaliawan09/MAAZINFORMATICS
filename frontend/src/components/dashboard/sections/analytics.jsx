"use client"

import { BarChart3, TrendingUp, Clock, PieChart } from "lucide-react"

export default function AnalyticsSection() {
    return (
        <div className="p-6 lg:p-8 space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Track website performance and user engagement</p>
            </div>

            {/* Analytics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Visits</h3>
                        <TrendingUp size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-3xl font-bold">12,543</p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">+12.5% from last month</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Duration</h3>
                        <Clock size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-3xl font-bold">4m 32s</p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-2">+8.2% from last month</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Bounce Rate</h3>
                        <BarChart3 size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-3xl font-bold">32%</p>
                    <p className="text-sm text-red-600 dark:text-red-400 mt-2">-2.1% from last month</p>
                </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-semibold">Traffic Overview</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 days</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                            Direct
                        </span>
                        <span className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            Organic
                        </span>
                    </div>
                </div>

                {/* Simple chart bars */}
                <div className="h-48 flex items-end gap-2 pt-8">
                    {[65, 80, 60, 75, 85, 70, 90, 65, 75, 80, 85, 70].map((height, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center">
                            <div
                                className="w-full rounded-t bg-linear-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500"
                                style={{ height: `${height}%` }}
                            ></div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][idx]}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                        <div className="text-center">
                            <p className="text-2xl font-bold">42%</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Mobile</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">58%</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Desktop</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">68%</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">New Users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}