'use client'

export default function IndustryApproach() {
  const nutrients = [
    { name: 'ミネラル', count: '9種類' },
    { name: 'ビタミン', count: '10種類' },
    { name: 'アミノ酸', count: '18種類' },
    { name: '脂肪酸', count: '3種類' },
    { name: 'その他機能性成分', count: '9種類' },
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
        <p className="text-center text-white text-sm md:text-xl mb-4">
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
            className="w-[80%] md:w-[60%] max-w-2xl object-contain"
          />
        </div>

        {/* Nutrient Section Container */}
        <div className="max-w-3xl mx-auto px-2 md:px-4">
          {/* Nutrient Circles */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            {nutrients.map((nutrient, index) => (
              <div
                key={index}
                className="w-14 h-14 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center text-center"
                style={{ backgroundColor: '#4a9d7c' }}
              >
                <span className="text-white text-[7px] md:text-sm font-medium leading-tight">
                  {nutrient.name}
                </span>
                <span className="text-white text-[7px] md:text-sm">
                  {nutrient.count}
                </span>
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
          <p className="text-gray-300 text-[10px] md:text-sm text-center leading-relaxed">
            {nutrientsList}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-16 px-4 md:px-12">
          {categories.map((category, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-6">
              {/* Silhouette Image */}
              <div className="flex-shrink-0 w-20 h-28 md:w-32 md:h-44">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(56%) sepia(52%) saturate(405%) hue-rotate(93deg) brightness(95%) contrast(87%)' }}
                />
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <h4
                  className="text-base md:text-2xl font-bold mb-1"
                  style={{ color: '#25c760' }}
                >
                  {category.title}
                </h4>
                <div className="w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent mb-3 md:mb-4"></div>
                <ul className="space-y-1 md:space-y-2">
                  {category.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="text-white text-xs md:text-base flex items-start"
                    >
                      <span className="mr-2 md:mr-3 text-white">●</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
