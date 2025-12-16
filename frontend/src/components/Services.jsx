import { FileText, Phone, MessageSquare, ShoppingCart, Database, Shield } from "lucide-react"

const Services = ({ darkMode }) => {
    const services = [
        {
            icon: FileText,
            title: "Medical Billing & Coding",
            description:
                "Superior services for busy professionals with highly experienced team. Your insurance payments and claims won't be denied.",
        },
        {
            icon: Phone,
            title: "Call Center",
            description:
                "24/7 international & domestic call center services in healthcare, medical billing, telecom, and IT fields.",
        },
        {
            icon: MessageSquare,
            title: "Answering Service",
            description:
                "We want to be the voice of your company. When you're not available, we facilitate your customers on your behalf.",
        },
        {
            icon: ShoppingCart,
            title: "Procurement Management",
            description: "Accuracy, time framework & excellence are our priorities. We do things the way we do our own work.",
        },
        {
            icon: Database,
            title: "EMR Data Entry",
            description:
                "Streamlining workflow efficiency with comprehensive digital EMR data entry solutions for reduced consultation delays.",
        },
        {
            icon: Shield,
            title: "Credentialing",
            description:
                "Complete provider enrollment services. We coordinate with insurance companies and hospitals to save your time.",
        },
    ]

    return (
        <section className="py-20" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-4">WHAT WE DO</div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                        Our Professional Services
                    </h2>
                    <p className={`text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        We are the world's most cost-effective Healthcare IT Services outsourcing company, specializing in customer
                        care management.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 ${darkMode
                                    ? "bg-slate-800/50 border border-gray-700/50 hover:border-teal-500/50"
                                    : "bg-white border border-slate-200 hover:border-teal-500 shadow-sm hover:shadow-lg"
                                }`}
                        >
                            <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors ${darkMode ? "bg-teal-500/10" : "bg-teal-500/10"
                                    }`}
                            >
                                <service.icon className="text-teal-500" size={24} />
                            </div>
                            <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                {service.title}
                            </h3>
                            <p className={`leading-relaxed ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
