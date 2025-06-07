import ServiceSection from "@/components/content/service";
import PriceSection from "@/components/content/price";
import Aside from "@/components/layouts/aside";
export default async function MenuPage() {

  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8 py-6 lg:py-12 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <article>
          <ServiceSection className="pt-26 lg:pt-32" />
          <PriceSection />
          </article>
          
            <Aside />
        </div>
      </main>
  );
}
