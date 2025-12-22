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
    Sparkles,
    Zap,
    Globe,
    Shield,
} from "lucide-react"
import { useState } from "react"
import Navbar from "../../components/Navbar"
export default function Careers({ darkMode }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedDepartment, setSelectedDepartment] = useState("All")

    const benefits = [
        {
            icon: Heart,
            title: "Health & Wellness",
            desc: "Comprehensive health insurance and wellness programs",
            color: "from-teal-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-teal-500/10 to-emerald-500/10",
            borderColor: "border-teal-500/20"
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            desc: "Clear career paths with training and development",
            color: "from-orange-500 to-amber-500",
            bgColor: "bg-gradient-to-br from-orange-500/10 to-amber-500/10",
            borderColor: "border-orange-500/20"
        },
        {
            icon: DollarSign,
            title: "Competitive Pay",
            desc: "Market-leading salaries and performance bonuses",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: Clock,
            title: "Flexible Hours",
            desc: "Work-life balance with flexible scheduling",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
            borderColor: "border-purple-500/20"
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
        { value: "200+", label: "Team Members", icon: Users, color: "text-cyan-500", bg: "bg-cyan-500/10" },
        { value: "15+", label: "Countries", icon: Globe, color: "text-blue-500", bg: "bg-blue-500/10" },
        { value: "4.8/5", label: "Employee Rating", icon: Award, color: "text-amber-500", bg: "bg-amber-500/10" },
        { value: "95%", label: "Retention Rate", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    ]

    return (
        <>
            <Navbar />
            <div className="min-h-screen pt-24 pb-24 bg-gradient-to-b from-white via-blue-50/10 to-white">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="inline-block mb-6"
                        >
                            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/20 backdrop-blur-sm">
                                <Zap className="text-teal-500" size={16} />
                                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                    Join Our Team
                                </span>
                            </span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                                Build Your Career
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                                With Us
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-slate-600">
                            Join a team that's transforming healthcare IT. We're looking for passionate individuals ready to make an impact.
                        </p>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center`}>
                                            <stat.icon className={`${stat.color}`} size={20} />
                                        </div>
                                        <div className="text-left">
                                            <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-slate-500">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Benefits Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                Why Work With Us?
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto text-slate-600">
                                We invest in our people because they're our greatest asset
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className={`relative p-6 rounded-2xl border ${benefit.borderColor} ${benefit.bgColor} backdrop-blur-sm transition-all duration-300`}
                                >
                                    <div className="mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-3`}>
                                            <benefit.icon className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-2">{benefit.desc}</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-50"></div>
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
                                <div className="relative rounded-3xl overflow-hidden aspect-4/3 shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/20 to-transparent" />
                                    <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <Users className="w-16 h-16 text-white/50 mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">Our Team Culture</h3>
                                            <p className="text-white/70">Collaborative • Innovative • Supportive</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 animate-pulse" />
                                    <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                                        Our Culture
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                    Where Innovation Meets
                                    <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Collaboration</span>
                                </h2>

                                <div className="space-y-4">
                                    <p className="text-base leading-relaxed text-slate-700">
                                        At Maaz Informatics, we believe in creating an environment where innovation thrives and every team member feels valued. Our culture is built on collaboration, continuous learning, and a shared commitment to excellence.
                                    </p>
                                    <p className="text-base leading-relaxed text-slate-700">
                                        We celebrate diversity, encourage creative thinking, and provide opportunities for professional growth. Join us and be part of a team that's making a real difference in healthcare IT.
                                    </p>
                                </div>

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    {["Remote Work Options", "Learning Budget", "Team Events", "Innovation Time"].map((perk, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ x: 4 }}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                                                <ChevronRight className="w-4 h-4 text-white" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                                                {perk}
                                            </span>
                                        </motion.div>
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                                Open Positions
                            </h2>
                            <p className="text-lg max-w-2xl mx-auto text-slate-600">
                                Find the perfect role that matches your skills and ambitions
                            </p>
                        </div>

                        {/* Search and Filter */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                            className="mb-8 flex flex-col sm:flex-row gap-4"
                        >
                            <div className="flex-1 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl blur-md opacity-50" />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Search positions..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="relative w-full pl-12 pr-4 py-4 bg-white rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                                />
                            </div>

                            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                                {departments.map((dept) => (
                                    <motion.button
                                        key={dept}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedDepartment(dept)}
                                        className={`px-4 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${selectedDepartment === dept
                                            ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg shadow-teal-500/25"
                                            : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 hover:border-teal-500"
                                            }`}
                                    >
                                        {dept}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        {/* Job Listings */}
                        <div className="grid gap-6">
                            {filteredPositions.map((position, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-2xl border border-slate-200 p-6 md:p-8 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                >
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                                                    {position.title}
                                                </h3>
                                                <span className="px-3 py-1 bg-gradient-to-r from-teal-500/10 to-blue-500/10 text-teal-600 text-xs font-semibold rounded-full border border-teal-500/20">
                                                    {position.department}
                                                </span>
                                            </div>

                                            <p className="text-sm mb-4 text-slate-600">
                                                {position.description}
                                            </p>

                                            <div className="flex flex-wrap gap-4">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <MapPin size={16} />
                                                    {position.location}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <Clock size={16} />
                                                    {position.type}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <DollarSign size={16} />
                                                    {position.salary}
                                                </div>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40"
                                        >
                                            Apply Now
                                            <ChevronRight size={18} />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filteredPositions.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                                    <Briefcase className="w-10 h-10 text-slate-400" />
                                </div>
                                <p className="text-lg font-medium text-slate-700">No positions found matching your criteria</p>
                                <p className="text-sm mt-2 text-slate-600">Try adjusting your search or filters</p>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-20"
                    >
                        <div className="relative rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            <div className="relative p-12 text-center">
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-white" />
                                    <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                                        Join Our Team
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Don't See The Right Role?
                                </h2>
                                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                                    We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 mx-auto"
                                >
                                    Submit General Application
                                    <ChevronRight size={20} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}