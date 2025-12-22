"use client"

import { useState } from "react"
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, Sparkles, Send, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import appointmentImage from "../assets/images/appointment.png"

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        date: "",
        time: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
    }

    const services = [
        "Medical Billing & Coding",
        "Call Center Services",
        "IT Infrastructure",
        "Credentialing Services",
        "EMR Data Entry",
        "Procurement Management",
        "Content Writing",
        "Other Services"
    ]

    const benefits = [
        { icon: Clock, text: "24/7 Support Available", color: "#3B82F6" },
        { icon: CheckCircle, text: "Quick Response Time", color: "#10B981" },
        { icon: User, text: "Expert Consultation", color: "#8B5CF6" },
        { icon: Calendar, text: "Flexible Scheduling", color: "#F59E0B" }
    ]

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/10 to-white">
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes glow {
                    0%, 100% { opacity: 0.6; }
                    50% { opacity: 1; }
                }
                
                .input-focus-effect:focus {
                    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                }
                
                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }
                
                .glow-effect {
                    animation: glow 2s ease-in-out infinite;
                }
            `}</style>

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-10% w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-10% w-64 h-64 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, #3B82F6 1px, transparent 1px), linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }} />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-semibold text-blue-600">GET IN TOUCH</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-gray-900">Request For</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Appointment
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Fill out the form below and we'll get back to you as soon as possible with expert consultation.
                        </p>

                        {/* Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl group"
                        >
                            <img
                                src={appointmentImage}
                                alt="Appointment Consultation"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                            {/* Floating Elements */}
                            <div className="absolute top-4 left-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                                <div className="text-white font-semibold">Expert Team</div>
                            </div>

                            <div className="absolute bottom-4 right-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                                <div className="text-white font-semibold text-sm">Available 24/7</div>
                            </div>
                        </motion.div>

                        {/* Benefits List */}
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ background: `${benefit.color}10` }}
                                    >
                                        <benefit.icon className="w-5 h-5" style={{ color: benefit.color }} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl float-animation" />

                        <form
                            onSubmit={handleSubmit}
                            className="relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-xl"
                            style={{
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            {/* Form Header */}
                            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Schedule Consultation</h3>
                                    <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            {/* Form Grid */}
                            <div className="space-y-6">
                                {/* Name & Email */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <User className="w-4 h-4" />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Mail className="w-4 h-4" />
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Service */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Phone className="w-4 h-4" />
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Sparkles className="w-4 h-4" />
                                            Service Interested In
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300 appearance-none"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Calendar className="w-4 h-4" />
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                            <Clock className="w-4 h-4" />
                                            Preferred Time
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <MessageSquare className="w-4 h-4" />
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your project or inquiry..."
                                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none input-focus-effect transition-all duration-300 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    Send Message
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300" />
                                </motion.button>

                                {/* Privacy Note */}
                                <p className="text-center text-sm text-gray-500">
                                    By submitting, you agree to our privacy policy and terms of service
                                </p>
                            </div>
                        </form>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 grid grid-cols-2 gap-4"
                        >
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <div className="text-sm font-medium text-gray-700">Global Support</div>
                                        <div className="text-xs text-gray-500">24/7 Availability</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <div>
                                        <div className="text-sm font-medium text-gray-700">Quick Response</div>
                                        <div className="text-xs text-gray-500">Within 24 Hours</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Appointment