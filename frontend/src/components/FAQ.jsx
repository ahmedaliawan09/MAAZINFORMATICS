"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FAQ = ({ darkMode }) => {
    const [openIndex, setOpenIndex] = useState(-1)

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
        <section className="py-20" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left - Heading */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase">FAQ</div>
                        <h2
                            className={`text-4xl md:text-5xl font-bold leading-tight ${darkMode ? "text-white" : "text-slate-900"}`}
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className={`text-lg ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Find answers to common questions about our services and how we can help your business grow.
                        </p>

                        {/* Still have questions card */}
                        <div className="bg-teal-500 rounded-2xl p-8 mt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Still have questions?</h3>
                            <p className="text-slate-700 mb-6">
                                Can't find the answer you're looking for? Please chat with our friendly team.
                            </p>
                            <button className="text-slate-900 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Contact Support →
                            </button>
                        </div>
                    </div>

                    {/* Right - FAQ Accordion */}
                    <div className="lg:col-span-3 space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-xl overflow-hidden ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white border border-slate-200 shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${darkMode ? "hover:bg-slate-700/30" : "hover:bg-slate-50"
                                        }`}
                                >
                                    <span className={`font-semibold pr-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`shrink-0 text-teal-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        size={20}
                                    />
                                </button>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className={`px-6 pb-5 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>{faq.answer}</div>
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
