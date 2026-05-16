import { useState } from "react"
import { Link } from "react-router-dom"
import { HiMenuAlt3, HiX } from "react-icons/hi"

import "../styles/Navbar.css"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="navbar-content">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo"
          >
            <span className="logo-white">Dev</span>
            <span className="logo-blue">Portfolio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">

            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/projects" className="nav-link">
              Projects
            </Link>

            <Link to="/services" className="nav-link">
              Services
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {
              isOpen ? <HiX /> : <HiMenuAlt3 />
            }
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {
        isOpen && (
          <div className="mobile-menu">

            <div className="mobile-menu-content">

              <Link
                to="/"
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/projects"
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>

              <Link
                to="/services"
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <button className="hire-btn">
                Hire Me
              </button>

            </div>
          </div>
        )
      }

    </nav>
  )
}

export default Navbar