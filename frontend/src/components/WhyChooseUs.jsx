import { MessageSquare, Award, Headphones } from "lucide-react"

const WhyChooseUs = ({ darkMode }) => {
    const features = [
        {
            icon: MessageSquare,
            title: "Feedback",
            description:
                "We put our best efforts in your work to satisfy you 100%. That's why our clients give us ⭐⭐⭐⭐⭐ feedback.",
        },
        {
            icon: Award,
            title: "Quality Assurance",
            description:
                "We provide the best quality work & services that enhance your business exposure & customer satisfaction.",
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description:
                "It's all about quality service. Not only we enjoy helping our clients, but also being available whenever they need us.",
        },
    ]

    return (
        <section className="py-20" style={{ backgroundColor: darkMode ? "#234e52" : "#e5f3f3" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-teal-600 text-sm font-semibold tracking-wider uppercase mb-4">WHY CHOOSE US</div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                        Excellence in Every Service
                    </h2>
                    <p className={`text-lg ${darkMode ? "text-teal-100" : "text-gray-600"}`}>
                        Our main focus is to develop your business, secure your information and help solve your problems.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            <div className="inline-flex w-20 h-20 bg-teal-500/20 rounded-2xl items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className={darkMode ? "text-teal-400" : "text-slate-800"} size={32} />
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                {feature.title}
                            </h3>
                            <p className={`leading-relaxed ${darkMode ? "text-teal-100" : "text-gray-600"}`}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs
