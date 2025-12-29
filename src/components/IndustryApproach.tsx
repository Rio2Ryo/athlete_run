'use client'

export default function IndustryApproach() {
  const certifications = [
    { id: 1, src: '/partner_1.png', alt: '100% Organic' },
    { id: 2, src: '/partner_2.png', alt: 'Certified Vegan' },
    { id: 3, src: '/partner_3.png', alt: 'GMP Quality' },
    { id: 4, src: '/partner_4.png', alt: 'Halal' },
    { id: 5, src: '/partner_5.png', alt: 'HACCP' },
    { id: 6, src: '/partner_6.png', alt: 'JFRL' },
  ]

  const trustItems = [
    { label: 'Achieve', text: '厚生労働省からヒューマングレードの食品として認定されています。' },
    { label: 'Confidence', text: '厚生労働省から化粧品や医薬部外品原料規格として認定されています。' },
    { label: 'Forever', text: '農林水産省からペットフードグレードとして認定されています。' },
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
          Our Trust
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Certification Logos */}
        <div className="flex justify-center items-center gap-2 md:gap-10 mb-6 md:mb-12">
          {certifications.map((cert) => (
            <img
              key={cert.id}
              src={cert.src}
              alt={cert.alt}
              className="h-10 md:h-24 w-auto object-contain"
            />
          ))}
        </div>

        {/* Trust Text */}
        <div className="space-y-3 md:space-y-1 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="text-[10px] md:text-base">
              <p className="text-green-400 font-semibold md:inline md:mr-4">{item.label}</p>
              <p className="text-gray-300 md:inline">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

