"use client"

import { Plus, Edit, Trash2, Eye, MoreVertical } from "lucide-react"
import { useState } from "react"

const pages = [
    { id: 1, title: "Home", status: "Published", updated: "2 hours ago", views: 1250 },
    { id: 2, title: "About Us", status: "Published", updated: "1 day ago", views: 340 },
    { id: 3, title: "Services", status: "Published", updated: "3 days ago", views: 0 },
    { id: 4, title: "Career", status: "Published", updated: "5 days ago", views: 890 },
    { id: 5, title: "Contact", status: "Published", updated: "2 days ago", views: 2100 },
]

export default function PagesSection() {
    const [editingId, setEditingId] = useState(null)

    return (
        <div className="p-6 lg:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pages</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your website pages</p>
                </div>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto justify-center sm:justify-start">
                    <Plus size={18} />
                    New Page
                </button>
            </div>

            {/* Pages Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-700">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">Title</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">Views</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 dark:text-gray-400">Updated</th>
                                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500 dark:text-gray-400">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pages.map((page) => (
                                <tr key={page.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors last:border-0">
                                    <td className="px-6 py-4 font-medium text-sm">{page.title}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${page.status === "Published"
                                                ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                                                : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                                                }`}
                                        >
                                            {page.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium">{page.views.toLocaleString()}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{page.updated}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-1">
                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="View">
                                                <Eye size={16} className="text-gray-600 dark:text-gray-400" />
                                            </button>
                                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors" title="Edit">
                                                <Edit size={16} className="text-gray-600 dark:text-gray-400" />
                                            </button>
                                            <button
                                                className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} className="text-red-600 dark:text-red-400" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}