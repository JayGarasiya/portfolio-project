import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/inter'

import './index.css'
import "./styles/variables.css"
import "./styles/globals.css"

import App from './App.jsx'

import { Toaster } from "react-hot-toast"

/* Smooth Scroll */
import Lenis from "@studio-freight/lenis"

const lenis = new Lenis({
  duration: 0.8,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  infinite: false,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.addEventListener("resize", () => {
  lenis.resize()
})

/* React App */
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

    <Toaster position="top-right" />

  </StrictMode>
)