// approuter.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

// Layout
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Pages
import About from "../pages/About/about"
import Contact from "../pages/Contact/contact"
import Home from "../pages/Home/home"

import Careers from "../pages/careers/career"
import Achievements from "../pages/Acheivements/acheivements"
import Memberships from "../pages/Membership/membership"
import DashboardPage from "../pages/dashboard/dashboard"
import DynamicService from "../pages/services/[slug]"
function AppLayout({ darkMode }) {
    const location = useLocation()
    const isDashboard = location.pathname.startsWith("/dashboard")

    return (
        <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
            {!isDashboard && <Navbar darkMode={darkMode} />}

            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />

                <Route path="/services/:slug" element={<DynamicService darkMode={darkMode} />} />

                <Route path="/who-we-are" element={<About darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact darkMode={darkMode} />} />
                <Route path="/career" element={<Careers darkMode={darkMode} />} />
                <Route path="/acheivements" element={<Achievements darkMode={darkMode} />} />
                <Route path="/memberships" element={<Memberships darkMode={darkMode} />} />

                {/* Dashboard handles auth itself */}
                <Route path="/dashboard-maaz" element={<DashboardPage />} />
            </Routes>

            {!isDashboard && <Footer darkMode={darkMode} />}
        </div>
    )
}

function Approuter() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)
    }, [darkMode])

    return (
        <Router>
            <AppLayout darkMode={darkMode} />
        </Router>
    )
}

export default Approuter
