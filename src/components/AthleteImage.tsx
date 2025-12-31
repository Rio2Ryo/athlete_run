'use client'

import Image from 'next/image'

export default function AthleteImage() {
  return (
    <section className="bg-black py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src="/nagahara_achieve.png"
            alt="Athlete with Achieve product"
            width={800}
            height={1000}
            className="w-full max-w-md md:max-w-lg rounded-lg object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
