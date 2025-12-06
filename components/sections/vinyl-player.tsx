"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const songs = [
  {
    id: 1,
    title: "Our Song",
    artist: "For You",
    src: "/music/music3.mp3" 
  },
  {
    id: 2,
    title: "Romantic Memories",
    artist: "Special Moments",
    src: "/music/music2.mp3"
  },
  {
    id: 3,
    title: "First Date",
    artist: "Sweet Memories",
    src: "/music/music1.mp3"
  }
]

export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioProgress, setAudioProgress] = useState(0)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length)
    setIsPlaying(false)
  }

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length)
    setIsPlaying(false)
  }

  const selectSong = (index: number) => {
    setCurrentSongIndex(index)
    setIsPlaying(false)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      setAudioProgress((audio.currentTime / audio.duration) * 100)
    }

    audio.addEventListener("timeupdate", updateProgress)
    return () => audio.removeEventListener("timeupdate", updateProgress)
  }, [])

  // Audio visualizer bars
  const bars = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    height: Math.random() * 60 + 20,
  }))

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/20 via-purple-100/10 to-rose-100/20" />

      <motion.div
        className="relative z-10 max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500"
        >
          Our Soundtrack
        </motion.h2>

        <motion.p variants={itemVariants} className="text-center text-slate-600 text-lg mb-16 font-sans">
          Music captures moments words can't express
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Vinyl Record */}
          <motion.div
            variants={itemVariants}
            className="relative flex-shrink-0"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isPlaying ? { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" } : { duration: 0 }}
          >
            {/* Vinyl record */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-slate-800 to-black shadow-2xl">
              {/* Grooves */}
              <motion.div className="absolute inset-4 rounded-full border-8 border-slate-700/50" />
              <motion.div className="absolute inset-8 rounded-full border-4 border-slate-600/30" />

              {/* Center label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 shadow-lg flex flex-col items-center justify-center text-white">
                  <p className="text-xs font-sans font-bold text-center">{songs[currentSongIndex].title}</p>
                  <p className="text-lg font-serif font-bold">♪</p>
                </div>
              </div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            {/* Play button overlay */}
            <motion.button
              onClick={handlePlayPause}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-rose-400 to-pink-500 flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-shadow z-10"
            >
              {isPlaying ? "❚❚" : "▶"}
            </motion.button>
          </motion.div>

          {/* Controls and Visualizer */}
          <motion.div variants={itemVariants} className="flex-1 w-full lg:w-auto">
            {/* Frosted glass card */}
            <div className="bg-white/30 backdrop-blur-2xl rounded-3xl border border-white/40 p-8 shadow-xl">
              {/* Audio Visualizer */}
              <div className="flex items-end justify-center gap-2 h-32 mb-8 bg-gradient-to-t from-rose-100/30 to-transparent rounded-2xl p-4">
                {bars.map((bar) => (
                  <motion.div
                    key={bar.id}
                    className="w-2 bg-gradient-to-t from-rose-400 to-pink-300 rounded-full"
                    animate={
                      isPlaying
                        ? {
                            height: [bar.height, Math.random() * 80 + 10, bar.height],
                          }
                        : { height: bar.height }
                    }
                    transition={{
                      duration: 0.3,
                      repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                      delay: bar.id * 0.05,
                    }}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
                    style={{ width: `${audioProgress}%` }}
                  />
                </div>
              </div>

              {/* Song title */}
              <div className="text-center mb-6">
                <p className="font-serif text-lg text-slate-700">{songs[currentSongIndex].title}</p>
                <p className="font-sans text-sm text-slate-500">{songs[currentSongIndex].artist}</p>
              </div>

              {/* Playlist Navigation */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <motion.button
                  onClick={prevSong}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  ⏮️
                </motion.button>
                <span className="text-sm text-slate-600 font-sans">
                  {currentSongIndex + 1} / {songs.length}
                </span>
                <motion.button
                  onClick={nextSong}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  ⏭️
                </motion.button>
              </div>

              {/* Play button */}
              <motion.button
                onClick={handlePlayPause}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-sans font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {isPlaying ? "Pause Music 🎵" : `Play ${songs[currentSongIndex].title} 🎵`}
              </motion.button>

              <audio
                ref={audioRef}
                src={songs[currentSongIndex].src}
                onEnded={() => {
                  setIsPlaying(false)
                  nextSong()
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
