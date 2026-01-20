"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingTabs } from "@/components/PricingTabs";
import { FAQ } from "@/components/FAQ";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
        >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
                Transparent <span className="text-brand-blue">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No hidden fees. No surprises. Choose the package that fits your growth stage.
            </p>
        </motion.div>

        <PricingTabs />
      </div>

      <FAQ />
      <Footer />
    </main>
  );
}
