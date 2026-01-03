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
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 transition-all duration-1500 pt-40 md:pt-48 lg:pt-56">
        {/* Title Section - Single Component */}
        <div className="mb-12 relative">

          {/* Logo */}
          <div className="mb-6" style={{ position: 'relative', zIndex: 10 }}>
            <Image
              src="/mazavege_logo_midori.png"
              alt="Mother Vegetable Logo"
              width={140}
              height={140}
              className="mx-auto w-12 h-12 sm:w-32 sm:h-32 md:w-32 md:h-32"
              priority
            />
          </div>

          {/* Video, Image and Text Block - Positioned to the right */}
          {/* Mobile version */}
          <div
            className="block md:hidden"
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-30px',
              zIndex: 0,
            }}
          >
            {/* Circular Video */}
            <div
              style={{
                width: '130px',
                height: '130px',
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
                    display: 'block',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
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

            {/* Nagahara image - bottom right of video */}
            <div
              style={{
                position: 'absolute',
                bottom: '5px',
                right: '-10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '70px',
              }}
            >
              <Image
                src="/nagahara_2.png"
                alt="Nagahara"
                width={24}
                height={24}
                className="rounded"
                style={{ objectFit: 'cover' }}
              />
              {/* Text below image */}
              <p className="text-[4px] text-white mt-0.5 text-center leading-tight">
                <span className="text-[5px]">{t({ JP: '永原 和可那', EN: 'W. Nagahara' })}<br /></span>
                {t({
                  JP: '世界選手権2連覇',
                  EN: '2x World Champ'
                }).split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
          </div>

          {/* Desktop version */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-65%',
              zIndex: 0,
            }}
          >
            {/* Circular Video */}
            <div
              style={{
                width: '280px',
                height: '280px',
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
                    display: 'block',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
              {/* Blur ring overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  WebkitMaskImage: 'radial-gradient(circle, transparent 45%, black 70%)',
                  maskImage: 'radial-gradient(circle, transparent 45%, black 70%)',
                }}
              />
            </div>

            {/* Nagahara image and text - bottom right */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Image
                src="/nagahara_2.png"
                alt="Nagahara"
                width={50}
                height={50}
                className="rounded-lg"
                style={{ objectFit: 'cover' }}
              />
              <p className="text-[10px] text-white mt-1 text-center">
                <span className="text-[12px]">{t({ JP: '永原 和可那', EN: 'Wakana Nagahara' })}<br /></span>
                {t({
                  JP: 'バドミントン世界選手権\n2連覇',
                  EN: '2-TIME WORLD\nBADMINTON CHAMPION'
                }).split('\n').map((line, i) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </p>
            </div>
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
            <h1 className="text-sm sm:text-2xl md:text-3xl lg:text-3xl font-semibold leading-tight">
              <div>MOTHER VEGETABLE PROJECT</div>
            </h1>
          </div>

          <div className="w-40 md:w-48 h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-6 opacity-80"></div>

        </div>


        {/* Description - Not in Box */}
        <div className="max-w-4xl mx-auto mb-2 mt-8 md:mt-16 px-4">
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