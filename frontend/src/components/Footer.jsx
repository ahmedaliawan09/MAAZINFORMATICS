import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Link } from "react-router-dom"
import maazlogo from "../assets/maazlogo.png"

const Footer = ({ darkMode }) => {
    return (
        <footer className={`relative overflow-hidden ${darkMode ? "bg-[#1e293b]" : "bg-gray-50"}`}>

            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-6 sm:pb-8 min-h-fit">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center space-x-3">
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
                            </div>
                            <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                A Healthcare IT Company delivering quality services globally since 2015. Triple ISO Certified.
                            </p>
                            <div className="flex space-x-3 flex-wrap">
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
                            <h4
                                className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                            >
                                Quick Links
                            </h4>
                            <ul className="space-y-2">
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
                            <h4
                                className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                            >
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
                            <h4
                                className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                            >
                                Contact Info
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <MapPin className="text-[#5eaaa8] shrink-0 mt-1" size={18} />
                                    <span className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        269 Katchery Road, Sargodha 40100, Punjab, Pakistan
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Phone className="text-[#5eaaa8] shrink-0 mt-1" size={18} />
                                    <span className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>+92 00 000 0000</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Mail className="text-[#5eaaa8] shrink-0 mt-1" size={18} />
                                    <span className={`text-sm break-words ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        info@maazinformatics.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={`pt-6 sm:pt-8 ${darkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}>
                        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
                            <p
                                className={`text-xs sm:text-sm text-center sm:text-left ${darkMode ? "text-gray-500" : "text-slate-500"}`}
                            >
                                © 2025 Maaz Informatics. All rights reserved.
                            </p>
                            <div
                                className={`flex items-center space-x-2 text-xs sm:text-sm ${darkMode ? "text-gray-500" : "text-slate-500"} flex-wrap justify-center`}
                            >
                                <span className="text-center">P@SHA Member</span>
                                <span>•</span>
                                <span className="text-center whitespace-nowrap">Triple ISO Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
