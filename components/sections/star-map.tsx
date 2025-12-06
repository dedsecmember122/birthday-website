"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Star {
  id: string
  label: string
  x: number
  y: number
  description: string
  imageUrl?: string
}

const stars: Star[] = [
  {
    id: "met",
    label: "Where We Met",
    x: 15,
    y: 25,
    description: "Borivali station , we were so happy to meet each other.",
    imageUrl: "/locations/IMG_20240703_070315.jpg",
  },
  {
    id: "first-date",
    label: "First Date",
    x: 35,
    y: 20,
    description: "FIRST TIME HOLDING HANDS.",
    imageUrl: "/locations/IMG_20240703_114807.jpg",
  },
  {
    id: "first-trip",
    label: "First Trip",
    x: 55,
    y: 25,
    description: "Mountains, memories, and a love that grew stronger.",
    imageUrl: "/locations/IMG_20250531_114441.jpg", 
  },
  {
    id: "seagull",
    label: "WO DEKH SEAGULLL",
    x: 75,
    y: 30,
    description: "Where our story took an exciting new turn.",
    imageUrl: "/locations/IMG_20240705_120321.jpg",
  },
  {
    id: "chiguze",
    label: "DO CHIGUZE AFTER GIVING 500 KI PATII",
    x: 20,
    y: 45,
    description: "WHAT AN AMAZING MEMORY",
    imageUrl: "/locations/IMG_20240707_124243.jpg",
  },
  {
    id: "goodbyes",
    label: "HARD GOODBYES",
    x: 40,
    y: 40,
    description: "WITH A MEDAL LOL ",
    imageUrl: "/locations/IMG_20240709_195823.jpg",
  },
  {
    id: "museum",
    label: "Mumbai Museum",
    x: 60,
    y: 35,
    description: "Lost in culture and your eyes.",
    imageUrl: "/locations/IMG_20240703_120221.jpg",
  },
  {
    id: "dhwani-home",
    label: "DHWANI KA GHAR",
    x: 80,
    y: 40,
    description: "BRUSHING TOGETHER",
    imageUrl: "/locations/IMG_20241222_224244.jpg",
  },
  {
    id: "ZOO Adventure ",
    label: "ZOOOOO",
    x: 25,
    y: 60,
    description: "Surrounded by blooms like our love.",
    imageUrl: "/locations/IMG_20240703_070315.jpg",
  },
  {
    id: "RESTAURANT",
    label: "DHWANI RICE ORDER KARTE HAII",
    x: 45,
    y: 55,
    description: "OYE AAJ EKADASHI HAIII",
    imageUrl: "/locations/IMG-20241228-WA0048.jpg",
  },
  {
    id: "bookstore",
    label: "POST MANGLA AARTI",
    x: 65,
    y: 50,
    description: "DHWANII IS SOOOOO CUTEEE",
    imageUrl: "/locations/IMG-20241228-WA0092.jpg",
  },
  {
    id: "waterfall",
    label: "YOU FEELING SAFE AROUND ME ",
    x: 15,
    y: 75,
    description: "YOOOOO I WON",
    imageUrl: "/locations/Snapchat-325989886.jpg", 
  },
  {
    id: "plaza",
    label: "OUR KISSS",
    x: 35,
    y: 70,
    description: "LOVEY DOVEY KISS",
    imageUrl: "/locations/Snapchat-355416840.jpg", 
  },
  {
    id: "lake",
    label: "BUBUU AFTER RECEIVING FLOWERS",
    x: 55,
    y: 65,
    description: "Reflections of us IN EACH OTHERS EYES.",
    imageUrl: "/locations/Snapchat-609221956.jpg", 
  },
  {
    id: "cafe",
    label: " BIR Cafe",
    x: 75,
    y: 60,
    description: "Our favorite spot.",
    imageUrl: "/locations/IMG_20250529_180415.jpg", 
  },
  {
    id: "forest",
    label: "ROMANTIC MOMENTS 3",
    x: 20,
    y: 85,
    description: "Hiking through life together.",
    imageUrl: "/locations/Snapchat-1626679303.jpg", 
  },
  {
    id: "bridge",
    label: "GETTING READY TOGETHER",
    x: 40,
    y: 80,
    description: "Making wishes on shooting stars.",
    imageUrl: "/locations/Snapchat-1626679303.jpg", 
  },
  {
    id: "AMUSMENT PARK",
    label: "IMAGICAAA",
    x: 80,
    y: 70,
    description: "Picnics and playful moments.",
    imageUrl: "/locations/IMG_20241224_184404.jpg",
  },
  {
    id: "cinema",
    label: "Cinema",
    x: 30,
    y: 30,
    description: "Our first movie date.",
    imageUrl: "/locations/IMG_20241223_140323_739.webp",
  },
  {
    id: "flowers gifted to my BUBUUUUUU",
    label: "MUAHHHHH",
    x: 50,
    y: 45,
    description: "",
    imageUrl: "/locations/IMG_20241226_160434.jpg",
  },
  {
    id: "lighthouse",
    label: "ROMANTIC MOMENTS",
    x: 25,
    y: 35,
    description: "Your love guides me home.",
    imageUrl: "/locations/Snapchat-773744265.jpg", 
  },
  {
    id: "gazebo",
    label: "ROMANTIC MOMENTS 2",
    x: 45,
    y: 60,
    description: " I LOVE YOU SOOO MUCHH ",
    imageUrl: "/locations/Snapchat-1131308011.jpg", 
  },
]

