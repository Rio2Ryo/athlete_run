'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectOverview() {
  const { t } = useLanguage()
  return (
    <section id="project-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm mb-12">
            {t({ JP: '1. エグゼクティブサマリー', EN: '1. Executive Summary' })}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t({ JP: '２つのオンリーワン', EN: 'Two Only Ones' })}
          </h2>
          <div className="text-xs md:text-base text-gray-300 max-w-5xl mx-auto">
            {/* Desktop View */}
            <p className="hidden md:block leading-[2] whitespace-pre-line">
              {t({
                JP: `MOTHER VEGETABLE PROJECTは\n2つのオンリーワン事業を中心として地球とすべての生命の回復・修正を目指す画期的なプロジェクトです。\n\nこのプロセスにおいて、各施設は24時間365日CO2を吸収し酸素を生成することで大気を浄化し、\n同時に生成されるマザーベジタブル製品および魚貝類の養殖業により、人間と生物の健康向上に貢献します。\n\nまたその施設を世界各地に展開することで、さらに8つの産業分野に発展します。`,
                EN: `The MOTHER VEGETABLE PROJECT is\na groundbreaking project that aims to restore and revitalize the Earth and all life,\ncentered around two unique businesses.\n\nThrough this process, each facility purifies the atmosphere by absorbing CO₂\nand generating oxygen 24 hours a day, 365 days a year,\nwhile simultaneously contributing to improving the health of humans\nand living organisms through Mother Vegetable products and aquaculture of fish and shellfish.\n\nFurthermore, by expanding these facilities around the world,\nit will develop into eight additional industrial sectors.`
              })}
            </p>

            {/* Mobile View */}
            <p className="block md:hidden leading-[2] whitespace-pre-line">
              {t({
               JP: `MOTHER VEGETABLE PROJECTは\n2つのオンリーワン事業を中心として\n地球とすべての生命の回復・修正を目指す\n画期的なプロジェクトです。\n\nこのプロセスにおいて、\n各施設は24時間365日CO2を吸収し\n酸素を生成することで大気を浄化し、\n同時に生成されるマザーベジタブル製品\nおよび魚貝類の養殖業により、\n人間と生物の健康向上に貢献します。\n\nまたその施設を世界各地に展開することで、\nさらに8つの産業分野に発展します。`,
                EN: `The MOTHER VEGETABLE PROJECT is\na groundbreaking project that aims to restore\nand revitalize the Earth and all life,\ncentered around two unique businesses.\n\nThrough this process,\neach facility purifies the atmosphere\nby absorbing CO₂ and generating oxygen\n24 hours a day, 365 days a year,\nwhile simultaneously contributing to\nimproving the health of humans\nand living organisms through\nMother Vegetable products\nand aquaculture of fish and shellfish.\n\nFurthermore, by expanding\nthese facilities around the world,\nit will develop into\neight additional industrial sectors.`
              })}
            </p>
          </div>
        </div>

        {/* Main Content - Single Block */}
        <div className="bg-gray-900/50 backdrop-blur-md border border-green-500/20 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - 01 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0  opacity-50"></div>
                  <div className="relative px-6 py-3">
                    <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Ⅰ</span>
                  </div>
                </div>
              </div>
              
              {/* 地球最初の生命体とは */}
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg flex-grow">
                <div className="flex justify-center my-6">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/mazavege.png"
                      alt="マザーベジタブル"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className="text-gray-300 leading-[1.9] whitespace-pre-line mb-4 text-sm md:text-base">
                  {t({
                    JP: `地球最初の生命が人類にまで至っている進化を研究した結果
以下のものを創生することが可能となる。`,
                    EN: `As a result of researching the evolution from Earth's first life forms to humanity,
the following can be created:`
                  })}
                </p>

                <div className="space-y-2">
                  <p className="text-green-400 font-semibold text-sm md:text-base">{t({ JP: '①食品', EN: '①Food' })}</p>
                  <p className="text-white text-sm md:text-base">{t({ JP: '1つの生命体から人類に必要な48種類の栄養素を含む食品。', EN: 'Food containing 48 types of nutrients necessary for humanity from a single life form' })}</p>

                  <p className="text-green-400 font-semibold text-sm md:text-base">{t({ JP: '②スキンケア', EN: '②Skincare' })}</p>
                  <p className="text-white text-sm md:text-base">{t({ JP: '皮膚の再生に効果のあるスキンケア。', EN: 'Skincare products effective for skin regeneration' })}</p>

                  <p className="text-green-400 font-semibold text-sm md:text-base">{t({ JP: '③魚貝類の養殖', EN: '③Aquaculture' })}</p>
                  <p className="text-white text-sm md:text-base">{t({ JP: '化学物質を一切使用しない高タンパク質の魚貝類の養殖。', EN: 'Aquaculture of high-protein fish and shellfish without using any chemicals' })}</p>
                </div>
              </div> 
             

             
            </div>

            {/* Right Section - 02 */}
            <div className="flex flex-col">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 opacity-50"></div>
                  <div className="relative px-6 py-3">
                    <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Ⅱ</span>
                  </div>
                </div>
              </div>

               {/* 驚異的なカーボンクレジット */}
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg flex-grow">
                <div className="flex flex-col md:flex-row justify-center gap-4 my-6">
                  <div className="w-full md:max-w-xs h-48 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/mv-factory-whole.jpg"
                      alt="MOTHER VEGETABLE培養システム"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:max-w-xs h-48 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/mv-factory-greenhouse.jpg"
                      alt="MOTHER VEGETABLEファクトリー建物"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-green-400 font-semibold text-sm md:text-base">{t({ JP: '①Carbon Rebirth', EN: '①Carbon Rebirth' })}</p>
                  <p className="text-white mb-3 text-sm md:text-base">{t({ JP: 'マザーベジタブル生産によるCO2の吸収（天然スギの700倍）およびO2の排出により小さな地球を再現。', EN: 'Recreating a small Earth through CO2 absorption (700 times that of natural cedar) and O2 emission by Mother Vegetable production' })}</p>

                  <p className="text-green-400 font-semibold text-sm md:text-base">{t({ JP: '②ZERO Carbon Energy', EN: '②ZERO Carbon Energy' })}</p>
                  <p className="text-white mb-3 text-sm md:text-base">{t({ JP: '外部電力、化石燃料などCO2を排出するエネルギーを一切使用しなく、小さな地球を再現。', EN: 'Recreating a small Earth without using any CO2-emitting energy such as external electricity and fossil fuels' })}</p>

                  <p className="text-green-400 font-semibold text-sm md:text-base">{t({ JP: '③カーボンクレジットの試算表', EN: '③Carbon Credit Estimation Table' })}</p>
                  <p className="text-white text-sm md:text-base">{t({ JP: 'SEF 1 unit / 26m x 16m x 10階建 は面積にすると約0.5 ヘクタールとなる。', EN: 'SEF 1 unit / 26m x 16m x 10 layers has an area of approximately 0.5 hectares' })}</p>
                
                <p className="leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {t({
                      JP: `一般的な0.5ヘクタールの天然スギのCO2吸収量は年間約4ton\nSEFはその700倍のCO2吸収量により年間約2,800tonとなる。`,
                      EN: `A typical 0.5 hectare natural cedar forest absorbs approximately 4 tons of CO2 per year\nSEF absorbs 700 times more CO2, resulting in approximately 2,800 tons per year`
                    })}
                  </p>
                  <p className="leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {t({
                      JP: `一般的なカーボンクレジットの価格は1tonあたり約4,000円\nSEFは2,800ton x 4,000円 = 11,200,000円 / 年 の収益性がある。`,
                      EN: `The typical carbon credit price is approximately 4,000 yen per ton\nSEF has profitability of 2,800 tons x 4,000 yen = 11,200,000 yen / year`
                    })}
                  </p>

                  <div className="mt-4 text-center">
                    <a
                      href="/download/carbon-credit"
                      className="text-white text-xs hover:text-green-400 transition-colors underline"
                    >
                      {t({
                        JP: '金融機関向けカーボンクレジット試算表',
                        EN: 'Carbon Credit Estimation Table for Financial Institutions'
                      })}
                    </a>
                  </div>

                </div>

                
              </div>

            </div>
            
          </div>
         
        </div>


      </div>
    </section>
  )
}