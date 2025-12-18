"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Sun, Moon, Phone, ChevronDown, Menu, X } from "react-feather"
import maazlogo from "../assets/maazlogo.png"

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Services",
            hasDropdown: true,
            items: [
                { name: "Medical Billing", href: "/services/medical-billing" },
                { name: "Call Center", href: "/services/call-center" },
                { name: "Answering Service", href: "/services/answering-service" },
                { name: "Procurement", href: "/services/procurement" },
                { name: "EMR Data Entry", href: "/services/emr-data-entry" },
                { name: "Credentialing", href: "/services/credentialing" },
                { name: "EPA", href: "/services/epa" },
                { name: "Content Writing", href: "/services/content-writing" },
                { name: "IT Services", href: "/services/it-services" },
            ],
        },
        { name: "Career", href: "/career" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? darkMode
                        ? "bg-[#1e293b]/80 backdrop-blur-lg shadow-xl"
                        : "bg-white/80 backdrop-blur-lg shadow-xl"
                    : darkMode
                        ? "bg-[#1e293b] shadow-lg"
                        : "bg-white shadow-lg"
                }`}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group min-w-0 flex-shrink-0">
                        <div className="w-16 sm:w-20 md:w-24 shrink-0">
                            <img src={maazlogo || "/placeholder.svg"} alt="Maaz Informatics Logo" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col min-w-0 overflow-hidden">
                            <div className="flex items-baseline space-x-1">
                                <span
                                    className={`font-semibold text-base sm:text-lg md:text-xl truncate ${darkMode ? "text-white" : "text-slate-900"}`}
                                >
                                    Maaz
                                </span>
                                <span className="text-[#5eaaa8] font-semibold text-base sm:text-lg md:text-xl whitespace-nowrap">
                                    Informatics
                                </span>
                            </div>
                            <div
                                className={`text-[10px] sm:text-xs font-medium mt-0.5 sm:mt-1 ${darkMode ? "text-white" : "text-slate-900"} hidden xs:block truncate`}
                            >
                                IT and Healthcare Company
                            </div>
                        </div>
                    </Link>

                    <div className="hidden lg:flex flex-1 items-center justify-center space-x-4 xl:space-x-8 overflow-visible">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            className={`flex items-center space-x-1 transition-colors duration-300 text-sm font-medium whitespace-nowrap ${darkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`absolute top-full left-0 mt-2 w-56 backdrop-blur-lg rounded-lg shadow-xl transition-all duration-300 z-50 ${darkMode ? "bg-[#1e293b]/95 border border-gray-700" : "bg-white/95 border border-gray-200"
                                                } ${activeDropdown === link.name
                                                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                                                }`}
                                        >
                                            {link.items &&
                                                link.items.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className={`block px-4 py-3 transition-all duration-300 text-sm ${darkMode
                                                                ? "text-gray-300 hover:bg-[#5eaaa8] hover:text-white"
                                                                : "text-slate-700 hover:bg-[#5eaaa8] hover:text-white"
                                                            }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className={`transition-colors duration-300 text-sm font-medium whitespace-nowrap ${darkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full transition-all duration-300 ${darkMode ? "text-gray-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                                }`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <Link
                            to="/contact"
                            className="px-4 xl:px-6 py-2 xl:py-2.5 bg-[#5eaaa8] text-white rounded-lg font-medium text-sm hover:bg-[#4d9694] transition-all duration-300 hover:scale-105 flex items-center space-x-2 whitespace-nowrap"
                        >
                            <Phone size={16} />
                            <span>Get Started</span>
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full ${darkMode ? "text-white" : "text-slate-700"}`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 ${darkMode ? "text-white" : "text-slate-900"}`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${darkMode ? "bg-[#1e293b] border-t border-gray-700" : "bg-white border-t border-gray-200"
                    } ${isOpen ? "max-h-screen" : "max-h-0"}`}
            >
                <div className="px-3 sm:px-4 pt-2 pb-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                        className={`w-full flex items-center justify-between px-3 sm:px-4 py-3 rounded-lg text-sm font-medium transition-colors ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-slate-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? "max-h-96" : "max-h-0"}`}
                                    >
                                        {link.items &&
                                            link.items.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`block px-6 sm:px-8 py-2.5 text-sm transition-colors ${darkMode ? "text-gray-400 hover:text-[#5eaaa8]" : "text-slate-600 hover:text-[#5eaaa8]"
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                    </div>
                                </>
                            ) : (
                                <Link
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 sm:px-4 py-3 rounded-lg text-sm font-medium transition-colors ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-slate-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center space-x-2 mt-4 px-4 py-3 bg-[#5eaaa8] text-white rounded-lg text-center text-sm font-medium hover:bg-[#4d9694] transition-colors"
                    >
                        <Phone size={16} />
                        <span>Get Started</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
