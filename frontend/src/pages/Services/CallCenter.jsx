"use client"

import { motion } from "framer-motion"
import { Phone, Globe, Clock, Headphones, MessageSquare, BarChart } from "lucide-react"

export default function CallCenter({ darkMode }) {
    const features = [
        { icon: Phone, title: "24/7 Availability", desc: "Round-the-clock support for your customers" },
        { icon: Globe, title: "Multilingual Support", desc: "Services in multiple languages" },
        { icon: Headphones, title: "Professional Agents", desc: "Trained and experienced call handlers" },
        { icon: MessageSquare, title: "Inbound & Outbound", desc: "Complete call center solutions" },
        { icon: Clock, title: "Real-time Response", desc: "Immediate customer support" },
        { icon: BarChart, title: "Performance Analytics", desc: "Detailed call metrics and reports" },
    ]

    return (
        <div className={`min-h-screen pt-24 ${darkMode ? "bg-[#0A0A0A]" : "bg-stone-50"}`}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                        Call Center Services
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                        Your Customers Deserve A Warm Reception
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`rounded-3xl p-12 mb-16 ${darkMode ? "bg-stone-900/50" : "bg-white"} backdrop-blur-sm`}
                >
                    <p className={`text-lg leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                        We Are Providing 24/7 International & Domestic Call Center Services in multiple fields such as Healthcare,
                        Medical Billing, General, Telecom, Information technology, and other Campaigns. Our dedicated team ensures
                        every customer interaction is handled with professionalism and care.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl transition-all ${darkMode ? "bg-stone-900/50 hover:bg-stone-900/70" : "bg-white hover:shadow-2xl"
                                }`}
                        >
                            <feature.icon className={`w-12 h-12 mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            <h3 className={`text-xl font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={`${darkMode ? "text-stone-400" : "text-stone-600"}`}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
