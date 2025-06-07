import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";

const features = [
  {
    title: "根本の原因を突き止める<br />丁寧な問診",
    text: `「なぜ痛みが出るのか」「どうすれば改善するのか」。同じ症状でも、原因は人それぞれ異なります。\n\n問診では、いつ、どんな時に症状が出るのか、普段の生活習慣なども含めて丁寧にお伺いします。そこから本当の原因を見つけ出し、最適な施術プランをご提案いたします。`,
    image: "/top/feature1.jpg",
  },
  {
    title: "痛みを最小限に抑えた<br />優しい施術",
    text: `「整体は痛そう」「怖い」という不安の声をよく耳にします。当院では、痛みの少ない独自の施術法を採用。\n\n丁寧な検査と施術で、必要最小限の刺激で最大限の効果を引き出します。痛みの少ない施術により、お身体への負担を抑え、早期回復を目指します。`,
    image: "/top/feature2.jpg",
  },
];

export default function FeatureSection() {
  return (
    <section
      id="feature"
      className="scroll-mt-[60px] py-6 lg:py-12  sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto"
    >
      <FadeIn>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkle
              weight="regular"
              size={32}
              className="color-text block md:hidden min-w-[32px] min-h-[32px] flex-shrink-0 aspect-square"
            />
            <Sparkle
              weight="regular"
              size={44}
              className="color-text hidden md:block min-w-[44px] min-h-[44px] flex-shrink-0 aspect-square"
            />
            <h2 className="text-[24px] lg:text-[28px] heading color-text font-extrabold">
              選ばれる理由
            </h2>
          </div>
          <div className="w-full border-b-4 mb-8 ml-0" style={{borderColor: 'var(--color-accent)'}} />
        </div>
      </FadeIn>

      <div className="color-text mx-auto sm:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-8 ${index !== features.length - 1 ? 'mb-12' : ''} ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* 画像 */}
            <div className="flex-1 w-full">
              <Image
                className="object-cover aspect-video md:aspect-[5/3] lg:aspect-[5/3] rounded-2xl border border-gray-200 w-full"
                src={feature.image}
                alt={feature.title}
                width={1000}
                height={1000}
              />
            </div>
            {/* テキスト */}
            <div className="flex-1 w-full">
              <h3
                className="heading mb-4 lg:mb-4 text-2xl font-bold  leading-[1.4] border-b border-gray-200 pb-4"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              />
              <p className="mb-6 text-sm lg:text-md color-text-sub">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
