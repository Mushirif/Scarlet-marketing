"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              WE ARE THE <br />
              <span className="text-brand-red">ARCHITECTS</span> OF <br />
              <span className="text-brand-blue">NEXT</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 font-medium">
              Scarlet isn't just a marketing agency. We are a digital acceleration lab.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Born from the conviction that digital experiences should be bold, distinct, and highly effective. We combine geometric precision with creative chaos to build brands that stand out in a saturated noise.
            </p>
            <div className="flex gap-4">
               <div className="p-4 border-l-4 border-brand-yellow">
                  <h4 className="font-bold text-foreground">STRATEGY</h4>
                  <p className="text-sm text-muted-foreground">Data-backed decisions.</p>
               </div>
               <div className="p-4 border-l-4 border-brand-red">
                  <h4 className="font-bold text-foreground">DESIGN</h4>
                  <p className="text-sm text-muted-foreground">Visuals that disrupt.</p>
               </div>
               <div className="p-4 border-l-4 border-brand-blue">
                  <h4 className="font-bold text-foreground">TECH</h4>
                  <p className="text-sm text-muted-foreground">Code that performs.</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-secondary/20 rounded-2xl overflow-hidden flex items-center justify-center p-8"
          >
             {/* Geometric Composition */}
             <div className="relative w-full h-full">
                <div className="absolute top-10 left-10 w-40 h-40 bg-brand-red mix-blend-multiply dark:mix-blend-screen rounded-full opacity-80 animate-float"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-blue mix-blend-multiply dark:mix-blend-screen rounded-full opacity-80 animate-pulse-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-yellow mix-blend-multiply dark:mix-blend-screen rotate-45 opacity-80"></div>
                
                <div className="absolute inset-0 backdrop-blur-3xl"></div>
                
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <span className="text-7xl font-black text-foreground/10 select-none">SCARLET</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
