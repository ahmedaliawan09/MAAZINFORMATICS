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
        <section className="py-20" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Card with Stats */}
                    <div className="relative">
                        <div className="bg-teal-500 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-teal-400 to-teal-600"></div>
                            <div className="relative z-10">
                                <div className="text-7xl font-bold text-slate-900 mb-2">15+</div>
                                <div className="text-2xl font-semibold text-slate-800 mb-2">Years of Excellence</div>
                                <div className="text-slate-700">Serving Global Clients</div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute bottom-1 right-1   bg-orange-500 rounded-xl p-4 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl">3×</div>
                                    <div className="text-left">
                                        <div className="text-sm font-semibold">ISO Certified</div>
                                        <div className="text-xs opacity-90">Quality Standards</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-6">
                        <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase">ABOUT MAAZ INFORMATICS</div>
                        <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>At Maaz Informatics</h2>
                        <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Our main focus is to develop your business, secure your information and help solve your problems. We share
                            your work burden to make you comfortable through our quality work and 24/7 support.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 pt-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-teal-500 shrink-0" size={20} />
                                    <span className={darkMode ? "text-gray-300" : "text-slate-700"}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-6 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group">
                            Learn More About Us
                            <svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
