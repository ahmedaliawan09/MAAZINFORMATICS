"use client"

import { ArrowRight, Shield, Headphones, Globe, Award, Users, CheckCircle, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import carousel1 from "../assets/images/carousel1.png"
import carousel2 from "../assets/images/carousel2.png"
import carousel3 from "../assets/images/carousel3.png"

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [carousel1, carousel2, carousel3]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const stats = [
        { icon: Award, value: "9+", label: "Years Experience", color: "#F59E0B" },
        { icon: Users, value: "500+", label: "Happy Clients", color: "#10B981" },
        { icon: Star, value: "99%", label: "Satisfaction Rate", color: "#EC4899" },
        { icon: Globe, value: "24/7", label: "Global Support", color: "#3B82F6" },
    ]

    const features = [
        { icon: Shield, text: "ISO Certified", color: "#10B981" },
        { icon: CheckCircle, text: "PASHA Member", color: "#8B5CF6" },
        { icon: Headphones, text: "24/7 Support", color: "#3B82F6" },
    ]

    return (
        <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-linear-to-b from-white via-blue-50/30 to-white">
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to { opacity: 1; transform: scale(1); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .gradient-text {
                    background: linear-gradient(135deg, #1E40AF 0%, #2563EB 25%, #3B82F6 50%, #60A5FA 75%, #93C5FD 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .float-animation {
                    animation: float 6s ease-in-out infinite;
                }
                
                .image-transition {
                    transition: opacity 1s ease-in-out;
                }
            `}</style>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content - Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 lg:space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 animate-pulse" />
                            <span className="text-sm font-semibold text-blue-700">
                                Trusted Healthcare IT Partner Since 2015
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="text-gray-900">Transforming</span>
                            <br />
                            <span className="gradient-text">Healthcare IT</span>
                            <br />
                            <span className="text-gray-800">& Business Solutions</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            World's most cost-effective Healthcare IT, Call Center Services
                            & Medical Billing outsourcing company. Delivering excellence
                            with innovation and reliability since 2015.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <feature.icon className="w-4 h-4" style={{ color: feature.color }} />
                                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group"
                            >
                                Explore Services
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                            <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 shadow-sm">
                                View Case Studies
                            </button>
                        </div>

                        {/* Stats Grid - Compact */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-100">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                                    className="text-center p-3 bg-linear-to-b from-white to-blue-50/30 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="flex flex-col items-center gap-1">
                                        <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-125 lg:h-150 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        {/* Main Image */}
                        <div className="absolute inset-0">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        alt={`Healthcare Service ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                                </div>
                            ))}
                        </div>

                        {/* Image Navigation */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage
                                        ? 'w-8 bg-white'
                                        : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-md"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">M</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Maaz Informatics</h3>
                                        <p className="text-blue-600 text-sm">Healthcare IT Solutions</p>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {[
                                        "Medical Billing Services",
                                        "Call Center Solutions",
                                        "IT Infrastructure",
                                        "Data Management"
                                    ].map((service, index) => (
                                        <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute top-6 right-6 bg-linear-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg float-animation"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <div className="text-center">
                                    <div className="font-bold">ISO 9001</div>
                                    <div className="text-xs opacity-90">Certified</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute top-1/4 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg float-animation"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                style={{ animationDelay: '2s' }}
                            >
                                <div className="text-center">
                                    <div className="font-bold text-gray-900">24/7</div>
                                    <div className="text-xs text-gray-600">Support</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Additional Info Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Headphones className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                                <p className="text-sm text-gray-600 mt-1">Round-the-clock assistance for all your needs</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">ISO Certified</h4>
                                <p className="text-sm text-gray-600 mt-1">Highest quality standards in healthcare IT</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Globe className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">Global Reach</h4>
                                <p className="text-sm text-gray-600 mt-1">Serving clients across 50+ countries</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero