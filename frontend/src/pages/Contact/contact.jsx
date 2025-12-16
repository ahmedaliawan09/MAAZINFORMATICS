"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function Contact({ darkMode }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const contactInfo = [
        { icon: Mail, title: "Email", value: "info@maazinformatics.com" },
        { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
        { icon: MapPin, title: "Location", value: "Healthcare IT Services" },
        { icon: Clock, title: "Support", value: "24/7 Available" },
    ]

    return (
        <div className={`min-h-screen pt-24 ${darkMode ? "bg-[#0A0A0A]" : "bg-stone-50"}`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Get In Touch
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                        We're Here to Help You 24/7
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className={`p-8 rounded-3xl ${darkMode ? "bg-stone-900/50" : "bg-white"}`}>
                            <div className="mb-6">
                                <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border ${darkMode
                                            ? "bg-stone-800 border-stone-700 text-stone-100"
                                            : "bg-stone-50 border-stone-300 text-stone-900"
                                        } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border ${darkMode
                                            ? "bg-stone-800 border-stone-700 text-stone-100"
                                            : "bg-stone-50 border-stone-300 text-stone-900"
                                        } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-xl border ${darkMode
                                            ? "bg-stone-800 border-stone-700 text-stone-100"
                                            : "bg-stone-50 border-stone-300 text-stone-900"
                                        } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                                />
                            </div>
                            <div className="mb-6">
                                <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                                    Message
                                </label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className={`w-full px-4 py-3 rounded-xl border ${darkMode
                                            ? "bg-stone-800 border-stone-700 text-stone-100"
                                            : "bg-stone-50 border-stone-300 text-stone-900"
                                        } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {contactInfo.map((info, index) => (
                            <div key={index} className={`p-6 rounded-2xl ${darkMode ? "bg-stone-900/50" : "bg-white"}`}>
                                <info.icon className={`w-8 h-8 mb-3 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                <h3 className={`text-lg font-bold mb-1 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                    {info.title}
                                </h3>
                                <p className={`${darkMode ? "text-stone-400" : "text-stone-600"}`}>{info.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
