import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SuccessMetrics } from "@/components/SuccessMetrics";
import { ImageStack } from "@/components/ImageStack";
import { ClientLogos } from "@/components/ClientLogos";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <SuccessMetrics />
      <ClientLogos />
      <ImageStack />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
