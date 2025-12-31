
"use client"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { motion } from "framer-motion"
import {
    CheckCircle, Clock, Shield, TrendingUp, Users, Award, Zap, Globe,
    Phone, Code, Sparkles, ChevronRight, FileText, DollarSign, Cpu, Heart,
    BarChart3, HelpCircle, Image as ImageIcon, ExternalLink, ArrowRight,
    Play, MessageCircle, Mail, Calendar, Target, Layers, Grid, Split
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

    const renderSectionContent = (section, index) => {
        const { section_type, content, layout_style } = section
        const LayoutIcon = layoutIcons[layout_style] || Grid

        // Ensure content is an array
        const sectionContent = Array.isArray(content) ? content : []

        switch (section_type) {
            case "features":
                if (sectionContent.length === 0) return null

                const gridClass = layout_style === "card-grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : layout_style === "split"
                        ? "grid grid-cols-1 lg:grid-cols-2 gap-8"
                        : "grid grid-cols-1 md:grid-cols-2 gap-6"

                return (
                    <div className={gridClass}>
                        {sectionContent.map((feat, i) => {
                            const FIcon = iconMap[feat.icon_name] || CheckCircle
                            return (
                                <motion.div
                                    key={feat.id || i}
                                    whileHover={{ y: -4 }}
                                    className={`group relative overflow-hidden rounded-2xl border ${darkMode ? "bg-slate-900/40 border-slate-700" : "bg-white border-slate-100"} p-6 shadow-lg`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${primary}14` }}>
                                            <FIcon className="w-6 h-6" style={{ color: primary }} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <h3 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{feat.title || "Untitled Feature"}</h3>
                                                {feat.highlight && (
                                                    <span className="text-xs font-medium px-2 py-1 rounded-md" style={{ background: `${primary}16`, color: primary }}>
                                                        {feat.highlight}
                                                    </span>
                                                )}
                                            </div>
                                            {feat.description && (
                                                <p className={`text-sm mt-2 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{feat.description}</p>
                                            )}

                                            {feat.image && (
                                                <div className="mt-4 rounded-lg overflow-hidden">
                                                    <div
                                                        className="h-40 bg-cover bg-center rounded-lg"
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
                    ? "grid grid-cols-2 md:grid-cols-4 gap-4"
                    : "grid grid-cols-1 md:grid-cols-3 gap-6"

                return (
                    <div className={statGridClass}>
                        {sectionContent.map((stat, i) => {
                            const SIcon = iconMap[stat.icon_name] || TrendingUp
                            return (
                                <div
                                    key={stat.id || i}
                                    className={`p-6 rounded-xl flex flex-col items-center text-center ${darkMode ? "bg-slate-900/30 border border-slate-700" : "bg-white border border-slate-100"}`}
                                >
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: `${primary}12` }}>
                                        <SIcon className="w-8 h-8" style={{ color: primary }} />
                                    </div>
                                    <div className="text-3xl font-extrabold mb-2" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, WebkitBackgroundClip: "text", color: "transparent" }}>
                                        {stat.value || "N/A"}
                                    </div>
                                    <div className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{stat.label || "Stat Label"}</div>
                                    {stat.trend && (
                                        <div className="text-sm mt-2 text-slate-400">
                                            {stat.trend.includes('+') ? '▲ ' : stat.trend.includes('-') ? '▼ ' : ''}
                                            {stat.trend}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )

            case "process":
                if (sectionContent.length === 0) return null

                return (
                    <div className="relative">
                        {layout_style === "split" ? (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {sectionContent.map((step, i) => {
                                    const PIcon = iconMap[step.icon_name] || Clock
                                    return (
                                        <div key={step.id || i} className="flex gap-4 items-start">
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold mb-2" style={{ background: `linear-gradient(135deg, ${from}, ${to})`, color: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
                                                    {step.step_number || (i + 1).toString().padStart(2, '0')}
                                                </div>
                                                <div className="w-px h-16 bg-linear-to-b from-transparent via-slate-300 to-transparent" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${primary}12` }}>
                                                        <PIcon className="w-4 h-4" style={{ color: primary }} />
                                                    </div>
                                                    <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{step.title || "Process Step"}</h4>
                                                </div>
                                                {step.description && (
                                                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
                                                )}

                                                {step.image && (
                                                    <div className="mt-4 rounded-lg overflow-hidden">
                                                        <div
                                                            className="h-32 bg-cover bg-center rounded-lg"
                                                            style={{ backgroundImage: getBackgroundImage(step.image) }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {sectionContent.map((step, i) => {
                                    const PIcon = iconMap[step.icon_name] || Clock
                                    return (
                                        <div key={step.id || i} className="flex gap-6 items-start">
                                            <div className="flex flex-col items-center">
                                                <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold" style={{ background: `linear-gradient(135deg, ${from}, ${to})`, color: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>
                                                    {step.step_number || (i + 1).toString().padStart(2, '0')}
                                                </div>
                                                {i < sectionContent.length - 1 && (
                                                    <div className="w-px h-full bg-linear-to-b from-transparent via-slate-300 to-transparent mt-4" />
                                                )}
                                            </div>
                                            <div className={`flex-1 p-6 rounded-xl border ${darkMode ? "bg-slate-900/30 border-slate-700" : "bg-white border-slate-100"}`}>
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${primary}12` }}>
                                                            <PIcon className="w-5 h-5" style={{ color: primary }} />
                                                        </div>
                                                        <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{step.title || "Process Step"}</h4>
                                                    </div>
                                                    {step.stats && (
                                                        <div className="text-sm font-medium px-3 py-1 rounded-md" style={{ background: `${primary}16`, color: primary }}>
                                                            {step.stats}
                                                        </div>
                                                    )}
                                                </div>
                                                {step.description && (
                                                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
                                                )}

                                                {step.image && (
                                                    <div className="mt-4 rounded-lg overflow-hidden">
                                                        <div
                                                            className="h-48 bg-cover bg-center rounded-lg"
                                                            style={{ backgroundImage: getBackgroundImage(step.image) }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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
                    <div className={isHorizontalScroll ? "overflow-x-auto pb-4" : ""}>
                        <div className={isHorizontalScroll
                            ? "flex gap-4 min-w-max px-2"
                            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
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
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className={`block ${isHorizontalScroll ? "shrink-0 w-48" : ""} rounded-xl border p-4 ${darkMode ? "bg-slate-900/30 border-slate-700 hover:border-slate-600" : "bg-white border-slate-100 hover:border-slate-200"} transition-all group`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-12 h-12 rounded-lg flex items-center justify-center"
                                                style={{
                                                    background: `linear-gradient(135deg, ${itemColors.from}20, ${itemColors.to}20)`,
                                                    border: `1px solid ${itemColors.from}30`
                                                }}
                                            >
                                                <ItemIcon className="w-6 h-6" style={{ color: itemColors.from }} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className={`font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}>{item.title || "Item Title"}</h4>
                                                {item.description && (
                                                    <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>{item.description}</p>
                                                )}
                                            </div>
                                            {item.link && (
                                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                                            )}
                                        </div>
                                        {item.stats && (
                                            <div className="mt-3 text-xs font-medium px-2 py-1 rounded-md inline-block" style={{ background: `${itemColors.from}16`, color: itemColors.from }}>
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
                    <div className="space-y-3">
                        {sectionContent.map((faq, i) => (
                            <div
                                key={faq.id || i}
                                className={`border rounded-xl overflow-hidden ${darkMode ? "border-slate-700" : "border-slate-100"}`}
                            >
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                    className={`w-full p-4 text-left flex items-center justify-between ${darkMode ? "bg-slate-900/30 hover:bg-slate-800/30" : "bg-white hover:bg-slate-50"}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <HelpCircle className="w-5 h-5" style={{ color: primary }} />
                                        <span className={`font-medium ${darkMode ? "text-white" : "text-slate-900"}`}>{faq.question || "Question"}</span>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 transition-transform ${openFaqIndex === i ? "rotate-90" : ""}`} />
                                </button>
                                {openFaqIndex === i && (
                                    <div className={`p-4 pt-2 ${darkMode ? "bg-slate-900/20" : "bg-slate-50"}`}>
                                        <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{faq.answer || "Answer"}</p>
                                    </div>
                                )}
                            </div>
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

        const LayoutIcon = layoutIcons[section.layout_style] || Grid
        const hasBackground = section.background_image

        return (
            <motion.section
                key={section.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative rounded-2xl overflow-hidden mb-12 ${hasBackground ? "py-16" : "py-8"}`}
                style={hasBackground ? {
                    backgroundImage: getBackgroundImage(section.background_image),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : {}}
            >
                {hasBackground && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                )}

                <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            {section.title && (
                                <div className="flex items-center gap-2 mb-2">
                                    <LayoutIcon className="w-5 h-5" style={{ color: primary }} />
                                    <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: `${primary}12`, color: primary }}>
                                        {section.layout_style || 'default'}
                                    </span>
                                </div>
                            )}
                            {section.title && (
                                <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    {section.title}
                                </h2>
                            )}
                            {section.subtitle && (
                                <p className={`text-lg mt-2 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                    {section.subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Section Content */}
                    <div className="mb-8">
                        {renderSectionContent(section, index)}
                    </div>

                    {/* Section CTAs */}
                    {(section.cta_text || section.secondary_cta_text) && (
                        <div className="flex flex-wrap gap-3 mt-8">
                            {section.cta_text && (
                                <motion.a
                                    href={section.cta_link || "#"}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 rounded-lg font-semibold text-white shadow-lg"
                                    style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
                                >
                                    {section.cta_text}
                                    <ArrowRight className="inline w-4 h-4 ml-2" />
                                </motion.a>
                            )}
                            {section.secondary_cta_text && (
                                <motion.a
                                    href={section.secondary_cta_link || "#"}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-lg font-semibold border ${darkMode ? "border-slate-700 text-slate-200 hover:bg-slate-800/30" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}
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
            <div className={`min-h-screen pt-20 ${darkMode ? "bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-slate-900 to-slate-950" : "bg-linear-to-b from-white to-slate-50"}`}>
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    {service.hero_background_image && (
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: getBackgroundImage(service.hero_background_image) }}
                        >
                            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                        </div>
                    )}

                    <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-20 md:py-28">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col lg:flex-row gap-10 items-center"
                        >
                            {/* Hero Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ background: `${primary}18`, color: primary }}>
                                        <MainIcon className="w-5 h-5" />
                                        {service.short_description || "Premium Service"}
                                    </div>
                                </div>

                                <h1 className={`text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    {service.hero_title || service.service_name}
                                </h1>

                                {service.hero_subtitle && (
                                    <p className={`text-xl md:text-2xl mb-8 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                        {service.hero_subtitle}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-4">
                                    <motion.a
                                        href={service.hero_cta_link || "#contact"}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 rounded-xl font-semibold text-white shadow-xl hover:shadow-2xl transition-shadow"
                                        style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
                                    >
                                        {service.hero_cta_text || "Get Started"}
                                        <ChevronRight className="inline w-5 h-5 ml-2" />
                                    </motion.a>

                                    <button className={`px-6 py-4 rounded-xl font-semibold border ${darkMode ? "border-slate-700 text-slate-200 hover:bg-slate-800/30" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
                                        Request Pricing
                                    </button>
                                </div>
                            </div>

                            {/* Hero Image */}
                            {service.hero_image && (
                                <div className="lg:w-5/12">
                                    <div className="relative">
                                        <div className="absolute -inset-4 rounded-3xl" style={{
                                            background: `linear-gradient(120deg, ${from}22, ${to}10)`,
                                            filter: "blur(24px)",
                                            opacity: 0.8
                                        }} />
                                        <div className={`relative rounded-2xl overflow-hidden border-2 ${darkMode ? "border-slate-700" : "border-slate-100"} shadow-2xl`}>
                                            <div
                                                className="h-64 md:h-96 bg-cover bg-center"
                                                style={{ backgroundImage: getBackgroundImage(service.hero_image) }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Quick Stats - Get stats from all sections */}
                        {sections.some(s => s.section_type === "stats" || s.section_type === "benefits") && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-16"
                            >
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {sections
                                        .filter(s => s && (s.section_type === "stats" || s.section_type === "benefits"))
                                        .flatMap(s => Array.isArray(s.content) ? s.content : [])
                                        .slice(0, 4)
                                        .map((stat, i) => (
                                            <div key={i} className={`p-4 rounded-xl ${darkMode ? "bg-slate-900/40 border border-slate-700" : "bg-white/60 border border-slate-100"} backdrop-blur-sm`}>
                                                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})`, WebkitBackgroundClip: "text", color: "transparent" }}>
                                                    {stat.value || "N/A"}
                                                </div>
                                                <div className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{stat.label || "Stat"}</div>
                                            </div>
                                        ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
                    {sections.length > 0 ? (
                        sections.map((section, index) => renderSection(section, index))
                    ) : (
                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <div className={`max-w-md mx-auto p-8 rounded-2xl ${darkMode ? "bg-slate-900/30" : "bg-white/60"} backdrop-blur-sm border ${darkMode ? "border-slate-700" : "border-slate-100"}`}>
                                <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: primary }} />
                                <h2 className={`text-2xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    This Service Page is Empty
                                </h2>
                                <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                                    Content will appear here once added from the admin dashboard.
                                </p>
                            </div>
                        </motion.section>
                    )}

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 mb-28"
                    >
                        <div className={`rounded-3xl p-8 md:p-12 ${darkMode ? "bg-linear-to-r from-slate-900/60 to-slate-800/30 border border-slate-700" : "bg-linear-to-r from-white/80 to-slate-50/80 border border-slate-100"} shadow-2xl backdrop-blur-sm`}>
                            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                <div className="lg:w-2/3">
                                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        Ready to start your premium journey?
                                    </h3>
                                    <p className={`text-lg ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                                        Schedule a quick discovery call and get a custom plan tailored to your needs.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <motion.a
                                        href="#contact"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 rounded-xl font-semibold text-white text-center shadow-lg hover:shadow-xl transition-shadow"
                                        style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
                                    >
                                        Let's Talk
                                    </motion.a>
                                    <motion.a
                                        href={`/contact`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`px-6 py-4 rounded-xl font-semibold border text-center ${darkMode ? "border-slate-700 text-slate-200 hover:bg-slate-800/30" : "border-slate-200 text-slate-700 hover:bg-slate-50"}`}
                                    >
                                        Learn More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Sticky Contact Button */}
                <div className="fixed left-6 bottom-6 z-50">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`rounded-full shadow-2xl ${darkMode ? "bg-slate-900/80" : "bg-white/90"} backdrop-blur-sm border ${darkMode ? "border-slate-700" : "border-slate-200"}`}
                    >
                        <a
                            href="#contact"
                            className="flex items-center gap-3 px-6 py-3"
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}>
                                <MessageCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold">Start a project</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </>
    )
}