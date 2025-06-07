import Image from "next/image";
import FadeIn from "@/components/ui/fadeIn-section";
import { WarningCircle, CheckCircle } from "@phosphor-icons/react/dist/ssr";

const problems = [
  "医療機関に通っているけど改善されない",
  "交通事故の後遺症の痛みがなかなか引かない",
  "スポーツで怪我をしたけれど試合に間に合わせたい！",
  "薬を使っても症状が良くならない",
  "医療機関に通っているけど改善されない",
  "交通事故の後遺症の痛みがなかなか引かない"
];

export default function ProblemSection() {
  return (
    <section id="problems" className="py-6 lg:py-12">
      <FadeIn>
        <div>
          <div className="flex items-center gap-2 mb-2 px-1">
            <WarningCircle
              weight="regular"
              size={32}
              className="color-text block md:hidden min-w-[32px] min-h-[32px] flex-shrink-0 aspect-square"
            />
            <WarningCircle
              weight="regular"
              size={44}
              className="color-text hidden md:block min-w-[44px] min-h-[44px] flex-shrink-0 aspect-square"
            />
            <h2 className="text-[20px] lg:text-[28px] heading color-text font-extrabold tracking-wide">
              こんなお悩みはありませんか？
            </h2>
          </div>
          <div className="w-full border-b-4 mb-8 ml-0" style={{borderColor: 'var(--color-accent)'}} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 bg-white border border-gray-200 rounded-2xl p-4 md:p-8">
          {/* 画像 */}
          <div className="max-w-[220px] flex-1 flex items-center justify-start py-0">
            <Image src="/top/problem.jpg" alt="肩を痛めて悩む女性" width={220} height={220} className="rounded-xl object-cover w-full border border-gray-100" />
          </div>
          {/* リスト */}
          <div className="flex-[2_2_0%] flex flex-col justify-center">
            <ul className="space-y-4">
              {problems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base md:text-lg color-text">
                  <span className="inline-flex items-center justify-center text-[22px] color-accent self-start mt-1"><CheckCircle weight='regular' /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 強調メッセージ（画像風リデザイン） */}
        <div className="pt-8 lg:mt-6 w-full flex flex-col items-center justify-center p-4 md:p-6 relative overflow-visible">
          {/* 左：円形写真＋装飾（正円を厳密に） */}
          <div className="relative flex-shrink-0 mb-2 md:mb-0 md:mr-8 flex items-center justify-center" style={{width: 160, height: 160}}>
            {/* 円形写真（正円・線なし） */}
            <div className="w-[140px] h-[140px] rounded-full border border-gray-200 overflow-hidden z-10 flex items-center justify-center">
              <Image src="/top/people.jpg" alt="院長写真" width={140} height={140} className="object-cover w-full h-full" />
            </div>
            {/* 丸い装飾（写真より前に重ねる） */}
            {/* <span className="absolute left-2 top-2 w-[48px] h-[48px] rounded-full bg-[var(--color-accent)] opacity-20 z-20" />
            <span className="absolute left-24 top-0 w-[36px] h-[36px] rounded-full bg-sky-200 opacity-25 z-20" />
            <span className="absolute left-20 bottom-2 w-[56px] h-[56px] rounded-full bg-yellow-100 opacity-35 z-20" /> */}
          </div>
          {/* 右：強調テキスト（「改善します。」をさらに強調） */}
          <div className="flex-1 flex flex-col items-center text-center justify-center w-full">
            <span className="text-base md:text-2xl text-gray-500 font-semibold mb-2">めぐり整体院では</span>
            <span className="text-[26px] md:text-[46px] font-extrabold leading-relaxed">
              <span className="font-extrabold text-black">そのお悩みの</span>
              <span className="color-accent">
                根本改善を<br className="block md:hidden" />目指します。
              </span>
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
