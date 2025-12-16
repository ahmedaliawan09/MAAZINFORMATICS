"use client"

import { ArrowRight, Shield, Headphones, ShieldCheck } from "lucide-react"

const Hero = ({ darkMode }) => {
    return (
        <section
            className="relative pt-32 pb-20 overflow-hidden"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                <Shield className="text-teal-500" size={18} />
                                <span className="text-sm text-teal-500 font-medium">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                <ShieldCheck className="text-teal-500" size={18} />
                                <span className="text-sm text-teal-500 font-medium">PASHA Member</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                                <Headphones className="text-teal-500" size={18} />
                                <span className="text-sm text-teal-500 font-medium">24/7 Support</span>
                            </div>
                        </div>

                        <h1
                            className={`text-5xl lg:text-6xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                            Transforming <span className="text-teal-500">Healthcare IT</span>
                            <br />& Business Solutions
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                            World's most cost-effective Healthcare IT, Call Center Services & Medical Billing outsourcing company.
                            Delivering excellence since 2015.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                                Explore Services
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </button>

                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                            <div>
                                <div className="text-4xl font-bold text-teal-500 mb-1">9+</div>
                                <div className="text-gray-400 text-sm">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-teal-500 mb-1">500+</div>
                                <div className="text-gray-400 text-sm">Happy Clients</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-teal-500 mb-1">24/7</div>
                                <div className="text-gray-400 text-sm">Support Available</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Circular Graphic */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="relative w-125 h-125">
                            {/* Main circle */}
                            <div className="absolute inset-0 rounded-full border-2 border-teal-500/30"></div>
                            <div className="absolute inset-8 rounded-full border-2 border-teal-500/20"></div>

                            {/* Center logo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-24 h-24 bg-teal-500 rounded-2xl flex items-center justify-center mb-4">
                                    <span className="text-4xl font-bold text-white">M</span>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">Maaz</div>
                                    <div className="text-teal-500 text-lg">Informatics</div>
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute top-8 right-12 bg-slate-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <Shield className="text-teal-500" size={24} />
                                    <div>
                                        <div className="text-white font-semibold text-sm">ISO Certified</div>
                                        <div className="text-gray-400 text-xs">Quality Assured</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-16 left-8 bg-slate-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <Headphones className="text-orange-500" size={24} />
                                    <div>
                                        <div className="text-white font-semibold text-sm">24/7 Support</div>
                                        <div className="text-gray-400 text-xs">Always Available</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-800 border border-gray-700 rounded-xl p-4 shadow-xl">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal-500 mb-1">500+</div>
                                    <div className="text-gray-400 text-xs">Happy Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
