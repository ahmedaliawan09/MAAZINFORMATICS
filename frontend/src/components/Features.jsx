import { CheckCircle2, TrendingUp, Users, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import teamatwork from "../assets/images/teamatwork.png"

const Features = () => {
    const features = [
        "24/7 Technical Support",
        "Answering Service",
        "Chat & Email Support",
        "Quality Assurance",
        "Audio & Video Conferencing",
        "Excellent Customer Satisfaction",
    ]

    const stats = [
        { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "text-emerald-500" },
        { icon: Users, value: "50+", label: "Expert Team", color: "text-blue-500" },
        { icon: Shield, value: "ISO", label: "Certified", color: "text-amber-500" },
        { icon: Zap, value: "24/7", label: "Support", color: "text-cyan-500" },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <section className="relative py-20 overflow-hidden bg-linear-to-b from-white to-slate-50">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />

                {/* Geometric Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Content */}
                    <div>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Badge */}
                            <motion.div variants={itemVariants}>
                                <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-linear-to-r from-cyan-50 to-blue-50 border border-cyan-100">
                                    <Zap className="text-cyan-500" size={16} />
                                    <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wider">
                                        ABOUT MAAZ INFORMATICS
                                    </span>
                                </span>
                            </motion.div>

                            {/* Heading */}
                            <motion.div variants={itemVariants} className="space-y-4">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                    <span className="bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                        At Maaz
                                    </span>
                                    <span className="block bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                        Informatics
                                    </span>
                                </h2>
                                <div className="w-24 h-1.5 rounded-full bg-linear-to-r from-cyan-500 to-blue-600" />
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="text-lg text-slate-600 leading-relaxed"
                            >
                                Our main focus is to develop your business, secure your information and help solve your problems. We share your work burden to make you comfortable through our quality work and 24/7 support.
                            </motion.p>

                            {/* Features Grid */}
                            <motion.div
                                variants={containerVariants}
                                className="grid sm:grid-cols-2 gap-4 pt-4"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ x: 8 }}
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/30">
                                            <CheckCircle2 className="text-white" size={18} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                variants={itemVariants}
                                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="text-center"
                                    >
                                        <div className={`text-2xl font-bold ${stat.color}`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-xs font-medium text-slate-500 mt-1">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div variants={itemVariants}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-xl shadow-blue-500/30"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="relative flex items-center gap-2">
                                        Learn More About Us
                                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
                            <img
                                src={teamatwork}
                                alt="Team at work"
                                className="w-full h-auto object-cover aspect-4/3"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-transparent to-blue-500/20" />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 right-6"
                            >
                                <div className="bg-linear-to-br from-white to-slate-50 rounded-2xl p-4 shadow-2xl border border-slate-100">
                                    <div className="text-2xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                        15+
                                    </div>
                                    <div className="text-xs font-semibold text-slate-900">Years</div>
                                    <div className="text-xs text-slate-500">Excellence</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                className="absolute bottom-6 left-6"
                            >
                                <div className="bg-linear-to-br from-white to-slate-50 rounded-2xl p-4 shadow-2xl border border-slate-100">
                                    <div className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                        3×
                                    </div>
                                    <div className="text-xs font-semibold text-slate-900">ISO</div>
                                    <div className="text-xs text-slate-500">Certified</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -z-10 -inset-8 bg-linear-to-r from-cyan-500/5 to-blue-500/5 rounded-3xl blur-xl" />
                    </motion.div>
                </motion.div>

                {/* Bottom Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20"
                >
                    <div className="relative rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-600" />
                        <div className="relative p-8 sm:p-12">
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Ready to Transform Your Business?
                                    </h3>
                                    <p className="text-cyan-100">
                                        Let's discuss how we can help you achieve excellence.
                                    </p>
                                </div>
                                <div className="md:col-span-2">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-cyan-200 focus:outline-none focus:border-white/40"
                                        />
                                        <button className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-colors">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Features