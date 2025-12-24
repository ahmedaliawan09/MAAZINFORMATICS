"use client"

import OverviewSection from "./sections/overview"
import PagesSection from "./sections/pages"
import UsersSection from "./sections/users"
import AnalyticsSection from "./sections/analytics"
import SettingsSection from "./sections/settings"
import HelpSection from "./sections/help"
import ServicesSection from "./sections/services"
const sections = {
    overview: <OverviewSection />,
    pages: <PagesSection />,
    users: <UsersSection />,
    services: <ServicesSection />,
    analytics: <AnalyticsSection />,
    settings: <SettingsSection />,
    help: <HelpSection />,
}

export default function DashboardContent({ activeSection, sidebarOpen }) {
    return (
        <main
            className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? "mt-0" : "mt-16 lg:mt-0"
                }`}
        >
            <div className="hidden lg:block">{sections[activeSection]}</div>
            <div className="lg:hidden mt-16">{sections[activeSection]}</div>
        </main>
    )
}