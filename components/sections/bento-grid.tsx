"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const bentoItems = [
  {
    id: 1,
    type: "note",
    title: "",
    content: "Your smile brightens my darkest days",
    size: "md",
  },
  {
    id: 2,
    type: "photo",
    title: "Vibes",
    size: "lg-tall",
    imageUrl: "/photos/IMG_20250528_150229.jpg",
  },
  {
    id: 3,
    type: "note",
    title: "",
    content: "The way you laugh at my silly jokes",
    size: "md",
  },
  {
    id: 5,
    type: "note",
    title: "",
    content: "Your kind heart touches everyone",
    size: "md",
  },
  {
    id: 6,
    type: "photo",
    title: "Romantic Moments",
    size: "md",
    imageUrl: "/photos/IMG_20250530_183823.jpg", 
  },
]

export default function BentoGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const getGridClass = (size: string) => {
    const sizes: Record<string, string> = {
      sm: "col-span-1 row-span-1",
      md: "col-span-1 md:col-span-2 row-span-1",
      lg: "col-span-1 md:col-span-2 row-span-2",
      "lg-tall": "col-span-1 md:col-span-1 row-span-2",
    }
    return sizes[size] || sizes.md
  }

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500"
        >
          Moments of Affection
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`${getGridClass(item.size)} relative group cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -8 }}
                animate={expandedId === item.id ? { scale: 1.05, zIndex: 40, y: -16 } : { scale: 1, zIndex: 10, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="h-full"
              >
                {/* Frosted glass background */}
                <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                  {item.type === "photo" ? (
                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                      {item.imageUrl ? (
                        <motion.img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-rose-300/40 to-purple-300/40 flex items-center justify-center text-5xl">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            📸
                          </motion.div>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-3">
                        <p className="text-white font-sans font-semibold text-sm">{item.title}</p>
                      </div>
                    </div>
                  ) : item.type === "map" ? (
                    <div className="w-full h-full bg-gradient-to-br from-rose-300/40 to-purple-300/40 rounded-lg flex items-center justify-center text-5xl overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        🗺️
                      </motion.div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <p className="text-sm font-sans text-rose-400 font-semibold mb-3">{item.title}</p>
                      <p className="text-slate-700 font-sans flex-grow">{item.content}</p>
                      <motion.div
                        className="mt-4 text-2xl"
                        animate={{ y: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        💕
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
