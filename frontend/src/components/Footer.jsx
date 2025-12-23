import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, Globe, Shield, Award } from "lucide-react"
import { Link } from "react-router-dom"
import maazlogo from "../assets/maazlogo.png"

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-linear-to-b from-gray-900 to-gray-950 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #4B5563 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Top Wave Divider */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500" />

            <div className="relative z-10 pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
                        {/* Company Info */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-16   rounded-xl flex items-center justify-center shadow-lg">
                                    <img
                                        src={maazlogo || "/placeholder.svg"}
                                        alt="Maaz Informatics Logo"
                                        className="w-12 h-12 object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        <span className="text-white">Maaz</span>
                                        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Informatics</span>
                                    </h3>
                                    <p className="text-gray-300 text-sm mt-1">IT and Healthcare Company</p>
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                A Healthcare IT Company delivering quality services globally since 2015.
                                <span className="font-medium text-blue-300"> Triple ISO Certified.</span>
                            </p>

                            {/* Social Links */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-semibold text-gray-300">Connect With Us</h4>
                                <div className="flex gap-3">
                                    {[
                                        { icon: Facebook, color: "hover:bg-blue-600", label: "Facebook" },
                                        { icon: Twitter, color: "hover:bg-sky-500", label: "Twitter" },
                                        { icon: Linkedin, color: "hover:bg-blue-700", label: "LinkedIn" },
                                        { icon: Instagram, color: "hover:bg-pink-600", label: "Instagram" }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className={`group w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                                            aria-label={social.label}
                                        >
                                            <social.icon
                                                size={18}
                                                className="text-gray-300 group-hover:text-white transition-colors duration-300"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 relative">
                                Quick Links
                                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/about" },
                                    { name: "Services", href: "/services/medical-billing" },
                                    { name: "Career", href: "/career" },
                                    { name: "Contact", href: "/contact" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                                        >
                                            <ArrowUpRight className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <span className="text-sm">{link.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 relative">
                                Our Services
                                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></span>
                            </h4>
                            <ul className="space-y-3">
                                {[
                                    { name: "Medical Billing", href: "/services/medical-billing" },
                                    { name: "Call Center", href: "/services/call-center" },
                                    { name: "Answering Service", href: "/services/answering-service" },
                                    { name: "IT Solutions", href: "/services/it-services" },
                                    { name: "Credentialing", href: "/services/credentialing" },
                                ].map((service) => (
                                    <li key={service.name}>
                                        <Link
                                            to={service.href}
                                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2"
                                        >
                                            <ArrowUpRight className="w-3 h-3 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <span className="text-sm">{service.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-6 pb-3 border-b border-gray-800 relative">
                                Contact Info
                                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></span>
                            </h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                                            269 Katchery Road, Sargodha 40100, Punjab, Pakistan
                                        </div>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                        <Phone className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                                            +92 00 000 0000
                                        </div>
                                    </div>
                                </li>

                                <li className="flex items-start gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                                        <Mail className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 wrap-break-word">
                                            info@maazinformatics.com
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Certifications & Awards */}
                    <div className="py-6 border-y border-gray-800 mb-8">
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/30">
                                <Shield className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-blue-300">P@SHA Member</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-900/30 to-emerald-900/30 border border-green-700/30">
                                <Award className="w-4 h-4 text-green-400" />
                                <span className="text-sm text-green-300">Triple ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/30">
                                <Globe className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm text-cyan-300">Global Operations</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-6 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-sm text-gray-500 text-center md:text-left">
                                © 2025 Maaz Informatics. All rights reserved.
                            </p>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <Link to="/privacy" className="hover:text-gray-300 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <span className="text-gray-700">•</span>
                                <Link to="/terms" className="hover:text-gray-300 transition-colors duration-300">
                                    Terms of Service
                                </Link>
                                <span className="text-gray-700">•</span>
                                <Link to="/sitemap" className="hover:text-gray-300 transition-colors duration-300">
                                    Sitemap
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center z-50"
                aria-label="Back to top"
            >
                <svg className="w-5 h-5 transform rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </footer>
    )
}

export default Footer