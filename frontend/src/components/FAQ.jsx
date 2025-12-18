"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const FAQ = ({ darkMode }) => {
    const [openIndex, setOpenIndex] = useState(0)

    const faqs = [
        {
            question: "How can I get help from Maaz Informatics?",
            answer:
                "You can contact us through our website, email, or phone. Our team is available 24/7 to assist you with any questions or concerns.",
        },
        {
            question: "What are the pricing plans for your services?",
            answer:
                "We offer flexible pricing plans tailored to your specific needs. Contact us for a custom quote based on your requirements.",
        },
        {
            question: "What about your investment plan & services?",
            answer:
                "We offer both short-term and long-term investment plans. Our services are designed to provide maximum ROI for your business.",
        },
        {
            question: "Do you offer 24/7 customer support?",
            answer: "Yes! We provide round-the-clock customer support to ensure you get help whenever you need it.",
        },
        {
            question: "What industries do you serve?",
            answer:
                "We specialize in healthcare, medical billing, IT services, telecom, and various other industries with comprehensive solutions.",
        },
    ]

    return (
        <section
            className="py-12 sm:py-16 md:py-20 overflow-hidden"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
                    {/* Left - Heading with Image */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase">FAQ</div>
                        <h2
                            className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className={`text-base sm:text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Find answers to common questions about our services and how we can help your business grow.
                        </p>

                        {/* Image Placeholder */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl mt-6 sm:mt-8">
                            <img src="/customer-support-team.png" alt="FAQ Support" className="w-full h-48 sm:h-64 object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-teal-500/40 to-transparent"></div>

                            {/* Floating Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-2xl flex items-center justify-center shadow-2xl">
                                    <HelpCircle className="text-teal-500" size={32} />
                                </div>
                            </div>
                        </div>

                        {/* Still have questions card */}
                        <div className="bg-teal-500 rounded-2xl p-6 sm:p-8 mt-6 sm:mt-8">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">Still have questions?</h3>
                            <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6">
                                Can't find the answer you're looking for? Please chat with our friendly team.
                            </p>
                            <button className="px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-all flex items-center gap-2 text-sm sm:text-base">
                                Contact Support →
                            </button>
                        </div>
                    </div>

                    {/* Right - FAQ Accordion */}
                    <div className="lg:col-span-3 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                        ? darkMode
                                            ? "bg-slate-800 border-2 border-teal-500 shadow-lg shadow-teal-500/20"
                                            : "bg-white border-2 border-teal-500 shadow-lg shadow-teal-500/20"
                                        : darkMode
                                            ? "bg-slate-800/50 border border-gray-700/50"
                                            : "bg-white border border-slate-200 shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left transition-colors ${darkMode ? "hover:bg-slate-700/30" : "hover:bg-slate-50"
                                        }`}
                                >
                                    <span
                                        className={`font-semibold pr-4 text-sm sm:text-base ${darkMode ? "text-white" : "text-slate-900"}`}
                                    >
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-teal-500 rotate-180" : darkMode ? "bg-slate-700" : "bg-slate-100"
                                            }`}
                                    >
                                        <ChevronDown className={openIndex === index ? "text-white" : "text-teal-500"} size={18} />
                                    </div>
                                </button>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div
                                        className={`px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ
