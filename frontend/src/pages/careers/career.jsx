"use client"

import { motion } from "framer-motion"
import {
    Briefcase,
    MapPin,
    Clock,
    DollarSign,
    Users,
    TrendingUp,
    Heart,
    Award,
    ChevronRight,
    Search,
} from "lucide-react"
import { useState } from "react"

export default function Careers({ darkMode }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("All")

    const benefits = [
        {
            icon: Heart,
            title: "Health & Wellness",
            desc: "Comprehensive health insurance and wellness programs",
            color: "teal",
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            desc: "Clear career paths with training and development",
            color: "orange",
        },
        {
            icon: DollarSign,
            title: "Competitive Pay",
            desc: "Market-leading salaries and performance bonuses",
            color: "teal",
        },
        {
            icon: Clock,
            title: "Flexible Hours",
            desc: "Work-life balance with flexible scheduling",
            color: "orange",
        },
    ]

    const openPositions = [
        {
            title: "Senior Medical Billing Specialist",
            department: "Healthcare",
            location: "Remote",
            type: "Full-time",
            salary: "$60k - $80k",
            description: "Lead our medical billing team and ensure accuracy in all claims processing.",
        },
        {
            title: "Call Center Manager",
            department: "Operations",
            location: "On-site",
            type: "Full-time",
            salary: "$50k - $70k",
            description: "Manage daily operations of our customer service call center.",
        },
        {
            title: "Full Stack Developer",
            department: "Technology",
            location: "Hybrid",
            type: "Full-time",
            salary: "$80k - $120k",
            description: "Build and maintain our healthcare IT systems and applications.",
        },
        {
            title: "Content Writer",
            department: "Marketing",
            location: "Remote",
            type: "Part-time",
            salary: "$30k - $45k",
            description: "Create engaging content for our healthcare and IT services.",
        },
        {
            title: "Customer Support Representative",
            department: "Operations",
            location: "Remote",
            type: "Full-time",
            salary: "$35k - $45k",
            description: "Provide exceptional support to our clients 24/7.",
        },
        {
            title: "IT Security Specialist",
            department: "Technology",
            location: "On-site",
            type: "Full-time",
            salary: "$70k - $90k",
            description: "Ensure the security and integrity of our IT infrastructure.",
        },
    ]

    const departments = ["All", "Healthcare", "Operations", "Technology", "Marketing"]

    const filteredPositions = openPositions.filter((position) => {
        const matchesSearch =
            position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            position.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesDepartment = selectedDepartment === "All" || position.department === selectedDepartment
        return matchesSearch && matchesDepartment
    })

    const stats = [
        { value: "200+", label: "Team Members" },
        { value: "15+", label: "Countries" },
        { value: "4.8/5", label: "Employee Rating" },
        { value: "95%", label: "Retention Rate" },
    ]

    return (
        <div className="min-h-screen pt-24 pb-24" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block mb-4">
                        <span className="text-teal-500 text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-teal-500/10 rounded-full">
                            Join Our Team
                        </span>
                    </div>
                    <h1
                        className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
                    >
                        Build Your Career With Us
                    </h1>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                        Join a team that's transforming healthcare IT. We're looking for passionate individuals ready to make an
                        impact.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl ${darkMode ? "bg-slate-800/50 border border-gray-700/50" : "bg-white border border-slate-200"
                                    }`}
                            >
                                <div
                                    className={`text-3xl md:text-4xl font-bold mb-2 ${index % 2 === 0 ? "text-teal-500" : "text-orange-500"
                                        }`}
                                >
                                    {stat.value}
                                </div>
                                <div className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Why Work With Us?
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            We invest in our people because they're our greatest asset
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-2xl transition-all ${darkMode
                                    ? "bg-slate-800/50 border border-gray-700/50 hover:border-teal-500/50"
                                    : "bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xl"
                                    }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${benefit.color === "teal" ? "bg-teal-500/10" : "bg-orange-500/10"
                                        }`}
                                >
                                    <benefit.icon className={benefit.color === "teal" ? "text-teal-500" : "text-orange-500"} size={24} />
                                </div>
                                <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                    {benefit.title}
                                </h3>
                                <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Culture Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-20"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative rounded-3xl overflow-hidden aspect-4/3">
                                <img src="/team-culture-office.jpg" alt="Team Culture" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>

                                {/* Floating Cards */}
                                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                                                <Users className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <div className="text-slate-900 font-bold">Diverse</div>
                                                <div className="text-slate-600 text-xs">Global Team</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                                <Award className="text-white" size={20} />
                                            </div>
                                            <div>
                                                <div className="text-slate-900 font-bold">Awarded</div>
                                                <div className="text-slate-600 text-xs">Best Place</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}>
                                Our Culture
                            </h2>
                            <div className="space-y-4">
                                <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                    At Maaz Informatics, we believe in creating an environment where innovation thrives and every team
                                    member feels valued. Our culture is built on collaboration, continuous learning, and a shared
                                    commitment to excellence.
                                </p>
                                <p className={`text-base leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                    We celebrate diversity, encourage creative thinking, and provide opportunities for professional
                                    growth. Join us and be part of a team that's making a real difference in healthcare IT.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {["Remote Work Options", "Learning Budget", "Team Events", "Innovation Time"].map((perk, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="w-5 h-5 bg-teal-500/10 rounded flex items-center justify-center">
                                            <ChevronRight className="text-teal-500" size={14} />
                                        </div>
                                        <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                            {perk}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Open Positions Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                            Open Positions
                        </h2>
                        <p className={`text-lg max-w-2xl mx-auto ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            Find the perfect role that matches your skills and ambitions
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="mb-8 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search
                                className={`absolute left-4 top-1/2 -translate-y-1/2 ${darkMode ? "text-gray-500" : "text-slate-400"}`}
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search positions..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all ${darkMode
                                    ? "bg-slate-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500"
                                    : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-teal-500"
                                    } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                            />
                        </div>

                        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDepartment(dept)}
                                    className={`px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${selectedDepartment === dept
                                        ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                                        : darkMode
                                            ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                                            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                                        }`}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Job Listings */}
                    <div className="grid gap-6">
                        {filteredPositions.map((position, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className={`p-6 md:p-8 rounded-2xl transition-all cursor-pointer ${darkMode
                                    ? "bg-slate-800/50 border border-gray-700/50 hover:border-teal-500/50"
                                    : "bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xl"
                                    }`}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                                                {position.title}
                                            </h3>
                                            <span className="px-3 py-1 bg-teal-500/10 text-teal-500 text-xs font-semibold rounded-full">
                                                {position.department}
                                            </span>
                                        </div>

                                        <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                            {position.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4">
                                            <div
                                                className={`flex items-center gap-2 text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                                            >
                                                <MapPin size={16} />
                                                {position.location}
                                            </div>
                                            <div
                                                className={`flex items-center gap-2 text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                                            >
                                                <Clock size={16} />
                                                {position.type}
                                            </div>
                                            <div
                                                className={`flex items-center gap-2 text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}
                                            >
                                                <DollarSign size={16} />
                                                {position.salary}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40">
                                        Apply Now
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredPositions.length === 0 && (
                        <div className={`text-center py-16 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                            <Briefcase size={48} className="mx-auto mb-4 opacity-50" />
                            <p className="text-lg font-medium">No positions found matching your criteria</p>
                            <p className="text-sm mt-2">Try adjusting your search or filters</p>
                        </div>
                    )}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-20"
                >
                    <div
                        className={`rounded-3xl p-12 text-center ${darkMode ? "bg-linear-to-br from-teal-600 to-teal-700" : "bg-linear-to-br from-teal-500 to-teal-600"
                            }`}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Don't See The Right Role?</h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
                            opportunities.
                        </p>
                        <button className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all shadow-xl hover:shadow-2xl">
                            Submit General Application
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
