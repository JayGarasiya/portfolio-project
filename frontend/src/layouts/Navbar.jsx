import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import {
  HiMenuAlt3,
  HiX
} from "react-icons/hi"

import "../styles/Navbar.css"

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <nav className="navbar">

      <div className="navbar-container">

        <div className="navbar-content">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo"
          >

            <span className="logo-white">
              Dev
            </span>

            <span className="logo-blue">
              Portfolio
            </span>

          </Link>

          {/* Desktop Menu */}
          <div className="navbar-menu">

            {
              navLinks.map((link, index) => (

                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-link"
                      : "nav-link"
                  }
                >

                  {link.name}

                </NavLink>

              ))
            }

            {/* CTA Button */}
            <button className="navbar-btn">

              Hire Me

            </button>

          </div>

          {/* Mobile Button */}
          <button
            className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >

            {
              isOpen
                ? <HiX />
                : <HiMenuAlt3 />
            }

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? "mobile-menu active-mobile"
            : "mobile-menu"
        }
      >

        <div className="mobile-menu-content">

          {
            navLinks.map((link, index) => (

              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "mobile-link active-mobile-link"
                    : "mobile-link"
                }
                onClick={() => setIsOpen(false)}
              >

                {link.name}

              </NavLink>

            ))
          }

          <button className="mobile-btn">

            Hire Me

          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar