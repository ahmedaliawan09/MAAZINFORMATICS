"use client"

import { useState, useEffect, useRef } from "react"
import {
    Calendar, Clock, User, Mail, Phone, MessageSquare,
    CheckCircle, Sparkles, Send, MapPin, ChevronRight,
    Star, Shield, Users as UsersIcon, Target, Zap,
    ArrowRight, X, Search, Filter
} from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
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
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
    const y = useTransform(scrollYProgress, [0, 1], [50, -50])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setSubmitSuccess(true)

        // Reset form
        setTimeout(() => {
            setFormData({
                name: "", email: "", phone: "", service: "",
                message: "", date: "", time: ""
            })
            setSubmitSuccess(false)
        }, 3000)
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
        <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
            {/* Animated Background */}
            <motion.div
                style={{ opacity, y }}
                className="absolute inset-0 overflow-hidden"
            >
                <div className="absolute top-1/4 left-10% w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10% w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />

                {/* Animated Grid */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #3B82F6 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column - Enhanced Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-200/50 shadow-lg"
                        >
                            <div className="relative">
                                <Calendar className="w-5 h-5 text-blue-500" />
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full bg-blue-500/20 blur-sm"
                                />
                            </div>
                            <span className="text-sm font-bold text-blue-600 tracking-wider">GET IN TOUCH</span>
                        </motion.div>

                        {/* Enhanced Title with Stagger */}
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-5xl md:text-6xl font-bold leading-tight"
                            >
                                <span className="text-gray-900">Request For</span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
                                    Appointment
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "120px" }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            />
                        </div>

                        {/* Enhanced Description */}
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-gray-600 leading-relaxed max-w-lg"
                        >
                            Fill out the form below and we'll get back to you as soon as possible with expert consultation tailored to your needs.
                        </motion.p>

                        {/* Interactive Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="relative group"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={appointmentImage}
                                    alt="Appointment Consultation"
                                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                                {/* Animated Overlay Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 w-fit"
                                    >
                                        <UsersIcon className="w-4 h-4 text-white" />
                                        <span className="text-white font-semibold text-sm">Expert Team</span>
                                    </motion.div>

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.7 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg w-fit"
                                    >
                                        <Clock className="w-4 h-4 text-white" />
                                        <span className="text-white font-semibold">Available 24/7</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    rotate: [0, 5, 0, -5, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl border border-blue-100 p-3"
                            >
                                <Star className="w-full h-full text-yellow-400" fill="currentColor" />
                            </motion.div>

                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0, 5, 0]
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-xl p-2.5"
                            >
                                <Shield className="w-full h-full text-white" />
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Benefits Grid */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: `0 20px 40px ${benefit.color}20`
                                    }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 group-hover:border-transparent transition-colors" />
                                    <div className="relative p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50">
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ background: `${benefit.color}15` }}
                                            >
                                                <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                                            </motion.div>
                                            <span className="text-sm font-semibold text-gray-800">{benefit.text}</span>
                                        </div>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileHover={{ scale: 1 }}
                                            className="absolute inset-0 rounded-xl border-2"
                                            style={{ borderColor: benefit.color }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Enhanced Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Animated Background */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                        />

                        {/* Main Form Card */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden backdrop-blur-sm"
                        >
                            {/* Form Header */}
                            <div className="relative p-8 border-b border-gray-200/50">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5" />
                                <div className="relative flex items-center gap-4">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
                                    >
                                        <MessageSquare className="w-7 h-7 text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Schedule Consultation</h3>
                                        <p className="text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Form Content */}
                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                <AnimatePresence>
                                    {submitSuccess && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-200"
                                        >
                                            <div className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-emerald-500" />
                                                <span className="font-medium text-emerald-700">
                                                    Message sent successfully! We'll contact you soon.
                                                </span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Form Grid */}
                                <div className="space-y-6">
                                    {/* Name & Email */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                            className="space-y-2"
                                        >
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
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
                                                className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                            className="space-y-2"
                                        >
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
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
                                                className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Phone & Service */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                            className="space-y-2"
                                        >
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
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
                                                className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                            className="space-y-2"
                                        >
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                <Sparkles className="w-4 h-4" />
                                                Service Interested In
                                            </label>
                                            <div className="relative">
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none appearance-none"
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                                <ChevronRight className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Date & Time */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 }}
                                            className="space-y-2"
                                        >
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                <Calendar className="w-4 h-4" />
                                                Preferred Date
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 }}
                                            className="space-y-2"
                                        >
                                            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                                <Clock className="w-4 h-4" />
                                                Preferred Time
                                            </label>
                                            <input
                                                type="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Message */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="space-y-2"
                                    >
                                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                                            <MessageSquare className="w-4 h-4" />
                                            Your Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Tell us about your project or inquiry..."
                                            className="w-full px-4 py-3.5 bg-white/50 border-2 border-gray-200/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none"
                                        />
                                    </motion.div>

                                    {/* Submit Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="relative w-full py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-xl overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {/* Animated Background */}
                                            <motion.div
                                                animate={{
                                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-[length:200%_100%]"
                                            />

                                            {/* Button Content */}
                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                {isSubmitting ? (
                                                    <>
                                                        <motion.div
                                                            animate={{ rotate: 360 }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                        />
                                                        <span>Processing...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                        <span>Send Message</span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Hover Effect */}
                                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-xl transition-all duration-300" />
                                        </motion.button>

                                        {/* Privacy Note */}
                                        <p className="text-center text-xs text-gray-500 mt-3">
                                            By submitting, you agree to our privacy policy and terms of service
                                        </p>
                                    </motion.div>
                                </div>
                            </form>
                        </motion.div>

                        {/* Enhanced Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9 }}
                            className="mt-8 grid grid-cols-2 gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-100/50 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"
                                    >
                                        <MapPin className="w-6 h-6 text-blue-500" />
                                    </motion.div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">Global Support</div>
                                        <div className="text-xs text-gray-600">24/7 Availability</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="p-4 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 rounded-2xl border border-emerald-100/50 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center"
                                    >
                                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                                    </motion.div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">Quick Response</div>
                                        <div className="text-xs text-gray-600">Within 24 Hours</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 20, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2
                    }}
                    className={`absolute w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-blue-400/30' :
                            i % 3 === 1 ? 'bg-purple-400/30' :
                                'bg-cyan-400/30'
                        }`}
                    style={{
                        left: `${10 + i * 10}%`,
                        top: `${20 + i * 8}%`
                    }}
                />
            ))}
        </section>
    )
}

export default Appointment