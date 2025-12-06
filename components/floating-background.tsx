"use client"

import { motion } from "framer-motion"

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-cream to-purple-50">
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(251, 207, 232, 0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(230, 209, 255, 0.4), transparent 50%), radial-gradient(circle at 40% 40%, rgba(255, 228, 225, 0.3), transparent 50%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        {/* Floating blobs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
          animate={{
            y: [0, -100, 0],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 80, 0],
            x: [0, -60, 0],
          }}
          transition={{
            duration: 17,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
    </div>
  )
}
