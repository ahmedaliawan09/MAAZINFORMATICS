"use client"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FileText, Phone, MessageSquare, ShoppingCart, Database, Shield, ChevronLeft, ChevronRight } from "lucide-react"

const Services = ({ darkMode }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            slidesToScroll: 1,
        },
        [Autoplay({ delay: 5000, stopOnInteraction: false })],
    )

    const services = [
        {
            icon: FileText,
            title: "Medical Billing & Coding",
            description:
                "Superior services for busy professionals with highly experienced team. Your insurance payments and claims won't be denied.",
            image: "/medical-billing-healthcare-professionals.jpg",
            gradient: "from-teal-600/90 to-teal-800/90",
        },
        {
            icon: Phone,
            title: "Call Center",
            description:
                "24/7 international & domestic call center services in healthcare, medical billing, telecom, and IT fields.",
            image: "/call-center-customer-service-agents.jpg",
            gradient: "from-blue-600/90 to-blue-800/90",
        },
        {
            icon: MessageSquare,
            title: "Answering Service",
            description:
                "We want to be the voice of your company. When you're not available, we facilitate your customers on your behalf.",
            image: "/professional-answering-service-communication.jpg",
            gradient: "from-purple-600/90 to-purple-800/90",
        },
        {
            icon: ShoppingCart,
            title: "Procurement Management",
            description: "Accuracy, time framework & excellence are our priorities. We do things the way we do our own work.",
            image: "/procurement-supply-chain-management.jpg",
            gradient: "from-orange-600/90 to-orange-800/90",
        },
        {
            icon: Database,
            title: "EMR Data Entry",
            description:
                "Streamlining workflow efficiency with comprehensive digital EMR data entry solutions for reduced consultation delays.",
            image: "/electronic-medical-records-data-entry.jpg",
            gradient: "from-cyan-600/90 to-cyan-800/90",
        },
        {
            icon: Shield,
            title: "Credentialing",
            description:
                "Complete provider enrollment services. We coordinate with insurance companies and hospitals to save your time.",
            image: "/healthcare-credentialing-verification.jpg",
            gradient: "from-emerald-600/90 to-emerald-800/90",
        },
    ]

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
    const scrollNext = () => emblaApi && emblaApi.scrollNext()

    return (
        <section
            className="py-12 sm:py-16 md:py-20 overflow-hidden"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-4">WHAT WE DO</div>
                    <h2
                        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                        Our Professional Services
                    </h2>
                    <p className={`text-base sm:text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        We are the world's most cost-effective Healthcare IT Services outsourcing company, specializing in customer
                        care management.
                    </p>
                </div>

                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
                        <div className="flex">
                            {services.map((service, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                                    <div className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[500px] rounded-2xl overflow-hidden group">
                                        {/* Background Image */}
                                        <img
                                            src={service.image || "/placeholder.svg"}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className={`absolute inset-0 bg-linear-to-r ${service.gradient}`}></div>

                                        {/* Content Container */}
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
                                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                                    {/* Left: Icon & Title */}
                                                    <div className="space-y-4 sm:space-y-6">
                                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                                                            <service.icon className="text-white" size={32} />
                                                        </div>
                                                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                                            {service.title}
                                                        </h3>
                                                        <div className="w-20 sm:w-24 h-1 bg-white/60 rounded-full"></div>
                                                    </div>

                                                    {/* Right: Description & Features */}
                                                    <div
                                                        className={`${darkMode ? "bg-slate-900/70" : "bg-white"
                                                            } backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${darkMode ? "border-white/10" : "border-slate-200"
                                                            } shadow-xl`}
                                                    >
                                                        <p
                                                            className={`text-sm sm:text-base lg:text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-200" : "text-slate-700"
                                                                }`}
                                                        >
                                                            {service.description}
                                                        </p>

                                                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                                                            <span
                                                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium ${darkMode
                                                                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                                                                        : "bg-teal-50 text-teal-700 border border-teal-200"
                                                                    }`}
                                                            >
                                                                Professional
                                                            </span>
                                                            <span
                                                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium ${darkMode
                                                                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                                                                        : "bg-teal-50 text-teal-700 border border-teal-200"
                                                                    }`}
                                                            >
                                                                Reliable
                                                            </span>
                                                            <span
                                                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium ${darkMode
                                                                        ? "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                                                                        : "bg-teal-50 text-teal-700 border border-teal-200"
                                                                    }`}
                                                            >
                                                                24/7 Support
                                                            </span>
                                                        </div>

                                                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-teal-500/25 text-sm sm:text-base">
                                                            Learn More About This Service
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
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl backdrop-blur-md z-20 ${darkMode
                                ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                                : "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-lg"
                            }`}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-2xl backdrop-blur-md z-20 ${darkMode
                                ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                                : "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 shadow-lg"
                            }`}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services
