"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "Neon Cyber", category: "Branding", color: "bg-brand-red" },
  { id: 2, title: "Flux Data", category: "Web App", color: "bg-brand-blue" },
  { id: 3, title: "Solar Punk", category: "Design", color: "bg-brand-yellow" },
  { id: 4, title: "Echo Grid", category: "Development", color: "bg-brand-red" },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter">
          SELECTED <span className="text-brand-blue">WORK</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group aspect-video bg-muted relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className={`absolute inset-0 ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-4xl font-bold bg-background/50 px-6 py-2 rounded-full backdrop-blur-md">{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      <FAQ />
      <Footer />
    </main>
  );
}
