'use client'

import { useState, useRef } from 'react'

// Before/After比較スライダーコンポーネント
function CompareSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth || '100%' }}
          draggable={false}
        />
      </div>
      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      />
      {/* Slider Handle */}
      <div
        className="absolute top-1/2 w-10 h-10 bg-[#25c760] rounded-full flex items-center justify-center cursor-ew-resize border-2 border-white"
        style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <span className="text-white text-sm">⟷</span>
      </div>
    </div>
  )
}

export default function IndustryApproach() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Before/Afterデータ
  const beforeAfterData = [
    {
      title: '50代女性・3週間後',
      description: '年を重ねるにつれて頬のシミが気になっていたのですが、3週間ほど塗い続けると、シミが目立たなくなり、肌もトーンアップして自信を持てるようになりました。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '頬のシミが目立ち、メイク崩れも気になっていた。',
      afterText: 'シミが目立たなくなり、自然なトーンアップを実現。メイクの持ちも良くなった。',
    },
    {
      title: '80代女性・1ヶ月後',
      description: 'ずっと治らなかったシミが、1ヶ月間塗り込んで使用すると徐々に薄くなり、大きなシミは気にならなくなりました。年を重ねても、Confidenceで適切にケアすれば改善するのを実感しました。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '腕にある複数のシミがずっと治らなかった。',
      afterText: '大きなシミは完全に消えて、全体的にシミの色が薄くなった。',
    },
    {
      title: '40代女性・3日後',
      description: '処方クリームに混ぜて使い始めると、3日後にはひび割れがなくなって、赤みが目立たなくなってきました。かゆみも少なくなって、今はすごく快適です。これからも使い続けます。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '乾燥による痒みやカサつきに悩んでいた。',
      afterText: '痒みがおさまり、カサつきもなくなったので快適そうです。',
    },
    {
      title: '10歳男の子・10日後',
      description: 'カサつきと痒みに悩んでいましたが、ステロイドを使うのは避けたかったので、Confidenceでケアをしていました。すると、わずか10日で痒みやカサつきが治まり、今はすごく快適そうです。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '乾燥による痒みやカサつきに悩んでいた。',
      afterText: '痒みがおさまり、カサつきもなくなったので快適そうです。',
    },
    {
      title: '5歳男の子・2日後',
      description: '硬水の刺激や乾燥で赤みが出ていましたが、ハンドクリームと一緒に使い始めると、たった2日で目に見えて症状が治まりました。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '手首から手の甲にかけて目に見える赤みと乾燥。',
      afterText: '赤みがなくなり、乾燥も抑えられました。',
    },
    {
      title: '50代女性・10時間後',
      description: '寝る前にConfidenceを塗り、翌朝確認すると、たった10時間なのに炎症がかなり抑えられて、赤みも少なくなっていて驚きました。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '怪我による炎症とかさぶた。',
      afterText: 'Confidenceを塗布後わずか10時間で炎症がかなり抑えられました。',
    },
    {
      title: '50代女性・2日後',
      description: '1ヶ月以上治らなかったやけどの痕が、2日も経たない間に傷跡が薄くなって、赤みも少なくなりました。',
      beforeImage: '/before6.png',
      afterImage: '/after6.png',
      beforeText: '1ヶ月間改善しなかった腕のやけどや赤み、乾燥に悩まされていた。',
      afterText: 'わずか2日で傷跡が目に見えて改善した。',
    },
  ]

  const nutrients = [
    { name: 'ミネラル', count: '9種類' },
    { name: 'ビタミン', count: '10種類' },
    { name: 'アミノ酸', count: '18種類' },
    { name: '脂肪酸', count: '3種類' },
    { name: 'その他機能性成分', nameMobile: ['その他機能性', '成分'], count: '9種類' },
  ]

  const nutrientsList = 'カリウム・ナトリウム・マグネシウム・カルシウム・リン・鉄・マンガン・亜鉛・銅・ビタミンA・B1・B2・B3・B5・B6・B9・C・E・K・トリプトファン・スレオニン・ロイシン・イソロイシン・リシン・メチオニン・フェニルアラニン・バリン・ヒスチジン・アルギニン・システイン・チロシン・アラニン・アスパラギン酸・グルタミン酸・セリン・グリシン・プロリン・飽和脂肪酸・オメガ3脂肪酸・オメガ6脂肪酸・C-フィコシアニン・クロロフィルa・総カロテノイド・核酸・スピルラン・グリコーゲン様多糖・β-グルカン様多糖・セルロース'

  const categories = [
    {
      title: 'チルドレン',
      image: '/children.png',
      benefits: ['集中力向上', '学習能力向上', '骨の成長サポート', '免疫力向上', '食欲向上'],
    },
    {
      title: 'アダルト',
      image: '/alduts.png',
      benefits: ['便秘・消化不良改善', '睡眠の質向上', '疲れの軽減', '細胞老化・炎症の抑制', 'ダイエット'],
    },
    {
      title: 'シニア',
      image: '/seniors.png',
      benefits: ['睡眠の質向上', '血液循環の改善', '食欲向上・栄養補給', '内臓機能のサポート'],
    },
    {
      title: 'アスリート',
      image: '/athletes.png',
      benefits: ['添加物のデトックス', '筋肉疲労回復・持続力向上', '効率的な栄養補給', '炎症回復・抑制', 'トレーニング効果の向上'],
    },
    {
      title: 'ドッグ',
      image: '/dog.png',
      benefits: ['涙やけの改善', '糞尿のにおい改善', '食欲増強', '腸内環境の改善', '深い睡眠', '体臭改善'],
    },
    {
      title: 'キャット',
      image: '/cat.png',
      benefits: ['涙やけの改善', '糞尿のにおい改善', '食欲増強', '腸内環境の改善', '深い睡眠', '体臭改善'],
    },
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
          Food Function
        </h2>

        {/* Subtitle */}
        <p className="text-center text-white text-base md:text-xl mb-4">
          Achieve / Forever
        </p>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-8 opacity-80"></div>

        {/* TORIKOMU / MAZEKOMU */}
        <p className="text-center text-red-600 text-xs md:text-sm mb-2 font-semibold">
          TORIKOMU / MAZEKOMU
        </p>

        {/* Food Video */}
        <div className="flex justify-center">
          <video
            src="/food_video.mov"
            autoPlay
            loop
            muted
            playsInline
            className="h-24 md:h-24 w-auto object-contain rounded-lg"
          />
        </div>

        {/* Bracket Image */}
        <div className="flex justify-center mb-4 md:mb-6">
          <img
            src="/bracket_v2.png"
            alt="Bracket"
            className="w-full max-w-2xl object-contain"
          />
        </div>

        {/* Nutrient Section Container */}
        <div className="max-w-3xl mx-auto px-0 md:px-4">
          {/* Nutrient Circles */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            {nutrients.map((nutrient, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: '#4a9d7c' }}
              >
                {nutrient.nameMobile ? (
                  <>
                    {/* Mobile: 3 lines */}
                    <span className="text-white text-[8px] font-medium leading-tight md:hidden">
                      {nutrient.nameMobile[0]}
                    </span>
                    <span className="text-white text-[8px] font-medium leading-tight md:hidden">
                      {nutrient.nameMobile[1]}
                    </span>
                    <span className="text-white text-[8px] md:hidden">
                      {nutrient.count}
                    </span>
                    {/* Desktop: 2 lines */}
                    <span className="text-white text-base font-medium leading-tight hidden md:block">
                      {nutrient.name}
                    </span>
                    <span className="text-white text-base hidden md:block">
                      {nutrient.count}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-white text-[8px] md:text-base font-medium leading-tight">
                      {nutrient.name}
                    </span>
                    <span className="text-white text-[8px] md:text-base">
                      {nutrient.count}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* 48 Nutrients Title */}
          <h3
            className="text-lg md:text-3xl font-bold text-center mb-4 md:mb-6"
            style={{ color: '#25c760' }}
          >
            48 Nutrients
          </h3>

          {/* Nutrients List */}
          <p className="text-gray-300 text-[10px] md:text-base text-center leading-relaxed">
            {nutrientsList}
          </p>
        </div>

        {/* Skin Section */}
        <div className="mt-12 md:mt-16">
          {/* Description Text */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <p className="text-white text-sm md:text-lg leading-relaxed">
              世界の医療機関にて医薬品として手術後の傷の修復、
            </p>
            <p className="text-white text-sm md:text-lg leading-relaxed">
              やけど跡の改善、がんの治療、肌のテカりなどに使用されている
            </p>
            <p className="text-white text-sm md:text-lg leading-relaxed">
              医薬部外品認定マザーベジタブルによる肌の治癒が可能。
            </p>
          </div>

          {/* Skin Video */}
          <div className="flex justify-center mb-6 md:mb-8">
            <video
              src="/skin.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-3xl object-contain rounded-lg"
            />
          </div>

          {/* Before & After Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-8 py-3 border-2 border-[#25c760] text-[#25c760] rounded-lg hover:bg-[#25c760] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <span>✓</span>
              <span>Before & After</span>
            </button>
          </div>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-2 md:p-4"
            style={{ zIndex: 9999 }}
            onClick={() => setIsPopupOpen(false)}
          >
            <div
              className="bg-black border-2 border-[#25c760] rounded-lg w-full max-w-5xl max-h-[95vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 flex justify-end p-2 bg-black z-10">
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="text-[#25c760] hover:text-green-400 text-2xl px-2"
                >
                  ✕
                </button>
              </div>

              {/* Header */}
              <div className="text-center pb-6 px-4">
                <h2 className="text-white text-2xl md:text-4xl font-bold mb-2">Confidence</h2>
                <p className="text-[#25c760] text-sm md:text-lg">Before & After</p>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-4 pb-6">
                {beforeAfterData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#25c760] rounded-lg p-4"
                  >
                    {/* Card Title */}
                    <h3 className="text-[#25c760] text-base md:text-lg font-bold mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-xs md:text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Compare Slider */}
                    <div className="mb-4">
                      <CompareSlider
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                      />
                    </div>

                    {/* Before/After Labels */}
                    <div className="flex justify-center gap-2 mb-4">
                      <span className="px-5 py-1.5 bg-[#1a1a1a] text-white text-xs md:text-sm rounded border border-gray-600">
                        Before
                      </span>
                      <span className="px-5 py-1.5 bg-[#1a1a1a] text-white text-xs md:text-sm rounded border border-gray-600">
                        After
                      </span>
                    </div>

                    {/* Before Text */}
                    <div className="bg-[#0d1f1a] border-l-2 border-[#25c760] p-4 mb-3 rounded-r">
                      <h4 className="text-[#25c760] text-sm font-bold mb-2">Before</h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.beforeText}</p>
                    </div>

                    {/* After Text */}
                    <div className="bg-[#0d1f1a] border-l-2 border-[#25c760] p-4 rounded-r">
                      <h4 className="text-[#25c760] text-sm font-bold mb-2">After</h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{item.afterText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
