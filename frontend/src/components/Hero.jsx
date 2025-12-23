"use client"

import { ArrowRight, Shield, Headphones, Globe, Award, Users, CheckCircle, Star } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshWobbleMaterial } from "@react-three/drei"

import carousel1 from "../assets/images/carousel1.png"
import carousel2 from "../assets/images/carousel2.png"
import carousel3 from "../assets/images/carousel3.png"

function FloatingSphere() {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.5}>
            <mesh ref={meshRef}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshWobbleMaterial color="#3B82F6" factor={0.2} speed={0.5} />
            </mesh>
        </Float>
    )
}

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [carousel1, carousel2, carousel3]
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const stats = [
        { icon: Award, value: "9+", label: "Years", color: "#F59E0B" },
        { icon: Users, value: "500+", label: "Clients", color: "#10B981" },
        { icon: Star, value: "99%", label: "Satisfied", color: "#EC4899" },
        { icon: Globe, value: "24/7", label: "Support", color: "#3B82F6" },
    ]

    const features = [
        { icon: Shield, text: "ISO Certified", color: "#10B981" },
        { icon: CheckCircle, text: "PASHA Member", color: "#8B5CF6" },
        { icon: Headphones, text: "24/7 Support", color: "#3B82F6" },
    ]

    return (
        <section
            ref={containerRef}
            className="relative pt-16 pb-12 overflow-hidden bg-linear-to-b from-gray-50 to-white"
        >
            {/* Minimal 3D Background */}
            <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <FloatingSphere />
                </Canvas>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Left Content - Ultra Compact */}
                    <div className="space-y-6">


                        {/* Heading */}
                        <h1 className="text-3xl mt-6 md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
                            Transforming
                            <br />
                            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                Healthcare IT
                            </span>
                            <br />
                            <span className="text-gray-800">& Business Solutions</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 max-w-md">
                            World's most cost-effective Healthcare IT, Call Center Services & Medical Billing outsourcing.
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-xs"
                                >
                                    <feature.icon className="w-3.5 h-3.5" style={{ color: feature.color }} />
                                    <span className="text-sm text-gray-700">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5">
                                Explore Services
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-5 py-2.5 bg-white text-blue-700 font-medium rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                                Case Studies
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-4 gap-2 pt-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-2 bg-white rounded-lg border border-gray-100"
                                >
                                    <stat.icon className="w-4 h-4 mx-auto mb-1" style={{ color: stat.color }} />
                                    <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-xs text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Parallax Image Carousel */}
                    <motion.div
                        style={{ y: parallaxY, opacity }}
                        className="relative h-100 rounded-xl overflow-hidden shadow-xl border border-gray-100"
                    >
                        {/* Parallax Images */}
                        <div className="absolute inset-0">
                            {images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 1.1 }}
                                    animate={{
                                        scale: index === currentImage ? 1 : 1.1,
                                        opacity: index === currentImage ? 1 : 0
                                    }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={img}
                                        alt={`Healthcare Service ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Navigation */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentImage
                                        ? 'w-4 bg-white'
                                        : 'bg-white/60 hover:bg-white/80'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">M</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">Maaz Informatics</h3>
                                    <p className="text-blue-600 text-xs">Healthcare IT</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-1 text-xs text-gray-700">
                                {["Medical Billing", "Call Center", "IT Solutions", "Data Management"].map((service, index) => (
                                    <div key={index} className="flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3 text-green-500" />
                                        {service}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium shadow"
                        >
                            ISO 9001
                        </motion.div>
                    </motion.div>
                </div>

                {/* Compact Info Bar */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                                <Headphones className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 text-sm">24/7 Support</h4>
                                <p className="text-xs text-gray-600">Always available</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                                <Shield className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 text-sm">ISO Certified</h4>
                                <p className="text-xs text-gray-600">Quality standards</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                                <Globe className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 text-sm">Global Reach</h4>
                                <p className="text-xs text-gray-600">50+ countries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Floating Elements */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/4 left-5 w-2 h-2 bg-blue-400 rounded-full opacity-30"
            />
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-1/4 right-5 w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            />
        </section>
    )
}

export default Hero