"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
      duration: 0.6,
    },
  },
}

const heroPhotos = [
  {
    id: 1,
    src: "/hero-photos/IMG_20240703_070324.jpg",
    alt: "Our First Meeting",
    caption: "Where it all began" 
  },
  {
    id: 2,
    src: "/hero-photos/IMG_20250531_160418.jpg",
    alt: "Sweet Memories",
    caption: "Making memories together" 
  },
  {
    id: 3,
    src: "/hero-photos/IMG_20250531_144817.jpg",
    alt: "Beautiful Moments",
    caption: "Every moment with you is special"
  },
  {
    id: 4,
    src: "/hero-photos/IMG_20250531_121548.jpg",
    alt: "Our Love Story",
    caption: "Our journey together"
  }
]

export default function HeroSection() {
  const herName = "Dhwani (bubuuuu)"
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  // Auto-rotate photos every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % heroPhotos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      {/* Frosted glass background card */}
      <motion.div
        className="absolute inset-0 max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-4 text-pretty"
          >
            Happy Birthday
          </motion.h1>

          <motion.p variants={itemVariants} className="text-4xl md:text-6xl font-serif font-light text-rose-400 mb-4">
            My Love
          </motion.p>

          <motion.p variants={itemVariants} className="text-3xl md:text-5xl font-serif text-purple-500 mb-8">
            {herName}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-sans text-slate-600 mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
             I AM REALLY SORRY FOR NOT SENDING YOU SOME PHYSICAL GIFTS , BUT Here's a journey through our most precious memories, wrapped in love and time
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })}
            className="px-12 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-sans font-semibold shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="buttonGradient"
            />
            <span className="relative z-10">Begin the Journey ✨</span>
          </motion.button>
        </motion.div>

        {/* Photo Carousel */}
        <motion.div
          variants={itemVariants}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Main photo container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhotoIndex}
                  src={heroPhotos[currentPhotoIndex].src}
                  alt={heroPhotos[currentPhotoIndex].alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>

              {/* Photo overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <motion.p
                  key={`caption-${currentPhotoIndex}`}
                  className="text-white font-sans text-sm font-medium text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {heroPhotos[currentPhotoIndex].caption}
                </motion.p>
              </div>

              {/* Photo navigation dots */}
              <div className="absolute top-4 right-4 flex space-x-2">
                {heroPhotos.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating hearts decoration */}
            <motion.div
              className="absolute -top-4 -right-4 text-3xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              💖
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 text-2xl"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              💕
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating accent shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-rose-300/20 to-pink-300/20 backdrop-blur-xl border border-white/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-300/20 to-rose-300/20 backdrop-blur-xl border border-white/20"
        animate={{
          y: [0, -20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-5 w-12 h-12 rounded-full bg-gradient-to-br from-pink-300/15 to-purple-300/15 backdrop-blur-xl border border-white/15"
        animate={{
          x: [0, 10, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
