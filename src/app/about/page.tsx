import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/AboutHero";
import { WeCare } from "@/components/WeCare";
import { SuperClients } from "@/components/SuperClients";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQ } from "@/components/FAQ";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <AboutHero />
      <WeCare />
      <SuperClients />
      <WhyChooseUs />
      <FAQ />
      <Footer />
    </main>
  );
}
