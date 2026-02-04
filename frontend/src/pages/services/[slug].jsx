
"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import {
    CheckCircle, Clock, Shield, TrendingUp, Users, Award, Zap, Globe,
    Phone, Code, Sparkles, ChevronRight, FileText, DollarSign, Cpu, Heart,
    BarChart3, HelpCircle, Image as ImageIcon, ExternalLink, ArrowRight,
    Play, MessageCircle, Mail, Calendar, Target, Layers, Grid, Split, Star,
    Rocket, ChevronDown
} from "lucide-react"
import Navbar from "../../components/Navbar"

const iconMap = {
    CheckCircle, Clock, Shield, TrendingUp, Users, Award, Zap, Globe,
    Phone, Code, FileText, DollarSign, Cpu, Heart, Sparkles, BarChart3,
    HelpCircle, ImageIcon, ExternalLink, ArrowRight, Play, MessageCircle,
    Mail, Calendar, Target, Layers, Grid, Split
}

const layoutIcons = {
    default: Grid,
    centered: Target,
    split: Split,
    "full-width": Layers,
    "card-grid": Grid
}

export default function DynamicServicePage({ darkMode = false }) {
    const { slug } = useParams()
    const [service, setService] = useState(null)
    const [loading, setLoading] = useState(true)
    const [openFaqIndex, setOpenFaqIndex] = useState(null)

    useEffect(() => {
        const fetchService = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/service/service/${slug}`)
                console.log("Fetched service data:", res.data) // Debug log

                // Check if data exists and has the expected structure
                if (res.data && res.data.service) {
                    setService(res.data.service)
                } else {
                    console.error("Invalid service data structure:", res.data)
                    setService(null)
                }
            } catch (err) {
                console.error("Error fetching service:", err)
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
                    <p className="text-lg text-gray-600 dark:text-gray-400">This service page has no content yet or does not exist.</p>
                </div>
            </div>
        )
    }

    const MainIcon = iconMap[service.icon_name] || FileText
    const primary = service.primary_color || "#3b82f6"
    const from = service.gradient_from || primary
    const to = service.gradient_to || "#8b5cf6"

    const getBackgroundImage = (publicId) => {
        if (!publicId || typeof publicId !== 'string') return null
        // Handle both full URLs and Cloudinary public IDs
        if (publicId.startsWith('http')) {
            return `url(${publicId})`
        }
        return `url(https://res.cloudinary.com/dwpv5zulp/image/upload/${publicId})`
    }

    const renderSectionContent = (section) => {
        const { section_type, content, layout_style } = section

        // Ensure content is an array
        const sectionContent = Array.isArray(content) ? content : []

        switch (section_type) {
            case "features":
                if (sectionContent.length === 0) return null

                const gridClass = layout_style === "card-grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    : layout_style === "split"
                        ? "grid grid-cols-1 lg:grid-cols-2 gap-5"
                        : "grid grid-cols-1 md:grid-cols-2 gap-4"

                return (
                    <div className={gridClass}>
                        {sectionContent.map((feat, i) => {
                            const FIcon = iconMap[feat.icon_name] || CheckCircle
                            return (
                                <motion.div
                                    key={feat.id || i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className={`group relative overflow-hidden rounded-xl border ${darkMode ? "bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50" : "bg-gradient-to-br from-white to-slate-50/50 border-slate-200/50"} p-5 shadow-md hover:shadow-xl transition-all duration-300`}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5" style={{ background: `radial-gradient(circle, ${primary}, transparent)` }} />
                                    
                                    <div className="relative flex items-start gap-3">
                                        <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm" style={{ background: `linear-gradient(135deg, ${primary}20, ${primary}10)` }}>
                                            <FIcon className="w-5 h-5" style={{ color: primary }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <h3 className={`text-base font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{feat.title || "Untitled Feature"}</h3>
                                                {feat.highlight && (
                                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md whitespace-nowrap" style={{ background: `${primary}20`, color: primary }}>
                                                        {feat.highlight}
                                                    </span>
                                                )}
                                            </div>
                                            {feat.description && (
                                                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{feat.description}</p>
                                            )}

                                            {feat.image && (
                                                <div className="mt-3 rounded-lg overflow-hidden">
                                                    <div
                                                        className="h-32 bg-cover bg-center rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                                                        style={{ backgroundImage: getBackgroundImage(feat.image) }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                )

            case "stats":
            case "benefits":
                if (sectionContent.length === 0) return null

                const statGridClass = layout_style === "centered"
                    ? "grid grid-cols-2 md:grid-cols-4 gap-3"
                    : "grid grid-cols-1 md:grid-cols-3 gap-4"

                return (
                    <div className={statGridClass}>
                        {sectionContent.map((stat, i) => {
                            const SIcon = iconMap[stat.icon_name] || TrendingUp
                            return (
                                <motion.div
                                    key={stat.id || i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className={`relative p-5 rounded-xl flex flex-col items-center text-center overflow-hidden ${darkMode ? "bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50" : "bg-gradient-to-br from-white to-slate-50 border border-slate-200/50"} shadow-md hover:shadow-lg transition-all`}
                                >
                                    <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at top right, ${primary}, transparent)` }} />
                                    
                                    <div className="relative w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: `linear-gradient(135deg, ${primary}25, ${primary}10)` }}>
                                        <SIcon className="w-6 h-6" style={{ color: primary }} />
                                    </div>
                                    <div className="text-3xl font-black mb-1" style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                        {stat.value || "N/A"}
                                    </div>
                                    <div className={`text-sm font-semibold ${darkMode ? "text-slate-200" : "text-slate-800"}`}>{stat.label || "Stat Label"}</div>
                                    {stat.trend && (
                                        <div className="text-xs mt-2 font-medium px-2 py-0.5 rounded-full" style={{ background: `${primary}15`, color: primary }}>
                                            {stat.trend.includes('+') ? '↑ ' : stat.trend.includes('-') ? '↓ ' : ''}
                                            {stat.trend}
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}
                    </div>
                )

            case "process":
                if (sectionContent.length === 0) return null

                return (
                    <div className="relative">
                        {layout_style === "split" ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                {sectionContent.map((step, i) => {
                                    const PIcon = iconMap[step.icon_name] || Clock
                                    return (
                                        <motion.div
                                            key={step.id || i}
                                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-3 items-start"
                                        >
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-white shadow-md" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
                                                    {step.step_number || (i + 1).toString().padStart(2, '0')}
                                                </div>
                                                {i < sectionContent.length - 1 && (
                                                    <div className="w-0.5 h-12 mt-2" style={{ background: `linear-gradient(to bottom, ${primary}40, transparent)` }} />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: `${primary}15` }}>
                                                        <PIcon className="w-4 h-4" style={{ color: primary }} />
                                                    </div>
                                                    <h4 className={`text-base font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{step.title || "Process Step"}</h4>
                                                </div>
                                                {step.description && (
                                                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
                                                )}

                                                {step.image && (
                                                    <div className="mt-3 rounded-lg overflow-hidden">
                                                        <div
                                                            className="h-28 bg-cover bg-center rounded-lg"
                                                            style={{ backgroundImage: getBackgroundImage(step.image) }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {sectionContent.map((step, i) => {
                                    const PIcon = iconMap[step.icon_name] || Clock
                                    return (
                                        <motion.div
                                            key={step.id || i}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-4 items-start"
                                        >
                                            <div className="flex flex-col items-center shrink-0">
                                                <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white shadow-lg" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
                                                    {step.step_number || (i + 1).toString().padStart(2, '0')}
                                                </div>
                                                {i < sectionContent.length - 1 && (
                                                    <div className="w-0.5 flex-1 mt-3" style={{ background: `linear-gradient(to bottom, ${primary}50, ${primary}10)` }} />
                                                )}
                                            </div>
                                            <div className={`flex-1 p-4 rounded-xl border ${darkMode ? "bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50" : "bg-gradient-to-br from-white to-slate-50 border-slate-200/50"} shadow-md`}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${primary}15` }}>
                                                            <PIcon className="w-4 h-4" style={{ color: primary }} />
                                                        </div>
                                                        <h4 className={`text-base font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>{step.title || "Process Step"}</h4>
                                                    </div>
                                                    {step.stats && (
                                                        <div className="text-xs font-semibold px-2 py-1 rounded-md" style={{ background: `${primary}20`, color: primary }}>
                                                            {step.stats}
                                                        </div>
                                                    )}
                                                </div>
                                                {step.description && (
                                                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
                                                )}

                                                {step.image && (
                                                    <div className="mt-3 rounded-lg overflow-hidden">
                                                        <div
                                                            className="h-36 bg-cover bg-center rounded-lg"
                                                            style={{ backgroundImage: getBackgroundImage(step.image) }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )

            case "industries":
            case "technologies":
                if (sectionContent.length === 0) return null

                const isHorizontalScroll = layout_style === "full-width"

                return (
                    <div className={isHorizontalScroll ? "overflow-x-auto pb-3 -mx-6 px-6" : ""}>
                        <div className={isHorizontalScroll
                            ? "flex gap-3 min-w-max"
                            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                        }>
                            {sectionContent.map((item, i) => {
                                const ItemIcon = iconMap[item.icon_name] || Globe
                                const itemColors = item.color_from && item.color_to
                                    ? { from: item.color_from, to: item.color_to }
                                    : { from, to }

                                return (
                                    <motion.a
                                        key={item.id || i}
                                        href={item.link || undefined}
                                        target={item.link ? "_blank" : undefined}
                                        rel={item.link ? "noopener noreferrer" : undefined}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ y: -4, scale: 1.03 }}
                                        className={`block ${isHorizontalScroll ? "shrink-0 w-44" : ""} rounded-lg border p-3 ${darkMode ? "bg-gradient-to-br from-slate-800/40 to-slate-900/40 border-slate-700/50 hover:border-slate-600" : "bg-gradient-to-br from-white to-slate-50 border-slate-200/50 hover:border-slate-300"} transition-all group shadow-sm hover:shadow-md`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <div
                                                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                                                style={{
                                                    background: `linear-gradient(135deg, ${itemColors.from}25, ${itemColors.to}15)`,
                                                    border: `1px solid ${itemColors.from}30`
                                                }}
                                            >
                                                <ItemIcon className="w-5 h-5" style={{ color: itemColors.from }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className={`font-bold text-sm truncate ${darkMode ? "text-white" : "text-slate-900"}`}>{item.title || "Item Title"}</h4>
                                                {item.description && (
                                                    <p className={`text-xs mt-0.5 line-clamp-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{item.description}</p>
                                                )}
                                            </div>
                                            {item.link && (
                                                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors shrink-0" />
                                            )}
                                        </div>
                                        {item.stats && (
                                            <div className="mt-2 text-xs font-semibold px-2 py-0.5 rounded-md inline-block" style={{ background: `${itemColors.from}20`, color: itemColors.from }}>
                                                {item.stats}
                                            </div>
                                        )}
                                    </motion.a>
                                )
                            })}
                        </div>
                    </div>
                )

            case "faq":
                if (sectionContent.length === 0) return null

                return (
                    <div className="space-y-2">
                        {sectionContent.map((faq, i) => (
                            <motion.div
                                key={faq.id || i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`border rounded-lg overflow-hidden ${darkMode ? "border-slate-700/50" : "border-slate-200/50"} shadow-sm`}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className={`w-full p-4 text-left flex items-center justify-between ${darkMode ? "bg-slate-800/30 hover:bg-slate-800/50" : "bg-white hover:bg-slate-50"} transition-colors`}
                                >
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${primary}15` }}>
                                            <HelpCircle className="w-4 h-4" style={{ color: primary }} />
                                        </div>
                                        <span className={`font-semibold text-sm ${darkMode ? "text-white" : "text-slate-900"}`}>{faq.question || "Question"}</span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform shrink-0 ${openFaqIndex === i ? "rotate-180" : ""} ${darkMode ? "text-slate-400" : "text-slate-500"}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={`overflow-hidden ${darkMode ? "bg-slate-900/20" : "bg-slate-50"}`}
                                        >
                                            <div className="p-4 pt-2">
                                                <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{faq.answer || "Answer"}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                )

            default:
                return (
                    <div className="text-center py-8">
                        <p className={`${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                            Unsupported section type: {section_type}
                        </p>
                    </div>
                )
        }
    }

    const renderSection = (section, index) => {
        if (!section) return null

        const hasBackground = section.background_image

        return (
            <motion.section
                key={section.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-xl overflow-hidden mb-8 ${hasBackground ? "py-12" : "py-6"}`}
                style={hasBackground ? {
                    backgroundImage: getBackgroundImage(section.background_image),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : {}}
            >
                {hasBackground && (
                    <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-[2px]" />
                )}

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    {section.title && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-1 h-6 rounded-full" style={{ background: `linear-gradient(to bottom, ${from}, ${to})` }} />
                                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: primary }}>
                                    {section.layout_style || 'Section'}
                                </span>
                            </div>
                            <h2 className={`text-2xl md:text-3xl font-black ${darkMode || hasBackground ? "text-white" : "text-slate-900"}`}>
                                {section.title}
                            </h2>
                            {section.subtitle && (
                                <p className={`text-base mt-2 ${darkMode || hasBackground ? "text-slate-200" : "text-slate-600"}`}>
                                    {section.subtitle}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Section Content */}
                    <div className="mb-6">
                        {renderSectionContent(section)}
                    </div>

                    {/* Section CTAs */}
                    {(section.cta_text || section.secondary_cta_text) && (
                        <div className="flex flex-wrap gap-3 mt-6">
                            {section.cta_text && (
                                <motion.a
                                    href={section.cta_link || "#"}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2.5 rounded-lg font-bold text-white text-sm shadow-lg hover:shadow-xl transition-shadow"
                                    style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                                >
                                    {section.cta_text}
                                    <ArrowRight className="inline w-4 h-4 ml-1.5" />
                                </motion.a>
                            )}
                            {section.secondary_cta_text && (
                                <motion.a
                                    href={section.secondary_cta_link || "#"}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-2.5 rounded-lg font-bold text-sm border ${darkMode || hasBackground ? "border-slate-600 text-slate-100 hover:bg-slate-800/50" : "border-slate-300 text-slate-700 hover:bg-slate-100"} transition-colors`}
                                >
                                    {section.secondary_cta_text}
                                </motion.a>
                            )}
                        </div>
                    )}
                </div>
            </motion.section>
        )
    }

    // Ensure sections is an array
    const sections = Array.isArray(service.sections) ? service.sections : []

    return (
        <>
            <Navbar />
            <div className={`min-h-screen pt-20 ${darkMode ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}>
                {/* Hero Section - Compact & Modern */}
                <div className="relative overflow-hidden">
                    {service.hero_background_image && (
                        <>
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: getBackgroundImage(service.hero_background_image) }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]" />
                        </>
                    )}

                    <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16 md:py-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid lg:grid-cols-2 gap-8 items-center"
                        >
                            {/* Hero Content */}
                            <div className="space-y-5">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm"
                                    style={{ background: `${primary}20`, color: primary, border: `1px solid ${primary}30` }}
                                >
                                    <MainIcon className="w-4 h-4" />
                                    {service.short_description || "Premium Service"}
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className={`text-4xl md:text-5xl lg:text-6xl leading-tight font-black ${darkMode || service.hero_background_image ? "text-white" : "text-slate-900"}`}
                                >
                                    {service.hero_title || service.service_name}
                                </motion.h1>

                                {service.hero_subtitle && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className={`text-lg md:text-xl ${darkMode || service.hero_background_image ? "text-slate-200" : "text-slate-600"}`}
                                    >
                                        {service.hero_subtitle}
                                    </motion.p>
                                )}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-wrap gap-3 pt-2"
                                >
                                    <motion.a
                                        href={service.hero_cta_link || "#contact"}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-7 py-3 rounded-lg font-bold text-white shadow-xl hover:shadow-2xl transition-all"
                                        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                                    >
                                        {service.hero_cta_text || "Get Started"}
                                        <Rocket className="inline w-4 h-4 ml-2" />
                                    </motion.a>

                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-6 py-3 rounded-lg font-bold border backdrop-blur-sm ${darkMode || service.hero_background_image ? "border-slate-600 text-white hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-100"} transition-all`}
                                    >
                                        Request Pricing
                                    </motion.button>
                                </motion.div>
                            </div>

                            {/* Hero Image */}
                            {service.hero_image && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className="absolute -inset-3 rounded-2xl opacity-60 blur-2xl" style={{
                                        background: `linear-gradient(135deg, ${from}40, ${to}40)`
                                    }} />
                                    <div className={`relative rounded-xl overflow-hidden border-2 ${darkMode ? "border-slate-700/50" : "border-slate-200/50"} shadow-2xl`}>
                                        <div
                                            className="h-56 md:h-80 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                                            style={{ backgroundImage: getBackgroundImage(service.hero_image) }}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Quick Stats - Compact Version */}
                        {sections.some(s => s.section_type === "stats" || s.section_type === "benefits") && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {sections
                                        .filter(s => s && (s.section_type === "stats" || s.section_type === "benefits"))
                                        .flatMap(s => Array.isArray(s.content) ? s.content : [])
                                        .slice(0, 4)
                                        .map((stat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.7 + i * 0.1 }}
                                                className={`p-4 rounded-lg ${darkMode || service.hero_background_image ? "bg-slate-900/60 border border-slate-700/50" : "bg-white/80 border border-slate-200/50"} backdrop-blur-md shadow-md`}
                                            >
                                                <div className="text-2xl md:text-3xl font-black mb-1" style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                                    {stat.value || "N/A"}
                                                </div>
                                                <div className={`text-xs font-semibold ${darkMode || service.hero_background_image ? "text-slate-300" : "text-slate-600"}`}>{stat.label || "Stat"}</div>
                                            </motion.div>
                                        ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
                    {sections.length > 0 ? (
                        sections.map((section, index) => renderSection(section, index))
                    ) : (
                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className={`max-w-md mx-auto p-8 rounded-xl ${darkMode ? "bg-slate-900/40 border border-slate-700/50" : "bg-white/80 border border-slate-200/50"} backdrop-blur-sm shadow-lg`}>
                                <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: primary }} />
                                <h2 className={`text-2xl font-black mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    This Service Page is Empty
                                </h2>
                                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                    Content will appear here once added from the admin dashboard.
                                </p>
                            </div>
                        </motion.section>
                    )}

                    {/* Final CTA - Compact & Modern */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 mb-20"
                    >
                        <div className={`relative rounded-2xl p-8 md:p-10 overflow-hidden ${darkMode ? "bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50" : "bg-gradient-to-br from-white to-slate-50 border border-slate-200/50"} shadow-2xl`}>
                            <div className="absolute top-0 right-0 w-64 h-64 opacity-10" style={{ background: `radial-gradient(circle, ${primary}, transparent)` }} />
                            
                            <div className="relative grid lg:grid-cols-3 gap-6 items-center">
                                <div className="lg:col-span-2">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Star className="w-5 h-5" style={{ color: primary }} />
                                        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: primary }}>
                                            Ready to Transform?
                                        </span>
                                    </div>
                                    <h3 className={`text-2xl md:text-3xl font-black mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        Start Your Premium Journey Today
                                    </h3>
                                    <p className={`text-base ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                        Schedule a discovery call and get a custom plan tailored to your needs.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-6 py-3 rounded-lg font-bold text-white text-center shadow-lg hover:shadow-xl transition-all"
                                        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                                    >
                                        Let's Talk
                                        <MessageCircle className="inline w-4 h-4 ml-2" />
                                    </motion.a>
                                    <motion.a
                                        href={`/contact`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`px-6 py-3 rounded-lg font-bold border text-center ${darkMode ? "border-slate-700 text-slate-200 hover:bg-slate-800/50" : "border-slate-300 text-slate-700 hover:bg-slate-100"} transition-all`}
                                    >
                                        Learn More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                  
            </div>
        </>
    )
}