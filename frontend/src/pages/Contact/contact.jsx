"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar } from "lucide-react"
import { useState } from "react"

export default function Contact({ darkMode }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            value: "info@maazinformatics.com",
            subtext: "We'll respond within 24 hours",
            color: "teal",
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            subtext: "Mon-Fri 9AM to 6PM EST",
            color: "orange",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "Healthcare IT Services",
            subtext: "Schedule an appointment",
            color: "teal",
        },
        {
            icon: Clock,
            title: "24/7 Support",
            value: "Always Available",
            subtext: "Round-the-clock assistance",
            color: "orange",
        },
    ]

    const services = [
        "Medical Billing",
        "Call Center Services",
        "IT Services",
        "Content Writing",
        "EPA Services",
        "Other",
    ]

    return (
        <div className="min-h-screen pt-24 pb-24" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-teal-500/10 rounded-full">
                            Contact Us
                        </span>
                    </div>
                    <h1
                        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                        Let's Start a Conversation
                    </h1>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        We're here to help you grow your business. Reach out and let's discuss how we can support your goals.
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className={`relative p-6 rounded-2xl transition-all ${darkMode
                                ? "bg-slate-800/50 border border-gray-700/50 hover:border-teal-500/50"
                                : "bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xl"
                                }`}
                        >
                            <div
                                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color === "teal" ? "bg-teal-500/10" : "bg-orange-500/10"
                                    }`}
                            >
                                <info.icon className={info.color === "teal" ? "text-teal-500" : "text-orange-500"} size={24} />
                            </div>
                            <h3 className={`text-lg font-bold mb-1 ${darkMode ? "text-white" : "text-slate-900"}`}>{info.title}</h3>
                            <p className={`text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                {info.value}
                            </p>
                            <p className={`text-xs ${darkMode ? "text-gray-500" : "text-slate-500"}`}>{info.subtext}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Form - Takes 3 columns */}
                    <motion.div
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div
                            className={`p-8 md:p-10 rounded-3xl ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white shadow-xl"
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center">
                                    <MessageSquare className="text-white" size={20} />
                                </div>
                                <div>
                                    <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        Send us a message
                                    </h2>
                                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        Fill out the form and we'll get back to you shortly
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className={`block mb-2 text-sm font-semibold ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className={`w-full px-4 py-3 rounded-xl border transition-all ${darkMode
                                                ? "bg-slate-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500"
                                                : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-teal-500"
                                                } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className={`block mb-2 text-sm font-semibold ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className={`w-full px-4 py-3 rounded-xl border transition-all ${darkMode
                                                ? "bg-slate-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500"
                                                : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-teal-500"
                                                } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className={`block mb-2 text-sm font-semibold ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+1 (555) 123-4567"
                                            className={`w-full px-4 py-3 rounded-xl border transition-all ${darkMode
                                                ? "bg-slate-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500"
                                                : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-teal-500"
                                                } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                                        />
                                    </div>

                                    <div>
                                        <label
                                            className={`block mb-2 text-sm font-semibold ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                        >
                                            Service Interested In
                                        </label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className={`w-full px-4 py-3 rounded-xl border transition-all ${darkMode
                                                ? "bg-slate-900 border-gray-700 text-white focus:border-teal-500"
                                                : "bg-slate-50 border-slate-300 text-slate-900 focus:border-teal-500"
                                                } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, idx) => (
                                                <option key={idx} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className={`block mb-2 text-sm font-semibold ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={6}
                                        placeholder="Tell us about your project or inquiry..."
                                        className={`w-full px-4 py-3 rounded-xl border transition-all resize-none ${darkMode
                                            ? "bg-slate-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500"
                                            : "bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-teal-500"
                                            } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.01] shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Sidebar - Takes 2 columns */}
                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Quick Response Card */}
                        <div
                            className={`p-8 rounded-2xl ${darkMode ? "bg-linear-to-br from-teal-500 to-teal-600" : "bg-linear-to-br from-teal-500 to-teal-600"
                                }`}
                        >
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                                <Calendar className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Quick Response Guaranteed</h3>
                            <p className="text-white/90 text-sm mb-6">
                                Our team typically responds within 2-4 hours during business hours. For urgent matters, call us
                                directly.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white"
                                        ></div>
                                    ))}
                                </div>
                                <div className="text-white text-sm font-medium">20+ Team Members Ready</div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div
                            className={`p-8 rounded-2xl ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white border border-slate-200"
                                }`}
                        >
                            <h3 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>Business Hours</h3>
                            <div className="space-y-4">
                                {[
                                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                                    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                                    { day: "Sunday", time: "Closed" },
                                ].map((schedule, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className={`font-medium ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                            {schedule.day}
                                        </span>
                                        <span className={`text-sm ${darkMode ? "text-gray-500" : "text-slate-500"}`}>{schedule.time}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={`mt-6 pt-6 border-t ${darkMode ? "border-gray-700" : "border-slate-200"}`}>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                    Emergency support available 24/7 for existing clients
                                </p>
                            </div>
                        </div>

                        {/* Location Image Placeholder */}
                        <div className="relative rounded-2xl overflow-hidden aspect-video">
                            <img src="/office-location-map.jpg" alt="Office Location" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-end p-6">
                                <div className="text-white">
                                    <div className="font-bold text-lg mb-1">Our Office</div>
                                    <div className="text-sm text-white/80">Healthcare IT Services Hub</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
