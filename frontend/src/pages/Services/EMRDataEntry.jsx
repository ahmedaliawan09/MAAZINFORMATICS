"use client"

import { motion } from "framer-motion"
import { Database, FileText, Clock, Shield, Zap, CheckCircle, BarChart, TrendingUp, Award } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function EMRDataEntry({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: Database, title: "Digital Solutions", desc: "Comprehensive EMR data entry" },
        { icon: Clock, title: "Reduced Delays", desc: "Faster consultation workflow" },
        { icon: FileText, title: "Accurate Records", desc: "Precise data management" },
        { icon: Shield, title: "HIPAA Compliant", desc: "Secure and confidential" },
        { icon: Zap, title: "Streamlined Process", desc: "Enhanced efficiency" },
        { icon: CheckCircle, title: "Quality Control", desc: "Verified data accuracy" },
    ]

    const benefits = [
        { icon: BarChart, title: "50% Time Saved", desc: "On data entry tasks" },
        { icon: TrendingUp, title: "99.9% Accuracy", desc: "Data entry precision" },
        { icon: Award, title: "Expert Team", desc: "Trained specialists" },
    ]

    const services = [
        "Patient Demographics Entry",
        "Clinical Notes Documentation",
        "Lab Results Recording",
        "Medication History Management",
        "Insurance Information Updates",
        "Appointment Scheduling Data",
        "Medical History Documentation",
        "Diagnosis Code Entry",
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
                {/* Top Section */}
                <div className="grid lg:grid-cols-2 gap-6 mb-16">
                    {/* Left - Title Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`rounded-3xl p-10 flex flex-col justify-center ${darkMode ? "bg-stone-800" : "bg-white"}`}
                    >
                        <Database className={`w-16 h-16 mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                        <h1 className={`text-4xl lg:text-5xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                            EMR Data Entry Coordination
                        </h1>
                        <p className={`text-lg ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                            Streamlining Healthcare Workflow
                        </p>
                    </motion.div>

                    {/* Right - Description Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`rounded-3xl p-10 flex items-center ${darkMode ? "bg-stone-800" : "bg-white"}`}
                    >
                        <p className={`text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                            We specialize in streamlining and enhancing workflow efficiency. With our comprehensive digital EMR data
                            entry solutions, we effectively address all back-end data entry tasks, resulting in significantly reduced
                            delays during consultations.
                        </p>
                    </motion.div>
                </div>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -4 }}
                            className={`p-6 rounded-2xl ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all`}
                        >
                            <feature.icon className={`w-10 h-10 mb-3 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Carousel */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Measurable Results
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                                    <div className={`p-10 rounded-2xl text-center ${darkMode ? "bg-stone-800" : "bg-white"} h-full`}>
                                        <benefit.icon
                                            className={`w-14 h-14 mx-auto mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                                        />
                                        <h3 className={`text-2xl font-bold mb-3 ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                                            {benefit.title}
                                        </h3>
                                        <p className={`text-base ${darkMode ? "text-stone-300" : "text-stone-600"}`}>{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {benefits.map((_, index) => (
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

                {/* Services Grid */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
                    <div className={`rounded-3xl p-10 ${darkMode ? "bg-stone-800" : "bg-white"}`}>
                        <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                            Our EMR Data Entry Services
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                    className={`flex items-center gap-3 p-4 rounded-xl ${darkMode ? "bg-stone-700" : "bg-stone-50"}`}
                                >
                                    <CheckCircle className={`w-6 h-6 shrink-0 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                    <span className={`${darkMode ? "text-stone-200" : "text-stone-800"}`}>{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className={`rounded-3xl p-10 text-center ${darkMode ? "bg-linear-to-br from-amber-600 to-amber-700" : "bg-linear-to-br from-amber-500 to-amber-600"}`}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Optimize Your EMR Workflow</h2>
                    <p className="text-white/90 text-lg mb-6">Let us handle your data entry so you can focus on patient care</p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Schedule a Consultation
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
