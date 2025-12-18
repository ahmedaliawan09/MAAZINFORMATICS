"use client"

import { motion } from "framer-motion"
import { Award, FileCheck, Users, Clock, Building, CheckCircle, Shield } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function Credentialing({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: Award, title: "Provider Enrollment", desc: "Complete enrollment services" },
        { icon: FileCheck, title: "Document Management", desc: "Organized credential tracking" },
        { icon: Users, title: "Insurance Coordination", desc: "Liaison with insurance companies" },
        { icon: Building, title: "Hospital Privileges", desc: "Facility credentialing support" },
        { icon: Clock, title: "Time Saving", desc: "We handle the entire process" },
        { icon: CheckCircle, title: "Complete Solution", desc: "End-to-end credentialing package" },
    ]

    const process = [
        { step: "01", title: "Application Submission", desc: "Initial credentialing application filed" },
        { step: "02", title: "Verification", desc: "Credential verification and validation" },
        { step: "03", title: "Enrollment", desc: "Provider enrollment with insurance panels" },
        { step: "04", title: "Approval", desc: "Final approval and contract setup" },
    ]

    const benefits = [
        { icon: Clock, title: "60% Faster", desc: "Average processing time reduction" },
        { icon: CheckCircle, title: "98% Success", desc: "Application approval rate" },
        { icon: Shield, title: "100% Secure", desc: "Document protection guaranteed" },
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className={`text-4xl lg:text-5xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Credentialing Services
                    </h1>
                    <p className={`text-lg ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                        Professional Provider Enrollment Solutions
                    </p>
                </motion.div>

                {/* Main Content Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`rounded-3xl p-10 mb-16 ${darkMode ? "bg-stone-800" : "bg-white"}`}
                >
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        <div
                            className={`rounded-2xl h-48 lg:h-64 ${darkMode ? "bg-stone-700" : "bg-stone-100"} flex items-center justify-center`}
                        >
                            <Award className={`w-20 h-20 ${darkMode ? "text-stone-600" : "text-stone-300"}`} />
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                Complete Credentialing Package
                            </h2>
                            <p className={`text-base leading-relaxed mb-4 ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                                We Provide You The Best Credentialing & Provider Enrollment Services. We Provide a Complete Solution And
                                Package For this type of work and services. We Work on the Your Behalf and Coordinate with Insurance
                                Companies, Hospitals and Other Organizations to Save Your Time and Efforts.
                            </p>
                            <div className="flex flex-wrap gap-3 mt-6">
                                {["CAQH Registration", "Insurance Enrollment", "Hospital Privileges", "Re-credentialing"].map(
                                    (item, index) => (
                                        <span
                                            key={index}
                                            className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? "bg-stone-700 text-amber-500" : "bg-stone-100 text-amber-600"}`}
                                        >
                                            {item}
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features in Timeline Style */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className={`flex gap-4 p-6 rounded-2xl ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all`}
                        >
                            <div className={`p-3 rounded-xl h-fit ${darkMode ? "bg-stone-700" : "bg-stone-100"}`}>
                                <feature.icon className={`w-7 h-7 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            </div>
                            <div>
                                <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Process Timeline */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Our Credentialing Process
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {process.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-3">
                                    <div className={`p-8 rounded-2xl ${darkMode ? "bg-stone-800" : "bg-white"} text-center h-full`}>
                                        <div
                                            className={`text-5xl font-bold mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"} opacity-60`}
                                        >
                                            {item.step}
                                        </div>
                                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                            {item.title}
                                        </h3>
                                        <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {process.map((_, index) => (
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

                {/* Benefits Grid */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
                    <div className="grid md:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className={`p-8 rounded-2xl text-center ${darkMode ? "bg-stone-800" : "bg-white"}`}
                            >
                                <benefit.icon className={`w-12 h-12 mx-auto mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                <h3 className={`text-3xl font-bold mb-2 ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                                    {benefit.title}
                                </h3>
                                <p className={`text-base ${darkMode ? "text-stone-300" : "text-stone-600"}`}>{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className={`rounded-3xl p-10 text-center ${darkMode ? "bg-linear-to-br from-amber-600 to-amber-700" : "bg-linear-to-br from-amber-500 to-amber-600"}`}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Credentialed?</h2>
                    <p className="text-white/90 text-lg mb-6">
                        Let us handle the complex credentialing process while you focus on patient care
                    </p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Get Started Now
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
