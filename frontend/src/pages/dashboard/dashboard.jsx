"use client"

import { useState, useEffect } from "react"
import SecurityGate from "./SecurityGate"
import Sidebar from "../../components/dashboard/sidebar"
import DashboardContent from "../../components/dashboard/dashboard-content"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"
import { encodeDashboardPath, decodeDashboardSection, clearDashboardTokens } from "../../utils/urlObfuscator"

export default function DashboardPage() {
    const [activeSection, setActiveSection] = useState("overview")
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    // Decode section from URL if obfuscated
    useEffect(() => {
        const pathParts = location.pathname.split('/');
        if (pathParts[1] === 'd' && pathParts[3]) {
            const decodedSection = decodeDashboardSection(pathParts[3]);
            setActiveSection(decodedSection);
        }
    }, [location.pathname])

    const checkAuth = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/auth/check",
                { withCredentials: true }
            )

            if (res.data.authenticated && res.data.user) {
                setIsAuthenticated(true)
                setUser(res.data.user)
            } else {
                setIsAuthenticated(false)
                setUser(null)
            }
        } catch (err) {
            setIsAuthenticated(false)
            setUser(null)
        } finally {
            setLoading(false)  // 👈 Har haal mein loading false
        }
    }

    useEffect(() => {
        checkAuth()

        // Events for back/forward/tab switch/bfcache
        const handleVisibility = () => {
            if (!document.hidden) checkAuth()
        }
        const handleFocus = () => checkAuth()
        const handlePageshow = (e) => {
            if (e.persisted) checkAuth()  // bfcache restore
        }
        const handlePopstate = () => checkAuth()

        window.addEventListener("focus", handleFocus)
        window.addEventListener("visibilitychange", handleVisibility)
        window.addEventListener("pageshow", handlePageshow)
        window.addEventListener("popstate", handlePopstate)

        return () => {
            window.removeEventListener("focus", handleFocus)
            window.removeEventListener("visibilitychange", handleVisibility)
            window.removeEventListener("pageshow", handlePageshow)
            window.removeEventListener("popstate", handlePopstate)
        }
    }, [])

    const handleLoginSuccess = (userData) => {
        setIsAuthenticated(true)
        setUser(userData)
        setLoading(false)
    }

    // Handle section change with URL obfuscation
    const handleSectionChange = (section) => {
        setActiveSection(section);
        const obfuscatedPath = encodeDashboardPath(section);
        navigate(obfuscatedPath, { replace: true });
    }

    // Handle logout - clear tokens
    const handleLogout = () => {
        clearDashboardTokens();
        setIsAuthenticated(false);
        setUser(null);
        navigate('/');
    }

    // 👇 YE CHANGE SABSE IMPORTANT HAI
    // Agar loading chal rahi hai → kuch mat dikhao (ya spinner dikha sakte ho)
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        )
    }

    // Agar auth nahi → SecurityGate dikhao
    if (!isAuthenticated || !user) {
        return <SecurityGate onSuccess={handleLoginSuccess} />
    }

    // Authenticated → Dashboard
    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Sidebar
                activeSection={activeSection}
                setActiveSection={handleSectionChange}
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                user={user}
                onLogout={handleLogout}
            />
            <DashboardContent activeSection={activeSection} sidebarOpen={sidebarOpen} />
        </div>
    )
}