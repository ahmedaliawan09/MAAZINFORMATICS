"use client"

import { motion } from "framer-motion"
import { Phone, Globe, Clock, Headphones, MessageSquare, BarChart, Users, Shield } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

export default function CallCenter({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: Phone, title: "24/7 Availability", desc: "Round-the-clock support for your customers" },
        { icon: Globe, title: "Multilingual Support", desc: "Services in multiple languages" },
        { icon: Headphones, title: "Professional Agents", desc: "Trained and experienced call handlers" },
        { icon: MessageSquare, title: "Inbound & Outbound", desc: "Complete call center solutions" },
        { icon: Clock, title: "Real-time Response", desc: "Immediate customer support" },
        { icon: BarChart, title: "Performance Analytics", desc: "Detailed call metrics and reports" },
    ]

    const industries = [
        { icon: Shield, title: "Healthcare", desc: "Medical appointments, patient support, billing inquiries" },
        { icon: Phone, title: "Telecommunications", desc: "Technical support, service activation, billing support" },
        { icon: Users, title: "General Customer Service", desc: "Product inquiries, order tracking, support tickets" },
        { icon: Globe, title: "IT & Technology", desc: "Help desk, technical troubleshooting, software support" },
    ]

    const stats = [
        { value: "50K+", label: "Calls Handled Monthly" },
        { value: "98%", label: "Customer Satisfaction" },
        { value: "15+", label: "Languages Supported" },
        { value: "24/7", label: "Availability" },
    ]

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        return () => emblaApi.off("select", onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className={`min-h-screen pt-20 pb-24 ${darkMode ? "bg-stone-900" : "bg-stone-50"}`}>
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Hero with Side Image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`rounded-3xl overflow-hidden mb-12 ${darkMode ? "bg-stone-800" : "bg-white"}`}
                >
                    <div className="grid lg:grid-cols-5 gap-0">
                        <div className="lg:col-span-3 p-10">
                            <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                Call Center Services
                            </h1>
                            <p className={`text-lg mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                                Your Customers Deserve A Warm Reception
                            </p>
                            <p className={`text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                                We Are Providing 24/7 International & Domestic Call Center Services in multiple fields such as
                                Healthcare, Medical Billing, General, Telecom, Information technology, and other Campaigns. Our
                                dedicated team ensures every customer interaction is handled with professionalism and care.
                            </p>
                        </div>
                        <div
                            className={`lg:col-span-2 min-h-62.5 ${darkMode ? "bg-stone-700" : "bg-stone-200"} flex items-center justify-center`}
                        >
                            <Phone className={`w-20 h-20 ${darkMode ? "text-stone-600" : "text-stone-300"}`} />
                        </div>
                    </div>
                </motion.div>

                {/* Horizontal Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ x: 4 }}
                            className={`flex items-start gap-4 p-6 rounded-2xl ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all`}
                        >
                            <div className={`p-3 rounded-xl ${darkMode ? "bg-stone-700" : "bg-stone-100"}`}>
                                <feature.icon className={`w-6 h-6 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-base font-bold mb-1 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Industries We Serve
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-3">
                                    <div className={`p-8 rounded-2xl ${darkMode ? "bg-stone-800" : "bg-white"} h-full`}>
                                        <industry.icon className={`w-12 h-12 mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                            {industry.title}
                                        </h3>
                                        <p className={`text-base ${darkMode ? "text-stone-300" : "text-stone-600"}`}>{industry.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {industries.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex
                                        ? darkMode
                                            ? "bg-amber-500 w-8"
                                            : "bg-amber-600 w-8"
                                        : darkMode
                                            ? "bg-stone-700"
                                            : "bg-stone-300"
                                    }`}
                                onClick={() => emblaApi?.scrollTo(index)}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className={`p-8 rounded-2xl text-center ${darkMode ? "bg-stone-800" : "bg-white"}`}
                            >
                                <div className={`text-5xl font-bold mb-2 ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                                    {stat.value}
                                </div>
                                <p className={`text-base ${darkMode ? "text-stone-300" : "text-stone-600"}`}>{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className={`rounded-3xl p-10 text-center ${darkMode ? "bg-linear-to-br from-amber-600 to-amber-700" : "bg-linear-to-br from-amber-500 to-amber-600"}`}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Elevate Your Customer Experience</h2>
                    <p className="text-white/90 text-lg mb-6">
                        Partner with us to deliver exceptional customer service around the clock
                    </p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Start Your Free Trial
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
