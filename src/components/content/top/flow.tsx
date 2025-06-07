import { DotsThreeOutline } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";
import Image from "next/image";

const flow = [
  {
    title: "受付・ご案内",
    text: "ご来院後、受付でお名前をお伺いし、問診票のご記入をお願いいたします。お着替えのご案内もさせていただきます。",
    img: "/top/flow1.jpg"
  },
  {
    title: "カウンセリング",
    text: "痛みの症状や原因、生活習慣などを丁寧にお伺いし、最適な施術プランをご提案いたします。",
    img: "/top/flow2.jpg"
  },
  {
    title: "施術",
    text: "お一人おひとりの症状に合わせた施術を、リラックスできる空間で行います。痛みを最小限に抑えた丁寧な施術を心がけています。",
    img: "/top/flow3.jpg"
  },
  {
    title: "お会計・アフターケア",
    text: "施術後の経過説明と、ご自宅でのケア方法をお伝えいたします。次回のご予約も承ります。",
    img: "/top/flow4.jpg"
  },
];

export default function FlowSection() {
  return (
    <section
      className="scroll-mt-[60px] py-6 lg:py-12  "
    >
      <FadeIn>
        <div className="text-center">
          <div>
            <div className="flex items-center gap-2 mb-2">
          <DotsThreeOutline
                weight="regular"
                size={32}
                className="color-text block md:hidden min-w-[32px] min-h-[32px] flex-shrink-0 aspect-square"
          />
          <DotsThreeOutline
                weight="regular"
                size={44}
                className="color-text hidden md:block min-w-[44px] min-h-[44px] flex-shrink-0 aspect-square"
          />
              <h2 className="text-[24px] lg:text-[28px] heading color-text font-extrabold">
            施術の流れ
          </h2>
            </div>
            <div className="w-full border-b-4 mb-8 ml-0" style={{borderColor: 'var(--color-accent)'}} />
          </div>
        </div>
      </FadeIn>

      <div className="w-full max-w-none flex flex-col gap-0">
        {flow.map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-8 py-6 lg:py-6 border-0 border-b border-dashed border-gray-300 last:border-b-0 w-full">
            <div className="max-w-[220px] flex-[1_1_0%] flex items-center justify-start py-0">
              <Image
              src={item.img}
              alt={item.title}
                width={260}
                height={170}
                className="rounded-xl object-cover w-full border border-gray-100"
              />
            </div>
            <div className="flex-[2_2_0%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white text-lg md:text-xl font-num font-semibold shrink-0">
                  {i + 1}
                </span>
                <h3 className="text-lg md:text-xl font-bold color-text tracking-wide mb-0">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm md:text-base color-text tracking-wide leading-relaxed mb-2 md:mb-0">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
