"use client"

import { HelpCircle, MessageCircle, BookOpen, Zap, ChevronRight } from "lucide-react"

const helpItems = [
    {
        icon: BookOpen,
        title: "Documentation",
        description: "Access comprehensive guides and tutorials",
        color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
        icon: MessageCircle,
        title: "Contact Support",
        description: "Reach out to our support team",
        color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    {
        icon: Zap,
        title: "Tips & Tricks",
        description: "Discover helpful features and shortcuts",
        color: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
    },
    {
        icon: HelpCircle,
        title: "FAQs",
        description: "Find answers to common questions",
        color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    },
]

export default function HelpSection() {
    return (
        <div className="p-6 lg:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Find resources and get assistance</p>
            </div>

            {/* Help Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {helpItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <button
                            key={item.title}
                            className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-gray-300 dark:hover:border-gray-600 text-left transition-all duration-200 hover:shadow-sm"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${item.color}`}>
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-1 transition-colors" />
                            </div>
                        </button>
                    )
                })}
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {[
                        { q: "How do I publish content?", a: "Click the publish button after making your edits. You can also schedule posts for future dates." },
                        { q: "Can I schedule posts?", a: "Yes, use the scheduling feature in the page editor to set publish dates and times." },
                        { q: "How to manage user permissions?", a: "Navigate to Users section and adjust roles. Available roles: Admin, Editor, and Viewer." },
                    ].map((faq, idx) => (
                        <div key={idx} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                            <button className="w-full text-left">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        {faq.q}
                                    </h3>
                                    <ChevronRight size={16} className="text-gray-400 transition-transform group-hover:rotate-90" />
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{faq.a}</p>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}