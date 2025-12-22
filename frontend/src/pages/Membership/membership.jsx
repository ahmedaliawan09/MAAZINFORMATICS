"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, Globe, Briefcase, CheckCircle, ChevronRight } from "lucide-react"
import pseb from "../../assets/images/pseb.png"
import pasha from "../../assets/images/pasha.png"
import scci from "../../assets/images/scci.png"
import Navbar from "../../components/Navbar"
export default function Memberships({ darkMode }) {
    const memberships = [
        {
            icon: Building2,
            name: "P@SHA",
            fullName: "Pakistan IT Industry Association",
            description: "As an official corporate member of PASHA, Maaz Informatics champions innovation while upholding the highest standards of integrity and collaboration.",
            image: pasha,
            color: "teal",
            benefits: ["Industry Recognition", "Networking Opportunities", "Policy Advocacy", "International Collaboration"],
        },
        {
            icon: Globe,
            name: "PSEB",
            fullName: "Pakistan Software Export Board",
            description: "Maaz Informatics and the Pakistan Software Export Board have established a collaborative alliance to leverage their combined innovation and market expertise.",
            image: pseb,
            color: "orange",
            benefits: ["Export Facilitation", "Training Programs", "ISO Certifications", "Talent Development"],
        },
        {
            icon: Briefcase,
            name: "SCCI",
            fullName: "Chamber of Commerce",
            description: "The Chamber of Commerce aims to protect and promote the interests of business communities. We've achieved significant brand exposure through this membership.",
            image: scci,
            color: "teal",
            benefits: ["Business Networking", "Brand Credibility", "Market Access", "Trade Support"],
        },
    ]

    const values = [
        {
            icon: Award,
            title: "Industry Recognition",
            desc: "Enhanced credibility through prestigious association memberships",
            color: "teal",
        },
        {
            icon: Users,
            title: "Strategic Networking",
            desc: "Access to industry leaders and potential partners",
            color: "orange",
        },
        {
            icon: Briefcase,
            title: "Business Growth",
            desc: "Opportunities for expansion and collaboration",
            color: "teal",
        },
        {
            icon: Globe,
            title: "Global Standards",
            desc: "Adherence to international best practices",
            color: "orange",
        },
    ]

    return (
        <>
            <Navbar />
            <div className="min-h-screen py-20" style={{ backgroundColor: darkMode ? "#111827" : "#ffffff" }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-100">
                                <div className="w-2 h-2 rounded-full bg-teal-500" />
                                <span className="text-sm font-medium text-slate-700">
                                    INDUSTRY AFFILIATIONS
                                </span>
                            </div>

                            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Strategic
                                <span className="block text-slate-800 mt-2">Partnerships</span>
                            </h1>

                            <p className={`text-lg text-slate-600 max-w-2xl mx-auto ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                Proud members of leading industry associations driving innovation and excellence in Pakistan's technology sector
                            </p>
                        </motion.div>
                    </div>

                    {/* Memberships Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {memberships.map((membership, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`relative rounded-2xl overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} shadow-sm hover:shadow-md transition-all duration-300`}
                            >
                                {/* Logo Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex items-center justify-center p-8"
                                    >
                                        <img
                                            src={membership.image}
                                            alt={membership.name}
                                            className="h-32 w-auto object-contain"
                                        />
                                    </motion.div>

                                    {/* Icon Badge */}
                                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl ${membership.color === "teal" ? "bg-teal-500" : "bg-orange-500"} flex items-center justify-center shadow-lg`}>
                                        <membership.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                            {membership.name}
                                        </h3>
                                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"} mb-4`}>
                                            {membership.fullName}
                                        </p>
                                    </div>

                                    <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                        {membership.description}
                                    </p>

                                    {/* Benefits */}
                                    <div className="space-y-2">
                                        <h4 className={`text-sm font-semibold mb-3 ${darkMode ? "text-gray-300" : "text-slate-800"}`}>
                                            Key Benefits:
                                        </h4>
                                        {membership.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle className={`w-4 h-4 ${membership.color === "teal" ? "text-teal-500" : "text-orange-500"}`} />
                                                <span className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                                    {benefit}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Value Proposition */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className={`text-3xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Strategic Value
                            </h2>
                            <p className={`text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                How our memberships benefit our clients and operations
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`rounded-xl p-6 ${darkMode ? "bg-gray-800" : "bg-gray-50"} border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                                >
                                    <div className={`inline-flex w-12 h-12 rounded-lg ${value.color === "teal" ? "bg-teal-100" : "bg-orange-100"} items-center justify-center mb-4`}>
                                        <value.icon className={`w-6 h-6 ${value.color === "teal" ? "text-teal-600" : "text-orange-600"}`} />
                                    </div>
                                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {value.title}
                                    </h3>
                                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        {value.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`rounded-2xl p-8 ${darkMode ? "bg-gradient-to-br from-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-50 to-white"} border ${darkMode ? "border-gray-700" : "border-gray-200"} shadow-sm`}
                    >
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            {[
                                { label: "Industry Events", value: "50+", color: "teal" },
                                { label: "Partner Companies", value: "1000+", color: "orange" },
                                { label: "Years Active", value: "8+", color: "teal" },
                                { label: "Global Reach", value: "25+", color: "orange" },
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <div className={`text-3xl font-bold mb-2 ${stat.color === "teal" ? "text-teal-600" : "text-orange-600"}`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <p className={`text-lg mb-6 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                            Interested in learning more about our industry partnerships?
                        </p>
                        <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${darkMode ? "bg-teal-600 hover:bg-teal-700" : "bg-teal-500 hover:bg-teal-600"} text-white font-medium transition-colors duration-300`}>
                            Contact Our Team
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}