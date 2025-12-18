"use client"

import { motion } from "framer-motion"
import { PenTool, FileText, BookOpen, Award, Sparkles, CheckCircle, ArrowRight, Star } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

export default function ContentWriting({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: PenTool, title: "Academic Writing", desc: "Research papers and essays" },
        { icon: FileText, title: "Article Writing", desc: "Engaging blog posts and articles" },
        { icon: BookOpen, title: "Content Creation", desc: "Website and marketing content" },
        { icon: Sparkles, title: "Creative Writing", desc: "Impressive and engaging style" },
        { icon: Award, title: "Expert Writers", desc: "Skilled and experienced team" },
        { icon: CheckCircle, title: "Quality Assurance", desc: "Edited and polished content" },
    ]

    const process = [
        { step: "01", title: "Consultation", desc: "Share your ideas and requirements with us" },
        { step: "02", title: "Research", desc: "Our team conducts thorough research" },
        { step: "03", title: "Writing", desc: "Expert writers craft your content" },
        { step: "04", title: "Review", desc: "Quality assurance and editing" },
        { step: "05", title: "Delivery", desc: "Receive polished, ready-to-use content" },
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Marketing Director",
            text: "Outstanding writing quality! Their content helped increase our engagement by 300%.",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Academic Researcher",
            text: "Professional academic writing services that exceeded all expectations.",
            rating: 5,
        },
        {
            name: "Emily Davis",
            role: "Content Manager",
            text: "Fast turnaround with exceptional attention to detail. Highly recommended!",
            rating: 5,
        },
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
        <div className={`min-h-screen pt-20 pb-12 sm:pb-16 md:pb-24 ${darkMode ? "bg-stone-900" : "bg-stone-50"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
                {/* Hero Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 sm:mb-12 md:mb-16">
                    <div className={`rounded-2xl sm:rounded-3xl overflow-hidden ${darkMode ? "bg-stone-800" : "bg-white"}`}>
                        <div className="grid lg:grid-cols-2 gap-0">
                            {/* Left Side - Content */}
                            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <h1
                                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}
                                    >
                                        Article & Content Writing
                                    </h1>
                                    <p
                                        className={`text-lg sm:text-xl mb-4 sm:mb-6 ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}
                                    >
                                        Express Your Ideas Impressively
                                    </p>
                                    <p
                                        className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}
                                    >
                                        We Provide Multiple Types of Writing Services, Including Academic, Article, Content, and more. Now
                                        You Don't Need to Worry About this. Share Your Ideas & Thoughts With us! We Will Express Them in
                                        Impressive and Engaging Way Through our Excellent Writing Skills.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Right Side - Image Placeholder */}
                            <div
                                className={`relative min-h-48 sm:min-h-64 lg:min-h-80 ${darkMode ? "bg-stone-700" : "bg-stone-200"} order-1 lg:order-2`}
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PenTool
                                        className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${darkMode ? "text-stone-600" : "text-stone-300"}`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl transition-all ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"}`}
                        >
                            <feature.icon
                                className={`w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                            />
                            <h3
                                className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}
                            >
                                {feature.title}
                            </h3>
                            <p className={`text-xs sm:text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8 sm:mb-12 md:mb-16"
                >
                    <h2
                        className={`text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 px-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}
                    >
                        Our Writing Process
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="relative"
                            >
                                <div
                                    className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl ${darkMode ? "bg-stone-800" : "bg-white"} text-center h-full`}
                                >
                                    <div
                                        className={`text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                                    >
                                        {item.step}
                                    </div>
                                    <h3
                                        className={`text-base sm:text-lg font-bold mb-1 sm:mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className={`text-xs sm:text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{item.desc}</p>
                                </div>
                                {index < process.length - 1 && (
                                    <ArrowRight
                                        className={`hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 ${darkMode ? "text-stone-700" : "text-stone-300"}`}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-8 sm:mb-12 md:mb-16"
                >
                    <h2
                        className={`text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 px-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}
                    >
                        What Our Clients Say
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 sm:px-3">
                                    <div
                                        className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl h-full ${darkMode ? "bg-stone-800" : "bg-white"}`}
                                    >
                                        <div className="flex mb-3 sm:mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 sm:w-5 sm:h-5 fill-current ${darkMode ? "text-amber-500" : "text-amber-600"}`}
                                                />
                                            ))}
                                        </div>
                                        <p
                                            className={`text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}
                                        >
                                            "{testimonial.text}"
                                        </p>
                                        <div>
                                            <p className={`font-bold text-sm sm:text-base ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                                {testimonial.name}
                                            </p>
                                            <p className={`text-xs sm:text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                        {testimonials.map((_, index) => (
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center ${darkMode ? "bg-linear-to-br from-amber-600 to-amber-700" : "bg-linear-to-br from-amber-500 to-amber-600"}`}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">Ready to Get Started?</h2>
                    <p className="text-white/90 text-base sm:text-lg mb-4 sm:mb-6 px-2">
                        Let us help you create compelling content that resonates with your audience
                    </p>
                    <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base">
                        Contact Us Today
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
