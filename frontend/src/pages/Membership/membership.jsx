"use client"

import { motion } from "framer-motion"
import { Building2, Users, Award, Globe, Briefcase, TrendingUp, Shield, Handshake, Target, Zap, Star, CheckCircle } from "lucide-react"
import pseb from "../../assets/images/pseb.png"
import pasha from "../../assets/images/pasha.png"
import scci from "../../assets/images/scci.png"

export default function Memberships({ darkMode }) {
    const memberships = [
        {
            icon: Building2,
            name: "P@SHA",
            fullName: "PAKISTAN IT INDUSTRY ASSOCIATION",
            description:
                "As an official corporate member of PASHA, Maaz Informatics champions innovation while upholding the highest standards of integrity and collaboration. Aligned with PASHA's vision, we push boundaries to deliver cutting-edge tech solutions that drive Pakistan's digital growth. Let's shape the future of tech—together, with trust, ambition, and a shared commitment to excellence.",
            image: pasha,
            color: "teal",
            benefits: ["Industry Recognition", "Networking Opportunities", "Policy Advocacy", "International Collaboration"],
        },
        {
            icon: Globe,
            name: "PSEB",
            fullName: "Pakistan Software Export Board",
            description:
                "Maaz Informatics and the Pakistan Software Export Board have established a collaborative alliance to leverage their combined innovation and market expertise. Enlisting with PSEB elevates your public image and credibility. As an affiliate of PSEB, we manage several internship programs to support talent. To promote the IT industry in Pakistan, we also offer international certifications, including ISO, to enhance your professional credentials.",
            image: pseb,
            color: "orange",
            benefits: ["Export Facilitation", "Training Programs", "ISO Certifications", "Talent Development"],
        },
        {
            icon: Briefcase,
            name: "SCCI",
            fullName: "Chamber of Commerce",
            description:
                "The Chamber of Commerce or Board of Trade, established by various business groups, aims to protect and promote the interests of specific business communities. Becoming a member of SCCI, Maaz Informatics have acheived significant brand exposure & high credibility in the domestic market.",
            image: scci,
            color: "teal",
            benefits: ["Business Networking", "Brand Credibility", "Market Access", "Trade Support"],
        },
    ]

    const membershipValues = [
        {
            icon: Shield,
            title: "Credibility",
            desc: "Enhanced reputation through prestigious associations",
            color: "teal",
        },
        {
            icon: Users,
            title: "Networking",
            desc: "Access to industry leaders and partners",
            color: "orange",
        },
        {
            icon: TrendingUp,
            title: "Growth",
            desc: "Opportunities for business expansion",
            color: "teal",
        },
        {
            icon: Handshake,
            title: "Collaboration",
            desc: "Strategic partnerships and alliances",
            color: "orange",
        },
    ]

    return (
        <div className="min-h-screen pt-32 pb-20" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section - Modern */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 relative"
                >
                    {/* Decorative elements */}
                    <div className="absolute -top-6 left-10 w-16 h-16 rounded-full bg-teal-500/5 blur-2xl" />
                    <div className="absolute -top-6 right-10 w-16 h-16 rounded-full bg-orange-500/5 blur-2xl" />

                    <div className="inline-block mb-6 relative group">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"
                        />

                    </div>

                    <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                        Industry <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-orange-500">Partnerships</span>
                    </h1>

                    <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        Proud members of leading industry associations driving innovation and excellence in Pakistan's tech ecosystem
                    </p>
                </motion.div>

                {/* Modern Membership Cards - Completely Redesigned Layout */}
                <div className="space-y-24 mb-32">
                    {memberships.map((membership, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
                            className={`relative group ${index % 2 === 0 ? "" : "lg:ml-auto"}`}
                            style={{ maxWidth: "min(100%, 1000px)" }}
                        >
                            {/* Background Glow */}
                            <div className={`absolute -inset-4 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                ${membership.color === "teal" ? "bg-teal-500" : "bg-orange-500"}`} />

                            <div className={`relative rounded-3xl overflow-hidden backdrop-blur-sm
                                ${darkMode
                                    ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-gray-700/30"
                                    : "bg-gradient-to-br from-white/95 to-slate-50/95 border border-slate-200/50 shadow-2xl"
                                }`}>

                                {/* Card Layout - Side by side on desktop, stacked on mobile */}
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left Side - Logo & Stats */}
                                    <div className={`lg:w-2/5 p-8 md:p-12 relative ${membership.color === "teal"
                                        ? "bg-gradient-to-br from-teal-500/5 via-teal-500/2 to-transparent"
                                        : "bg-gradient-to-br from-orange-500/5 via-orange-500/2 to-transparent"
                                        }`}>
                                        {/* Logo Container */}
                                        <div className="relative h-64 md:h-72 mb-8">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="relative w-full h-full flex items-center justify-center"
                                                >
                                                    <img
                                                        src={membership.image}
                                                        alt={membership.name}
                                                        className="w-auto h-auto max-w-full max-h-full object-contain"
                                                    />
                                                </motion.div>
                                            </div>

                                            {/* Floating Icon */}
                                            <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-2xl flex items-center justify-center
                                                ${membership.color === "teal"
                                                    ? "bg-gradient-to-br from-teal-500 to-teal-600"
                                                    : "bg-gradient-to-br from-orange-500 to-orange-600"
                                                } shadow-2xl`}>
                                                <membership.icon className="text-white" size={32} />
                                            </div>
                                        </div>

                                        {/* Association Details */}
                                        <div className="text-center">
                                            <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                                {membership.name}
                                            </h3>
                                            <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-slate-600"} mb-6`}>
                                                {membership.fullName}
                                            </p>


                                        </div>
                                    </div>

                                    {/* Right Side - Content & Benefits */}
                                    <div className="lg:w-3/5 p-8 md:p-12">
                                        {/* Description */}
                                        <div className="mb-10">
                                            <p className={`text-base md:text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                                {membership.description}
                                            </p>
                                        </div>

                                        {/* Benefits Section */}
                                        <div>
                                            <h4 className={`text-xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                                Membership Benefits
                                            </h4>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {membership.benefits.map((benefit, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ x: 20, opacity: 0 }}
                                                        whileInView={{ x: 0, opacity: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + idx * 0.1 }}
                                                        whileHover={{ x: 5 }}
                                                        className={`flex items-start gap-3 p-4 rounded-xl ${darkMode
                                                            ? "bg-slate-800/30 border border-gray-700/30"
                                                            : "bg-white/50 border border-slate-200/50"
                                                            }`}
                                                    >
                                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                                                            ${membership.color === "teal"
                                                                ? "bg-teal-500/10"
                                                                : "bg-orange-500/10"
                                                            }`}>
                                                            <CheckCircle className={membership.color === "teal" ? "text-teal-500" : "text-orange-500"} size={18} />
                                                        </div>
                                                        <span className={`font-medium ${darkMode ? "text-gray-300" : "text-slate-800"}`}>
                                                            {benefit}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section - Modern Grid */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-orange-500">Memberships</span> Matter
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                            The strategic value and tangible impact of our industry partnerships
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {membershipValues.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0, scale: 0.95 }}
                                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 * index }}
                                whileHover={{ y: -10 }}
                                className={`relative group rounded-2xl overflow-hidden
                                    ${darkMode
                                        ? "bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-gray-700/30"
                                        : "bg-gradient-to-b from-white to-slate-50 border border-slate-200/50 shadow-xl"
                                    }`}
                            >
                                {/* Animated Background */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                    ${value.color === "teal" ? "bg-teal-500/5" : "bg-orange-500/5"}`} />

                                <div className="relative p-8">
                                    {/* Icon with Glow */}
                                    <div className="relative mb-6">
                                        <div className={`absolute inset-0 w-16 h-16 rounded-xl blur-lg opacity-20
                                            ${value.color === "teal" ? "bg-teal-500" : "bg-orange-500"}`} />
                                        <div className={`relative w-16 h-16 rounded-xl flex items-center justify-center
                                            ${value.color === "teal"
                                                ? "bg-teal-500/10 border border-teal-500/20"
                                                : "bg-orange-500/10 border border-orange-500/20"
                                            }`}>
                                            <value.icon
                                                className={value.color === "teal" ? "text-teal-500" : "text-orange-500"}
                                                size={28}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                            {value.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                            {value.desc}
                                        </p>
                                    </div>

                                    {/* Progress Indicator */}
                                    <div className="mt-8">
                                        <div className={`h-1.5 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-slate-200"}`}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${85 + index * 5}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                                                className={`h-full ${value.color === "teal" ? "bg-teal-500" : "bg-orange-500"}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Banner */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className={`mt-20 rounded-2xl p-8 md:p-12 ${darkMode
                            ? "bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-gray-700/30"
                            : "bg-gradient-to-r from-white to-slate-50 border border-slate-200/50 shadow-lg"
                            }`}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Industry Events", value: "50+", color: "teal" },
                                { label: "Partner Companies", value: "1000+", color: "orange" },
                                { label: "Years Active", value: "8+", color: "teal" },
                                { label: "Global Reach", value: "25+", color: "orange" },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color === "teal" ? "text-teal-500" : "text-orange-500"}`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}