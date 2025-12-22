"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageSquare, Search, Globe, Zap, Sparkles, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import FaqImage from "../assets/images/FAQ.png"

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0)
    const [searchTerm, setSearchTerm] = useState("")

    const faqs = [
        {
            question: "How can I get help from Maaz Informatics?",
            answer: "You can contact us through our website, email, or phone. Our team is available 24/7 to assist you with any questions or concerns.",
            category: "General",
            icon: HelpCircle
        },
        {
            question: "What are the pricing plans for your services?",
            answer: "We offer flexible pricing plans tailored to your specific needs. Contact us for a custom quote based on your requirements.",
            category: "Pricing",
            icon: Zap
        },
        {
            question: "What about your investment plan & services?",
            answer: "We offer both short-term and long-term investment plans. Our services are designed to provide maximum ROI for your business.",
            category: "Investment",
            icon: Target
        },
        {
            question: "Do you offer 24/7 customer support?",
            answer: "Yes! We provide round-the-clock customer support to ensure you get help whenever you need it.",
            category: "Support",
            icon: Globe
        },
        {
            question: "What industries do you serve?",
            answer: "We specialize in healthcare, medical billing, IT services, telecom, and various other industries with comprehensive solutions.",
            category: "Services",
            icon: Sparkles
        },
    ]

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const categories = ["All", ...new Set(faqs.map(faq => faq.category))]

    return (
        <section className="relative py-20 overflow-hidden bg-linear-to-b from-white via-gray-50 to-white">
            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-5deg); }
                    75% { transform: rotate(5deg); }
                }
                
                .faq-item {
                    position: relative;
                    overflow: hidden;
                }
                
                .faq-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 0;
                    background: linear-gradient(to bottom, #3B82F6, #8B5CF6);
                    transition: height 0.3s ease;
                }
                
                .faq-item.open::before {
                    height: 100%;
                }
            `}</style>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, #3B82F6 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Left Column - Image & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 backdrop-blur-sm">
                            <MessageSquare className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-semibold text-blue-600">QUESTIONS & ANSWERS</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-gray-900">Frequently</span>
                            <br />
                            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Asked Questions
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Find answers to common questions about our services and how we can help your business grow.
                        </p>

                        {/* Image Container */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl group"
                        >
                            <img
                                src={FaqImage}
                                alt="FAQ Support"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                            {/* Floating Icons */}
                            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                                <HelpCircle className="w-6 h-6 text-white" />
                            </div>

                            <div className="absolute bottom-4 left-4">
                                <div className="text-white font-semibold text-lg">Quick Support</div>
                                <div className="text-white/80 text-sm">Get instant answers</div>
                            </div>
                        </motion.div>

                        {/* Quick Contact Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 shadow-lg"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0">
                                    <MessageSquare className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                                    <p className="text-gray-600 mb-4">
                                        Can't find the answer you're looking for? Please chat with our friendly team.
                                    </p>
                                    <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2 group">
                                        Contact Support
                                        <ChevronDown className="w-4 h-4 transform rotate-270 group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - FAQ Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Search Bar */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                                <Search className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for questions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            />
                            {searchTerm && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
                                >
                                    {filteredFaqs.length} results
                                </motion.div>
                            )}
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSearchTerm(category === "All" ? "" : category)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${(category === "All" && !searchTerm) || searchTerm === category
                                        ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* FAQ List */}
                        <div className="space-y-4">
                            <AnimatePresence>
                                {filteredFaqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`faq-item bg-white rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${openIndex === index
                                            ? "border-blue-500 shadow-lg shadow-blue-500/10 open"
                                            : "border-gray-200 hover:border-gray-300"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${openIndex === index
                                                    ? "bg-linear-to-r from-blue-500 to-purple-500"
                                                    : "bg-gray-100 group-hover:bg-gray-200"
                                                    }`}>
                                                    <faq.icon className={`w-5 h-5 ${openIndex === index ? "text-white" : "text-gray-600"
                                                        }`} />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                                                            {faq.category}
                                                        </span>
                                                    </div>
                                                    <h3 className={`font-semibold text-lg transition-colors duration-300 ${openIndex === index ? "text-blue-700" : "text-gray-900 group-hover:text-blue-600"
                                                        }`}>
                                                        {faq.question}
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className={`ml-4 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index
                                                ? "bg-linear-to-r from-blue-500 to-purple-500 rotate-180"
                                                : "bg-gray-100 group-hover:bg-gray-200"
                                                }`}>
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? "text-white" : "text-gray-600"
                                                    }`} />
                                            </div>
                                        </button>

                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: openIndex === index ? "auto" : 0,
                                                opacity: openIndex === index ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pl-20">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                                                    <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse" />
                                                    <span className="text-sm text-gray-500">Helpful? Let us know!</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Empty State */}
                        {filteredFaqs.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                                    <Search className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
                                <p className="text-gray-600 mb-6">Try searching with different keywords</p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                                >
                                    View All Questions
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default FAQ