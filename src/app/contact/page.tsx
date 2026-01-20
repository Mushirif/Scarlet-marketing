import { Navbar } from "@/components/Navbar";
import { Contact as ContactComponent } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <div className="pt-20">
        <ContactComponent />
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
