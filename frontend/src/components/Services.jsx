"use client"

import { FileText, Phone, MessageSquare, ShoppingCart, Database, Shield, Code, Palette, Server, ChevronRight, Sparkle, Users, Clock, Award, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Services = () => {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, amount: 0.2 })

    const services = [
        {
            icon: FileText,
            title: "Medical Billing & Coding",
            description: "Superior services for busy professionals with highly experienced team. Your insurance payments and claims won't be denied.",
            features: ["99% Accuracy", "HIPAA Compliant", "Real-time Updates"],
            color: "#2563eb",
            stats: "98% Success Rate"
        },
        {
            icon: Phone,
            title: "Call Center",
            description: "24/7 international & domestic call center services in healthcare, medical billing, telecom, and IT fields.",
            features: ["Multilingual Support", "CRM Integration", "Quality Monitoring"],
            color: "#059669",
            stats: "24/7 Operation"
        },
        {
            icon: MessageSquare,
            title: "Answering Service",
            description: "We want to be the voice of your company. When you're not available, we facilitate your customers on your behalf.",
            features: ["Live Agents", "Custom Scripts", "Message Logging"],
            color: "#7c3aed",
            stats: "Instant Response"
        },
        {
            icon: ShoppingCart,
            title: "Procurement Management",
            description: "Accuracy, time framework & excellence are our priorities. We do things the way we do our own work.",
            features: ["Vendor Management", "Cost Optimization", "Supply Chain"],
            color: "#ea580c",
            stats: "Cost Savings"
        },
        {
            icon: Database,
            title: "EMR Data Entry",
            description: "Streamlining workflow efficiency with comprehensive digital EMR data entry solutions for reduced consultation delays.",
            features: ["Secure Processing", "Fast Turnaround", "Error Checking"],
            color: "#0891b2",
            stats: "99.9% Accuracy"
        },
        {
            icon: Shield,
            title: "Credentialing",
            description: "Complete provider enrollment services. We coordinate with insurance companies and hospitals to save your time.",
            features: ["Fast Processing", "Document Management", "Compliance Check"],
            color: "#dc2626",
            stats: "Quick Enrollment"
        },
        {
            icon: Code,
            title: "Content Writing",
            description: "Professional content creation for healthcare and IT industries with SEO optimization and industry expertise.",
            features: ["SEO Optimized", "Medical Expertise", "Quick Turnaround"],
            color: "#c026d3",
            stats: "SEO Focused"
        },
        {
            icon: Palette,
            title: "EPA Services",
            description: "Environmental Protection Agency compliance services with expert guidance and documentation support.",
            features: ["Compliance Audit", "Expert Guidance", "Full Support"],
            color: "#4f46e5",
            stats: "Regulatory Compliance"
        },
        {
            icon: Server,
            title: "IT Services",
            description: "Comprehensive IT solutions including infrastructure management, cybersecurity, and technical support.",
            features: ["24/7 Monitoring", "Security First", "Cloud Solutions"],
            color: "#0d9488",
            stats: "99.9% Uptime"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/10 to-white">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10% w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10% w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl" />
            </div>

            <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
                        <Sparkle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            Our Expertise
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Professional <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        We are the world's most cost-effective Healthcare IT Services outsourcing company, specializing in customer care management.
                    </p>
                </motion.div>

                {/* Services Grid with Scroll Animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:shadow-2xl hover:border-gray-300 h-full flex flex-col">
                                {/* Top Decorative Element */}
                                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Icon Section */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                                            style={{
                                                backgroundColor: `${service.color}15`,
                                                border: `2px solid ${service.color}30`
                                            }}
                                        >
                                            <service.icon className="w-7 h-7" style={{ color: service.color }} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                                                {service.title}
                                            </h3>
                                            <div className="text-sm font-medium mt-1" style={{ color: service.color }}>
                                                {service.stats}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accent Line */}
                                    <div
                                        className="w-12 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
                                        style={{ backgroundColor: service.color }}
                                    />
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div
                                                className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-125"
                                                style={{ backgroundColor: service.color }}
                                            />
                                            <span className="text-sm font-medium text-gray-700">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>



                                {/* Hover Effects */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/10 transition-all duration-300 pointer-events-none" />
                            </div>

                            {/* Subtle Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: `0 25px 50px -12px ${service.color}15`,
                                    background: `radial-gradient(circle at center, ${service.color}05, transparent 70%)`
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}

            </div>
        </section>
    )
}

export default Services