export default function StarMap() {
  const [selectedStar, setSelectedStar] = useState<Star | null>(null)
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null)
  const [backgroundStars, setBackgroundStars] = useState<Array<{ left: string; top: string }>>([])

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial size
    updateWindowSize()

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowSize)

    // Generate background stars positions once
    const stars = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }))
    setBackgroundStars(stars)

    // Cleanup
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Dark cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-purple-900/20 to-slate-900/30" />

      <motion.div
        className="relative z-10 max-w-5xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Our Star Map
        </motion.h2>

        <motion.p variants={itemVariants} className="text-center text-slate-600 text-lg mb-12 font-sans">
          Constellations of moments that changed us forever
        </motion.p>

        {/* Star map container */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-video bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 p-6 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Animated starfield background */}
          <div className="absolute inset-0 rounded-3xl">
            {backgroundStars.map((star, i) => (
              <motion.div
                key={`bg-star-${i}`}
                className="absolute w-0.5 h-0.5 rounded-full bg-white"
                style={{
                  left: star.left,
                  top: star.top,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + (i * 0.1) % 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: (i * 0.1) % 2,
                }}
              />
            ))}
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
              </linearGradient>
            </defs>

            {/* Draw lines between nearby stars */}
            {windowSize && (
              <motion.polyline
                points={stars
                  .map((s) => `${(s.x / 100) * windowSize.width},${(s.y / 100) * windowSize.height}`)
                  .join(" ")}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="1.5"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            )}
          </svg>

          {/* Interactive stars */}
          <div className="relative w-full h-full">
            {stars.map((star) => (
              <motion.div
                key={star.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                }}
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => setSelectedStar(star)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative w-6 h-6 cursor-pointer"
                >
                  {/* Outer glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 blur-md"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Inner star */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-r from-yellow-200 to-orange-300 shadow-lg" />
                </motion.button>

                {/* Label tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-sans font-semibold text-slate-700 pointer-events-none"
                >
                  {star.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Star details modal */}
        <AnimatePresence>
          {selectedStar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStar(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                className="bg-white/95 backdrop-blur-xl rounded-2xl max-w-2xl w-full shadow-2xl border border-white/40"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <motion.h3 className="text-2xl font-serif text-slate-800 mb-2">{selectedStar.label}</motion.h3>
                  <p className="text-slate-600 font-sans mb-4">{selectedStar.description}</p>

                  {selectedStar.imageUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden h-64 md:h-80 lg:h-96 bg-gray-200">
                      <img
                        src={selectedStar.imageUrl || "/placeholder.svg"}
                        alt={selectedStar.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <button
                    onClick={() => setSelectedStar(null)}
                    className="w-full py-2 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg font-sans font-semibold hover:shadow-lg transition-shadow"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
