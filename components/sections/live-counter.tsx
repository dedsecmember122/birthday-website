"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface LiveCounterProps {
  meetingDate: Date
}

export default function LiveCounter({ meetingDate }: LiveCounterProps) {
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now.getTime() - meetingDate.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeData({ days, hours, minutes, seconds })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)
    return () => clearInterval(interval)
  }, [meetingDate])

  const CounterBox = ({
    value,
    label,
  }: {
    value: number
    label: string
  }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
    >
      <motion.div
        key={value}
        animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 mb-2"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <p className="text-sm md:text-base font-sans text-slate-600 uppercase tracking-wider">{label}</p>
    </motion.div>
  )

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Frosted glass background */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl" />

          {/* Content */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-12 md:p-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-slate-800"
            >
              Time Since We Met
            </motion.h2>

            <p className="text-center text-slate-600 font-sans mb-12">Every moment with you is precious</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              <CounterBox value={timeData.days} label="Days" />
              <CounterBox value={timeData.hours} label="Hours" />
              <CounterBox value={timeData.minutes} label="Minutes" />
              <CounterBox value={timeData.seconds} label="Seconds" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
