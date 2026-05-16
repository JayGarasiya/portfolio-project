import Navbar from "../layouts/Navbar"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Skills from "../components/home/Skills"
import Projects from "./Projects"
import Services from "../components/home/Services"
import ContactForm from "../components/home/ContactForm"
import Footer from "../layouts/Footer"
import api from "../services/api";


function Home() {

  return (
    <div>

      <Navbar />

      <Hero />

      <Skills />

      <ContactForm />

      <About />
      
      <Footer />

    </div>
  )
}

export default Home