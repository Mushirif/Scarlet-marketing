import { Navbar } from "@/components/Navbar";
import { Services as ServicesComponent } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <div className="pt-20">
        <ServicesComponent />
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
