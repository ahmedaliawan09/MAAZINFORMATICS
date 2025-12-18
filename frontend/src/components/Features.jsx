import { CheckCircle2 } from "lucide-react"

const Features = ({ darkMode }) => {
    const features = [
        "24/7 Technical Support",
        "Answering Service",
        "Chat & Email Support",
        "Quality Assurance",
        "Audio & Video Conferencing",
        "Excellent Customer Satisfaction",
    ]

    return (
        <section
            className="py-12 sm:py-16 md:py-20 overflow-hidden"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left - Image Placeholder with Decorative Elements */}
                    <div className="relative order-2 lg:order-1">
                        {/* Main Image Container */}
                        <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/modern-office-teamwork.png" alt="Team at work" className="w-full h-full object-cover" />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-tr from-teal-500/20 to-transparent"></div>
                        </div>

                        {/* Floating Stats Card */}
                        <div
                            className={`absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 ${darkMode ? "bg-slate-800 border border-gray-700" : "bg-white"} rounded-2xl p-4 sm:p-6 shadow-2xl`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-500 rounded-xl flex items-center justify-center">
                                    <span className="text-2xl sm:text-3xl font-bold text-white">15+</span>
                                </div>
                                <div>
                                    <div className={`text-lg sm:text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        Years
                                    </div>
                                    <div className={`text-xs sm:text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                        Excellence
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ISO Badge */}
                        <div className="absolute top-4 sm:top-8 -left-4 sm:-left-8 bg-orange-500 rounded-xl p-3 sm:p-4 shadow-xl">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-white">3×</div>
                                <div className="text-xs sm:text-sm font-semibold text-white">ISO</div>
                                <div className="text-xs text-white/90">Certified</div>
                            </div>
                        </div>

                        {/* Decorative Circle */}
                        <div className="absolute -top-4 right-8 sm:right-12 w-16 h-16 sm:w-24 sm:h-24 bg-teal-500/10 rounded-full blur-2xl"></div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                        <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase">ABOUT MAAZ INFORMATICS</div>
                        <h2
                            className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                            At Maaz Informatics
                        </h2>
                        <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Our main focus is to develop your business, secure your information and help solve your problems. We share
                            your work burden to make you comfortable through our quality work and 24/7 support.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 group">
                                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors flex-shrink-0">
                                        <CheckCircle2 className="text-teal-500" size={14} />
                                    </div>
                                    <span className={`${darkMode ? "text-gray-300" : "text-slate-700"} text-sm font-medium`}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 text-sm sm:text-base">
                            Learn More About Us
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
