"use client"

import { motion } from "framer-motion"
import { Package, Target, TrendingUp, Clock, Shield, CheckCircle } from "lucide-react"

export default function Procurement({ darkMode }) {
    const features = [
        { icon: Target, title: "Accuracy", desc: "Precise procurement management" },
        { icon: Clock, title: "Time Framework", desc: "Delivered within timeline" },
        { icon: TrendingUp, title: "Excellence", desc: "High-quality service standards" },
        { icon: Package, title: "Supply Chain", desc: "Complete procurement solutions" },
        { icon: Shield, title: "Reliability", desc: "Dependable and consistent" },
        { icon: CheckCircle, title: "Quality Assurance", desc: "Verified suppliers and products" },
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
                        Procurement Management
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                        Your Work is Our Work
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`rounded-3xl p-12 mb-16 ${darkMode ? "bg-stone-900/50" : "bg-white"} backdrop-blur-sm`}
                >
                    <p className={`text-lg leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                        Your Busyness Makes No-Difference to Your Business. Accuracy, Time Framework & Excellence are Our First
                        Priorities, So You Don't Need to Worry About it. We Are Here For You & We Do Things the Way We Do Our Work.
                        Professional procurement management that keeps your operations running smoothly.
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
