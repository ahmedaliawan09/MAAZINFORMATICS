"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Clock, Shield, TrendingUp, Users, DollarSign, Award, Zap, ChevronRight, Sparkles, Target } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function MedicalBilling({ darkMode }) {
    const features = [
        { icon: CheckCircle, title: "Claims Processing", desc: "Efficient and accurate claims submission", highlight: "Accurate" },
        { icon: Clock, title: "Fast Turnaround", desc: "Quick processing and payment collection", highlight: "Fast" },
        { icon: Shield, title: "Compliance", desc: "HIPAA compliant and secure", highlight: "Secure" },
        { icon: TrendingUp, title: "Revenue Optimization", desc: "Maximize your practice revenue", highlight: "Optimized" },
        { icon: Users, title: "Expert Team", desc: "Highly experienced billing specialists", highlight: "Experts" },
        { icon: FileText, title: "Detailed Reports", desc: "Comprehensive analytics and insights", highlight: "Insights" },
    ]

    const benefits = [
        { icon: DollarSign, title: "Increased Revenue", desc: "Average revenue increase", value: "35%" },
        { icon: Clock, title: "Faster Payments", desc: "Reduction in payment time", value: "50%" },
        { icon: Award, title: "Clean Claims", desc: "First-pass acceptance rate", value: "98%" },
        { icon: Zap, title: "Efficiency Boost", desc: "Time saved on billing tasks", value: "60%" },
    ]

    const services = [
        "Insurance Verification & Authorization",
        "Medical Coding (ICD-10, CPT, HCPCS)",
        "Claims Submission & Follow-up",
        "Payment Posting & Reconciliation",
        "Denial Management & Appeals",
        "Patient Billing & Collections",
        "Credentialing Services",
        "Revenue Cycle Management",
    ]

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 pb-16 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-rose-900/5" : "bg-rose-100/10"} blur-3xl`} />
                    <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-pink-900/5" : "bg-pink-100/10"} blur-3xl`} />
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
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-rose-500" />
                                    <span className="text-sm font-medium bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
                                        Healthcare Revenue
                                    </span>
                                </motion.div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">Medical Billing</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">
                                        & Coding
                                    </span>
                                </h1>

                                <p className={`text-lg mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    We Have Highly Experienced & Specialized Team With a Strong Background Of Medical Billing. Now Your
                                    Insurance or Personal Payments And Claims Won't Be Unpayable & Won't Be Denied. Our comprehensive
                                    medical billing services ensure maximum revenue collection while maintaining compliance with all
                                    healthcare regulations.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center gap-2">
                                            Get Started Today
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-8 py-4 rounded-xl font-medium border ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-rose-300 hover:bg-rose-50"
                                        } transition-all duration-300 flex items-center gap-2`}>
                                        <FileText className="w-4 h-4" />
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
                                    : "bg-gradient-to-br from-white to-rose-50"
                                    } border ${darkMode ? "border-slate-800" : "border-slate-100"} shadow-lg`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.05),transparent_70%)]" />

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
                                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-400 rounded-full blur-2xl opacity-20" />
                                            <FileText className="w-24 h-24 text-rose-500 relative z-10" />
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
                                    ? "bg-rose-500/10 text-rose-400"
                                    : "bg-rose-100 text-rose-600"
                                    }`}>
                                    Key Features
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Why Choose Our
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">
                                    Billing Services
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
                                        } border ${darkMode ? "border-slate-800/40 hover:border-rose-500/20" : "border-slate-100 hover:border-rose-200"}`}
                                >
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-rose-900/20 to-pink-900/15"
                                        : "bg-gradient-to-br from-rose-50 to-pink-50"
                                        }`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-rose-400" : "text-rose-600"}`} />
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    <div className={`mt-4 px-3 py-1 rounded-lg text-xs font-medium w-fit ${darkMode
                                        ? "bg-rose-500/10 text-rose-400"
                                        : "bg-rose-50 text-rose-600"
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
                                    ? "bg-pink-500/10 text-pink-400"
                                    : "bg-pink-100 text-pink-600"
                                    }`}>
                                    Proven Results
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Measurable
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
                                    Benefits
                                </span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
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
                                                : "bg-rose-50 group-hover:bg-rose-100"
                                                } transition-all duration-300`}>
                                                <benefit.icon className={`w-6 h-6 ${darkMode ? "text-rose-400" : "text-rose-600"}`} />
                                            </div>
                                            <div className={`text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent`}>
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
                                    ? "bg-rose-500/10 text-rose-400"
                                    : "bg-rose-100 text-rose-600"
                                    }`}>
                                    Our Services
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Complete Service
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500">
                                    Suite
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
                                        className={`flex items-center gap-3 p-4 rounded-xl ${darkMode ? "bg-slate-800/40" : "bg-rose-50/30"}`}
                                    >
                                        <CheckCircle className={`w-5 h-5 shrink-0 ${darkMode ? "text-rose-400" : "text-rose-600"}`} />
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
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-500" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />


                    </motion.div>
                </div>
            </div>
        </>
    )
} 
