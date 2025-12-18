import { MessageSquare, Award, Headphones } from "lucide-react"

const WhyChooseUs = ({ darkMode }) => {
    const features = [
        {
            icon: MessageSquare,
            title: "Feedback",
            description:
                "We put our best efforts in your work to satisfy you 100%. That's why our clients give us ⭐⭐⭐⭐⭐ feedback.",
            image: "/customer-satisfaction-five-star-rating.jpg",
        },
        {
            icon: Award,
            title: "Quality Assurance",
            description:
                "We provide the best quality work & services that enhance your business exposure & customer satisfaction.",
            image: "/quality-assurance-award-certification.jpg",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description:
                "It's all about quality service. Not only we enjoy helping our clients, but also being available whenever they need us.",
            image: "/24-7-customer-support-headset.jpg",
        },
    ]

    return (
        <section
            className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
            style={{ backgroundColor: darkMode ? "#234e52" : "#e5f3f3" }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-teal-400/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4">WHY CHOOSE US</div>
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                        Excellence in Every Service
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? "text-teal-100" : "text-gray-600"}`}>
                        Our main focus is to develop your business, secure your information and help solve your problems.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${darkMode
                                    ? "bg-slate-800/40 border border-gray-700/50"
                                    : "bg-white/60 backdrop-blur-sm border border-white/60"
                                } shadow-lg hover:shadow-2xl`}
                        >
                            {/* Image Header */}
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                                <img
                                    src={feature.image || "/placeholder.svg"}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80"></div>

                                {/* Icon Badge */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-teal-500 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="text-white" size={28} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 text-center">
                                <h3
                                    className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                                >
                                    {feature.title}
                                </h3>
                                <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-teal-100" : "text-gray-600"}`}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
