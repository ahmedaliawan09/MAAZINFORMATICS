"use client"

import { motion } from "framer-motion"
import { FileCheck, Pill, Activity, Clock, CheckCircle, Shield, TrendingUp, Users, ChevronRight, Sparkles, Target } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function EPA({ darkMode }) {
    const features = [
        { icon: Pill, title: "Medication Approval", desc: "Prescription authorization support", highlight: "Approval" },
        { icon: Activity, title: "Imaging Services", desc: "Diagnostic test approvals", highlight: "Imaging" },
        { icon: FileCheck, title: "Provider Coordination", desc: "Work with healthcare providers", highlight: "Coordination" },
        { icon: Shield, title: "Insurance Liaison", desc: "Insurance company communication", highlight: "Liaison" },
        { icon: Clock, title: "Quick Processing", desc: "Fast authorization turnaround", highlight: "Fast" },
        { icon: CheckCircle, title: "Excellent Results", desc: "High approval success rate", highlight: "Results" },
    ]

    const benefits = [
        { icon: TrendingUp, title: "95% Approval Rate", desc: "Most authorizations get approved", value: "95%" },
        { icon: Clock, title: "24-48 Hour Turnaround", desc: "Fast processing times", value: "24-48h" },
        { icon: Users, title: "Dedicated Team", desc: "Expert authorization specialists", value: "Experts" },
    ]

    const authTypes = [
        "Prescription Medications",
        "Medical Procedures",
        "Diagnostic Imaging (MRI, CT, PET)",
        "Specialist Consultations",
        "Durable Medical Equipment",
        "Home Health Services",
        "Physical Therapy",
        "Mental Health Services",
    ]

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 pb-16 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-indigo-900/5" : "bg-indigo-100/10"} blur-3xl`} />
                    <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-100/10"} blur-3xl`} />
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
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-indigo-500" />
                                    <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                                        Healthcare Authorization
                                    </span>
                                </motion.div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">Electronic Prior</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                                        Authorization
                                    </span>
                                </h1>

                                <p className={`text-lg mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    We Will Help Your Patients To Get Approval for Their Medication, Imaging And Other Services From
                                    Provider, Insurance & Pharmacy Ends. So You Just Outsource Your Work to Us and We will Show You The
                                    Excellent Working Results.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center gap-2">
                                            Get Started Today
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-8 py-4 rounded-xl font-medium border ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50"
                                        } transition-all duration-300 flex items-center gap-2`}>
                                        <FileCheck className="w-4 h-4" />
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
                                    : "bg-gradient-to-br from-white to-indigo-50"
                                    } border ${darkMode ? "border-slate-800" : "border-slate-100"} shadow-lg`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]" />

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
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full blur-2xl opacity-20" />
                                            <FileCheck className="w-24 h-24 text-indigo-500 relative z-10" />
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
                                    ? "bg-indigo-500/10 text-indigo-400"
                                    : "bg-indigo-100 text-indigo-600"
                                    }`}>
                                    Key Features
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Why Choose Our
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                                    EPA Services
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
                                        } border ${darkMode ? "border-slate-800/40 hover:border-indigo-500/20" : "border-slate-100 hover:border-indigo-200"}`}
                                >
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-indigo-900/20 to-blue-900/15"
                                        : "bg-gradient-to-br from-indigo-50 to-blue-50"
                                        }`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`} />
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    <div className={`mt-4 px-3 py-1 rounded-lg text-xs font-medium w-fit ${darkMode
                                        ? "bg-indigo-500/10 text-indigo-400"
                                        : "bg-indigo-50 text-indigo-600"
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
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-blue-100 text-blue-600"
                                    }`}>
                                    Measurable Results
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Proven
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
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
                                                : "bg-indigo-50 group-hover:bg-indigo-100"
                                                } transition-all duration-300`}>
                                                <benefit.icon className={`w-6 h-6 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`} />
                                            </div>
                                            <div className={`text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent`}>
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

                    {/* Authorization Types */}
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
                                    ? "bg-indigo-500/10 text-indigo-400"
                                    : "bg-indigo-100 text-indigo-600"
                                    }`}>
                                    Authorization Types
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Authorization Types
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                                    We Handle
                                </span>
                            </h2>
                        </div>

                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/40"
                            : "bg-white border border-slate-100"
                            }`}>
                            <div className="grid md:grid-cols-2 gap-4">
                                {authTypes.map((type, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.8 + index * 0.05 }}
                                        className={`flex items-center gap-3 p-4 rounded-xl ${darkMode ? "bg-slate-800/40" : "bg-indigo-50/30"}`}
                                    >
                                        <CheckCircle className={`w-5 h-5 shrink-0 ${darkMode ? "text-indigo-400" : "text-indigo-600"}`} />
                                        <span className={`${darkMode ? "text-slate-200" : "text-slate-800"}`}>{type}</span>
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
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

                    </motion.div>
                </div>
            </div>
        </>
    )
}
