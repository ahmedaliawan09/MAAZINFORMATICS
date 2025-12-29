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
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
            </div>
        )
    }

    if (!service) {
        return (
            <div className={`min-h-screen pt-20 ${darkMode ? "bg-slate-950" : "bg-gray-50"}`}>
                <Navbar />
                <div className="max-w-4xl mx-auto px-6 py-28 text-center">
                    <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">This page has no content yet or does not exist.</p>
                </div>
            </div>
        )
    }

    const MainIcon = iconMap[service.icon_name] || FileText
    const primary = service.primary_color || "#3b82f6"
    const from = service.gradient_from || primary
    const to = service.gradient_to || "#8b5cf6"

    // derive hero stats strictly from backend:
    const heroStats = (service.hero_stats && service.hero_stats.length)
        ? service.hero_stats
        : (service.sections?.find(s => s.section_type === "stats")?.content ?? [])

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 ${darkMode ? "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 to-slate-950" : "bg-gradient-to-b from-white to-slate-50"}`} style={{ ["--g-from"]: from, ["--g-to"]: to }}>
                {/* Layered decorative blobs */}
                <div className="pointer-events-none fixed inset-0 -z-10">
                    <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full blur-[72px]" style={{ background: `radial-gradient(circle at 20% 30%, ${from}, transparent 30%), radial-gradient(circle at 80% 70%, ${to}, transparent 30%)`, opacity: 0.14 }} />
                    <svg className="absolute right-8 bottom-8 w-72 h-72 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="g1" x1="0" x2="1">
                                <stop offset="0" stopColor={from} stopOpacity="0.9" />
                                <stop offset="1" stopColor={to} stopOpacity="0.7" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#g1)" d="M43.6,-53.7C56,-43.2,66.2,-30.1,67.7,-15.8C69.1,-1.5,61.8,13.1,52.9,26.6C44,40.1,33.4,52.6,19.6,60.4C5.8,68.1,-11.3,71.1,-25.9,66.6C-40.5,62.1,-52.6,50.1,-59.3,35.7C-66,21.3,-67.2,4.5,-62.9,-10.7C-58.6,-25.9,-48.9,-39.6,-36.2,-50.1C-23.6,-60.7,-8.8,-68.1,5.7,-74C20.1,-79.9,40.9,-84.3,43.6,-53.7Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-12">
                    {/* Elevated compact hero */}
                    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className={`backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border ${darkMode ? "bg-slate-900/40 border-slate-700" : "bg-white/60 border-slate-100"} shadow-lg flex flex-col md:flex-row gap-6 items-center`}>
                        <div className="flex-1">
                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${primary}18`, color: primary }}>
                                    <Sparkles className="w-4 h-4" />
                                    Premium
                                </div>
                                {service.category && <div className="text-xs text-slate-400">{service.category}</div>}
                            </div>

                            <h1 className={`mt-4 text-2xl md:text-4xl leading-tight font-extrabold ${darkMode ? "text-white" : "text-slate-900"}`}>
                                {service.hero_title || service.service_name}
                            </h1>
                            {service.hero_subtitle && <p className={`mt-3 text-sm md:text-base ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{service.hero_subtitle}</p>}

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <motion.button whileHover={{ scale: 1.03 }} className="px-5 py-3 rounded-lg font-semibold text-white shadow-md" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}>
                                    Get Started <ChevronRight className="inline w-4 h-4 ml-2" />
                                </motion.button>

                                <button className={`px-4 py-2 rounded-lg bg-transparent border text-sm ${darkMode ? "border-slate-700 text-slate-200" : "border-slate-200 text-slate-700"}`}>
                                    Request Pricing
                                </button>

                                <div className="ml-auto flex items-center gap-4">
                                    {service.eta && <div className="text-xs text-slate-400">Avg. delivery</div>}
                                    {service.eta && <div className={`text-sm font-semibold px-2 py-1 rounded-md`} style={{ background: `${primary}12`, color: primary }}>{service.eta}</div>}
                                </div>
                            </div>

                            {/* hero stats: only from backend (hero_stats or first stats section) */}
                            {heroStats?.length > 0 && (
                                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {heroStats.map((s, i) => (
                                        <div key={i} className={`p-3 rounded-lg flex flex-col ${darkMode ? "bg-slate-800/40 border border-slate-700" : "bg-white border border-slate-100"}`}>
                                            {s.label && <div className="text-sm text-slate-400">{s.label}</div>}
                                            <div className="text-lg font-bold" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, WebkitBackgroundClip: "text", color: "transparent" }}>
                                                {s.value}
                                            </div>
                                            {s.subtext && <div className="text-xs mt-1 text-slate-400">{s.subtext}</div>}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* 3D-like image placeholder */}
                        <div className="w-full md:w-72 h-44 md:h-56 relative flex items-center justify-center">
                            <div className="absolute -inset-1 rounded-xl" style={{ background: `linear-gradient(120deg, ${from}22, ${to}10)`, filter: "blur(18px)", opacity: 0.9 }} />
                            <div className={`relative w-full h-full rounded-xl overflow-hidden border ${darkMode ? "border-slate-700 bg-slate-800/30" : "border-slate-100 bg-white/50"} flex items-center justify-center`} style={{ transform: "perspective(600px) rotateY(-6deg) rotateX(2deg)" }}>
                                {/* Placeholder - replace with actual <img /> */}
                                <div className="w-11/12 h-11/12 rounded-lg border-2 border-dashed opacity-40 flex items-center justify-center">
                                    <span className="text-sm">Hero image placeholder</span>
                                </div>
                                {/* subtle floating badge */}
                                {service.badge && <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold" style={{ background: `${primary}20`, color: primary }}>{service.badge}</div>}
                            </div>
                        </div>
                    </motion.section>

                    {/* Sections: features, stats, process, tech */}
                    {service.sections?.length > 0 ? service.sections.map((section, idx) => {
                        // FEATURES - gradient stripe cards
                        if (section.section_type === "features" && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{section.title || "Features"}</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {section.content.map((feat, i) => {
                                            const FIcon = iconMap[feat.icon_name] || CheckCircle
                                            return (
                                                <motion.div key={i} whileHover={{ y: -6 }} className={`group relative overflow-hidden rounded-xl border ${darkMode ? "bg-slate-900/30 border-slate-700" : "bg-white border-slate-100"} p-4 shadow-md flex items-start gap-4`}>
                                                    <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: `linear-gradient(180deg, ${from}, ${to})` }} />
                                                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: `${primary}14` }}>
                                                        <FIcon className="w-6 h-6" style={{ color: primary }} />
                                                    </div>
                                                    <div>
                                                        <h3 className={`text-sm font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{feat.title}</h3>
                                                        <p className={`text-xs mt-1 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{feat.description}</p>
                                                    </div>
                                                    {feat.highlight && <div className="ml-auto text-xs font-medium px-2 py-1 rounded-md" style={{ background: `${primary}16`, color: primary }}>{feat.highlight}</div>}
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </motion.section>
                            )
                        }

                        // STATS / BENEFITS - premium tiles
                        if ((section.section_type === "stats" || section.section_type === "benefits") && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{section.title || "Impact"}</h2>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {section.content.map((stat, i) => (
                                            <div key={i} className={`p-4 rounded-xl flex flex-col items-start gap-2 ${darkMode ? "bg-slate-900/30 border border-slate-700" : "bg-white border border-slate-100"}`}>
                                                {stat.label && <div className="text-sm text-slate-400">{stat.label}</div>}
                                                <div className="text-2xl font-extrabold" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, WebkitBackgroundClip: "text", color: "transparent" }}>{stat.value}</div>
                                                {stat.trend && <div className="text-xs text-slate-400">{stat.trend}</div>}
                                            </div>
                                        ))}
                                    </div>
                                </motion.section>
                            )
                        }

                        // PROCESS - refined vertical timeline
                        if (section.section_type === "process" && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{section.title || "Process"}</h2>
                                    <div className="space-y-3">
                                        {section.content.map((step, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-9 h-9 rounded-full flex items-center justify-center font-semibold" style={{ background: `linear-gradient(90deg, ${from}, ${to})`, color: "#fff", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>{step.step_number || i + 1}</div>
                                                    {i < section.content.length - 1 && <div className="w-px h-full bg-slate-200 mt-2" />}
                                                </div>
                                                <div className={`flex-1 p-4 rounded-xl border ${darkMode ? "bg-slate-800/30 border-slate-700" : "bg-white border-slate-100"}`}>
                                                    <div className="flex items-center justify-between">
                                                        <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{step.title}</h4>
                                                        {step.highlight && <div className="text-xs font-medium px-2 py-1 rounded-md" style={{ background: `${primary}16`, color: primary }}>{step.highlight}</div>}
                                                    </div>
                                                    <p className={`text-sm mt-2 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.section>
                            )
                        }

                        // INDUSTRIES / TECHNOLOGIES - horizontal scroll chips
                        if ((section.section_type === "industries" || section.section_type === "technologies") && section.content?.length > 0) {
                            return (
                                <motion.section key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                                    <h2 className={`text-xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>{section.title || (section.section_type === "technologies" ? "Tech Stack" : "Industries")}</h2>
                                    <div className="flex gap-3 overflow-x-auto pb-2">
                                        {section.content.map((item, i) => {
                                            const ItemIcon = iconMap[item.icon_name] || Globe
                                            return (
                                                <div key={i} className={`flex-shrink-0 flex items-center gap-3 px-3 py-2 rounded-full border ${darkMode ? "bg-slate-900/30 border-slate-700" : "bg-white border-slate-100"}`}>
                                                    <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ background: `${primary}12` }}>
                                                        <ItemIcon className="w-4 h-4" style={{ color: primary }} />
                                                    </div>
                                                    <div className="text-sm font-medium">{item.title}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </motion.section>
                            )
                        }

                        return null
                    }) : (
                        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-10">
                            <h2 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>This Service Page is Empty</h2>
                            <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Content will appear here once added from the admin dashboard.</p>
                        </motion.section>
                    )}

                    {/* Premium CTA */}
                    <div className="mt-8 mb-28">
                        <div className={`rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 ${darkMode ? "bg-gradient-to-r from-slate-900/60 to-slate-800/30 border border-slate-700" : "bg-white/70 border border-slate-100"} shadow-xl backdrop-blur`}>
                            <div>
                                <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>Start your premium journey</h3>
                                <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>Schedule a quick discovery call and get a custom plan.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, color: "#fff" }}>Let's Talk</button>
                                <button className={`px-3 py-2 rounded-lg border text-sm ${darkMode ? "border-slate-700 text-slate-200" : "border-slate-200 text-slate-700"}`}>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Elevated sticky contact pill */}
                <div className="fixed left-6 mb-6 bottom-6 z-50">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`rounded-full shadow-2xl overflow-hidden ${darkMode ? "bg-slate-900/80" : "bg-white/90"} border`} style={{ borderColor: darkMode ? "rgba(148,163,184,0.06)" : "rgba(2,6,23,0.04)" }}>
                        <div className="flex items-center gap-3 px-4 py-2 pl-3">
                            <button className="px-3 py-1 rounded-md text-sm font-semibold" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, color: "#fff" }}>Let's Talk</button>
                            <div className="text-sm font-semibold">Start a project</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}