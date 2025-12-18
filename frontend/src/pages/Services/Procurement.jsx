"use client"

import { motion } from "framer-motion"
import { Package, Target, TrendingUp, Clock, Shield, CheckCircle, Truck, BarChart, Award } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"

export default function Procurement({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: Target, title: "Accuracy", desc: "Precise procurement management", stat: "99.8%" },
        { icon: Clock, title: "Time Framework", desc: "Delivered within timeline", stat: "On-Time" },
        { icon: TrendingUp, title: "Excellence", desc: "High-quality service standards", stat: "A+ Rated" },
        { icon: Package, title: "Supply Chain", desc: "Complete procurement solutions", stat: "Full-Service" },
        { icon: Shield, title: "Reliability", desc: "Dependable and consistent", stat: "Trusted" },
        { icon: CheckCircle, title: "Quality Assurance", desc: "Verified suppliers and products", stat: "Verified" },
    ]

    const services = [
        { icon: Truck, title: "Supply Chain Management", desc: "End-to-end logistics coordination and optimization" },
        { icon: Award, title: "Vendor Selection", desc: "Careful vetting and qualification of suppliers" },
        { icon: BarChart, title: "Cost Optimization", desc: "Strategic sourcing for maximum value" },
        { icon: Shield, title: "Quality Control", desc: "Rigorous inspection and verification" },
    ]

    const stats = [
        { value: "500+", label: "Projects Completed" },
        { value: "200+", label: "Trusted Suppliers" },
        { value: "99.5%", label: "On-Time Delivery" },
        { value: "25%", label: "Average Cost Savings" },
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
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`rounded-3xl p-10 mb-16 text-center ${darkMode ? "bg-stone-800" : "bg-white"}`}
                >
                    <Package className={`w-16 h-16 mx-auto mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                    <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Procurement Management
                    </h1>
                    <p className={`text-lg mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                        Your Work is Our Work
                    </p>
                    <p
                        className={`text-base leading-relaxed max-w-3xl mx-auto ${darkMode ? "text-stone-300" : "text-stone-600"}`}
                    >
                        Your Busyness Makes No-Difference to Your Business. Accuracy, Time Framework & Excellence are Our First
                        Priorities, So You Don't Need to Worry About it. We Are Here For You & We Do Things the Way We Do Our Work.
                    </p>
                </motion.div>

                {/* Dashboard Style Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -4 }}
                            className={`rounded-2xl p-6 ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all border-l-4 ${darkMode ? "border-amber-500" : "border-amber-600"}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <feature.icon className={`w-10 h-10 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                <span
                                    className={`text-xs font-bold px-3 py-1 rounded-full ${darkMode ? "bg-stone-700 text-amber-500" : "bg-stone-100 text-amber-600"}`}
                                >
                                    {feature.stat}
                                </span>
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Services Carousel */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Our Procurement Services
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((service, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-3">
                                    <div className={`p-10 rounded-2xl ${darkMode ? "bg-stone-800" : "bg-white"} h-full`}>
                                        <service.icon className={`w-14 h-14 mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-base ${darkMode ? "text-stone-300" : "text-stone-600"}`}>{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {services.map((_, index) => (
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

                {/* Stats Grid */}
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

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className={`rounded-3xl p-10 text-center ${darkMode ? "bg-linear-to-br from-amber-600 to-amber-700" : "bg-linear-to-br from-amber-500 to-amber-600"}`}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Optimize Your Procurement Process</h2>
                    <p className="text-white/90 text-lg mb-6">
                        Partner with us for reliable, efficient, and cost-effective procurement solutions
                    </p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Request a Quote
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
