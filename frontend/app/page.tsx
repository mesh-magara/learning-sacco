import { Herosection } from "@/components/ui/hero-section";
import MissionVision from "@/components/ui/mission-vision";
import Blog from "@/components/ui/blog";
import Footer from "@/components/ui/footer";
export default function Home() {
  return (
    <div>
      <main className="w-screen  flex flex-col min-h-full items-center justify-center">
        {/* hero section and cta */}
        <div>
          <Herosection></Herosection>
        </div>
        {/* about section */}
        <div>
          <MissionVision></MissionVision>
        </div>

        {/* blog section */}
        <div>
          <Blog></Blog>
        </div>
        {/* contact us */}
      </main>
      <Footer />
    </div>
  );
}
