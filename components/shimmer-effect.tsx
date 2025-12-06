"use client"

import { motion } from "framer-motion"

export default function ShimmerEffect() {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      animate={{
        x: ["-100%", "100%"],
      }}
      transition={{
        duration: 2.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        pointerEvents: "none",
      }}
    />
  )
}
