import ServiceSection from "@/components/content/service";
import NewsSection from "@/components/content/top/news";
import QaSection from "@/components/content/top/qa";
import AboutSection from "@/components/content/top/about";
import FeatureSection from "@/components/content/top/feature";
import HeroSection from "@/components/content/top/hero";
import FlowSection from "@/components/content/top/flow";
import ProblemSection from "@/components/content/top/ploblem";
import Aside from "@/components/layouts/aside";
import VoiceSection from "@/components/content/top/voice";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-6 lg:py-12 pt-20 lg:pt-12 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          <div className="">
            <NewsSection />
            <ProblemSection />
            <ServiceSection showButton />
            <FeatureSection />
            <AboutSection />
            <VoiceSection />
            <FlowSection />
            <QaSection />
          </div>
          
            <Aside />
        </div>
      </main>
    </>
  );
}
