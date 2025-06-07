"use client"

// import { motion } from "framer-motion"
// import Link from "next/link"
import {
  NotePencil,
  Heartbeat,
  Wheelchair,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import HeroSlider from "@/components/content/top/HeroSlider";

const heroContent = {
  banner: "腰の痛み、膝の痛み、首の痛み、肩こり、坐骨神経痛、変形性膝関節症等",
  title: {
    main: "身体のことで悩まないような",
    sub: "人生をおくってもらいたい",
  },
  description: "痛みを少しでも取り除いて、<br />より豊かな人生を送ってもらえるように",
  features: [
    { text: "根本原因を突き止める丁寧な問診", icon: NotePencil },
    { text: "痛みを最小限に抑えた優しい施術", icon: Heartbeat },
    { text: "地域密着での信頼と実績", icon: UsersThree },
    { text: "医療機関との連携体制", icon: Wheelchair },
  ],
  cta: {
    text: "ご予約・お問い合わせ",
    href: "/#contact",
    icon: NotePencil,
  },
};

export default function Hero() {
  return (
    <section className="relative flex items-center pt-60 md:pt-40 pb-20 md:pb-30">
      <div className="absolute inset-0 z-0 hero-section">
        <HeroSlider />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
      </div>

      <div className="relative z-10 bg-white rounded-2xl mx-4 md:ml-[2vw] 2xl:ml-[4vw] p-4 sm:p-6 shadow-[0_0_40px_rgba(0,0,0,0.1)]">
        <div className="relative z-10 flex flex-col justify-center">
            <div className="max-w-xl mb-6">
            <div className="inline-block mb-4 px-4 py-1 color-accent-bg bg-opacity-80 text-white text-sm rounded">{heroContent.banner}</div>
            <h2 className="heading max-w-lg mb-4 text-[22px] font-extrabold  sm:text-3xl leading-[1.4]">
              {heroContent.title.main}
              <br />
              {heroContent.title.sub}
            </h2>
            <p 
              className="text-sm color-text-sub md:text-lg tracking-wider"
              dangerouslySetInnerHTML={{ __html: heroContent.description }}
            />
          </div>
          <div className="heading">
            <ul className="space-y-3">
              {heroContent.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li key={index} className="flex items-center gap-1">
                    <span>
                      <Icon size={22} weight="light" />
                    </span>
                    {feature.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
