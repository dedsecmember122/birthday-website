"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// Array of all 31 actual photos from the surprise-photos folder
const surprisePhotos = [
  "/surprise-photos/DSC_0796.JPG",
  "/surprise-photos/IMG_20240703_070324.jpg",
  "/surprise-photos/IMG_20241222_081735.jpg",
  "/surprise-photos/IMG_20241222_081740.jpg",
  "/surprise-photos/IMG_20241222_224244 (1).jpg",
  "/surprise-photos/IMG_20241222_224344.jpg",
  "/surprise-photos/IMG_20241222_225631.jpg",
  "/surprise-photos/IMG_20241224_085518.jpg",
  "/surprise-photos/IMG_20241224_153505.jpg",
  "/surprise-photos/IMG_20241224_153545.jpg",
  "/surprise-photos/IMG_20241224_184351.jpg",
  "/surprise-photos/IMG_20241224_184510.jpg",
  "/surprise-photos/IMG_20241226_160711.jpg",
  "/surprise-photos/IMG_20241226_160744.jpg",
  "/surprise-photos/IMG_20250527_161357.jpg",
  "/surprise-photos/IMG_20250528_130042.jpg",
  "/surprise-photos/IMG_20250528_140159.jpg",
  "/surprise-photos/IMG_20250529_105822.jpg",
  "/surprise-photos/IMG_20250529_180536.jpg",
  "/surprise-photos/IMG_20250529_180547.jpg",
  "/surprise-photos/IMG_20250529_180934.jpg",
  "/surprise-photos/IMG_20250530_103926.jpg",
  "/surprise-photos/IMG_20250530_104648.jpg",
  "/surprise-photos/IMG_20250530_183436.jpg",
  "/surprise-photos/IMG_20250530_183552.jpg",
  "/surprise-photos/IMG_20250530_183759.jpg",
  "/surprise-photos/IMG_20250531_124042.jpg",
  "/surprise-photos/IMG_20250531_144354.jpg",
  "/surprise-photos/signal-2025-06-05-12-49-20-653-4.jpg",
  "/surprise-photos/signal-2025-06-05-12-49-20-653.jpg",
  "/surprise-photos/Snapchat-355416840 (1).jpg",
  "/surprise-photos/Snapchat-428545996.jpg",
]

interface SurpriseSectionProps {
  onShowSurprise: () => void
}

export default function SurpriseSection({ onShowSurprise }: SurpriseSectionProps) {
  const [isRevealed, setIsRevealed] = useState(false)

  // Convert photo paths to photo objects
  const photos = surprisePhotos.map((url, index) => ({
    id: index + 1,
    url: url,
  }))

  const handleReveal = () => {
    setIsRevealed(!isRevealed)
    onShowSurprise()
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="surprise-button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              {/* Frosted glass box */}
              <motion.div className="relative" whileHover={{ scale: 1.02 }}>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/30 p-12 md:p-16 text-center max-w-md">
                  <motion.div
                    className="text-6xl mb-6"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    🎁
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Your Surprise</h2>

                  <p className="text-slate-600 font-sans mb-8"> precious memories of us waiting to be revealed</p>

                  <motion.button
                    onClick={handleReveal}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-sans font-semibold shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative z-10">Reveal the Magic ✨</span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="photo-gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-serif font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500"
              >
                Our 31 Memories 💕
              </motion.h2>

              {/* Photo grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: (index % 20) * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotateX: 5,
                      rotateY: 5,
                      zIndex: 20,
                    }}
                    className="relative aspect-square cursor-pointer"
                  >
                    {/* Frosted glass frame */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-xl border border-white/40 overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                      <motion.img
                        src={photo.url}
                        alt={`Memory ${photo.id}`}
                        className="w-full h-full object-cover"
                        whileHover={{
                          scale: 1.15,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Back button */}
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.button
                  onClick={handleReveal}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white/20 backdrop-blur-lg border border-white/40 text-slate-700 rounded-full font-sans font-semibold hover:bg-white/30 transition-all"
                >
                  ← Back to Journey
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
