"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface BucketItem {
  id: string
  title: string
  emoji: string
  completed: boolean
}

const initialBucketItems: BucketItem[] = [
  { id: "1", title: "See the Northern Lights together", emoji: "🌌", completed: false },
  { id: "2", title: "Cook pasta together in Italy", emoji: "🇮🇹", completed: false },
  { id: "3", title: "Watch the sunrise from a mountain peak", emoji: "⛰️", completed: false },
  { id: "4", title: "Dance in the rain", emoji: "🌧️", completed: false },
  { id: "5", title: "Take a hot air balloon ride", emoji: "🎈", completed: false },
  { id: "6", title: "Play Badminton Together", emoji: "", completed: false },
  { id: "7", title: "Read our favorite book out loud to each other", emoji: "📖", completed: false },
  { id: "8", title: "Build our house together", emoji: "🏠", completed: false },
  { id: "9", title: "LEARN POTERY TOGETHER", emoji: "❤️", completed: false },
  { id: "10", title: "Have a midnight picnic under the stars", emoji: "⭐", completed: false },
  { id: "11", title: "Learn to paint together", emoji: "🎨", completed: false },
  { id: "12", title: "Travel to all seven continents", emoji: "🌍", completed: false },
  { id: "13", title: "Learn a new language together", emoji: "🗣️", completed: false },
  { id: "14", title: "RIVER RAFTING TOGETHER", emoji: "✨", completed: false },
  { id: "15", title: "Skydive together", emoji: "🪂", completed: false },
  { id: "16", title: "Build a home of our dreams , after having kids", emoji: "🏡", completed: false },
  { id: "17", title: "Write letters to open in 10 years", emoji: "💌", completed: false },
  { id: "18", title: "Learn to cook each other's favorite meals", emoji: "👨‍🍳", completed: false },
  { id: "19", title: "Take blessigns from Krishna , after marringe", emoji: "🥖", completed: false },
  { id: "20", title: "Explore  Gupt Vrindavan", emoji: "🏯", completed: false },
  { id: "21", title: "Create a photo album of our favorite moments", emoji: "📸", completed: false },
  { id: "22", title: "Learn salsa dancing in Cuba", emoji: "💃", completed: false },
  { id: "23", title: "Watch all our favorite movies together", emoji: "🎬", completed: false },
  { id: "24", title: "Plant a tree in our names", emoji: "🌳", completed: false },
  { id: "25", title: "Go on a safari in Africa", emoji: "🦁", completed: false },
  { id: "26", title: "Renew our vows on a beach", emoji: "💒", completed: false },
  { id: "27", title: "Learn photography together", emoji: "📷", completed: false },
  { id: "28", title: "Take a train journey across a continent", emoji: "🚂", completed: false },
  { id: "29", title: "Have a candlelit dinner we cook ourselves", emoji: "🕯️", completed: false },
  { id: "30", title: "Visit every famous museum in Europe", emoji: "🖼️", completed: false },
  { id: "31", title: "Create art together and display it", emoji: "🎭", completed: false },
  { id: "32", title: "Fall asleep watching sunsets every summer", emoji: "🌅", completed: false },
]

export default function BucketList() {
  const [items, setItems] = useState<BucketItem[]>(initialBucketItems)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const toggleItem = (id: string) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const completedCount = items.filter((item) => item.completed).length
  const progressPercentage = (completedCount / items.length) * 100

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100/20 via-pink-50/10 to-purple-100/20" />

      <motion.div
        className="relative z-10 max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500"
        >
          Our Bucket List
        </motion.h2>

        <motion.p variants={itemVariants} className="text-center text-slate-600 text-lg mb-4 font-sans">
          Dreams to chase together, tomorrow's memories waiting to happen
        </motion.p>

        {/* Progress tracker */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white/30 backdrop-blur-2xl rounded-2xl border border-white/40 p-6 shadow-xl">
            <div className="flex justify-between items-center mb-3">
              <span className="font-serif text-lg text-slate-700">Dreams Completed</span>
              <span className="font-sans font-bold text-rose-500">
                {completedCount} of {items.length}
              </span>
            </div>

            <div className="h-3 bg-white/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>

            <p className="mt-3 text-sm text-slate-600 font-sans">
              {completedCount === items.length
                ? "🎉 All dreams are being chased! Keep making memories!"
                : `${items.length - completedCount} beautiful moments waiting for us...`}
            </p>
          </div>
        </motion.div>

        {/* Bucket list items grid */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants}>
              <motion.button
                onClick={() => toggleItem(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-2xl border transition-all text-left ${
                  item.completed
                    ? "bg-white/50 backdrop-blur-xl border-white/40"
                    : "bg-white/30 backdrop-blur-xl border-white/30 hover:border-white/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Checkbox */}
                  <motion.div
                    className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center mt-1 ${
                      item.completed
                        ? "bg-gradient-to-r from-rose-400 to-pink-500 border-pink-500"
                        : "border-slate-300 hover:border-rose-400"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.completed && (
                      <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="text-white text-sm"
                      >
                        ✓
                      </motion.span>
                    )}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.emoji}</span>
                      <p
                        className={`font-sans font-semibold ${
                          item.completed ? "text-slate-500 line-through" : "text-slate-700"
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>

                  {/* Glow effect for uncompleted items */}
                  {!item.completed && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl -z-10 bg-gradient-to-r from-rose-300/30 to-purple-300/30 blur-lg"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    />
                  )}
                </div>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Motivational message */}
        <motion.div variants={itemVariants} className="mt-12 text-center">
          <p className="text-slate-600 font-sans italic">
            "Every dream we chase together is a story we'll cherish forever. Let's write our adventure."
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
