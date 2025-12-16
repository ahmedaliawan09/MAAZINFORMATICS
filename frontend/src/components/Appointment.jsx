const Appointment = ({ darkMode }) => {
    return (
        <section className="py-20" style={{ backgroundColor: darkMode ? "#1e293b" : "#f8fafc" }}>
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-4">GET IN TOUCH</div>
                    <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}>
                        Request For Appointment
                    </h2>
                    <p className={darkMode ? "text-gray-400" : "text-slate-600"}>
                        Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                </div>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors ${darkMode
                                        ? "bg-slate-800 border-gray-700 text-white placeholder-gray-500"
                                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors ${darkMode
                                        ? "bg-slate-800 border-gray-700 text-white placeholder-gray-500"
                                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                                    }`}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors ${darkMode
                                        ? "bg-slate-800 border-gray-700 text-white placeholder-gray-500"
                                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                                    }`}
                            />
                        </div>
                        <div>
                            <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                                Service Interested In
                            </label>
                            <select
                                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors ${darkMode ? "bg-slate-800 border-gray-700 text-white" : "bg-white border-slate-300 text-slate-900"
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
                        <label className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-700"}`}>
                            Your Message
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Tell us about your project or inquiry..."
                            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-teal-500 transition-colors resize-none ${darkMode
                                    ? "bg-slate-800 border-gray-700 text-white placeholder-gray-500"
                                    : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                                }`}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Appointment
