// pages/dashboard/dashboard.jsx (updated)
"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import SecurityGate from "./SecurityGate"
import Sidebar from "../../components/dashboard/sidebar"
import DashboardContent from "../../components/dashboard/dashboard-content"
import axios from "axios";

export default function DashboardPage() {
    const [activeSection, setActiveSection] = useState("overview")
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await axios.get("http://localhost:5000/api/auth/check", { withCredentials: true });
                if (res.data.authenticated) {
                    setIsAuthenticated(true);
                }
            }
            catch (err) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();

    }, [])


    const handleLoginSuccess = () => {
        setIsAuthenticated(true)

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