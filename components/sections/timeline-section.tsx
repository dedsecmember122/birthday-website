"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const memories = [
  {
    id: 1,
    title: "MANALI TRIP",
    description: "Where it all began - our hearts said hello",
    imageUrl: "/story-photos/IMG_20250527_161357.jpg",
  },
  {
    id: 2,
    title: "",
    description: "A moment I'll never forget",
    imageUrl: "/story-photos/IMG_20250528_084726.jpg",
  },
  {
    id: 3,
    title: "First I Love You",
    description: "Three words that changed everything",
    imageUrl: "/story-photos/IMG_20250528_112840.jpg", 
  },
  {
    id: 4,
    title: "Summer Romance Begins",
    description: "Golden memories under warm skies",
    imageUrl: "/story-photos/Snapchat-60291789.jpg", 
  },
  {
    id: 5,
    title: "First Road Trip",
    description: "Adventures on the open road",
    imageUrl: "/story-photos/IMG_20250531_180116.jpg", 
  },
  {
    id: 7,
    title: "",
    description: "MOUNTAINS , YOU AND ME ",
    imageUrl: "/story-photos/signal-2025-06-05-12-49-20-653-4.jpg", 
  },
  {
    id: 8,
    title: "",
    description: "Our MEMORY, our moment, forever",
    imageUrl: "/story-photos/DSC_0796.jpg",  
  },
  {
    id: 9,
    title: "",
    description: "Planning our forever together",
    imageUrl: "/story-photos/Snapchat-428545996.jpg", 
  },
  {
    id: 10,
    title: "Memmorable trip",
    description: "Laughter all day then cuddles all night",
    imageUrl: "/story-photos/IMG_20250528_140159.jpg",
  },
  {
    id: 11,
    title: "kisiii moment",
    description: "Grateful for every moment with you",
    imageUrl: "/story-photos/IMG_20250531_124042.jpg",
  },
  {
    id: 12,
    title: "",
    description: "Magic in the air and in my heart",
    imageUrl: "/story-photos/IMG_20250530_183436.jpg",
  },
  {
    id: 13,
    title: "",
    description: "want to sit with again like this",
    imageUrl: "/story-photos/IMG_20250531_144354.jpg", 
  },
]

export default function TimelineSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <section id="timeline" className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500"
        >
          Our Story
        </motion.h2>

        <div className="relative">
          {/* Center vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-300 via-pink-400 to-purple-300"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
          />

          {/* Memory cards */}
          <div className="space-y-12">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}
                onMouseEnter={() => setHoveredCard(memory.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="flex-1">
                  <motion.div whileHover={{ scale: 1.05, y: -10 }} className="group relative">
                    {/* Frosted glass card */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                      {/* Photo */}
                      <div className="w-full h-48 bg-gradient-to-br from-rose-300/50 to-purple-300/50 rounded-xl mb-4 overflow-hidden relative group/img">
                        {memory.imageUrl ? (
                          <motion.img
                            src={memory.imageUrl}
                            alt={memory.title}
                            className="w-full h-full object-cover cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            onClick={() => setSelectedPhoto(memory.imageUrl)}
                          />
                        ) : (
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center text-4xl"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            📷
                          </motion.div>
                        )}
                      </div>

                      <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">{memory.title}</h3>
                      <p className="text-slate-600 font-sans">{memory.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full border-4 border-white shadow-lg z-10"
                  animate={hoveredCard === memory.id ? { scale: 1.5 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Photo Modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedPhoto}
                  alt="Full size photo"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  ✕
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
