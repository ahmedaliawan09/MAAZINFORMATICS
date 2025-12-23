// approuter.jsx (updated)
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Pages
import About from "../pages/About/about";
import Contact from "../pages/Contact/contact";
import Home from "../pages/Home/home";
import AnsweringService from "../pages/Services/AnsweringService";
import CallCenter from "../pages/Services/CallCenter";
import ContentWriting from "../pages/Services/ContentWriting";
import Credentialing from "../pages/Services/Credentialing";
import EMRDataEntry from "../pages/Services/EMRDataEntry";
import EPA from "../pages/Services/EPA";
import ITServices from "../pages/Services/ITServices";
import MedicalBilling from "../pages/Services/MedicalBilling";
import Procurement from "../pages/Services/Procurement";
import Careers from "../pages/careers/career";
import Achievements from "../pages/Acheivements/acheivements";
import Memberships from "../pages/Membership/membership";
import DashboardPage from "../pages/dashboard/dashboard";

function AppLayout({ darkMode }) {
    const location = useLocation();

    // ❌ Hide footer on dashboard route
    const hideFooter = location.pathname.startsWith("/dashboard");

    return (
        <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark" : ""}`}>
            {/* Hide navbar on dashboard routes too */}
            {!hideFooter && <Navbar darkMode={darkMode} />}

            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path="/services/medical-billing" element={<MedicalBilling darkMode={darkMode} />} />
                <Route path="/services/call-center" element={<CallCenter darkMode={darkMode} />} />
                <Route path="/services/answering-service" element={<AnsweringService darkMode={darkMode} />} />
                <Route path="/services/procurement" element={<Procurement darkMode={darkMode} />} />
                <Route path="/services/emr-data-entry" element={<EMRDataEntry darkMode={darkMode} />} />
                <Route path="/services/credentialing" element={<Credentialing darkMode={darkMode} />} />
                <Route path="/services/epa" element={<EPA darkMode={darkMode} />} />
                <Route path="/services/content-writing" element={<ContentWriting darkMode={darkMode} />} />
                <Route path="/services/it-services" element={<ITServices darkMode={darkMode} />} />
                <Route path="/who-we-are" element={<About darkMode={darkMode} />} />
                <Route path="/contact" element={<Contact darkMode={darkMode} />} />
                <Route path="/career" element={<Careers darkMode={darkMode} />} />
                <Route path="/acheivements" element={<Achievements darkMode={darkMode} />} />
                <Route path="/memberships" element={<Memberships darkMode={darkMode} />} />
                <Route path="/dashboard-maaz" element={<DashboardPage />} />
            </Routes>

            {!hideFooter && <Footer darkMode={darkMode} />}
        </div>
    );
}

function Approuter() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    return (
        <Router>
            <AppLayout darkMode={darkMode} />
        </Router>
    );
}

export default Approuter;