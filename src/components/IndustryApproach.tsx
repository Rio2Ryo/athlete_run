'use client'

export default function IndustryApproach() {
  const products = [
    {
      id: 1,
      video: '/achieve_video.mp4',
      title: 'Achieve',
      subtitle: 'for Body',
      label: "'TORIKOMU'",
      description: '一度に48種類の栄養摂取',
      features: [
        '腸内環境を改善、全身の細胞が再生',
        '便秘・睡眠改善、ダイエット効果',
      ],
      howToUse: "1スティックを飲み物や食事に'TORIKOMU'",
      detailLink: '#',
      shopLink: '#',
    },
    {
      id: 2,
      video: '/confidence_v2.mp4',
      title: 'Confidence',
      subtitle: 'for Skin',
      label: "'MAZEKOMU'",
      description: '肌に必要な栄養を直接届ける',
      features: [
        '肌のハリ・ツヤを改善',
        'シミ・シワ予防、美白効果',
      ],
      howToUse: "化粧水や美容液に'MAZEKOMU'",
      detailLink: '#',
      shopLink: '#',
    },
    {
      id: 3,
      video: '/forever_video.mp4',
      title: 'Forever',
      subtitle: 'for Pet',
      label: "'SURIKOMU'",
      description: '頭皮と髪に栄養を浸透',
      features: [
        '頭皮環境を改善、発毛促進',
        '髪のボリューム・ツヤを向上',
      ],
      howToUse: "シャンプーやトリートメントに'SURIKOMU'",
      detailLink: '#',
      shopLink: '#',
    },
  ]

  const trustItems = [
    { label: "'TORIKOMU'", text: 'means of having in Japanese as 「取り込む」' },
    { label: "'MAZEKOMU'", text: 'means of mixing in Japanese as 「混ぜ込む」' },
    { label: "'SURIKOMU'", text: 'means of rubbing in Japanese as 「擦り込む」' },
  ]

  return (
    <section className="py-10 md:py-20 bg-black">
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
          className="text-2xl md:text-5xl font-bold text-center mb-2 md:mb-4"
          style={{ color: '#25c760' }}
        >
          Products
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg p-3 md:p-6"
              style={{ border: '1px solid #25c760' }}
            >
              {/* Mobile: Horizontal Layout / Desktop: Vertical Layout */}
              <div className="flex flex-row md:flex-col gap-3 md:gap-0">
                {/* Video */}
                <div className="flex-shrink-0 md:mb-4 md:flex md:justify-center">
                  <video
                    src={product.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-24 h-32 md:w-28 md:h-52 object-cover rounded-lg"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col">
                  {/* Title & Shop Link Row */}
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-lg md:text-3xl font-bold" style={{ color: '#25c760' }}>
                        {product.title}
                      </h3>
                      <p className="text-red-600 text-xs md:text-sm">{product.subtitle}</p>
                    </div>
                                      </div>

                  {/* Label & Description */}
                  <p className="text-red-600 font-semibold text-xs md:text-sm">{product.label}</p>
                  <p className="text-white text-[10px] md:text-sm mb-2">{product.description}</p>

                  {/* Features */}
                  <div className="space-y-1 mb-2">
                    {product.features.map((feature, idx) => (
                      <p key={idx} className="text-gray-300 text-xs md:text-xl flex items-start">
                        <span className="text-green-400 mr-1 md:mr-2">✓</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  {/* How to use */}
                  <div className="mb-2 md:mt-10 md:mb-4">
                    <p className="text-green-400 font-semibold text-xs md:text-xl mb-1">How to use</p>
                    <p className="text-gray-300 text-[10px] md:text-sm flex items-start">
                      <span className="text-green-400 mr-1 md:mr-2">✓</span>
                      {product.howToUse}
                    </p>
                  </div>

                                  </div>
              </div>

                          </div>
          ))}
        </div>

        {/* Trust Text */}
        <div className="space-y-3 md:space-y-2 text-center mt-8 md:mt-12">
          {trustItems.map((item, index) => (
            <div key={index} className="text-[10px] md:text-base">
              <span className="text-red-400 font-semibold mr-4">{item.label}</span>
              <span className="text-gray-300">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

