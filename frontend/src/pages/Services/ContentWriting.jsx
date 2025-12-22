"use client"

import { motion } from "framer-motion"
import { PenTool, FileText, BookOpen, Award, Sparkles, CheckCircle, Star, ChevronRight, Quote } from "lucide-react"
import Navbar from "../../components/Navbar"

export default function ContentWriting({ darkMode }) {
    const features = [
        { icon: PenTool, title: "Academic Writing", desc: "Research papers and essays", highlight: "Academic Excellence" },
        { icon: FileText, title: "Article Writing", desc: "Engaging blog posts and articles", highlight: "SEO Optimized" },
        { icon: BookOpen, title: "Content Creation", desc: "Website and marketing content", highlight: "Brand Voice" },
        { icon: Sparkles, title: "Creative Writing", desc: "Impressive and engaging style", highlight: "Creative Edge" },
        { icon: Award, title: "Expert Writers", desc: "Skilled and experienced team", highlight: "Professional Team" },
        { icon: CheckCircle, title: "Quality Assurance", desc: "Edited and polished content", highlight: "100% Quality" },
    ]

    const process = [
        { step: "01", title: "Consultation", desc: "Share your ideas and requirements" },
        { step: "02", title: "Research", desc: "Our team conducts thorough research" },
        { step: "03", title: "Writing", desc: "Expert writers craft your content" },
        { step: "04", title: "Review", desc: "Quality assurance and editing" },
        { step: "05", title: "Delivery", desc: "Receive polished, ready-to-use content" },
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            text: "Outstanding writing quality! Their content helped increase our engagement by 300%.",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Academic Researcher",
            text: "Professional academic writing services that exceeded all expectations.",
            rating: 5,
        },
        {
            name: "Emily Davis",
            role: "Content Manager",
            text: "Fast turnaround with exceptional attention to detail. Highly recommended!",
            rating: 5,
        },
    ]

    const stats = [
        { value: "500+", label: "Projects Completed", trend: "Satisfied Clients" },
        { value: "99%", label: "Client Satisfaction", trend: "Top Rated" },
        { value: "48h", label: "Average Delivery", trend: "Fast Turnaround" },
        { value: "24/7", label: "Support Available", trend: "Always Available" },
    ]

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 pb-16 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                {/* Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className={`absolute top-1/4 left-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-amber-900/5" : "bg-amber-100/10"} blur-3xl`} />
                    <div className={`absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full ${darkMode ? "bg-indigo-900/5" : "bg-indigo-100/10"} blur-3xl`} />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">

                    {/* Hero Section - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <div className="grid lg:grid-cols-2 gap-10 items-center">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-500/20 mb-6"
                                >
                                    <Sparkles className="w-4 h-4 text-amber-500" />
                                    <span className="text-sm font-medium bg-gradient-to-r from-amber-600 to-indigo-500 bg-clip-text text-transparent">
                                        Premium Writing Services
                                    </span>
                                </motion.div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    <span className="block">Article &</span>
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-indigo-500">
                                        Content Writing
                                    </span>
                                </h1>

                                <p className={`text-lg mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"} leading-relaxed`}>
                                    Express Your Ideas Impressively. We provide multiple types of writing services.
                                    Share your ideas with us! We will express them in impressive and engaging ways.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-600 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center gap-2">
                                            Start Your Project
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </button>
                                    <button className={`px-8 py-4 rounded-xl font-medium border ${darkMode
                                        ? "border-slate-700 text-white hover:border-slate-600 hover:bg-slate-800/30"
                                        : "border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-amber-50"
                                        } transition-all duration-300 flex items-center gap-2`}>
                                        <PenTool className="w-4 h-4" />
                                        View Portfolio
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
                                        <div className="p-1.5 rounded-lg bg-amber-500/10">
                                            <CheckCircle className="w-4 h-4 text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900 dark:text-white">99%</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400">Satisfaction</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-indigo-500/10">
                                            <Award className="w-4 h-4 text-indigo-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900 dark:text-white">500+</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400">Projects</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-amber-500/10">
                                            <Star className="w-4 h-4 text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-slate-900 dark:text-white">4.9/5</div>
                                            <div className="text-xs text-slate-600 dark:text-slate-400">Rating</div>
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
                                    : "bg-gradient-to-br from-white to-amber-50"
                                    } border ${darkMode ? "border-slate-800" : "border-slate-100"} shadow-lg`}>
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05),transparent_70%)]" />

                                    <div className="relative p-8 flex flex-col items-center justify-center min-h-[320px]">
                                        {/* Floating Pen Icon */}
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
                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-indigo-400 rounded-full blur-2xl opacity-20" />
                                            <PenTool className="w-24 h-24 text-amber-500 relative z-10" />
                                        </motion.div>
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
                                    ? "bg-amber-500/10 text-amber-400"
                                    : "bg-amber-100 text-amber-600"
                                    }`}>
                                    Our Services
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Professional
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-indigo-500">
                                    Writing Services
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
                                        } border ${darkMode ? "border-slate-800/40 hover:border-amber-500/20" : "border-slate-100 hover:border-amber-200"}`}
                                >
                                    {/* Icon */}
                                    <div className={`mb-4 p-3 rounded-xl w-fit ${darkMode
                                        ? "bg-gradient-to-br from-amber-900/20 to-indigo-900/15"
                                        : "bg-gradient-to-br from-amber-50 to-indigo-50"
                                        }`}>
                                        <feature.icon className={`w-8 h-8 ${darkMode ? "text-amber-400" : "text-amber-600"}`} />
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
                                        ? "bg-amber-500/10 text-amber-400"
                                        : "bg-amber-50 text-amber-600"
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
                                    ? "bg-indigo-500/10 text-indigo-400"
                                    : "bg-indigo-100 text-indigo-600"
                                    }`}>
                                    Our Process
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Our Writing
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">
                                    Process
                                </span>
                            </h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                            {process.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className={`p-5 rounded-xl text-center ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/40 to-slate-900/30"
                                        : "bg-white"
                                        }`}
                                >
                                    <div className={`text-3xl font-bold mb-2 ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                                        {item.step}
                                    </div>
                                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonials Grid - Compact */}
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
                                    ? "bg-amber-500/10 text-amber-400"
                                    : "bg-amber-100 text-amber-600"
                                    }`}>
                                    Client Reviews
                                </span>
                            </motion.div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                What Our
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-indigo-500">
                                    Clients Say
                                </span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    className={`p-6 rounded-2xl ${darkMode
                                        ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30"
                                        : "bg-gradient-to-br from-amber-50/30 to-indigo-50/30"
                                        }`}
                                >
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 fill-current ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                                            />
                                        ))}
                                    </div>

                                    <p className={`text-sm mb-4 leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                        "{testimonial.text}"
                                    </p>

                                    <div>
                                        <p className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                                            {testimonial.name}
                                        </p>
                                        <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                            {testimonial.role}
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
                        transition={{ delay: 0.9 }}
                        className="mb-20"
                    >
                        <div className={`rounded-2xl p-8 ${darkMode
                            ? "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-800/40"
                            : "bg-gradient-to-br from-amber-50/30 to-indigo-50/30 border border-slate-100"
                            }`}>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                        className="text-center"
                                    >
                                        <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-indigo-500 bg-clip-text text-transparent`}>
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
                        transition={{ delay: 1.1 }}
                        className="relative overflow-hidden rounded-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-indigo-500" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

                    </motion.div>
                </div>
            </div>
        </>
    )
}