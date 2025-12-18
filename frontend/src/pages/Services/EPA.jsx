"use client"

import { motion } from "framer-motion"
import { FileCheck, Pill, Activity, Clock, CheckCircle, Shield, TrendingUp, Users } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function EPA({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: Pill, title: "Medication Approval", desc: "Prescription authorization support" },
        { icon: Activity, title: "Imaging Services", desc: "Diagnostic test approvals" },
        { icon: FileCheck, title: "Provider Coordination", desc: "Work with healthcare providers" },
        { icon: Shield, title: "Insurance Liaison", desc: "Insurance company communication" },
        { icon: Clock, title: "Quick Processing", desc: "Fast authorization turnaround" },
        { icon: CheckCircle, title: "Excellent Results", desc: "High approval success rate" },
    ]

    const benefits = [
        { icon: TrendingUp, title: "95% Approval Rate", desc: "Most authorizations get approved" },
        { icon: Clock, title: "24-48 Hour Turnaround", desc: "Fast processing times" },
        { icon: Users, title: "Dedicated Team", desc: "Expert authorization specialists" },
    ]

    const authTypes = [
        "Prescription Medications",
        "Medical Procedures",
        "Diagnostic Imaging (MRI, CT, PET)",
        "Specialist Consultations",
        "Durable Medical Equipment",
        "Home Health Services",
        "Physical Therapy",
        "Mental Health Services",
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
                {/* Compact Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                    <div className={`rounded-3xl p-10 ${darkMode ? "bg-stone-800" : "bg-white"}`}>
                        <div className="flex items-start gap-6">
                            <div className={`p-4 rounded-2xl ${darkMode ? "bg-stone-700" : "bg-stone-100"}`}>
                                <FileCheck className={`w-12 h-12 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            </div>
                            <div className="flex-1">
                                <h1 className={`text-4xl lg:text-5xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                    Electronic Prior Authorization
                                </h1>
                                <p className={`text-lg mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                                    Streamlined Healthcare Approvals
                                </p>
                                <p className={`text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                                    We Will Help Your Patients To Get Approval for Their Medication, Imaging And Other Services From
                                    Provider, Insurance & Pharmacy Ends. So You Just Outsource Your Work to Us and We will Show You The
                                    Excellent Working Results.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Staggered Feature Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.03 }}
                            className={`p-6 rounded-2xl ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all ${index % 2 === 1 ? "md:mt-6" : ""}`}
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <feature.icon className={`w-8 h-8 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                <h3 className={`text-lg font-bold ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                    {feature.title}
                                </h3>
                            </div>
                            <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Benefits Carousel */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Why Choose Our EPA Services
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                                    <div className={`p-10 rounded-2xl text-center ${darkMode ? "bg-stone-800" : "bg-white"} h-full`}>
                                        <benefit.icon
                                            className={`w-14 h-14 mx-auto mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                                        />
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
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

                {/* Authorization Types */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
                    <div className={`rounded-3xl p-10 ${darkMode ? "bg-stone-800" : "bg-white"}`}>
                        <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                            Authorization Types We Handle
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {authTypes.map((type, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.7 + index * 0.05 }}
                                    className={`flex items-center gap-3 p-4 rounded-xl ${darkMode ? "bg-stone-700" : "bg-stone-50"}`}
                                >
                                    <CheckCircle className={`w-6 h-6 shrink-0 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                    <span className={`${darkMode ? "text-stone-200" : "text-stone-800"}`}>{type}</span>
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
                    <h2 className="text-3xl font-bold text-white mb-4">Simplify Your Authorization Process</h2>
                    <p className="text-white/90 text-lg mb-6">
                        Let our experts handle prior authorizations while you focus on patient care
                    </p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
