"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 text-foreground uppercase">
                About <span className="text-brand-red">Scarlet</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium text-muted-foreground max-w-4xl mx-auto leading-normal">
                We are not just a marketing agency. We are the <span className="text-brand-blue font-bold">architects</span> of your digital future. 
                Born from chaos, refined by strategy, and driven by an obsession with growth.
            </p>
        </motion.div>
      </div>

       {/* Background Elements */}
       <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
            <div className="w-[50vw] h-[50vw] bg-brand-red rounded-full blur-[150px] animate-pulse-slow"></div>
       </div>
    </section>
  );
}
