'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AthleteImage() {
  const { language } = useLanguage()

  return (
    <section className="bg-black py-6 md:py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Image - smaller size */}
          <Image
            src="/nagahara_achieve.png"
            alt="Wakana Nagahara with Achieve product"
            width={400}
            height={500}
            className="w-48 md:w-64 rounded-lg object-contain"
            priority
          />
          
          {/* Athlete Info */}
          <div className="mt-6 text-center">
            <h3 className="text-lg md:text-2xl font-bold text-[#25c760] mb-1">
              {language === 'JP' ? '長原 和可菜' : 'Wakana Nagahara'}
            </h3>
            <p className="text-sm md:text-base text-green-400 font-semibold mb-3">
              {language === 'JP' ? 'バドミントン世界選手権 2連覇' : '2-TIME WORLD BADMINTON CHAMPION'}
            </p>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-lg">
              {language === 'JP' 
                ? '北海道十勝出身のバドミントン選手。BWF世界選手権女子ダブルスで2年連続金メダル獲得（2018年、2019年）。「ナガマツペア」として世界の舞台で活躍し、東京・パリと2大会連続でオリンピックに出場。地元十勝の誇りとして、スポーツを通じた地域貢献にも積極的に取り組んでいる。'
                : 'Badminton player from Tokachi, Hokkaido. Won gold medals in Women\'s Doubles at the BWF World Championships for two consecutive years (2018, 2019). Competed on the world stage as part of the "Naga-Matsu pair" and participated in two consecutive Olympics in Tokyo and Paris. Actively contributes to the community through sports as the pride of her hometown Tokachi.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
