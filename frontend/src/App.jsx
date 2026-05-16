import './App.css'
import AppRoutes from './routes/AppRoutes'
import { motion } from 'framer-motion'

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <AppRoutes />
    </motion.div>

    
  )
}

export default App