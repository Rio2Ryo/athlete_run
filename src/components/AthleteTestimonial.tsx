'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AthleteTestimonial() {
  const { language } = useLanguage()

  const paragraphs = language === 'JP'
    ? [
        'マザーベジタブルに触れて最初に感じたのは、これは日本だけでなく、世界が抱える課題そのものに向き合っているプロジェクトだということでした。',
        '競技のためだけではなく、もっと大きな視点で意味を持つ取り組みだと感じました。',
        '実際に使ってみると、すべてオーガニックでありながら、体への実感がしっかりある。安心して使えるのはもちろん、効果効能の面でも「これは本物だな」と素直に思えました。',
        'だからこそ今は、自分が関わっている子どもたちや、日々競技に向き合っているスポーツ選手に、心から勧めたいと感じています。競技力の向上だけでなく、将来の身体や環境のことまで考えたとき、マザーベジタブルは本当に価値のある選択だと思います。'
      ]
    : [
        'The first thing I felt when I encountered Mother Vegetable was that this project is not only about Japan, but about addressing challenges faced by the world as a whole.',
        "It’s not something meant solely for competition—I felt it carries meaning from a much broader, more meaningful perspective.",
        'After actually using it, I was impressed by how it is completely organic yet delivers a clear, tangible effect on the body. It’s safe to use, and honestly, I felt, “This is the real thing.',
        "That’s why I truly recommend Mother Vegetable to young athletes— for performance, long-term health, and the future."
      ]

  return (
    <section className="py-5 md:py-5 bg-black">
      <div
        className="mx-auto px-4 md:px-8 py-8 md:py-12 w-[97%] md:w-[90%]"
        style={{
          maxWidth: '1500px',
          border: '2px solid #25c760',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <h2
          className="text-xl md:text-5xl font-bold text-center mb-2 md:mb-4"
          style={{ color: '#25c760' }}
        >
          Voice
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Testimonial with image */}
        <div className="max-w-4xl mx-auto">
          {/* Image */}
          <div className="mb-6 rounded-lg overflow-hidden">
            <Image
              src="/voice_image.png"
              alt={language === 'JP' ? '故郷と自然への想い' : 'Connection to hometown and nature'}
              width={800}
              height={450}
              className="w-full h-auto"
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Comment - paragraphs */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Name */}
          <div className="mt-6 text-right">
            <p className="text-[#25c760] text-sm md:text-base font-semibold">
              {language === 'JP' ? '伊藤 友広' : 'Tomohiro Ito'}
            </p>
            <p className="text-gray-400 text-[10px] md:text-xs">
              {language === 'JP' ? 'オリンピアン / プロスプリントコーチ' : 'Olympian / Professional Sprint Coach'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
