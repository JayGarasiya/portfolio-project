import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaHome } from "react-icons/fa"
import Navbar from "../layouts/Navbar"
import Footer from "../layouts/Footer"

function NotFound() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-slate-950 text-white py-32 px-6 relative overflow-hidden flex items-center justify-center">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-2xl rounded-full"></div>

        <div className="max-w-2xl mx-auto text-center relative z-10">
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-9xl md:text-[150px] font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              404
            </h1>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-4">
              Page Not Found
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Sorry, the page you're looking for doesn't exist. But don't worry, you can always go back to the home page.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              <FaHome />
              Go Back Home
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default NotFound
