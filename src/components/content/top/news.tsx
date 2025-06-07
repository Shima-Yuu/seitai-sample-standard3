import Link from "next/link";
import { Megaphone } from "@phosphor-icons/react/dist/ssr";
import FadeIn from "@/components/ui/fadeIn-section";

const newsItems = [
  {
    category: "お知らせ",
    date: "2023年12月12日",
    title: "ホームページを公開しました",
    link: "/news/new-site"
  }
];

export default function NewsSection() {
  return (
    <section className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl py-6 lg:py-12   pt-0 lg:pt-0">
      <FadeIn>
        <div className="flex items-center gap-2 mb-2">
          <Megaphone
            weight="regular"
            size={32}
            className="color-text block md:hidden min-w-[32px] min-h-[32px] flex-shrink-0 aspect-square"
          />
          <Megaphone
            weight="regular"
            size={44}
            className="color-text hidden md:block min-w-[44px] min-h-[44px] flex-shrink-0 aspect-square"
          />
          <h2 className="text-[24px] lg:text-[28px] heading color-text font-extrabold">
            お知らせ
          </h2>
        </div>
        <div className="w-full border-b-4 mb-8 ml-0" style={{borderColor: 'var(--color-accent)'}} />
      </FadeIn>
      <div className="mb-10 border-t border-b border-gray-200 divide-y">
        {newsItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block hover:opacity-60 transition-all duration-400"
          >
            <div className="grid py-4 sm:grid-cols-4 items-center">
              <div className="mb-4 sm:mb-0 flex items-center h-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 space-y-1 sm:space-y-0 text-xs font-semibold tracking-wide uppercase">
                  <span
                    className="heading text-deep-purple-accent-400"
                    aria-label="Category"
                  >
                    {item.category}
                  </span>
                  <p className="text-gray-600">
                    {item.date}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 lg:col-span-3 sm:pl-8 flex items-center h-full">
                <p className="sm:text-md xl:text-md heading">
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-right">
        <Link
          href="/news"
          aria-label=""
          className="heading inline-flex items-center hover:opacity-60 transition-all duration-400"
        >
          お知らせ一覧を見る
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
