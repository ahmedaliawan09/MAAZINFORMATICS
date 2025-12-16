"use client"

import { motion } from "framer-motion"
import { FileCheck, Pill, Activity, Clock, CheckCircle, Shield } from "lucide-react"

export default function EPA({ darkMode }) {
    const features = [
        { icon: Pill, title: "Medication Approval", desc: "Prescription authorization support" },
        { icon: Activity, title: "Imaging Services", desc: "Diagnostic test approvals" },
        { icon: FileCheck, title: "Provider Coordination", desc: "Work with healthcare providers" },
        { icon: Shield, title: "Insurance Liaison", desc: "Insurance company communication" },
        { icon: Clock, title: "Quick Processing", desc: "Fast authorization turnaround" },
        { icon: CheckCircle, title: "Excellent Results", desc: "High approval success rate" },
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
                        Electronic Prior Authorization
                    </h1>
                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? "text-stone-400" : "text-stone-600"}`}>
                        Streamlined Healthcare Approvals
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`rounded-3xl p-12 mb-16 ${darkMode ? "bg-stone-900/50" : "bg-white"} backdrop-blur-sm`}
                >
                    <p className={`text-lg leading-relaxed ${darkMode ? "text-stone-300" : "text-stone-700"}`}>
                        We Will Help Your Patients To Get Approval for Their Medication, Imaging And Other Services From Provider,
                        Insurance & Pharmacy Ends. So You Just Outsource Your Work to Us and We will Show You The Excellent Working
                        Results. Our EPA services reduce delays and improve patient care outcomes.
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
