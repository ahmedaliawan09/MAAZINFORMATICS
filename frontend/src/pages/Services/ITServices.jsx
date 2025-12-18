"use client"

import { motion } from "framer-motion"
import { Code, Globe, Palette, TrendingUp, Server, Smartphone } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback, useEffect, useState } from "react"

export default function ITServices({ darkMode }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const features = [
        { icon: Globe, title: "Web Development", desc: "Modern and responsive websites" },
        { icon: Code, title: "Software Development", desc: "Custom desktop applications" },
        { icon: Palette, title: "Graphics Design", desc: "Creative visual solutions" },
        { icon: TrendingUp, title: "Digital Marketing", desc: "SEO and online presence" },
        { icon: Server, title: "Backend Solutions", desc: "Robust server infrastructure" },
        { icon: Smartphone, title: "Mobile Apps", desc: "iOS and Android development" },
    ]

    const technologies = [
        { name: "React & Next.js", category: "Frontend", icon: Code },
        { name: "Node.js & Python", category: "Backend", icon: Server },
        { name: "AWS & Azure", category: "Cloud", icon: Globe },
        { name: "React Native", category: "Mobile", icon: Smartphone },
    ]

    const stats = [
        { value: "300+", label: "Projects Delivered" },
        { value: "150+", label: "Happy Clients" },
        { value: "50+", label: "Team Members" },
        { value: "99%", label: "Client Satisfaction" },
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
                {/* Hero */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-12">
                    <h1 className={`text-4xl lg:text-5xl font-bold mb-3 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Web, Software & IT Services
                    </h1>
                    <p className={`text-lg mb-8 ${darkMode ? "text-amber-500" : "text-amber-600"} font-semibold`}>
                        We Build Your Business
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`max-w-4xl mx-auto rounded-3xl p-8 ${darkMode ? "bg-stone-800" : "bg-white"}`}
                    >
                        <p className={`text-base leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-600"}`}>
                            We Don't Just Build Web & Desktop Applications, We Build Your Business. We Provide Professional Web &
                            Software Designing + Development Services, Graphics Designing, Digital Marketing, and So Many Other
                            Information Technology Services.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Large Icon Feature Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ scale: 1.05 }}
                            className={`rounded-2xl p-8 text-center ${darkMode ? "bg-stone-800 hover:bg-stone-700" : "bg-white hover:shadow-xl"} transition-all`}
                        >
                            <div className={`inline-flex p-5 rounded-2xl mb-4 ${darkMode ? "bg-stone-700" : "bg-stone-100"}`}>
                                <feature.icon className={`w-12 h-12 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            </div>
                            <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={`text-sm ${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Technologies Carousel */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-16">
                    <h2 className={`text-3xl font-bold text-center mb-10 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Technologies We Master
                    </h2>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {technologies.map((tech, index) => (
                                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-3">
                                    <div className={`p-10 rounded-2xl ${darkMode ? "bg-stone-800" : "bg-white"} h-full`}>
                                        <span
                                            className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${darkMode ? "bg-stone-700 text-amber-500" : "bg-stone-100 text-amber-600"}`}
                                        >
                                            {tech.category}
                                        </span>
                                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                            {tech.name}
                                        </h3>
                                        <tech.icon className={`w-16 h-16 ${darkMode ? "text-amber-500/30" : "text-amber-600/30"}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-2 mt-6">
                        {technologies.map((_, index) => (
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

                {/* Stats */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
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
                    <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing Together</h2>
                    <p className="text-white/90 text-lg mb-6">
                        Transform your digital presence with our cutting-edge IT solutions
                    </p>
                    <button className="px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:scale-105 transition-transform">
                        Start Your Project
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
