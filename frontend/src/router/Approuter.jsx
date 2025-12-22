import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // ADD THIS IMPORT

// Import components
import Navbar from "../components/Navbar"; // MAKE SURE THIS PATH IS CORRECT
import Footer from "../components/Footer"; // MAKE SURE THIS PATH IS CORRECT

import About from "../pages/About/about"
import Contact from "../pages/Contact/contact"
import Home from "../pages/Home/home"
import AnsweringService from "../pages/Services/AnsweringService"
import CallCenter from "../pages/Services/CallCenter"
import ContentWriting from "../pages/Services/ContentWriting"
import Credentialing from "../pages/Services/Credentialing"
import EMRDataEntry from "../pages/Services/EMRDataEntry"
import EPA from "../pages/Services/EPA"
import ITServices from "../pages/Services/ITServices"
import MedicalBilling from "../pages/Services/MedicalBilling"
import Procurement from "../pages/Services/Procurement"
import Careers from "../pages/careers/career";
import Achievements from "../pages/Acheivements/acheivements";
import Memberships from "../pages/Membership/membership";

function Approuter() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <Router>
            <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark" : ""}`}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
                </Routes>
                <Footer darkMode={darkMode} />
            </div>
        </Router>
    )
}

export default Approuter;