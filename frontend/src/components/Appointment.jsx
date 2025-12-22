import appointment from "../assets/images/appointment.png"

const Appointment = ({ darkMode }) => {
    return (
        <section
            className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
            style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}
        >
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left - Form */}
                    <div className="order-2 lg:order-1">
                        <div className="mb-8 sm:mb-12">
                            <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-4">
                                GET IN TOUCH
                            </div>
                            <h2
                                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
                            >
                                Request For Appointment
                            </h2>
                            <p className={`text-sm sm:text-base ${darkMode ? "text-gray-400" : "text-slate-600"}`}>
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>
                        </div>

                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 focus:outline-none focus:border-teal-500 transition-colors text-sm sm:text-base ${darkMode
                                            ? "bg-slate-800/50 border-gray-700 text-white placeholder-gray-500 focus:bg-slate-800"
                                            : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-slate-50"
                                            }`}
                                    />
                                </div>

                                <div>
                                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 focus:outline-none focus:border-teal-500 transition-colors text-sm sm:text-base ${darkMode
                                            ? "bg-slate-800/50 border-gray-700 text-white placeholder-gray-500 focus:bg-slate-800"
                                            : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-slate-50"
                                            }`}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 focus:outline-none focus:border-teal-500 transition-colors text-sm sm:text-base ${darkMode
                                            ? "bg-slate-800/50 border-gray-700 text-white placeholder-gray-500 focus:bg-slate-800"
                                            : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-slate-50"
                                            }`}
                                    />
                                </div>

                                <div>
                                    <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                        Service Interested In
                                    </label>
                                    <select
                                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 focus:outline-none focus:border-teal-500 transition-colors text-sm sm:text-base ${darkMode
                                            ? "bg-slate-800/50 border-gray-700 text-white"
                                            : "bg-white border-slate-200 text-slate-900"
                                            }`}
                                    >
                                        <option value="">Select a service</option>
                                        <option>Medical Billing</option>
                                        <option>Call Center</option>
                                        <option>IT Services</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={`block text-sm font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                    Your Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project or inquiry..."
                                    className={`w-full px-4 py-3 sm:py-3.5 rounded-xl border-2 focus:outline-none focus:border-teal-500 transition-colors resize-none text-sm sm:text-base ${darkMode
                                        ? "bg-slate-800/50 border-gray-700 text-white placeholder-gray-500 focus:bg-slate-800"
                                        : "bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-slate-50"
                                        }`}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 sm:py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/40 group text-sm sm:text-base"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right - Image */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={appointment}
                                alt="Appointment"
                                className="w-full h-full object-cover aspect-4/3"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-teal-500/30 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Appointment
