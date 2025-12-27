"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import {
    CheckCircle, Clock, Shield, TrendingUp, Users, Award, Zap, Globe,
    Phone, Code, Sparkles, ChevronRight, FileText, DollarSign, Cpu, Heart, BarChart3
} from "lucide-react"
import Navbar from "../../components/Navbar"

const iconMap = {
    CheckCircle, Clock, Shield, TrendingUp, Users, Award, Zap, Globe,
    Phone, Code, FileText, DollarSign, Cpu, Heart, Sparkles, BarChart3
}

export default function DynamicServicePage({ darkMode = false }) {
    const { slug } = useParams()
    const [service, setService] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/service/service/${slug}`)
                setService(res.data.service)
            } catch (err) {
                console.error(err)
                setService(null)
            } finally {
                setLoading(false)
            }
        }
        if (slug) fetchService()
    }, [slug])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
                <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-600"></div>
            </div>
        )
    }

    if (!service) {
        return (
            <div className={`min-h-screen pt-20 ${darkMode ? "bg-slate-950" : "bg-gray-50"}`}>
                <Navbar />
                <div className="max-w-7xl mx-auto px-6 py-32 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Service Not Found</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">This page has no content yet or does not exist.</p>
                </div>
            </div>
        )
    }

    const MainIcon = iconMap[service.icon_name] || FileText
    const primary = service.primary_color || "#3b82f6"
    const from = service.gradient_from || primary
    const to = service.gradient_to || "#8b5cf6"

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 overflow-hidden ${darkMode ? "bg-gradient-to-b from-slate-950 to-slate-900" : "bg-gradient-to-b from-white to-slate-50"}`}>
                <div className="fixed inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: primary }} />
                    <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: `linear-gradient(to right, ${from}, ${to})` }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    {/* Hero */}
                    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-32">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-10">
                            <Sparkles className="w-6 h-6" style={{ color: primary }} />
                            <span className="font-bold text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }}>
                                Premium Service
                            </span>
                        </motion.div>

                        <h1 className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}>
                            <span className="block">{service.hero_title || service.service_name}</span>
                            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }}>
                                {service.hero_subtitle || "Excellence Delivered"}
                            </span>
                        </h1>

                        <MainIcon className="w-32 h-32 mx-auto mb-12" style={{ color: primary }} />

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="px-12 py-6 text-xl font-bold text-white rounded-3xl shadow-2xl"
                            style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }}>
                            Get Started Now <ChevronRight className="inline w-6 h-6 ml-2" />
                        </motion.button>
                    </motion.section>

                    {/* ALL SECTIONS RENDERED HERE */}
                    {service.sections?.length > 0 ? service.sections.map((section, idx) => {
                        const IconComponent = iconMap[section.content?.[0]?.icon_name] || CheckCircle

                        // FEATURES
                        if (section.section_type === "features" && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-32">
                                    <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {section.title || "Our Features"}
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {section.content.map((feat, i) => {
                                            const FIcon = iconMap[feat.icon_name] || CheckCircle
                                            return (
                                                <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 rounded-3xl border ${darkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200"} shadow-2xl`}>
                                                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8" style={{ backgroundColor: `${primary}15` }}>
                                                        <FIcon className="w-12 h-12" style={{ color: primary }} />
                                                    </div>
                                                    <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{feat.title}</h3>
                                                    <p className={`text-lg ${darkMode ? "text-slate-300" : "text-slate-600"} mb-6`}>{feat.description}</p>
                                                    {feat.highlight && (
                                                        <span className="inline-block px-6 py-3 rounded-full text-lg font-bold" style={{ backgroundColor: `${primary}20`, color: primary }}>
                                                            {feat.highlight}
                                                        </span>
                                                    )}
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </motion.section>
                            )
                        }

                        // STATS / BENEFITS
                        if ((section.section_type === "stats" || section.section_type === "benefits") && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-32">
                                    <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {section.title || "Our Impact"}
                                    </h2>
                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
                                        {section.content.map((stat, i) => (
                                            <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
                                                <div className="text-6xl font-bold mb-4 text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }}>
                                                    {stat.value}
                                                </div>
                                                <p className={`text-2xl font-semibold mb-2 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{stat.label}</p>
                                                {stat.trend && <p className="text-lg text-gray-500">{stat.trend}</p>}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>
                            )
                        }

                        // PROCESS
                        if (section.section_type === "process" && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-32">
                                    <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {section.title || "How It Works"}
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {section.content.map((step, i) => (
                                            <div key={i} className={`p-8 rounded-3xl text-center ${darkMode ? "bg-slate-800/50" : "bg-gray-50"}`}>
                                                <div className={`text-5xl font-bold mb-4 opacity-30 ${darkMode ? "text-white" : "text-gray-400"}`}>
                                                    {step.step_number || `0${i + 1}`}
                                                </div>
                                                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{step.title}</h3>
                                                <p className={`${darkMode ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
                                                {step.highlight && (
                                                    <span className="inline-block mt-6 px-6 py-3 rounded-full text-lg font-bold" style={{ backgroundColor: `${primary}20`, color: primary }}>
                                                        {step.highlight}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.section>
                            )
                        }

                        // INDUSTRIES / TECHNOLOGIES
                        if ((section.section_type === "industries" || section.section_type === "technologies") && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-32">
                                    <h2 className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {section.title || (section.section_type === "technologies" ? "Our Tech Stack" : "Industries We Serve")}
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {section.content.map((item, i) => {
                                            const ItemIcon = iconMap[item.icon_name] || Globe
                                            return (
                                                <motion.div key={i} whileHover={{ y: -10 }} className={`p-10 rounded-3xl border ${darkMode ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200"} shadow-2xl`}>
                                                    <ItemIcon className="w-16 h-16 mb-8" style={{ color: primary }} />
                                                    <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{item.title}</h3>
                                                    <p className={`text-lg ${darkMode ? "text-slate-300" : "text-slate-600"} mb-6`}>{item.description}</p>
                                                    {item.highlight && (
                                                        <span className="inline-block px-6 py-3 rounded-full text-lg font-bold" style={{ backgroundColor: `${primary}20`, color: primary }}>
                                                            {item.highlight}
                                                        </span>
                                                    )}
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </motion.section>
                            )
                        }

                        return null
                    }) : (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
                            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                This Service Page is Empty
                            </h2>
                            <p className={`text-xl ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                Content will appear here once added from the admin dashboard.
                            </p>
                        </motion.section>
                    )}

                    {/* Final CTA */}
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="text-center py-20">
                        <h2 className={`text-5xl font-bold mb-10 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Ready to Get Started?
                        </h2>
                        <button className="px-16 py-7 text-2xl font-bold text-white rounded-3xl shadow-2xl" style={{ backgroundImage: `linear-gradient(to right, ${from}, ${to})` }}>
                            Contact Us Today
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}