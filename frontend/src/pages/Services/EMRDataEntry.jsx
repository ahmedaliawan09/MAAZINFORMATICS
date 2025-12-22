"use client"

import { motion } from "framer-motion"
import { Database, FileText, Clock, Shield, Zap, CheckCircle, BarChart, TrendingUp, Award, ChevronRight, Sparkles, Heart } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function EMRDataEntry({ darkMode }) {
    const features = [
        { icon: Database, title: "Digital Solutions", desc: "Comprehensive EMR data entry", highlight: "Full Digital" },
        { icon: Clock, title: "Reduced Delays", desc: "Faster consultation workflow", highlight: "Save Time" },
        { icon: FileText, title: "Accurate Records", desc: "Precise data management", highlight: "99.9% Accuracy" },
        { icon: Shield, title: "HIPAA Compliant", desc: "Secure and confidential", highlight: "Secure" },
        { icon: Zap, title: "Streamlined Process", desc: "Enhanced efficiency", highlight: "Efficient" },
        { icon: CheckCircle, title: "Quality Control", desc: "Verified data accuracy", highlight: "Verified" },
    ]

    const benefits = [
        { icon: BarChart, title: "50% Time Saved", desc: "On data entry tasks", value: "50%" },
        { icon: TrendingUp, title: "99.9% Accuracy", desc: "Data entry precision", value: "99.9%" },
        { icon: Award, title: "Expert Team", desc: "Trained specialists", value: "Expert" },
    ]

    const services = [
        "Patient Demographics Entry",
        "Clinical Notes Documentation",
        "Lab Results Recording",
        "Medication History Management",
        "Insurance Information Updates",
        "Appointment Scheduling Data",
        "Medical History Documentation",
        "Diagnosis Code Entry",
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
                    {/* Hero Section */}
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
                                        Healthcare Solutions
                                    </span>
                                </motion.div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">EMR Data Entry</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                        Coordination
                                    </span>
                                </h1>

                                <p className={`text-lg mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    We specialize in streamlining and enhancing workflow efficiency. With our comprehensive digital EMR data
                                    entry solutions, we effectively address all back-end data entry tasks, resulting in significantly reduced
                                    delays during consultations.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center gap-2">
                                            Schedule Consultation
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-8 py-4 rounded-xl font-medium border ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                                        } transition-all duration-300 flex items-center gap-2`}>
                                        <Database className="w-4 h-4" />
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Hero Visual */}
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
                                        <motion.div
                                            animate={{
                                                y: [0, -10, 0],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="relative mb-6"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full blur-2xl opacity-20" />
                                            <Database className="w-24 h-24 text-emerald-500 relative z-10" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
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
                                    Key Features
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Why Choose Our
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                    EMR Services
                                </span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * index + 0.4 }}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30 hover:from-slate-800 hover:to-slate-800"
                                        : "bg-white hover:shadow-lg"
                                        } border ${darkMode ? "border-slate-800/40 hover:border-emerald-500/20" : "border-slate-100 hover:border-emerald-200"}`}
                                >
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-emerald-900/20 to-teal-900/15"
                                        : "bg-gradient-to-br from-emerald-50 to-teal-50"
                                        }`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    <div className={`mt-4 px-3 py-1 rounded-lg text-xs font-medium w-fit ${darkMode
                                        ? "bg-emerald-500/10 text-emerald-400"
                                        : "bg-emerald-50 text-emerald-600"
                                        }`}>
                                        {feature.highlight}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Benefits Grid */}
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
                                    Measurable Results
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Proven
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
                                    Benefits
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
                                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30"
                                        : "bg-white"
                                        }`}
                                >
                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-xl ${darkMode
                                                ? "bg-slate-800/50 group-hover:bg-slate-800/70"
                                                : "bg-emerald-50 group-hover:bg-emerald-100"
                                                } transition-all duration-300`}>
                                                <benefit.icon className={`w-6 h-6 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                                            </div>
                                            <div className={`text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent`}>
                                                {benefit.value}
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

                    {/* Services Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
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
                                EMR Data Entry
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                    Services
                                </span>
                            </h2>
                        </div>

                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/40"
                            : "bg-white border border-slate-100"
                            }`}>
                            <div className="grid md:grid-cols-2 gap-4">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.05 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl ${darkMode ? "bg-slate-800/40" : "bg-emerald-50/30"}`}
                                    >
                                        <CheckCircle className={`w-5 h-5 shrink-0 ${darkMode ? "text-emerald-400" : "text-emerald-600"}`} />
                                        <span className={`${darkMode ? "text-slate-200" : "text-slate-800"}`}>{service}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Final CTA */}
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

