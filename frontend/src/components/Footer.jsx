import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = ({ darkMode }) => {
    return (
        <footer className={`relative ${darkMode ? "bg-[#1e293b]" : "bg-gray-50"}`}>
            <div className="relative -mt-12 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`rounded-3xl py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-2xl ${darkMode ? "bg-[#5eaaa8]" : "bg-[#1e293b]"
                        }`}
                >
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1.5">Ready to Get Started?</h2>
                        <p className="text-white/90 text-sm md:text-base max-w-lg">
                            Let us help you transform your business with our professional IT and healthcare services.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className={`px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 whitespace-nowrap ${darkMode ? "bg-[#1e293b] text-white hover:bg-[#0f172a]" : "bg-white text-[#1e293b] hover:bg-gray-100"
                            }`}
                    >
                        <span>Contact Us Now</span>
                        <span>→</span>
                    </Link>
                </div>
            </div>
            <div className="pt-24 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-[#5eaaa8] rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">M</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-baseline space-x-1">
                                        <span className={`font-semibold text-lg ${darkMode ? "text-white" : "text-slate-900"}`}>Maaz</span>
                                        <span className="text-[#5eaaa8] font-semibold text-lg">Informatics</span>
                                    </div>
                                </div>
                            </div>
                            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                A Healthcare IT Company delivering quality services globally since 2015. Triple ISO Certified.
                            </p>
                            <div className="flex space-x-3">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`p-2.5 rounded-lg transition-all duration-300 ${darkMode
                                            ? "bg-[#2d3748] hover:bg-[#5eaaa8] text-gray-400 hover:text-white"
                                            : "bg-gray-200 hover:bg-[#5eaaa8] text-slate-600 hover:text-white"
                                            }`}
                                    >
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About Us", href: "/about" },
                                    { name: "Services", href: "/services" },
                                    { name: "Career", href: "/career" },
                                    { name: "Contact", href: "/contact" },
                                ].map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className={`transition-colors duration-300 text-sm ${darkMode ? "text-gray-400 hover:text-[#5eaaa8]" : "text-slate-600 hover:text-[#5eaaa8]"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Our Services
                            </h4>
                            <ul className="space-y-2">
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
                                            className={`transition-colors duration-300 text-sm ${darkMode ? "text-gray-400 hover:text-[#5eaaa8]" : "text-slate-600 hover:text-[#5eaaa8]"
                                                }`}
                                        >
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Contact Info
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <MapPin className="text-[#5eaaa8] shrink-0 mt-1" size={18} />
                                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        269 Katchery Road, Sargodha 40100, Punjab, Pakistan
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Phone className="text-[#5eaaa8] shrink-0 mt-1" size={18} />
                                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>+92 00 000 0000</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Mail className="text-[#5eaaa8] shrink-0 mt-1" size={18} />
                                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        info@maazinformatics.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`pt-8 ${darkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}>
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
                                © 2025 Maaz Informatics. All rights reserved.
                            </p>
                            <div className={`flex items-center space-x-2 text-sm ${darkMode ? "text-gray-500" : "text-slate-500"}`}>
                                <span>P@SHA Member</span>
                                <span>•</span>
                                <span>Triple ISO Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
