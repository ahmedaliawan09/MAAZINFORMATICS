"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, TrendingUp, Lightbulb, Shield, Heart, Zap, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { useCallback } from "react"
import Navbar from "../../components/Navbar"
export default function WhoWeAre() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const coreValues = [
        {
            icon: Target,
            title: "Our Mission",
            desc: "To provide world-class IT and healthcare services that empower businesses to achieve their full potential",
        },
        {
            icon: Users,
            title: "Expert Team",
            desc: "Highly skilled professionals with decades of combined experience dedicated to your success",
        },
        {
            icon: Award,
            title: "Quality First",
            desc: "Excellence in every service we deliver, backed by ISO certifications and industry recognition",
        },
        {
            icon: TrendingUp,
            title: "Growth Focus",
            desc: "Helping businesses scale efficiently with innovative solutions and strategic support",
        },
    ]

    const principles = [
        { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge solutions" },
        { icon: Shield, title: "Security", desc: "Data protection priority" },
        { icon: Heart, title: "Care", desc: "Client-first approach" },
        { icon: Zap, title: "Efficiency", desc: "Optimized processes" },
    ]

    const stats = [
        { value: "15+", label: "Years Experience", color: "teal" },
        { value: "500+", label: "Clients Served", color: "blue" },
        { value: "50K+", label: "Projects Completed", color: "cyan" },
        { value: "24/7", label: "Support Available", color: "indigo" },
    ]

    const milestones = [
        { year: "2008", title: "Company Founded", desc: "Started with a vision to transform healthcare IT" },
        { year: "2012", title: "ISO Certified", desc: "Achieved triple ISO certification for quality" },
        { year: "2016", title: "Global Expansion", desc: "Extended services to international markets" },
        { year: "2023", title: "Industry Leader", desc: "Recognized as top healthcare IT provider" },
    ]

    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-24 pb-24 bg-linear-to-b from-white via-slate-50/30 to-white">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-teal-500 to-blue-500 animate-pulse" />
                            <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                About Us
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Transforming
                            </span>
                            <br />
                            <span className="bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                Healthcare IT
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            A Leading Healthcare IT Company Committed to Excellence
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className={`text-3xl font-bold mb-2 text-${stat.color}-500`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Company Story Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mb-20"
                    >
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-teal-500 to-blue-500" />
                                        <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                            Who We Are
                                        </span>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-6 text-slate-900">
                                        Pioneering Excellence in Healthcare Technology
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-slate-700 leading-relaxed">
                                        We are the world's most cost effective Information Technology, Call Center Services & Medical Billing
                                        outsourcing company and specialized in the management of customer care services and back office
                                        processes for global leaders in the domains of technical support, information technology, telecom,
                                        healthcare, and medical billing.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed">
                                        Our Main Focus is to Develop Your Business, Secure Your Information and Help Out You to Solve Your
                                        Problems & Issues. Share Your Work Burden, Make You Comfortable and Satisfied, Through Our Quality
                                        Work, Services and Support throughout 24/7, So your Business May Progress More in a Short Period of
                                        Time.
                                    </p>
                                </div>

                                {/* Principles Grid */}
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    {principles.map((principle, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 4 }}
                                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                                                <principle.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-slate-900 text-sm">
                                                    {principle.title}
                                                </div>
                                                <div className="text-xs text-slate-600">{principle.desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Image Carousel */}
                            <div className="relative">
                                <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
                                    <div className="flex">
                                        {["/team-collaboration.jpg", "/office-workspace.jpg", "/technology-innovation.jpg"].map(
                                            (img, idx) => (
                                                <div key={idx} className="flex-[0_0_100%] min-w-0">
                                                    <div className="relative aspect-4/3">
                                                        <img
                                                            src={img || "/placeholder.svg"}
                                                            alt={`About us ${idx + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Carousel Navigation */}
                                <div className="flex gap-2 mt-4">
                                    <button
                                        onClick={scrollPrev}
                                        className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
                                    >
                                        <ChevronRight className="w-4 h-4 text-slate-700 rotate-180" />
                                    </button>
                                    <button
                                        onClick={scrollNext}
                                        className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-sm"
                                    >
                                        <ChevronRight className="w-4 h-4 text-slate-700" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Values Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-linear-to-r from-teal-500 to-blue-500 animate-pulse" />
                                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                    Our Values
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">
                                The Principles That Guide Everything We Do
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                Our commitment to excellence is built on these core values
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {coreValues.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-linear-to-br from-teal-500 to-blue-500 flex items-center justify-center shrink-0">
                                            <value.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Timeline Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-white rounded-2xl border border-slate-200 p-8"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="w-2 h-2 rounded-full bg-linear-to-r from-teal-500 to-blue-500" />
                                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                    Our Journey
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 text-slate-900">
                                Key Milestones in Our Growth Story
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-teal-500 via-blue-500 to-cyan-500" />

                            <div className="space-y-8">
                                {milestones.map((milestone, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                                        className={`relative flex ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}
                                    >
                                        <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                            <div className="md:max-w-md">
                                                <div className="text-sm font-medium text-teal-600 mb-1">{milestone.year}</div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                                    {milestone.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm">{milestone.desc}</p>
                                            </div>
                                        </div>

                                        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-r from-teal-500 to-blue-500 border-4 border-white shadow-lg" />

                                        <div className={`flex-1 ${idx % 2 === 0 ? 'md:pl-12' : 'md:text-right md:pr-12'}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}