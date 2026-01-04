'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import CountdownTimer from '@/components/CountdownTimer'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { t } = useLanguage()
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date('2025-11-11T11:00:00Z') // UTC time

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        setCountdown('Launched!')
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
    }

    updateCountdown() // Initial update
    const interval = setInterval(updateCountdown, 1000) // Update every second

    return () => clearInterval(interval) // Cleanup on unmount
  }, [])
  const scrollToDetails = () => {
    const element = document.getElementById('project-overview')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToToken = () => {
    const element = document.getElementById('token')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadWhitepaper = () => {
    const link = document.createElement('a')
    link.href = '/0912_whitepaper_ja.pdf'
    link.download = 'MOTHER_VEGETABLES_Whitepaper_JP.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-earth-regeneration-Dnk2z_VF.png"
          alt="Earth Regeneration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-24 md:pt-32 lg:pt-40">
        {/* Title Section - Single Component */}
        <div className="mb-4 relative">

          {/* Logo */}
          <div className="mb-2" style={{ position: 'relative', zIndex: 10 }}>
            <Image
              src="/mazavege_logo_midori.png"
              alt="Mother Vegetable Logo"
              width={100}
              height={100}
              className="mx-auto w-8 h-8 sm:w-20 sm:h-20 md:w-16 md:h-16"
              priority
            />
          </div>

          <div
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 2px 4px rgba(34, 197, 94, 0.2))',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <h1 className="text-xs sm:text-lg md:text-base lg:text-lg font-semibold leading-tight">
              <div>MOTHER VEGETABLE PROJECT</div>
            </h1>
          </div>

          <div className="w-32 md:w-32 h-0.5 md:h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-2 opacity-80"></div>

        </div>

        {/* Video and Profile Section - Between title and description */}
        {/* Previous positions saved:
            Mobile: top: '-80px', right: '-40px' (video block), bottom: '-5px', right: '5px' (photo)
            PC: top: '-100px', right: '-70%' (video block), bottom: '-35px', right: '-20px' (photo)
        */}
        
        {/* Mobile version */}
        <div className="block md:hidden flex flex-col items-center mt-6 mb-10">
          <div style={{ position: 'relative' }}>
            {/* Nagahara image - main circle */}
            <div
              style={{
                width: '260px',
                height: '260px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src="/nagahara_2.png"
                  alt="Nagahara"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Blur ring overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-5px',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  WebkitMaskImage: 'radial-gradient(circle, transparent 45%, black 70%)',
                  maskImage: 'radial-gradient(circle, transparent 45%, black 70%)',
                }}
              />
            </div>

            {/* Video - top right of photo (moved down) */}
            <div
              style={{
                position: 'absolute',
                top: '10px',
                right: '-35px',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <video
                src="/mv.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '110%',
                  height: '110%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </div>
          {/* Name, title and profile below the photo */}
          <div className="mt-3 text-center">
            <p className="text-white leading-tight">
              <span className="text-lg font-medium">{t({ JP: '永原 和可那', EN: 'Wakana Nagahara' })}</span><br />
              <span className="text-green-400 text-sm">{t({ JP: '世界選手権2連覇', EN: '2x World Champion' })}</span>
            </p>
            <p className="text-[10px] text-gray-300 mt-2 leading-relaxed max-w-[280px]">
              {t({ JP: '北海道十勝出身のバドミントン選手', EN: 'Badminton player from Tokachi, Hokkaido' })}<br />
              {t({ JP: 'BWF世界選手権女子ダブルス2連覇（2018・2019）', EN: 'BWF World Championships Women\'s Doubles 2-time gold (2018, 2019)' })}<br />
              {t({ JP: '「ナガマツペア」として東京・パリ五輪に連続出場', EN: 'Competed in Tokyo & Paris Olympics as "Naga-Matsu pair"' })}
            </p>
          </div>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex flex-col items-center mt-8 mb-12">
          <div style={{ position: 'relative' }}>
            {/* Nagahara image - main circle */}
            <div
              style={{
                width: '420px',
                height: '420px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src="/nagahara_2.png"
                  alt="Nagahara"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
              {/* Blur ring overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  WebkitMaskImage: 'radial-gradient(circle, transparent 45%, black 70%)',
                  maskImage: 'radial-gradient(circle, transparent 45%, black 70%)',
                }}
              />
            </div>

            {/* Video - top right of photo (moved down) */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                right: '-50px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <video
                src="/mv.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: '110%',
                  height: '110%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          </div>
          {/* Name, title and profile below the photo */}
          <div className="mt-4 text-center">
            <p className="text-white leading-tight">
              <span className="text-xl font-medium">{t({ JP: '永原 和可那', EN: 'Wakana Nagahara' })}</span><br />
              <span className="text-green-400 text-base">{t({ JP: 'バドミントン世界選手権 2連覇', EN: '2-Time World Badminton Champion' })}</span>
            </p>
            <p className="text-xs text-gray-300 mt-3 leading-relaxed max-w-[400px]">
              {t({ JP: '北海道十勝出身のバドミントン選手', EN: 'Badminton player from Tokachi, Hokkaido' })}<br />
              {t({ JP: 'BWF世界選手権女子ダブルス2連覇（2018・2019）', EN: 'BWF World Championships Women\'s Doubles 2-time gold (2018, 2019)' })}<br />
              {t({ JP: '「ナガマツペア」として東京・パリ五輪に連続出場', EN: 'Competed in Tokyo & Paris Olympics as "Naga-Matsu pair"' })}
            </p>
          </div>
        </div>

        {/* Description - Not in Box */}
        <div className="max-w-4xl mx-auto mb-2 px-4">
          <div className="space-y-3">
            <p className="text-xs md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '35億年前の地球のはじまりの植物',
                EN: 'The vegetable from 3.5 billion years ago'
              })}
            </p>
            <p className="text-xs md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '「マザーベジタブル」',
                EN: '"Mother Vegetable"'
              })}
            </p>
            <p className="text-xs md:text-xl text-[#4ade80] leading-relaxed">
              {t({
                JP: '地球が生み出した生命力を、あなたに。',
                EN: "Earth's life force, for you."
              })}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
