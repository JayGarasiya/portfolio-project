import { motion } from "framer-motion"

function Loader() {

  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="text-center">

        {/* Modern Animated Loader */}
        <div className="relative">

          {/* Outer Ring */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear"
            }}
            className="w-24 h-24 border-4 border-blue-500/20 border-t-blue-500 rounded-full mx-auto"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "linear"
            }}
            className="absolute top-2 left-2 w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full"
          />

          {/* Center Dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />

        </div>

        {/* Enhanced Text */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-white text-2xl font-bold mt-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Loading Portfolio...
        </motion.h1>

        {/* Progress Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-2 mt-4"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          ))}
        </motion.div>

      </div>

    </div>
  )
}

export default Loader