"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock, PhoneCall, CheckCircle, Users, Zap, Star, Award, TrendingUp, ChevronRight, Sparkles, Shield } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function AnsweringService({ darkMode }) {
    const features = [
        { icon: PhoneCall, title: "Professional Reception", desc: "We are the voice of your company", highlight: "Your Brand Voice" },
        { icon: Clock, title: "Always Available", desc: "Never miss a customer call", highlight: "24/7 Service" },
        { icon: MessageCircle, title: "Message Taking", desc: "Accurate and detailed messages", highlight: "Perfect Accuracy" },
        { icon: CheckCircle, title: "Call Screening", desc: "Filter and prioritize your calls", highlight: "Smart Filtering" },
        { icon: Users, title: "Appointment Scheduling", desc: "Manage your calendar efficiently", highlight: "Calendar Sync" },
        { icon: Zap, title: "Immediate Response", desc: "Quick and professional handling", highlight: "<30s Response" },
    ]

    const benefits = [
        { icon: Star, title: "Professional Image", desc: "Every call answered professionally and courteously", stats: "100% Professional" },
        { icon: Award, title: "Cost Effective", desc: "Save on hiring full-time receptionist staff", stats: "70% Savings" },
        { icon: TrendingUp, title: "Business Growth", desc: "Never miss opportunities due to missed calls", stats: "40% More Leads" },
    ]

    const stats = [
        { value: "10K+", label: "Calls Answered", trend: "Monthly" },
        { value: "< 3 Rings", label: "Average Answer", trend: "Fast Response" },
        { value: "24/7", label: "Availability", trend: "Always On" },
        { value: "99%", label: "Satisfaction", trend: "Top Rated" },
    ]

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 pb-16 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-emerald-900/5" : "bg-emerald-100/10"} blur-3xl`} />
                    <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-teal-900/5" : "bg-teal-100/10"} blur-3xl`} />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">

                    {/* Hero Section - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20 lg:mb-28"
                    >
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-emerald-500" />
                                    <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                        Premium Answering Services
                                    </span>
                                </motion.div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">Professional</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                        Answering Service
                                    </span>
                                </h1>

                                <p className={`text-lg mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    People Like Talking to People. You Will Love Talking to Us! Be the voice of your company.
                                    We facilitate your customers and provide complete services on your behalf.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center gap-2">
                                            Start Free Trial
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-8 py-4 rounded-xl font-medium border ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                                        } transition-all duration-300 flex items-center gap-2`}>
                                        <PhoneCall className="w-4 h-4" />
                                        Schedule Demo
                                    </button>
                                </div>

                                {/* Trust Badges - Compact */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-6 mt-8"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-emerald-500/10">
                                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900 dark:text-white">99%</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400">Satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-teal-500/10">
                                            <Award className="w-4 h-4 text-teal-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900 dark:text-white">24/7</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400">Coverage</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-emerald-500/10">
                                            <Shield className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900 dark:text-white">100%</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400">Secure</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Hero Visual - Compact */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <div className={`relative rounded-2xl overflow-hidden ${darkMode
                                    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50"
                                    : "bg-gradient-to-br from-white to-emerald-50"
                                    } border ${darkMode ? "border-slate-800" : "border-slate-100"} shadow-lg`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />

                                    <div className="relative p-8 flex flex-col items-center justify-center min-h-[320px]">
                                        {/* Floating Message Icon */}
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                scale: [1, 1.05, 1]
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="relative mb-6"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full blur-2xl opacity-20" />
                                            <MessageCircle className="w-24 h-24 text-emerald-500 relative z-10" />
                                        </motion.div>

                                        {/* Floating Elements */}
                                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                                            {[1, 2, 3, 4].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                    className={`p-3 rounded-lg ${darkMode
                                                        ? "bg-slate-800/40 border border-slate-700/40"
                                                        : "bg-white/70 border border-slate-100"
                                                        } backdrop-blur-sm`}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <div className={`p-1.5 rounded-md ${darkMode ? "bg-slate-700/60" : "bg-emerald-50"}`}>
                                                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                                                        </div>
                                                        <span className={`text-xs font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                                                            {["Live Answering", "Message Taking", "Appointments", "Call Screening"][i - 1]}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Features Grid - Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4"
                            >
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : "bg-emerald-100 text-emerald-600"
                                    }`}>
                                    Our Services
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Complete Answering
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                    Solutions
                                </span>
                            </h2>
                            <p className={`text-base max-w-xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                Professional answering services designed to enhance your customer communication
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * index + 0.4 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30 hover:from-slate-800 hover:to-slate-800"
                                        : "bg-white hover:shadow-lg"
                                        } border ${darkMode ? "border-slate-800/40 hover:border-emerald-500/20" : "border-slate-100 hover:border-emerald-200"}`}
                                >
                                    {/* Highlight Badge */}
                                    <div className={`absolute -top-2 right-4 px-3 py-1 rounded-lg text-xs font-semibold ${darkMode
                                        ? "bg-gradient-to-r from-emerald-600/20 to-teal-500/20 text-emerald-400"
                                        : "bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700"
                                        }`}>
                                        {feature.highlight}
                                    </div>

                                    {/* Icon */}
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-emerald-900/20 to-teal-900/15 group-hover:from-emerald-900/30 group-hover:to-teal-900/20"
                                        : "bg-gradient-to-br from-emerald-50 to-teal-50 group-hover:from-emerald-100 group-hover:to-teal-100"
                                        } transition-all duration-300`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-emerald-400" : "text-emerald-600"} group-hover:scale-110 transition-transform duration-300`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                                        <div className="h-0.5 w-4 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                                        <span className={`text-xs font-medium ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                                            Learn more
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits Grid - Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4"
                            >
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                    ? "bg-teal-500/10 text-teal-400"
                                    : "bg-teal-100 text-teal-600"
                                    }`}>
                                    Key Benefits
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Why Choose Our
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                                    Answering Service
                                </span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className={`group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30"
                                        : "bg-white"
                                        }`}
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode
                                        ? "bg-gradient-to-br from-emerald-900/10 to-teal-900/10"
                                        : "bg-gradient-to-br from-emerald-50/30 to-teal-50/30"
                                        }`} />

                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-xl ${darkMode
                                                ? "bg-slate-800/50 group-hover:bg-slate-800/70"
                                                : "bg-emerald-50 group-hover:bg-emerald-100"
                                                } transition-all duration-300`}>
                                                <benefit.icon className={`w-6 h-6 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                                            </div>
                                            <div className={`px-3 py-1 rounded-lg text-xs font-semibold ${darkMode
                                                ? "bg-emerald-500/10 text-emerald-400"
                                                : "bg-emerald-100 text-emerald-600"
                                                }`}>
                                                {benefit.stats}
                                            </div>
                                        </div>

                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                            {benefit.title}
                                        </h3>
                                        <p className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Section - Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-20"
                    >
                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/40"
                            : "bg-gradient-to-br from-emerald-50/30 to-teal-50/30 border border-slate-100"
                            }`}>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </div>
                                        <p className={`text-base font-medium mb-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                                            {stat.label}
                                        </p>
                                        <div className={`text-xs ${darkMode ? "text-slate-500" : "text-slate-500"}`}>
                                            {stat.trend}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Final CTA - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-500" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

                    </motion.div>
                </div>
            </div>
        </>
    )
}