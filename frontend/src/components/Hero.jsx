"use client"

import { ArrowRight, Shield, Headphones, ShieldCheck } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"

const Hero = ({ darkMode }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            duration: 30,
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })],
    )

    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on("select", onSelect)
        onSelect()

        return () => {
            emblaApi.off("select", onSelect)
        }
    }, [emblaApi])

    const backgroundImages = [
        {
            url: "/modern-office-teamwork.png",
            overlay: "from-slate-900/95 via-slate-900/90 to-slate-900/95",
        },
        {
            url: "/healthcare-technology-innovation.jpg",
            overlay: "from-slate-900/95 via-slate-900/85 to-slate-900/95",
        },
        {
            url: "/professional-customer-service-team.jpg",
            overlay: "from-slate-900/90 via-slate-900/85 to-slate-900/95",
        },
    ]

    return (
        <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
            <div className="absolute inset-0">
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {backgroundImages.map((bg, index) => (
                            <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
                                <img
                                    src={bg.url || "/placeholder.svg"}
                                    alt="Background"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {backgroundImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            className={`h-1 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 sm:w-8 bg-teal-500" : "w-3 sm:w-4 bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                                <Shield className="text-teal-500 flex-shrink-0" size={16} />
                                <span className="text-xs sm:text-sm text-teal-500 font-medium whitespace-nowrap">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                                <ShieldCheck className="text-teal-500 flex-shrink-0" size={16} />
                                <span className="text-xs sm:text-sm text-teal-500 font-medium whitespace-nowrap">PASHA Member</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm">
                                <Headphones className="text-teal-500 flex-shrink-0" size={16} />
                                <span className="text-xs sm:text-sm text-teal-500 font-medium whitespace-nowrap">24/7 Support</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                            Transforming <span className="text-teal-500">Healthcare IT</span>
                            <br />& Business Solutions
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                            World's most cost-effective Healthcare IT, Call Center Services & Medical Billing outsourcing company.
                            Delivering excellence since 2015.
                        </p>

                        <div className="flex flex-wrap gap-3 sm:gap-4">
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-teal-500/30">
                                Explore Services
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 border-t border-gray-700">
                            <div>
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500 mb-1">9+</div>
                                <div className="text-gray-300 text-xs sm:text-sm">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500 mb-1">500+</div>
                                <div className="text-gray-300 text-xs sm:text-sm">Happy Clients</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-500 mb-1">24/7</div>
                                <div className="text-gray-300 text-xs sm:text-sm">Support Available</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative hidden md:flex items-center justify-center lg:justify-end">
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]">
                            {/* Main circle */}
                            <div className="absolute inset-0 rounded-full border-2 border-teal-500/30"></div>
                            <div className="absolute inset-8 rounded-full border-2 border-teal-500/20"></div>

                            {/* Center logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-teal-500 rounded-2xl flex items-center justify-center mb-3 lg:mb-4 shadow-xl shadow-teal-500/50">
                                    <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white">M</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl lg:text-2xl font-bold text-white mb-1">Maaz</div>
                                    <div className="text-teal-500 text-base lg:text-lg">Informatics</div>
                                </div>
                            </div>

                            <div className="absolute top-4 lg:top-8 right-8 lg:right-12 bg-slate-800/90 backdrop-blur-md border border-gray-700 rounded-xl p-3 lg:p-4 shadow-xl">
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <Shield className="text-teal-500 flex-shrink-0" size={20} />
                                    <div>
                                        <div className="text-white font-semibold text-xs lg:text-sm">ISO Certified</div>
                                        <div className="text-gray-400 text-[10px] lg:text-xs">Quality Assured</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-12 lg:bottom-16 left-4 lg:left-8 bg-slate-800/90 backdrop-blur-md border border-gray-700 rounded-xl p-3 lg:p-4 shadow-xl">
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <Headphones className="text-orange-500 flex-shrink-0" size={20} />
                                    <div>
                                        <div className="text-white font-semibold text-xs lg:text-sm">24/7 Support</div>
                                        <div className="text-gray-400 text-[10px] lg:text-xs">Always Available</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 right-2 lg:right-4 -translate-y-1/2 bg-slate-800/90 backdrop-blur-md border border-gray-700 rounded-xl p-3 lg:p-4 shadow-xl">
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-teal-500 mb-1">500+</div>
                                    <div className="text-gray-400 text-[10px] lg:text-xs">Happy Clients</div>
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
