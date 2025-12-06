"use client"

import { useState } from "react"
import ScrollProgressBar from "@/components/scroll-progress-bar"
import HeroSection from "@/components/sections/hero-section"
import TimelineSection from "@/components/sections/timeline-section"
import BentoGrid from "@/components/sections/bento-grid"
import LiveCounter from "@/components/sections/live-counter"
import SurpriseSection from "@/components/sections/surprise-section"
import FloatingBackground from "@/components/floating-background"
import VinylPlayer from "@/components/sections/vinyl-player"
import StarMap from "@/components/sections/star-map"
import BucketList from "@/components/sections/bucket-list"

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <FloatingBackground />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <TimelineSection />
        <BentoGrid />
        <LiveCounter meetingDate={new Date("2024-02-18")} />
        <VinylPlayer />
        <StarMap />
        <BucketList />
        <SurpriseSection onShowSurprise={() => setShowSurprise(!showSurprise)} />
      </div>
    </main>
  )
}
