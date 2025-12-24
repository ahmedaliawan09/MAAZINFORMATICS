"use client"
import { Menu, X, LayoutGrid, Settings, Users, FileText, BarChart3, HelpCircle, Home, LogOut } from "lucide-react"
import axios from "axios"
const navigationItems = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "pages", label: "Pages", icon: FileText },
    { id: "users", label: "Users", icon: Users },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
]
const handleLogout = async () => {
    try {
        await axios.post(
            "http://localhost:5000/api/auth/logout",
            {},
            { withCredentials: true }
        );

        window.location.reload(); // simplest & safe
    } catch (error) {
        console.error("Logout failed", error);
    }
};

export default function Sidebar({ activeSection, setActiveSection, isOpen, setIsOpen, user }) {
    return (
        <>
            {/* Mobile Menu Button */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50 flex items-center px-4">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className="ml-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">CH</span>
                    </div>
                    <h1 className="text-lg font-semibold">Content Hub</h1>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30 top-16" onClick={() => setIsOpen(false)} />}

            {/* Sidebar */}
            <aside
                className={`fixed lg:relative w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 flex flex-col transition-transform duration-300 top-16 lg:top-0 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                {/* Logo Section */}
                <div className="hidden lg:flex items-center gap-3 p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">CH</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold">Maaz Informatics</h1>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Dashboard </p>
                    </div>
                </div>

                {/* User Profile */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">
                                {user?.name?.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div>
                            <p className="font-medium">
                                {user?.name}
                            </p>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {user?.email}
                            </p>

                            <p className="text-xs text-blue-600 dark:text-blue-400 capitalize">
                                {user?.role}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-1">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            const isActive = activeSection === item.id
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveSection(item.id)
                                        setIsOpen(false)
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                    {isActive && (
                                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </nav>

                {/* Footer Section */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 mb-3 rounded-lg
      text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20
      transition-all duration-200"
                    >
                        <LogOut size={18} />
                        <span className="font-medium text-sm">Logout</span>
                    </button>
                    <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 px-4">
                        <p>© 2024 Content Hub</p>
                        <p className="mt-1">All rights reserved</p>
                    </div>
                </div>
            </aside>
        </>
    )
}