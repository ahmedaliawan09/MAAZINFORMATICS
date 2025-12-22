"use client"

import { motion } from "framer-motion"
import { Phone, Globe, Clock, Headphones, MessageSquare, BarChart, Users, Shield, ChevronRight, CheckCircle, Zap, Award, Target, Sparkles, ShieldCheck, Cpu, Heart } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function CallCenter({ darkMode }) {
    const features = [
        { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support for your customers worldwide", highlight: "Always Available" },
        { icon: Globe, title: "Multilingual Support", desc: "Services in 15+ languages with native speakers", highlight: "15+ Languages" },
        { icon: Users, title: "Expert Agents", desc: "Trained and experienced call handlers with industry expertise", highlight: "Certified Team" },
        { icon: MessageSquare, title: "Inbound & Outbound", desc: "Complete omni-channel call center solutions", highlight: "Full Service" },
        { icon: Zap, title: "Instant Response", desc: "Immediate customer support with <30s average wait time", highlight: "<30s Wait" },
        { icon: BarChart, title: "Smart Analytics", desc: "AI-powered insights and detailed performance metrics", highlight: "AI Powered" },
    ]

    const industries = [
        { icon: Heart, title: "Healthcare", desc: "Medical appointments, patient support, billing inquiries", stats: "99.8% Accuracy" },
        { icon: Cpu, title: "Telecommunications", desc: "Technical support, service activation, billing support", stats: "95% Resolution Rate" },
        { icon: Users, title: "E-commerce", desc: "Product inquiries, order tracking, returns & support", stats: "40% CSAT Boost" },
        { icon: ShieldCheck, title: "IT & Technology", desc: "Help desk, technical troubleshooting, software support", stats: "24/7 Coverage" },
    ]

    const stats = [
        { value: "50K+", label: "Calls Handled Monthly", trend: "+15% MoM" },
        { value: "98%", label: "Customer Satisfaction", trend: "Industry Leader" },
        { value: "15+", label: "Languages Supported", trend: "Global Reach" },
        { value: "24/7", label: "Service Availability", trend: "Zero Downtime" },
    ]

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 pb-24 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" : "bg-gradient-to-b from-white via-blue-50/30 to-white"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-100/20"} blur-3xl`} />
                    <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full ${darkMode ? "bg-cyan-900/5" : "bg-cyan-100/20"} blur-3xl`} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">

                    {/* Hero Section - Redesigned */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-32 lg:mb-40"
                    >
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-8"
                                >
                                    <Sparkles className="w-5 h-5 text-blue-500" />
                                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        Premium Call Center Solutions
                                    </span>
                                </motion.div>

                                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">Professional</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
                                        Call Center Services
                                    </span>
                                </h1>

                                <p className={`text-xl mb-10 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    We provide 24/7 international & domestic call center services across healthcare,
                                    telecommunications, IT, and more. Our dedicated team ensures every interaction
                                    is handled with utmost professionalism and care.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <span className="relative flex items-center gap-3">
                                            Start Free Trial
                                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-10 py-5 rounded-2xl font-semibold border-2 ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                                        } transition-all duration-300 flex items-center gap-3`}>
                                        <Phone className="w-5 h-5" />
                                        Schedule Demo
                                    </button>
                                </div>

                                {/* Trust Badges */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center gap-8 mt-12"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-emerald-500/10">
                                            <CheckCircle className="w-6 h-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 dark:text-white">98%</div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-blue-500/10">
                                            <Award className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 dark:text-white">24/7</div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">Support</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-amber-500/10">
                                            <Shield className="w-6 h-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900 dark:text-white">100%</div>
                                            <div className="text-sm text-slate-600 dark:text-slate-400">Secure</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Hero Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="relative"
                            >
                                <div className={`relative rounded-[2.5rem] overflow-hidden ${darkMode
                                    ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50"
                                    : "bg-gradient-to-br from-white to-blue-50"
                                    } border-2 ${darkMode ? "border-slate-800" : "border-slate-100"} shadow-2xl`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_70%)]" />

                                    <div className="relative p-12 flex flex-col items-center justify-center min-h-[500px]">
                                        {/* Floating Phone Icon */}
                                        <motion.div
                                            animate={{
                                                y: [0, -20, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 6,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="relative mb-10"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-30" />
                                            <Phone className="w-40 h-40 text-blue-500 relative z-10" />
                                        </motion.div>

                                        {/* Floating Elements */}
                                        <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                                            {[1, 2, 3, 4].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + i * 0.1 }}
                                                    className={`p-4 rounded-2xl ${darkMode
                                                        ? "bg-slate-800/50 border border-slate-700/50"
                                                        : "bg-white/80 border border-slate-100"
                                                        } backdrop-blur-sm`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2 rounded-lg ${darkMode ? "bg-slate-700" : "bg-blue-50"}`}>
                                                            <CheckCircle className="w-5 h-5 text-blue-500" />
                                                        </div>
                                                        <span className={`text-sm font-medium ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                                                            {["Live Support", "Multilingual", "24/7 Service", "AI Analytics"][i - 1]}
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

                    {/* Features Grid - Premium Design */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-6"
                            >
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-blue-100 text-blue-600"
                                    }`}>
                                    Why Choose Us
                                </span>
                            </motion.div>
                            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Comprehensive Solutions for
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Exceptional Support
                                </span>
                            </h2>
                            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                Our services are designed to provide seamless customer experiences across all touchpoints
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index + 0.5 }}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className={`group relative p-8 rounded-3xl transition-all duration-500 ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/50 to-slate-900/30 hover:from-slate-800 hover:to-slate-800"
                                        : "bg-white hover:shadow-2xl"
                                        } border ${darkMode ? "border-slate-800/50 hover:border-blue-500/30" : "border-slate-100 hover:border-blue-200"}`}
                                >
                                    {/* Highlight Badge */}
                                    <div className={`absolute -top-3 right-6 px-4 py-1.5 rounded-full text-xs font-bold ${darkMode
                                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                                        : "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                                        }`}>
                                        {feature.highlight}
                                    </div>

                                    {/* Icon */}
                                    <div className={`mb-6 p-4 rounded-2xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/20 group-hover:from-blue-900/40 group-hover:to-cyan-900/30"
                                        : "bg-gradient-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100"
                                        } transition-all duration-500`}>
                                        <feature.icon className={`w-10 h-10 ${darkMode ? "text-blue-400" : "text-blue-600"} group-hover:scale-110 transition-transform duration-500`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="h-0.5 w-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                                        <span className={`text-sm font-medium ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                                            Learn more
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Industries Grid - Elegant Layout */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-32"
                    >
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-6"
                            >
                                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode
                                    ? "bg-cyan-500/10 text-cyan-400"
                                    : "bg-cyan-100 text-cyan-600"
                                    }`}>
                                    Our Expertise
                                </span>
                            </motion.div>
                            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Industry-Specific
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                                    Solutions
                                </span>
                            </h2>
                            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                Tailored call center services for diverse sectors with specialized requirements
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {industries.map((industry, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`group relative p-8 rounded-3xl transition-all duration-500 overflow-hidden ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/50 to-slate-900/30"
                                        : "bg-white"
                                        }`}
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode
                                        ? "bg-gradient-to-br from-blue-900/10 to-cyan-900/10"
                                        : "bg-gradient-to-br from-blue-50/50 to-cyan-50/50"
                                        }`} />

                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className={`p-4 rounded-2xl ${darkMode
                                                ? "bg-slate-800/70 group-hover:bg-slate-800/90"
                                                : "bg-blue-50 group-hover:bg-blue-100"
                                                } transition-all duration-500`}>
                                                <industry.icon className={`w-8 h-8 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                                            </div>
                                            <div className={`px-4 py-2 rounded-full text-sm font-bold ${darkMode
                                                ? "bg-blue-500/10 text-blue-400"
                                                : "bg-blue-100 text-blue-600"
                                                }`}>
                                                {industry.stats}
                                            </div>
                                        </div>

                                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                            {industry.title}
                                        </h3>
                                        <p className={`mb-8 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                            {industry.desc}
                                        </p>

                                        <div className="flex items-center gap-3 text-sm font-medium">
                                            <span className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                                                View Case Study
                                            </span>
                                            <ChevronRight className={`w-4 h-4 ${darkMode ? "text-blue-400" : "text-blue-600"} group-hover:translate-x-2 transition-transform`} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Section - Minimalist Design */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="mb-32"
                    >
                        <div className={`rounded-3xl p-12 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/50"
                            : "bg-gradient-to-br from-blue-50/50 to-cyan-50/50 border border-slate-100"
                            }`}>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                        className="text-center group"
                                    >
                                        <div className={`text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
                                            {stat.value}
                                        </div>
                                        <p className={`text-lg font-medium mb-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                                            {stat.label}
                                        </p>
                                        <div className={`text-sm ${darkMode ? "text-slate-500" : "text-slate-500"} flex items-center justify-center gap-2`}>
                                            <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                                            {stat.trend}
                                            <div className="h-1 w-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Final CTA - Elegant & Persuasive */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                        className="relative overflow-hidden rounded-3xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/90 to-cyan-500/90" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />


                    </motion.div>
                </div>
            </div>
        </>
    )
}