"use client"

import { ArrowRight, Shield, Headphones, ShieldCheck } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

import carousel1 from "../assets/images/carousel1.png"
import carousel2 from "../assets/images/carousel2.png"
import carousel3 from "../assets/images/carousel3.png"

const Hero = ({ darkMode }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, duration: 30 },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on("select", onSelect)
        onSelect()
        return () => emblaApi.off("select", onSelect)
    }, [emblaApi])

    const backgroundImages = [
        {
            url: carousel1,
            overlay: darkMode
                ? "from-slate-800/60 via-slate-700/50 to-slate-800/60"
                : "from-slate-800/60 via-slate-700/50 to-slate-800/60",
        },
        {
            url: carousel2,
            overlay: darkMode
                ? "from-slate-800/60 via-slate-700/50 to-slate-800/60"
                : "from-slate-800/55 via-slate-700/45 to-slate-800/55",
        },
        {
            url: carousel3,
            overlay: darkMode
                ? "from-slate-800/60 via-slate-700/50 to-slate-800/60"
                : "from-slate-800/50 via-slate-700/40 to-slate-800/55",
        },
    ]



    return (
        <section
            className={`relative pt-24 lg:pt-32 pb-20 overflow-hidden ${darkMode ? "bg-slate-900" : "bg-gray-50"
                }`}
        >
            {/* Background Carousel */}
            <div className="absolute inset-0">
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {backgroundImages.map((bg, index) => (
                            <div key={index} className="flex-[0_0_100%] h-full relative">
                                <img
                                    src={bg.url}
                                    alt="Hero Background"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div
                                    className={`absolute inset-0 bg-linear-to-r ${bg.overlay}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {backgroundImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-1 rounded-full transition-all ${index === selectedIndex
                                ? "w-8 bg-teal-500"
                                : darkMode
                                    ? "w-4 bg-white/30"
                                    : "w-4 bg-black/20"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT */}
                    <div className="space-y-8">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-3">
                            {[["ISO Certified", Shield], ["PASHA Member", ShieldCheck], ["24/7 Support", Headphones]].map(
                                ([text, Icon], i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border backdrop-blur-sm ${darkMode
                                            ? "bg-teal-500/10 border-teal-500/20 text-teal-400"
                                            : "bg-teal-50 border-teal-200 text-teal-600"
                                            }`}
                                    >
                                        <Icon size={16} />
                                        <span className="text-sm font-medium">{text}</span>
                                    </div>
                                )
                            )}
                        </div>

                        {/* Heading */}
                        <h1
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-white" : "text-white"
                                }`}
                        >
                            Transforming{" "}
                            <span className="text-teal-500">Healthcare IT</span>
                            <br />& Business Solutions
                        </h1>

                        {/* Paragraph */}
                        <p
                            className={`max-w-xl text-lg ${darkMode ? "text-gray-300" : "text-gray-300"
                                }`}
                        >
                            World's most cost-effective Healthcare IT, Call Center
                            Services & Medical Billing outsourcing company.
                            Delivering excellence since 2015.
                        </p>

                        {/* CTA */}
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow-lg shadow-teal-500/30 transition">
                            Explore Services
                            <ArrowRight size={18} />
                        </button>

                        {/* Stats */}
                        <div
                            className={`grid grid-cols-3 gap-8 pt-8 border-t ${darkMode ? "border-gray-700" : "border-gray-200"
                                }`}
                        >
                            {[
                                ["9+", "Years Experience"],
                                ["500+", "Happy Clients"],
                                ["24/7", "Support"],
                            ].map(([num, label], i) => (
                                <div key={i}>
                                    <div className="text-4xl font-bold text-teal-500">{num}</div>
                                    <div
                                        className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-300"
                                            }`}
                                    >
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT (unchanged visual, works in both modes) */}
                    <div className="hidden md:flex justify-end">
                        <div className="relative w-[450px] h-[450px]">
                            <div className="absolute inset-0 rounded-full border-2 border-teal-500/30" />
                            <div className="absolute inset-8 rounded-full border-2 border-teal-500/20" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <div className="w-24 h-24 bg-teal-500 rounded-2xl flex items-center justify-center shadow-xl shadow-teal-500/40">
                                    <span className="text-4xl font-bold text-white">M</span>
                                </div>
                                <div className="mt-4 text-center">
                                    <div className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        Maaz
                                    </div>
                                    <div className="text-teal-500 text-lg">Informatics</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero
