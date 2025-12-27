"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Phone, ChevronDown, Menu, X, Sparkles } from "lucide-react"
import maazlogo from "../assets/maazlogo.png"
import axios from "axios"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const [services, setServices] = useState([]) // Dynamic services
    const timeoutRef = useRef(null)

    const fetchServices = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/service/getservices")
            setServices(res.data.services || [])
        } catch (err) {
            console.error("Failed to load services", err)
            setServices([])
        }
    }
    useEffect(() => {
        fetchServices()
        const interval = setInterval(fetchServices, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "About",
            hasDropdown: true,
            items: [
                { name: "Who We Are", href: "/who-we-are" },
                { name: "Achievements", href: "/acheivements" },
                { name: "Memberships", href: "/memberships" },
            ],
        },
        // In Navbar.jsx, update the services dropdown:
        {
            name: "Services",
            hasDropdown: true,
            items: services.map(service => ({
                name: service.service_name,
                href: `/services/${service.slug}`  // ← SLUG ONLY, no ID fallback
            })),
        },
        { name: "Career", href: "/career" },
        { name: "Contact", href: "/contact" },
    ]

    const handleMouseEnter = (name) => {
        clearTimeout(timeoutRef.current)
        setActiveDropdown(name)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
    }

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-linear-to-b from-white/95 to-blue-50/95 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
                : "bg-linear-to-b from-white via-blue-50/50 to-transparent"
                }`}
            style={{
                borderBottom: isScrolled
                    ? "1px solid rgba(99, 102, 241, 0.1)"
                    : "none",
                animation: "slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        >
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .text-gradient {
                    background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 25%, #EC4899 50%, #F59E0B 75%, #10B981 100%);
                    background-size: 200% auto;
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradientShift 4s ease infinite;
                }
                
                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group relative overflow-hidden"
                    >
                        <div className="relative w-14 md:w-16 shrink-0">
                            <div
                                className="absolute inset-0 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 25%, #EC4899 50%, #F59E0B 75%, #10B981 100%)"
                                }}
                            />
                            <img
                                src={maazlogo || "/placeholder.svg"}
                                alt="Maaz Informatics Logo"
                                className="w-full h-auto relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-baseline space-x-1">
                                <span className="font-bold text-xl md:text-2xl text-gray-900">
                                    Maaz
                                </span>
                                <span className="font-bold text-xl md:text-2xl text-gradient">
                                    Informatics
                                </span>
                            </div>
                            <div className="flex items-center gap-1 text-xs md:text-sm font-medium mt-0.5">
                                <Sparkles className="w-3 h-3 text-purple-500" />
                                <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    IT and Healthcare Company
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            className="flex items-center space-x-1.5 px-4 py-2 rounded-lg transition-all duration-300 group hover:shadow-lg hover:shadow-indigo-500/10"
                                            style={{
                                                background: activeDropdown === link.name
                                                    ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))"
                                                    : "transparent"
                                            }}
                                        >
                                            <span className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                                {link.name}
                                            </span>
                                            <ChevronDown
                                                size={16}
                                                className={`text-indigo-500 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <div
                                            className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-64 rounded-xl shadow-2xl transition-all duration-300 z-50 overflow-hidden ${activeDropdown === link.name
                                                ? "opacity-100 visible translate-y-0 pointer-events-auto"
                                                : "opacity-0 invisible -translate-y-4 pointer-events-none"
                                                }`}
                                            style={{
                                                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98))",
                                                backdropFilter: "blur(20px)",
                                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)"
                                            }}
                                        >
                                            <div className="p-2">
                                                {link.items?.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="block px-5 py-3 rounded-lg transition-all duration-300 group hover:shadow-md"
                                                        style={{
                                                            background: "transparent"
                                                        }}
                                                    >
                                                        <div className="flex items-center">
                                                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2" />
                                                            <span className="font-medium text-gray-700 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all duration-300">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="px-4 py-2 rounded-lg font-semibold text-gray-800 hover:text-indigo-600 transition-all duration-300 relative group"
                                    >
                                        {link.name}
                                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4 shrink-0">
                        <Link
                            to="/contact"
                            className="relative px-6 py-3 font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
                                color: "white"
                            }}
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10 flex items-center space-x-2">
                                <Phone size={18} />
                                <span>Get Started</span>
                            </div>
                            <div
                                className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-white/30 transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex items-center space-x-3">
                        <Link
                            to="/contact"
                            className="px-4 py-2 font-medium rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-lg"
                            style={{
                                background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
                                color: "white",
                                boxShadow: "0 4px 20px rgba(79, 70, 229, 0.3)"
                            }}
                        >
                            <Phone size={16} />
                            <span>Start</span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg transition-colors duration-300 hover:shadow-md"
                            style={{
                                background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
                                color: "#4F46E5"
                            }}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"
                    }`}
                style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98))",
                    backdropFilter: "blur(20px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)"
                }}
            >
                <div className="px-4 pt-4 pb-8 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} style={{ borderBottom: "1px solid rgba(226, 232, 240, 0.5)" }} className="last:border-b-0">
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setActiveDropdown(activeDropdown === link.name ? null : link.name)
                                        }
                                        className="w-full flex items-center justify-between px-4 py-4 rounded-lg font-semibold transition-colors duration-300 hover:shadow-md"
                                        style={{
                                            color: "#1F2937",
                                            background: activeDropdown === link.name
                                                ? "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))"
                                                : "transparent"
                                        }}
                                    >
                                        <span>{link.name}</span>
                                        <ChevronDown
                                            size={16}
                                            className={`text-indigo-500 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? "max-h-96" : "max-h-0"
                                            }`}
                                    >
                                        {link.items?.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="block px-8 py-3 transition-colors duration-300 hover:shadow-sm"
                                                style={{
                                                    color: "#4B5563",
                                                    background: "transparent"
                                                }}
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
                                    className="block px-4 py-4 rounded-lg font-semibold transition-colors duration-300 hover:shadow-md"
                                    style={{
                                        color: "#1F2937",
                                        background: "transparent"
                                    }}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="pt-6 px-4">
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center space-x-3 px-6 py-4 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl"
                            style={{
                                background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
                                color: "white",
                                boxShadow: "0 8px 32px rgba(79, 70, 229, 0.4)"
                            }}
                        >
                            <Phone size={18} />
                            <span>Get Started Now</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar