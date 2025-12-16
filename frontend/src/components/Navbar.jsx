"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, ChevronDown, Phone } from "lucide-react"
import { Link } from "react-router-dom"
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className=" w-24 ">

                            <img src={maazlogo} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-baseline space-x-1">
                                <span className={`font-semibold text-xl ${darkMode ? "text-white" : "text-slate-900"}`}>Maaz</span>
                                <span className="text-[#5eaaa8] font-semibold text-xl">Informatics</span>
                            </div>
                            <div className={`text-xs font-medium   mt-1 ${darkMode ? "text-white" : "text-slate-900"} `}>
                                IT and Healthcare Company
                            </div>
                        </div>
                    </Link>

                    <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
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
                                            className={`flex items-center space-x-1 transition-colors duration-300 text-sm font-medium ${darkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`absolute top-full left-0 mt-2 w-56 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden transition-all duration-300 ${darkMode ? "bg-[#1e293b]/95 border border-gray-700" : "bg-white/95 border border-gray-200"
                                                } ${activeDropdown === link.name
                                                    ? "opacity-100 visible translate-y-0"
                                                    : "opacity-0 invisible -translate-y-2"
                                                }`}
                                        >
                                            {link.items.map((item) => (
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
                                        className={`transition-colors duration-300 text-sm font-medium ${darkMode ? "text-gray-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full transition-all duration-300 ${darkMode ? "text-gray-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <Link
                            to="/contact"
                            className="px-6 py-2.5 bg-[#5eaaa8] text-white rounded-lg font-medium text-sm hover:bg-[#4d9694] transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                        >
                            <Phone size={16} />
                            <span>Get Started</span>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center space-x-3">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${darkMode ? "bg-[#1e293b] border-t border-gray-700" : "bg-white border-t border-gray-200"
                    } ${isOpen ? "max-h-125" : "max-h-0"}`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-slate-700 hover:bg-gray-100"
                                            }`}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? "max-h-125" : "max-h-0"}`}
                                    >
                                        {link.items.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`block px-8 py-2 text-sm ${darkMode ? "text-gray-400 hover:text-[#5eaaa8]" : "text-slate-600 hover:text-[#5eaaa8]"
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
                                    className={`block px-4 py-3 rounded-lg text-sm ${darkMode ? "text-gray-300 hover:bg-gray-800" : "text-slate-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        className="block mt-4 px-4 py-3 bg-[#5eaaa8] text-white rounded-lg text-center text-sm font-medium"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
