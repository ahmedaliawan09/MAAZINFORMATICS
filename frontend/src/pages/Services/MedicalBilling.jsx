"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Clock, Shield, TrendingUp, Users, DollarSign, Award, Zap } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function MedicalBilling({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: CheckCircle, title: "Claims Processing", desc: "Efficient and accurate claims submission" },
        { icon: Clock, title: "Fast Turnaround", desc: "Quick processing and payment collection" },
        { icon: Shield, title: "Compliance", desc: "HIPAA compliant and secure" },
        { icon: TrendingUp, title: "Revenue Optimization", desc: "Maximize your practice revenue" },
        { icon: Users, title: "Expert Team", desc: "Highly experienced billing specialists" },
        { icon: FileText, title: "Detailed Reports", desc: "Comprehensive analytics and insights" },
    ]

    const benefits = [
        { icon: DollarSign, title: "Increased Revenue", value: "35%", desc: "Average revenue increase" },
        { icon: Clock, title: "Faster Payments", value: "50%", desc: "Reduction in payment time" },
        { icon: Award, title: "Clean Claims", value: "98%", desc: "First-pass acceptance rate" },
        { icon: Zap, title: "Efficiency Boost", value: "60%", desc: "Time saved on billing tasks" },
    ]

    const services = [
        "Insurance Verification & Authorization",
        "Medical Coding (ICD-10, CPT, HCPCS)",
        "Claims Submission & Follow-up",
        "Payment Posting & Reconciliation",
        "Denial Management & Appeals",
        "Patient Billing & Collections",
        "Credentialing Services",
        "Revenue Cycle Management",
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
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className={`text-4xl lg:text-5xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Medical Billing & Coding
                    </h1>
                    <p className={`text-lg ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold mb-6`}>
                        Superior Services For Busy Professionals
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {/* Large Featured Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className={`lg:col-span-2 lg:row-span-2 rounded-3xl p-8 ${darkMode ? "bg-stone-800" : "bg-white"}`}
                    >
                        <div className="h-full flex flex-col justify-between">
                            <div>
                                <FileText className={`w-16 h-16 mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                    Professional Medical Billing Services
                                </h2>
                                <p className={`text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                                    We Have Highly Experienced & Specialized Team With a Strong Background Of Medical Billing. Now Your
                                    Insurance or Personal Payments And Claims Won't Be Unpayable & Won't Be Denied. Our comprehensive
                                    medical billing services ensure maximum revenue collection while maintaining compliance with all
                                    healthcare regulations.
                                </p>
                            </div>
                            {/* Image Placeholder */}
                            <div
                                className={`mt-6 rounded-2xl h-48 ${darkMode ? "bg-stone-700" : "bg-stone-100"} flex items-center justify-center`}
                            >
                                <FileText className={`w-16 h-16 ${darkMode ? "text-stone-600" : "text-stone-300"}`} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Feature Cards */}
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * (index + 2) }}
                            whileHover={{ scale: 1.05 }}
                            className={`rounded-2xl p-6 ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all`}
                        >
                            <feature.icon className={`w-10 h-10 mb-3 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Why Choose Our Services
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-3">
                                    <div className={`p-8 rounded-2xl text-center ${darkMode ? "bg-stone-800" : "bg-white"}`}>
                                        <benefit.icon
                                            className={`w-12 h-12 mx-auto mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                                        />
                                        <div className={`text-4xl font-bold mb-2 ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
                                            {benefit.value}
                                        </div>
                                        <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                            {benefit.title}
                                        </h3>
                                        <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{benefit.desc}</p>
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

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
                    <div className={`rounded-3xl p-10 ${darkMode ? "bg-stone-800" : "bg-white"}`}>
                        <h2 className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                            Our Complete Service Suite
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className={`rounded-3xl p-10 text-center ${darkMode ? "bg-linear-to-br from-amber-600 to-amber-700" : "bg-linear-to-br from-amber-500 to-amber-600"}`}
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Transform Your Revenue Cycle</h2>
                    <p className="text-white/90 text-lg mb-6">
                        Let our experts handle your medical billing while you focus on patient care
                    </p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Get Started Today
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
