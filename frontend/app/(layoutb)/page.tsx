import { Herosection } from "@/components/ui/hero-section";
import MissionVision from "@/components/ui/mission-vision";
import Blog from "@/components/ui/blog";
export default function Home() {
  return (
    <div>
      <div className="w-screen  flex flex-col min-h-full items-center justify-center">
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
      </div>
    </div>
  );
}
