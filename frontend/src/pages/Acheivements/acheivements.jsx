"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Shield, Star, CheckCircle, TrendingUp } from "lucide-react"
import { useState } from "react"
import customersatisfaction from "../../assets/images/customersatisfaction.png"
import iso from "../../assets/images/ISO.png"
import iso2 from "../../assets/images/ISO2.png"
import psebaward from "../../assets/images/psebaward.png"
import pioneer from "../../assets/images/pionee.png"

export default function Achievements({ darkMode }) {
    const achievements = [
        {
            icon: Trophy,
            title: "Excellence Award for Top Position in ICT Internship Program",
            description:
                "Maaz Informatics earned the Top Position and the Excellence Award from Pakistan's Software Export Board (PSEB) for its pivotal role in the ICT Internship Program. Recognized for equipping emerging IT professionals with hands-on experience and bridging academia-industry gaps, we thank PSEB and recommit to advancing tech education, empowering youth, and boosting Pakistan's global tech leadership. Together, we're forging a stronger digital future.",
            image: psebaward,
            color: "teal",
            year: "2025",
        },
        {
            icon: Award,
            title: "Pioneering the Best Achievement at IT & ITeS Exports Awards",
            description:
                "We are delighted to announce that, as one of Pakistan's top-earning IT companies, we have been honored at the IT & ITeS Exports Awards Ceremony, graciously hosted by the Federal Minister of Information Technology & Telecommunication, along with Tech Destination Pakistan, and the Pakistan Software Houses Association. Over past 8 years, we have advanced from upholding no position to achieving an outstanding ranking in 2024, reflecting our growth and development in ICT sector.",
            image: pioneer,
            color: "orange",
            year: "2024",
        },
        {
            icon: Shield,
            title: "ISO/IEC 27001:2022 Certification for Information Security",
            description:
                "Robust information security is the foundation of success. Maaz Informatics has Achieved ISO/IEC 27001:2022 certification, which underscores its commitment to maintaining the highest standards in information security management. Our security policy is based on the principles of ISO/IEC 27001:2022, Aiming to provide clients with confidence in our dedication to protecting their sensitive data. We exceed industry standards to ensure secure software development, HR processes, patient data management, administrative functions, IT infrastructure, and customer services.",
            image: iso,
            color: "teal",
            year: "2022",
        },
        {
            icon: CheckCircle,
            title: "Upholding Privacy with ISO/IEC 27701:2019 Certification",
            description:
                "At Maaz Informatics, we prioritize the protection of personal data as a cornerstone of our operations. Our ISO/IEC 27701:2019 certification highlights our dedication to the highest standards of privacy and data protection. Aligned with ISO/IEC 27701:2019 principles, our privacy policy ensures robust management and protection of sensitive information, including strick HIPAA compliance for both employee and patient data, fostering trust and long-lasting relationships with our clients.",
            image: iso2,
            color: "orange",
            year: "2019",
        },
        {
            icon: Star,
            title: "Empowering Customer Satisfaction Through ISO 18295 Certification",
            description:
                "As we know, every successful partnership is built on trust. Maaz Informatics operates with transparency. Our ISO certification demonstrate that we uphold established rules and regulations, allowing our clients to see how we conduct our bussiness. At Maaz Informatics, we believe that satisfied customers are the foundation of the company's success. The ISO 18295 certification further demostrates our commitment to upholding the highest standards of customer service.",
            image: customersatisfaction,
            color: "teal",
            year: "2023",
        },
    ]

    return (
        <div
            className="min-h-screen pt-24 pb-24 relative overflow-hidden"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}
        >
            {/* Background Decorations */}
            <div className="absolute top-20 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -right-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-orange-500/10 rounded-full">
                            Our Achievements
                        </span>
                    </div>
                    <h1
                        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                        Excellence & Recognition
                    </h1>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        By achieving ISO certification, we aim to enhance our clients' confidence in our commitment to exceptional
                        customer service.
                    </p>
                </motion.div>

                {/* Achievements Grid */}
                <div className="space-y-8 mb-20">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                        >
                            {/* Image Container - Display only, no click functionality */}
                            <div className="w-full lg:w-2/5 relative group">
                                <div className={`relative aspect-[3/4] ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white border border-slate-200 shadow-xl"
                                    } rounded-3xl overflow-hidden`}>
                                    <img
                                        src={achievement.image || "/placeholder.svg?height=1200&width=900"}
                                        alt={achievement.title}
                                        className="w-full h-full object-contain p-4"
                                    />

                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${achievement.color === "teal"
                                            ? "from-teal-900/10 via-transparent to-transparent"
                                            : "from-orange-900/10 via-transparent to-transparent"
                                            }`}
                                    />

                                    {/* Year Badge */}
                                    <div
                                        className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold shadow-xl ${achievement.color === "teal" ? "bg-teal-500 text-white" : "bg-orange-500 text-white"
                                            }`}
                                    >
                                        {achievement.year}
                                    </div>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="w-full lg:w-3/5 space-y-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className={`p-8 rounded-3xl ${darkMode
                                        ? "bg-slate-800/70 border border-gray-700/50"
                                        : "bg-white border border-slate-200 shadow-lg"
                                        }`}
                                >
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${achievement.color === "teal"
                                            ? "bg-teal-500 border-2 border-teal-400"
                                            : "bg-orange-500 border-2 border-orange-400"
                                            }`}
                                    >
                                        <achievement.icon className="text-white" size={32} />
                                    </motion.div>

                                    {/* Title */}
                                    <h3
                                        className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${darkMode ? "text-white" : "text-slate-900"
                                            }`}
                                    >
                                        {achievement.title}
                                    </h3>

                                    {/* Decorative Line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100px" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                                        className={`h-1 rounded-full mb-6 ${achievement.color === "teal" ? "bg-teal-500" : "bg-orange-500"
                                            }`}
                                    />

                                    {/* Description */}
                                    <p
                                        className={`text-base md:text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-700"}`}
                                    >
                                        {achievement.description}
                                    </p>

                                    {/* Animated Stats Bar */}
                                    <div className="mt-6 flex items-center gap-4">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: 0.5 + index * 0.1 }}
                                            className={`h-2 rounded-full flex-1 ${achievement.color === "teal" ? "bg-teal-500/20" : "bg-orange-500/20"
                                                }`}
                                        >
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "85%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.7 + index * 0.1 }}
                                                className={`h-full rounded-full ${achievement.color === "teal" ? "bg-teal-500" : "bg-orange-500"
                                                    }`}
                                            />
                                        </motion.div>
                                        <span
                                            className={`text-sm font-semibold ${achievement.color === "teal" ? "text-teal-500" : "text-orange-500"
                                                }`}
                                        >
                                            Verified
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`mt-20 rounded-3xl p-8 md:p-12 ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white shadow-xl"}`}
                >
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Certification Impact
                        </h2>
                        <p className={`text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Our certifications translate to tangible benefits
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Shield, value: "5+", label: "ISO Certifications", color: "teal" },
                            { icon: Award, value: "10+", label: "Industry Awards", color: "orange" },
                            { icon: TrendingUp, value: "100%", label: "Compliance Rate", color: "teal" },
                            { icon: CheckCircle, value: "99.9%", label: "Client Satisfaction", color: "orange" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className={`p-6 rounded-2xl text-center ${darkMode ? "bg-slate-900/50" : "bg-slate-50"}`}
                            >
                                <stat.icon
                                    className={`mx-auto mb-4 ${stat.color === "teal" ? "text-teal-500" : "text-orange-500"}`}
                                    size={40}
                                />
                                <div
                                    className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color === "teal" ? "text-teal-500" : "text-orange-500"
                                        }`}
                                >
                                    {stat.value}
                                </div>
                                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}