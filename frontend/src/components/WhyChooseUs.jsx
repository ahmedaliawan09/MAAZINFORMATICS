"use client"

import { motion } from "framer-motion"
import { Star, Shield, Clock, Award, TrendingUp, Users } from "lucide-react"

const WhyChooseUs = () => {
    const features = [
        {
            icon: Star,
            title: "Client Feedback",
            description: "We put our best efforts in your work to satisfy you 100%. That's why our clients give us ⭐⭐⭐⭐⭐ feedback.",
            color: "amber",
            stat: "98%",
            statLabel: "Satisfaction"
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "We provide the best quality work & services that enhance your business exposure & customer satisfaction.",
            color: "emerald",
            stat: "ISO 9001",
            statLabel: "Certified"
        },
        {
            icon: Clock,
            title: "24/7 Support",
            description: "It's all about quality service. Not only we enjoy helping our clients, but also being available whenever they need us.",
            color: "blue",
            stat: "24/7",
            statLabel: "Availability"
        },
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-sm font-semibold mb-4">
                        WHY CHOOSE US
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Excellence in Every Service
                    </h2>
                    <p className="text-gray-600">
                        Our main focus is to develop your business, secure your information and help solve your problems.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative"
                        >
                            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-4`}>
                                    <feature.icon className={`text-${feature.color}-600`} size={24} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {feature.description}
                                </p>

                                {/* Stat */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="text-2xl font-bold text-gray-900">
                                        {feature.stat}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        {feature.statLabel}
                                    </div>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-${feature.color}-500 rounded-tr-xl`} />
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: TrendingUp, value: "15+", label: "Years Experience", color: "cyan" },
                        { icon: Users, value: "500+", label: "Happy Clients", color: "blue" },
                        { icon: Award, value: "3×", label: "ISO Certified", color: "amber" },
                        { icon: Clock, value: "24/7", label: "Support", color: "emerald" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="bg-white rounded-xl border border-gray-200 p-6 text-center"
                        >
                            <div className={`inline-flex w-12 h-12 rounded-lg bg-${stat.color}-100 items-center justify-center mb-3`}>
                                <stat.icon className={`text-${stat.color}-600`} size={20} />
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs