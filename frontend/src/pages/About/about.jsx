"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, TrendingUp, Lightbulb, Shield, Heart, Zap } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback } from "react"

export default function About({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const coreValues = [
        {
            icon: Target,
            title: "Our Mission",
            desc: "To provide world-class IT and healthcare services that empower businesses to achieve their full potential",
            color: "teal",
        },
        {
            icon: Users,
            title: "Expert Team",
            desc: "Highly skilled professionals with decades of combined experience dedicated to your success",
            color: "orange",
        },
        {
            icon: Award,
            title: "Quality First",
            desc: "Excellence in every service we deliver, backed by ISO certifications and industry recognition",
            color: "teal",
        },
        {
            icon: TrendingUp,
            title: "Growth Focus",
            desc: "Helping businesses scale efficiently with innovative solutions and strategic support",
            color: "orange",
        },
    ]

    const principles = [
        { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions" },
        { icon: Shield, title: "Security", desc: "Data protection priority" },
        { icon: Heart, title: "Care", desc: "Client-first approach" },
        { icon: Zap, title: "Efficiency", desc: "Optimized processes" },
    ]

    const stats = [
        { value: "15+", label: "Years Experience" },
        { value: "500+", label: "Clients Served" },
        { value: "50K+", label: "Projects Completed" },
        { value: "24/7", label: "Support Available" },
    ]

    const milestones = [
        { year: "2008", title: "Company Founded", desc: "Started with a vision to transform healthcare IT" },
        { year: "2012", title: "ISO Certified", desc: "Achieved triple ISO certification for quality" },
        { year: "2016", title: "Global Expansion", desc: "Extended services to international markets" },
        { year: "2023", title: "Industry Leader", desc: "Recognized as top healthcare IT provider" },
    ]

    return (
        <div className="min-h-screen pt-24 pb-24" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-block mb-4">
                        <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-teal-500/10 rounded-full">
                            About Us
                        </span>
                    </div>
                    <h1
                        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                        Transforming Healthcare IT
                    </h1>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        A Leading Healthcare IT Company Committed to Excellence
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl text-center ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white border border-slate-200"
                                }`}
                        >
                            <div
                                className={`text-3xl md:text-4xl font-bold mb-2 ${index % 2 === 0 ? "text-teal-500" : "text-orange-500"
                                    }`}
                            >
                                {stat.value}
                            </div>
                            <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-slate-600"}`}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Company Story Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-20"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Who We Are
                            </h2>
                            <div className="space-y-4">
                                <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                    We are the world's most cost effective Information Technology, Call Center Services & Medical Billing
                                    outsourcing company and specialized in the management of customer care services and back office
                                    processes for global leaders in the domains of technical support, information technology, telecom,
                                    healthcare, and medical billing.
                                </p>
                                <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                    Our Main Focus is to Develop Your Business, Secure Your Information and Help Out You to Solve Your
                                    Problems & Issues. Share Your Work Burden, Make You Comfortable and Satisfied, Through Our Quality
                                    Work, Services and Support throughout 24/7, So your Business May Progress More in a Short Period of
                                    Time.
                                </p>
                            </div>

                            {/* Principles Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {principles.map((principle, idx) => (
                                    <div key={idx} className={`p-4 rounded-xl ${darkMode ? "bg-slate-800/30" : "bg-slate-50"}`}>
                                        <principle.icon className="text-teal-500 mb-2" size={24} />
                                        <div className={`font-bold text-sm mb-1 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                            {principle.title}
                                        </div>
                                        <div className={`text-xs ${darkMode ? "text-gray-400" : "text-slate-600"}`}>{principle.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Carousel */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
                                <div className="flex">
                                    {["/team-collaboration.jpg", "/office-workspace.jpg", "/technology-innovation.jpg"].map(
                                        (img, idx) => (
                                            <div key={idx} className="flex-[0_0_100%] min-w-0">
                                                <div className="relative aspect-4/3">
                                                    <img
                                                        src={img || "/placeholder.svg"}
                                                        alt={`About us ${idx + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent"></div>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>

                            {/* Carousel Navigation */}
                            <div className="absolute bottom-6 right-6 flex gap-2">
                                <button
                                    onClick={scrollPrev}
                                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                                >
                                    <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={scrollNext}
                                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all shadow-lg"
                                >
                                    <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Our Core Values
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-2xl transition-all ${darkMode
                                    ? "bg-slate-800/50 border border-gray-700/50 hover:border-teal-500/50"
                                    : "bg-white border border-slate-200 hover:border-teal-500 hover:shadow-2xl"
                                    }`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${value.color === "teal" ? "bg-teal-500/10" : "bg-orange-500/10"
                                        }`}
                                >
                                    <value.icon className={value.color === "teal" ? "text-teal-500" : "text-orange-500"} size={28} />
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    {value.title}
                                </h3>
                                <p className={`${darkMode ? "text-gray-400" : "text-slate-600"} leading-relaxed`}>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Timeline Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={`rounded-3xl p-8 md:p-12 ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white"}`}
                >
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Our Journey
                        </h2>
                        <p className={`text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Key milestones in our growth story
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="relative">
                                {/* Connector Line (hidden on last item) */}
                                {idx < milestones.length - 1 && (
                                    <div
                                        className={`hidden lg:block absolute top-8 left-full w-full h-0.5 ${darkMode ? "bg-gray-700" : "bg-slate-200"
                                            }`}
                                        style={{ transform: "translateX(-50%)" }}
                                    ></div>
                                )}

                                <div
                                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 ${idx % 2 === 0 ? "bg-teal-500" : "bg-orange-500"
                                        }`}
                                >
                                    <span className="text-white font-bold">{milestone.year}</span>
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    {milestone.title}
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>{milestone.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
