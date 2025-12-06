"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-200/20 to-purple-200/20 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 flex items-center justify-end pr-2"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: "0%" }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {scrollProgress > 1 && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="text-sm"
          >
            ❤️
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
