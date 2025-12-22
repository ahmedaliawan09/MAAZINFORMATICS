"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, Sparkles, Shield, CheckCircle } from "lucide-react"
import { useState } from "react"
import Navbar from "../../components/Navbar"
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
            color: "from-teal-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-teal-500/10 to-emerald-500/10",
            borderColor: "border-teal-500/20"
        },
        {
            icon: Phone,
            title: "Call Us",
            value: "+1 (555) 123-4567",
            subtext: "Mon-Fri 9AM to 6PM EST",
            color: "from-orange-500 to-amber-500",
            bgColor: "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
            borderColor: "border-orange-500/20"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            value: "Healthcare IT Services",
            subtext: "Schedule an appointment",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: Clock,
            title: "24/7 Support",
            value: "Always Available",
            subtext: "Round-the-clock assistance",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
            borderColor: "border-purple-500/20"
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
        <>
            <Navbar />
            <div className="min-h-screen pt-24 pb-24 bg-gradient-to-b from-white via-blue-50/10 to-white">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-500/10 via-transparent to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="inline-block mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 backdrop-blur-sm">
                                <MessageSquare className="text-teal-500" size={16} />
                                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                    Contact Us
                                </span>
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Let's Start a
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                Conversation
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-600">
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
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className={`relative p-6 rounded-2xl border ${info.borderColor} ${info.bgColor} backdrop-blur-sm transition-all duration-300`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}>
                                    <info.icon className="text-white" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">{info.title}</h3>
                                <p className="text-sm font-medium text-slate-700 mt-1">
                                    {info.value}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">{info.subtext}</p>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-50"></div>
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
                            <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-transparent rounded-3xl" />

                                <div className="relative flex items-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                                        <MessageSquare className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-slate-900">
                                            Send us a message
                                        </h2>
                                        <p className="text-sm text-slate-600">
                                            Fill out the form and we'll get back to you shortly
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="relative space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-slate-700">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 bg-white"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-slate-700">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 bg-white"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-slate-700">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+1 (555) 123-4567"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 bg-white"
                                            />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm font-semibold text-slate-700">
                                                Service Interested In
                                            </label>
                                            <select
                                                value={formData.service}
                                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 bg-white appearance-none"
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
                                        <label className="block mb-2 text-sm font-semibold text-slate-700">
                                            Message *
                                        </label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={6}
                                            placeholder="Tell us about your project or inquiry..."
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 bg-white resize-none"
                                            required
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 flex items-center justify-center gap-2"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </motion.button>
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


                            {/* Working Hours */}
                            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
                                        { day: "Saturday", time: "10:00 AM - 4:00 PM" },
                                        { day: "Sunday", time: "Closed" },
                                    ].map((schedule, idx) => (
                                        <div key={idx} className="flex justify-between items-center">
                                            <span className="font-medium text-slate-700">
                                                {schedule.day}
                                            </span>
                                            <span className="text-sm text-slate-500">{schedule.time}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <p className="text-sm text-slate-600">
                                        Emergency support available 24/7 for existing clients
                                    </p>
                                </div>
                            </div>


                        </motion.div>
                    </div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-16 pt-8 border-t border-slate-200"
                    >
                        <div className="text-center mb-6">
                            <p className="text-sm text-slate-600 mb-4">Trusted by healthcare organizations worldwide</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { icon: Shield, label: "HIPAA Compliant", color: "text-teal-500" },
                                { icon: CheckCircle, label: "ISO 9001 Certified", color: "text-blue-500" },
                                { icon: Sparkles, label: "24/7 Support", color: "text-amber-500" },
                            ].map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200">
                                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                                    <span className="text-sm font-medium text-slate-700">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}