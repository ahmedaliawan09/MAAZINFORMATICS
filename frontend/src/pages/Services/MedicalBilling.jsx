"use client"

import { motion } from "framer-motion"
import { FileText, CheckCircle, Clock, Shield, TrendingUp, Users } from "lucide-react"

export default function MedicalBilling({ darkMode }) {
    const features = [
        { icon: CheckCircle, title: "Claims Processing", desc: "Efficient and accurate claims submission" },
        { icon: Clock, title: "Fast Turnaround", desc: "Quick processing and payment collection" },
        { icon: Shield, title: "Compliance", desc: "HIPAA compliant and secure" },
        { icon: TrendingUp, title: "Revenue Optimization", desc: "Maximize your practice revenue" },
        { icon: Users, title: "Expert Team", desc: "Highly experienced billing specialists" },
        { icon: FileText, title: "Detailed Reports", desc: "Comprehensive analytics and insights" },
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
                        Medical Billing & Coding
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                        Superior Services For Busy Professionals
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`rounded-3xl p-12 mb-16 ${darkMode ? "bg-stone-900/50" : "bg-white"} backdrop-blur-sm`}
                >
                    <p className={`text-lg leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                        We Have Highly Experienced & Specialized Team With a Strong Background Of Medical Billing. Now Your
                        Insurance or Personal Payments And Claims Won't Be Unpayable & Won't Be Denied. Our comprehensive medical
                        billing services ensure maximum revenue collection while maintaining compliance with all healthcare
                        regulations.
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
