import Hero from "../../components/Hero"
import WhyChooseUs from "../../components/WhyChooseUs"
import Services from "../../components/Services"
import Features from "../../components/Features"
import FAQ from "../../components/FAQ"
import Appointment from "../../components/Appointment"
import Navbar from "../../components/Navbar"
export default function Home({ darkMode }) {
    return (
        <>
            <Navbar />
            <Hero darkMode={darkMode} />
            <WhyChooseUs darkMode={darkMode} />
            <Services darkMode={darkMode} />
            <Features darkMode={darkMode} />
            <FAQ darkMode={darkMode} />
            <Appointment darkMode={darkMode} />
        </>
    )
}
