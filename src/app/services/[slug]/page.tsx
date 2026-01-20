"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { PricingTabs } from "@/components/PricingTabs";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Helper to normalize slugs
const getSlug = (path: string) => path.split("/").pop();

const serviceData: Record<string, { title: string; desc: string; offerings: string[] }> = {
  "branding": {
    title: "Branding",
    desc: "We build identities that don't just stand out—they dominate. From logo creation to full brand guidelines, we ensure your visual voice is unignorable.",
    offerings: ["Logo Design", "Brand Strategy", "Visual Identity Systems", "Brand Guidelines", "Tone of Voice"]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    desc: "Data-driven campaigns that convert. We master the algorithm to put your brand in front of the right eyes at the right time.",
    offerings: ["SEO & SEM", "Social Media Management", "Content Marketing", "PPC Advertising", "Email Campaigns"]
  },
  "printing": {
    title: "Printing",
    desc: "Tactile experiences in a digital world. Premium print materials that leave a lasting physical impression.",
    offerings: ["Business Cards", "Brochures & Flyers", "Large Format Printing", "Packaging Design", "Custom Merchandise"]
  },
  "corporate-gift": {
    title: "Corporate Gift",
    desc: "Elevate your relationships with bespoke corporate gifting solutions. Curated items that reflect sophistication and thought.",
    offerings: ["Custom Swag Boxes", "Premium Tech Accessories", "Eco-friendly Gifts", "Event Giveaways", "Executive Gifting"]
  },
  "website-development": {
    title: "Website Development",
    desc: "More than just code—we build digital ecosystems. Fast, secure, and beautiful websites designed for growth.",
    offerings: ["Custom Web Apps", "E-commerce Solutions", "CMS Development", "UI/UX Design", "Performance Optimization"]
  },
  "video-production": {
    title: "Video Production",
    desc: "Cinematic storytelling that captivates. We handle everything from concept to post-production to tell your story.",
    offerings: ["Brand Films", "Product Commercials", "Social Media Reels", "Corporate Documentaries", "Animation & Motion Graphics"]
  }
};

export default function ServiceDynamicPage() {
  const pathname = usePathname();
  const slug = getSlug(pathname) || "";
  const data = serviceData[slug];

  if (!data) {
    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">Service Not Found</h1>
            </div>
            <Footer />
        </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase text-balance">
                <span className="text-brand-blue">{data.title.split(" ")[0]}</span> {data.title.split(" ").slice(1).join(" ")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
                {data.desc}
            </p>
        </motion.div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 border-l-4 border-brand-red pl-4">WHAT WE OFFER</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.offerings.map((offer, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border"
                    >
                        <div className="w-12 h-1 bg-gradient-to-r from-brand-red to-brand-yellow mb-6"></div>
                        <h3 className="text-xl font-bold">{offer}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-12 text-center uppercase tracking-tighter">
            <span className="text-brand-blue">{data.title}</span> Packages
        </h2>
        <PricingTabs initialService={data.title} hideTabs={true} />
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
            <h2 className="text-4xl font-black mb-8">READY TO START?</h2>
            <button className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform">
                Get a Quote for {data.title}
            </button>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
