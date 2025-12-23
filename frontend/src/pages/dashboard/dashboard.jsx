// pages/dashboard/dashboard.jsx (updated)
"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SecurityGate from "./SecurityGate"
import Sidebar from "../../components/dashboard/sidebar"
import DashboardContent from "../../components/dashboard/dashboard-content"

export default function DashboardPage() {
    const [activeSection, setActiveSection] = useState("overview")
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const location = useLocation()

    // Check if already authenticated (could be stored in localStorage/sessionStorage)
    useEffect(() => {
        const storedAuth = localStorage.getItem("dashboard_auth")
        if (storedAuth === "true") {
            setIsAuthenticated(true)
        }
    }, [])

    const handleLoginSuccess = () => {
        setIsAuthenticated(true)
        localStorage.setItem("dashboard_auth", "true")
    }

    // If not authenticated, show security gate
    if (!isAuthenticated) {
        return <SecurityGate onSuccess={handleLoginSuccess} />
    }

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Sidebar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
            />
            <DashboardContent activeSection={activeSection} sidebarOpen={sidebarOpen} />
        </div>
    )
}