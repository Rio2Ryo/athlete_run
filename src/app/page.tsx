'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProjectOverview from '@/components/ProjectOverview'
import IndustryApproach from '@/components/IndustryApproach'
import TeamMembers from '@/components/TeamMembers'
import Partners from '@/components/Partners'
import TokenInfo from '@/components/TokenInfo'
import News from '@/components/News'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}
      <main className="min-h-screen text-white relative">
        <Header />
        <Hero />
        <ProjectOverview />
        {/*<IndustryApproach />*/}
        {/*<TeamMembers />*/}
        {/*<Partners />*/}
        {/*<TokenInfo />*/}
        {/*<News />*/}
        {/*<FAQ />*/}
        <Footer />

        {/* Mazavege-chan Fixed GIF */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center">
          <img
            src="/mazavegechan.gif"
            alt="Mazavege-chan"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          />
          <div className="text-white text-xs text-center mt-2">
            <p>Mazavege-chan</p>
            <p>AI Agent</p>
            <p>Coming Soon!!</p>
          </div>
        </div>
      </main>
    </>
  )
}
