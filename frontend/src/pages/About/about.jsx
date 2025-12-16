"use client"

import { motion } from "framer-motion"
import { Target, Users, Award, TrendingUp } from "lucide-react"

export default function About({ darkMode }) {
    const values = [
        { icon: Target, title: "Our Mission", desc: "To provide world-class IT and healthcare services" },
        { icon: Users, title: "Expert Team", desc: "Highly skilled professionals dedicated to your success" },
        { icon: Award, title: "Quality First", desc: "Excellence in every service we deliver" },
        { icon: TrendingUp, title: "Growth Focus", desc: "Helping businesses scale and succeed" },
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
                        About Maaz Informatics
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                        A Leading Healthcare IT Company
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`rounded-3xl p-12 mb-16 ${darkMode ? "bg-stone-900/50" : "bg-white"} backdrop-blur-sm`}
                >
                    <p className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                        We are the world's most cost effective Information Technology, Call Center Services & Medical Billing
                        outsourcing company and specialized in the management of customer care services and back office processes
                        for global leaders in the domains of technical support, information technology, telecom, healthcare, and
                        medical billing.
                    </p>
                    <p className={`text-lg leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                        Our Main Focus is to Develop Your Business, Secure Your Information and Help Out You to Solve Your Problems
                        & Issues. Share Your Work Burden, Make You Comfortable and Satisfied, Through Our Quality Work, Services and
                        Support throughout 24/7, So your Business May Progress More in a Short Period of Time.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl transition-all ${darkMode ? "bg-stone-900/50 hover:bg-stone-900/70" : "bg-white hover:shadow-2xl"
                                }`}
                        >
                            <value.icon className={`w-12 h-12 mb-4 ${darkMode ? "text-amber-500" : "text-amber-600"}`} />
                            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "text-stone-100" : "text-stone-900"}`}>
                                {value.title}
                            </h3>
                            <p className={`${darkMode ? "text-stone-400" : "text-stone-600"}`}>{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
