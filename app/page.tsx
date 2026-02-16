import Hero from "@/components/home/Hero";
import ImpactSection from "@/components/home/ImpactSection";
import Invest from "@/components/home/Invest";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import Video from "@/components/home/Video";


export default function Home() {
  return (
  <main className="relative min-h-screen overflow-hidden">
    <Hero/>
    <ProblemSection/>
    <SolutionSection/>
    <ImpactSection/>
    <Video/>
    <Invest/>
  </main>
  );
}
