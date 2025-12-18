"use client"

import { motion } from "framer-motion"
import { MessageCircle, Clock, PhoneCall, CheckCircle, Users, Zap, Star, Award, TrendingUp } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"

export default function AnsweringService({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3500 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: PhoneCall, title: "Professional Reception", desc: "We are the voice of your company" },
        { icon: Clock, title: "Always Available", desc: "Never miss a customer call" },
        { icon: MessageCircle, title: "Message Taking", desc: "Accurate and detailed messages" },
        { icon: CheckCircle, title: "Call Screening", desc: "Filter and prioritize your calls" },
        { icon: Users, title: "Appointment Scheduling", desc: "Manage your calendar efficiently" },
        { icon: Zap, title: "Immediate Response", desc: "Quick and professional handling" },
    ]

    const benefits = [
        { icon: Star, title: "Professional Image", desc: "Every call answered professionally and courteously" },
        { icon: Award, title: "Cost Effective", desc: "Save on hiring full-time receptionist staff" },
        { icon: TrendingUp, title: "Business Growth", desc: "Never miss opportunities due to missed calls" },
    ]

    const stats = [
        { value: "10K+", label: "Calls Answered Monthly" },
        { value: "< 3 Rings", label: "Average Answer Time" },
        { value: "24/7", label: "Always Available" },
        { value: "99%", label: "Satisfaction Rate" },
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
                {/* Split Layout Hero */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`rounded-3xl overflow-hidden mb-16 ${darkMode ? "bg-stone-800" : "bg-white"}`}
                >
                    <div className="grid lg:grid-cols-2">
                        {/* Image Placeholder */}
                        <div
                            className={`min-h-75 ${darkMode ? "bg-stone-700" : "bg-stone-200"} flex items-center justify-center order-2 lg:order-1`}
                        >
                            <MessageCircle className={`w-24 h-24 ${darkMode ? "text-stone-600" : "text-stone-300"}`} />
                        </div>

                        {/* Content */}
                        <div className="p-10 flex flex-col justify-center order-1 lg:order-2">
                            <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                Answering Service
                            </h1>
                            <p className={`text-lg mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                                People Like Talking to People. You Will Love Talking to Us!
                            </p>
                            <p className={`text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                                We Want To Be The Voice Of Your Company. When You Are Not Available Then We Will Facilitate Your
                                Customers and Provide Them Complete Services on Your Behalf.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Compact Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.03 }}
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
                        Key Benefits
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3">
                                    <div className={`p-10 rounded-2xl ${darkMode ? "bg-stone-800" : "bg-white"} h-full text-center`}>
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
                                <div className={`text-4xl font-bold mb-2 ${darkMode ? "text-amber-500" : "text-amber-600"}`}>
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
                    <h2 className="text-3xl font-bold text-white mb-4">Never Miss Another Call</h2>
                    <p className="text-white/90 text-lg mb-6">Let our professional team be the voice of your business today</p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Start Free Trial
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
