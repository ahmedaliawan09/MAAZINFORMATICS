"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Shield, Star, CheckCircle, ChevronRight } from "lucide-react"
import customersatisfaction from "../../assets/images/customersatisfaction.png"
import iso from "../../assets/images/ISO.png"
import iso2 from "../../assets/images/ISO2.png"
import psebaward from "../../assets/images/psebaward.png"
import pioneer from "../../assets/images/pionee.png"
import { useRef } from "react"
import Navbar from "../../components/Navbar"
export default function Achievements() {
    const containerRef = useRef(null)

    const achievements = [
        {
            icon: Trophy,
            title: "Excellence Award for Top Position in ICT Internship Program",
            description: "Maaz Informatics earned the Top Position and the Excellence Award from Pakistan's Software Export Board (PSEB) for its pivotal role in the ICT Internship Program.",
            image: psebaward,
            year: "2025",
            color: "from-amber-500/10 to-amber-600/10",
            iconColor: "text-amber-600"
        },
        {
            icon: Award,
            title: "Pioneering the Best Achievement at IT & ITeS Exports Awards",
            description: "We have been honored at the IT & ITeS Exports Awards Ceremony, graciously hosted by the Federal Minister of Information Technology & Telecommunication.",
            image: pioneer,
            year: "2024",
            color: "from-blue-500/10 to-blue-600/10",
            iconColor: "text-blue-600"
        },
        {
            icon: Shield,
            title: "ISO/IEC 27001:2022 Certification for Information Security",
            description: "Maaz Informatics has Achieved ISO/IEC 27001:2022 certification, which underscores its commitment to maintaining the highest standards in information security management.",
            image: iso,
            year: "2022",
            color: "from-emerald-500/10 to-emerald-600/10",
            iconColor: "text-emerald-600"
        },
        {
            icon: CheckCircle,
            title: "Upholding Privacy with ISO/IEC 27701:2019 Certification",
            description: "Our ISO/IEC 27701:2019 certification highlights our dedication to the highest standards of privacy and data protection, including strict HIPAA compliance.",
            image: iso2,
            year: "2019",
            color: "from-violet-500/10 to-violet-600/10",
            iconColor: "text-violet-600"
        },
        {
            icon: Star,
            title: "Empowering Customer Satisfaction Through ISO 18295 Certification",
            description: "The ISO 18295 certification demonstrates our commitment to upholding the highest standards of customer service and operational transparency.",
            image: customersatisfaction,
            year: "2023",
            color: "from-rose-500/10 to-rose-600/10",
            iconColor: "text-rose-600"
        },
    ]

    const stats = [
        { icon: Shield, value: "5+", label: "ISO Certifications", color: "text-emerald-700", border: "border-emerald-100" },
        { icon: Award, value: "10+", label: "Industry Awards", color: "text-blue-700", border: "border-blue-100" },
        { icon: CheckCircle, value: "100%", label: "Compliance Rate", color: "text-violet-700", border: "border-violet-100" },
        { icon: Star, value: "99.9%", label: "Client Satisfaction", color: "text-rose-700", border: "border-rose-100" },
    ]

    return (
        <>
            <Navbar />
            <div ref={containerRef} className="min-h-screen py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-slate-400" />
                            <span className="text-sm font-medium text-slate-700 tracking-wider">
                                RECOGNITIONS & AWARDS
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our Journey of
                            <span className="block text-slate-800 mt-2">Excellence</span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Recognized for excellence in quality, security, and customer satisfaction through industry-leading certifications.
                        </p>
                    </motion.div>

                    {/* Stats - Compact Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                                whileHover={{ y: -2 }}
                                className={`bg-white border ${stat.border} rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200`}
                            >
                                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Achievements Timeline - Clean Design */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200" />

                        <div className="space-y-12">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-slate-400 z-10" />

                                    {/* Content Container */}
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 ml-12 md:ml-0`}>
                                        {/* Image Section */}
                                        <div className="w-full md:w-2/5">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="relative"
                                            >
                                                <img
                                                    src={achievement.image}
                                                    alt={achievement.title}
                                                    className="w-full max-w-sm mx-auto rounded-lg shadow-md object-cover aspect-[3/4]"
                                                />
                                                <div className={`absolute -inset-4 ${achievement.color} rounded-xl -z-10 blur-sm`} />

                                                {/* Year Badge */}
                                                <div className="absolute -top-3 -right-3">
                                                    <div className="px-3 py-1.5 bg-white border border-slate-200 rounded-full shadow-sm">
                                                        <span className="text-xs font-semibold text-slate-700">
                                                            {achievement.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="w-full md:w-3/5">
                                            <motion.div
                                                whileHover={{ x: index % 2 === 0 ? 4 : -4 }}
                                                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
                                            >
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className={`w-10 h-10 rounded-lg ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                                                        <achievement.icon className={`w-5 h-5 ${achievement.iconColor}`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight">
                                                            {achievement.title}
                                                        </h3>
                                                        <div className="w-8 h-0.5 rounded-full bg-slate-200 mb-3" />
                                                    </div>
                                                </div>

                                                <p className="text-slate-600 mb-4 leading-relaxed">
                                                    {achievement.description}
                                                </p>

                                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                                    <span>Certified & Verified</span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Section - Minimal */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mt-24"
                    >
                        <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 md:p-12">
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                    <span className="text-sm font-medium text-slate-700 uppercase tracking-wider">
                                        IMPACT & BENEFITS
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                                    Driving Value Through Certification
                                </h2>

                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Our certifications translate to tangible benefits that directly impact client success and operational excellence.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {["Enhanced Security", "Regulatory Compliance", "Quality Assurance", "Client Confidence"].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-3 bg-white border border-slate-200 rounded-lg shadow-xs hover:shadow-sm transition-all duration-200"
                                        >
                                            <span className="text-sm font-medium text-slate-800">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}