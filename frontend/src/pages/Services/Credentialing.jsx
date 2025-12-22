"use client"

import { motion } from "framer-motion"
import { Award, FileCheck, Users, Clock, Building, CheckCircle, Shield, ChevronRight, Sparkles, Target, FileText } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function Credentialing({ darkMode }) {
    const features = [
        { icon: Award, title: "Provider Enrollment", desc: "Complete enrollment services", highlight: "Full Enrollment" },
        { icon: FileCheck, title: "Document Management", desc: "Organized credential tracking", highlight: "Secure Docs" },
        { icon: Users, title: "Insurance Coordination", desc: "Liaison with insurance companies", highlight: "Network Access" },
        { icon: Building, title: "Hospital Privileges", desc: "Facility credentialing support", highlight: "Hospital Access" },
        { icon: Clock, title: "Time Saving", desc: "We handle the entire process", highlight: "Save 60% Time" },
        { icon: CheckCircle, title: "Complete Solution", desc: "End-to-end credentialing package", highlight: "End-to-End" },
    ]

    const process = [
        { step: "01", title: "Application", desc: "Initial credentialing application filed", stats: "24-48 Hours" },
        { step: "02", title: "Verification", desc: "Credential verification and validation", stats: "Thorough Check" },
        { step: "03", title: "Enrollment", desc: "Provider enrollment with panels", stats: "Multi-Network" },
        { step: "04", title: "Approval", desc: "Final approval and contract setup", stats: "Guaranteed" },
    ]

    const stats = [
        { value: "500+", label: "Providers Credentialed", trend: "Expert Team" },
        { value: "98%", label: "Approval Rate", trend: "Industry Leader" },
        { value: "60%", label: "Faster Processing", trend: "Time Saved" },
        { value: "24/7", label: "Support Available", trend: "Always There" },
    ]

    return (
        <>
            <Navbar />

            <div className={`min-h-screen pt-20 pb-16 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-violet-900/5" : "bg-violet-100/10"} blur-3xl`} />
                    <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-purple-900/5" : "bg-purple-100/10"} blur-3xl`} />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">

                    {/* Hero Section - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4"
                            >
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                    ? "bg-violet-500/10 text-violet-400"
                                    : "bg-violet-100 text-violet-600"
                                    }`}>
                                    Professional Credentialing
                                </span>
                            </motion.div>
                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                <span className="block">Provider</span>
                                <span className="block text-transparent py-4 bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">
                                    Credentialing Services
                                </span>
                            </h1>
                            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                Complete credentialing and provider enrollment solutions
                            </p>
                        </div>

                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30 border border-slate-800/40"
                            : "bg-white border border-slate-100"
                            } shadow-lg`}>
                            <div className="grid lg:grid-cols-3 gap-8 items-center">
                                <div className="lg:col-span-2">
                                    <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        Complete Credentialing Package
                                    </h2>
                                    <p className={`text-base mb-4 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                        We provide complete credentialing and provider enrollment services. We coordinate with insurance
                                        companies, hospitals and other organizations to save your time and efforts.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {["CAQH Registration", "Insurance Enrollment", "Hospital Privileges", "Re-credentialing"].map(
                                            (item, index) => (
                                                <span
                                                    key={index}
                                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                                        ? "bg-violet-500/10 text-violet-400 border border-violet-500/20"
                                                        : "bg-violet-50 text-violet-600 border border-violet-100"
                                                        }`}
                                                >
                                                    {item}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <div className={`relative rounded-xl overflow-hidden ${darkMode
                                        ? "bg-gradient-to-br from-slate-800 to-slate-900"
                                        : "bg-gradient-to-br from-violet-50 to-purple-50"
                                        } border ${darkMode ? "border-slate-700" : "border-violet-100"} p-8`}>
                                        <motion.div
                                            animate={{
                                                rotateY: [0, 180, 360]
                                            }}
                                            transition={{
                                                duration: 8,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                        >
                                            <Award className="w-20 h-20 text-violet-500" />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Features Grid - Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4"
                            >
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                    ? "bg-violet-500/10 text-violet-400"
                                    : "bg-violet-100 text-violet-600"
                                    }`}>
                                    Our Services
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Comprehensive
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">
                                    Credentialing Solutions
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * index + 0.3 }}
                                    whileHover={{ y: -3, scale: 1.02 }}
                                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30 hover:from-slate-800 hover:to-slate-800"
                                        : "bg-white hover:shadow-lg"
                                        } border ${darkMode ? "border-slate-800/40 hover:border-violet-500/20" : "border-slate-100 hover:border-violet-200"}`}
                                >
                                    {/* Icon */}
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-violet-900/20 to-purple-900/15"
                                        : "bg-gradient-to-br from-violet-50 to-purple-50"
                                        }`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-violet-400" : "text-violet-600"}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    {/* Highlight Badge */}
                                    <div className={`mt-4 px-3 py-1 rounded-lg text-xs font-medium w-fit ${darkMode
                                        ? "bg-violet-500/10 text-violet-400"
                                        : "bg-violet-50 text-violet-600"
                                        }`}>
                                        {feature.highlight}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Process Timeline - Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block mb-4"
                            >
                                <span className={`px-3 py-1.5 rounded-lg text-xs font-medium ${darkMode
                                    ? "bg-purple-500/10 text-purple-400"
                                    : "bg-purple-100 text-purple-600"
                                    }`}>
                                    Our Process
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Streamlined
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
                                    Credentialing Process
                                </span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {process.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.03 }}
                                    className={`relative p-6 rounded-2xl ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30"
                                        : "bg-white"
                                        } text-center`}
                                >
                                    {/* Step Number */}
                                    <div className={`text-4xl font-bold mb-3 opacity-10 ${darkMode ? "text-white" : "text-slate-200"}`}>
                                        {item.step}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {item.desc}
                                    </p>

                                    {/* Stats Badge */}
                                    <div className={`px-3 py-1 rounded-lg text-xs font-medium ${darkMode
                                        ? "bg-violet-500/10 text-violet-400"
                                        : "bg-violet-50 text-violet-600"
                                        }`}>
                                        {item.stats}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Section - Compact */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-20"
                    >
                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/40"
                            : "bg-gradient-to-br from-violet-50/30 to-purple-50/30 border border-slate-100"
                            }`}>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent`}>
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
                        transition={{ delay: 0.8 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />


                    </motion.div>
                </div>
            </div>
        </>
    )
}