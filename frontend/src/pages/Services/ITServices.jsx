"use client"

import { motion } from "framer-motion"
import { Code, Globe, Palette, TrendingUp, Server, Smartphone, ChevronRight, Sparkles, Zap, CheckCircle, Award } from "lucide-react"
import Navbar from "../../components/Navbar"
export default function ITServices({ darkMode }) {
    const features = [
        { icon: Globe, title: "Web Development", desc: "Modern and responsive websites", highlight: "Full Stack" },
        { icon: Code, title: "Software Development", desc: "Custom desktop applications", highlight: "Custom Solutions" },
        { icon: Palette, title: "Graphics Design", desc: "Creative visual solutions", highlight: "Creative" },
        { icon: TrendingUp, title: "Digital Marketing", desc: "SEO and online presence", highlight: "SEO Experts" },
        { icon: Server, title: "Backend Solutions", desc: "Robust server infrastructure", highlight: "Scalable" },
        { icon: Smartphone, title: "Mobile Apps", desc: "iOS and Android development", highlight: "Cross-Platform" },
    ]

    const technologies = [
        { name: "React & Next.js", category: "Frontend", icon: Code, color: "from-blue-600 to-cyan-500" },
        { name: "Node.js & Python", category: "Backend", icon: Server, color: "from-green-600 to-emerald-500" },
        { name: "PHP-LARAVEL", category: "Backend", icon: Code, color: "from-orange-600 to-amber-500" },
        { name: "React Native/Flutter", category: "Mobile", icon: Smartphone, color: "from-purple-600 to-pink-500" },
    ]

    const stats = [
        { value: "300+", label: "Projects Delivered", trend: "Experience" },
        { value: "150+", label: "Happy Clients", trend: "Satisfied" },
        { value: "50+", label: "Team Members", trend: "Experts" },
        { value: "99%", label: "Client Satisfaction", trend: "Top Rated" },
    ]

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 pb-16 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-blue-900/5" : "bg-blue-100/10"} blur-3xl`} />
                    <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-cyan-900/5" : "bg-cyan-100/10"} blur-3xl`} />
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
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-blue-500" />
                                    <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                        Technology Solutions
                                    </span>
                                </motion.div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">Web, Software &</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                        IT Services
                                    </span>
                                </h1>

                                <p className={`text-lg mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    We Don't Just Build Web & Desktop Applications, We Build Your Business. We Provide Professional Web &
                                    Software Designing + Development Services, Graphics Designing, Digital Marketing, and So Many Other
                                    Information Technology Services.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center gap-2">
                                            Start Your Project
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-8 py-4 rounded-xl font-medium border ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                                        } transition-all duration-300 flex items-center gap-2`}>
                                        <Code className="w-4 h-4" />
                                        View Portfolio
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
                                    : "bg-gradient-to-br from-white to-blue-50"
                                    } border ${darkMode ? "border-slate-800" : "border-slate-100"} shadow-lg`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]" />

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
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-2xl opacity-20" />
                                            <Code className="w-24 h-24 text-blue-500 relative z-10" />
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
                                    ? "bg-blue-500/10 text-blue-400"
                                    : "bg-blue-100 text-blue-600"
                                    }`}>
                                    Our Services
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Comprehensive IT
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Solutions
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
                                        } border ${darkMode ? "border-slate-800/40 hover:border-blue-500/20" : "border-slate-100 hover:border-blue-200"}`}
                                >
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/15"
                                        : "bg-gradient-to-br from-blue-50 to-cyan-50"
                                        }`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-blue-400" : "text-blue-600"}`} />
                                    </div>

                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {feature.desc}
                                    </p>

                                    <div className={`mt-4 px-3 py-1 rounded-lg text-xs font-medium w-fit ${darkMode
                                        ? "bg-blue-500/10 text-blue-400"
                                        : "bg-blue-50 text-blue-600"
                                        }`}>
                                        {feature.highlight}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technologies Grid */}
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
                                    ? "bg-cyan-500/10 text-cyan-400"
                                    : "bg-cyan-100 text-cyan-600"
                                    }`}>
                                    Technologies
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Technologies We
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                                    Master
                                </span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {technologies.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className={`group relative p-6 rounded-2xl transition-all duration-300 ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30 hover:from-slate-800 hover:to-slate-800"
                                        : "bg-white hover:shadow-lg"
                                        } border ${darkMode ? "border-slate-800/40" : "border-slate-100"}`}
                                >
                                    <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium mb-4 ${darkMode
                                        ? "bg-slate-700 text-cyan-400"
                                        : "bg-slate-100 text-cyan-600"
                                        }`}>
                                        {tech.category}
                                    </span>
                                    <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {tech.name}
                                    </h3>
                                    <tech.icon className={`w-12 h-12 mb-4 ${darkMode ? "text-cyan-500/30" : "text-cyan-600/30"}`} />
                                    <div className={`h-1 w-full rounded-full bg-gradient-to-r ${tech.color}`} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mb-20"
                    >
                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/40"
                            : "bg-gradient-to-br from-blue-50/30 to-cyan-50/30 border border-slate-100"
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
                                        <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}>
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

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

                    </motion.div>
                </div>
            </div>
        </>
    )
}


