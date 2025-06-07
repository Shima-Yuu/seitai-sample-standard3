import Image from "next/image";
import { UserCircle, Certificate } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";

const aboutContent = {
  title: "私たちについて",
  greeting: {
    title: "院長よりごあいさつ",
    text: [
      "「痛みのない毎日を、一人でも多くの方へ。」",
      "その想いを胸に、日々の施術に真摯に向き合っています。",
      "お一人おひとりに寄り添い、最適な施術プランをご提案いたします。",
    ],
  },
  image: {
    src: "/top/about.jpg",
    alt: "about画像",
  },
  qualifications: {
    title: "保有資格",
    items: [
      "柔道整復師",
      "鍼灸師",
      "日本スポーツ協会公認アスレティックトレーナー",
      "赤十字救急法救急員",
    ],
  },
};

export default function AboutSection() {
  return (
    <section id="people" className="scroll-mt-[60px] py-6 lg:py-12   sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <FadeIn>
        <div className="text-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <UserCircle
                weight="regular"
                size={24}
                className="color-text block md:hidden"
              />
              <UserCircle
                weight="regular"
                size={36}
                className="color-text hidden md:block"
              />
              <h2 className="text-[24px] lg:text-[28px] heading color-text font-extrabold">
                {aboutContent.title}
              </h2>
            </div>
            <div className="w-full border-b-4 mb-8 ml-0" style={{borderColor: 'var(--color-accent)'}} />
          </div>
        </div>
      </FadeIn>
      <div className="container mx-auto">
        <div className="mx-auto lg:flex items-start gap-4 lg:gap-6">
          <Image 
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            width={500}
            height={300}
            className="object-cover object-center lg:w-1/2 w-full aspect-video rounded-2xl shadow-custom"
          />

          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <h3 className="heading text-2xl font-semibold color-text dark:text-white lg:w-96">
              {aboutContent.greeting.title}
            </h3>

            <p className="max-w-lg mt-6 text-sm tracking-wider">
              {aboutContent.greeting.text.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < aboutContent.greeting.text.length - 1 && <br />}
                </span>
              ))}
            </p>

            <div className="mt-8">
              <div className="bg-white rounded-xl p-5 lg:p-6 pt-3 lg:pt-4 color-text border border-gray-200">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200">
                  <Certificate size={24} weight="light" className="color-accent" />
                  <h4 className="heading text-xl font-medium color-text">
                    {aboutContent.qualifications.title}
                  </h4>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aboutContent.qualifications.items.map((qualification, index) => (
                    <li key={index} className="flex items-baseline gap-2">
                      <span className="color-accent leading-none">•</span>
                      <span className="text-sm tracking-wider">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
