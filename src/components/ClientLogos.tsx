"use client";

import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Cloud, Box, Layers, Zap } from "lucide-react";

// Placeholder "logos" using Lucide icons + Text
const clients = [
  { name: "TechNova", icon: Hexagon, color: "text-blue-500" },
  { name: "InnoVate", icon: Zap, color: "text-yellow-500" },
  { name: "FutureLabs", icon: Cloud, color: "text-cyan-400" },
  { name: "ApexDynamics", icon: Triangle, color: "text-red-500" },
  { name: "SquareOne", icon: Square, color: "text-emerald-500" },
  { name: "CircleSync", icon: Circle, color: "text-purple-500" },
  { name: "BoxChain", icon: Box, color: "text-orange-500" },
  { name: "LayerStack", icon: Layers, color: "text-pink-500" },
];

// Duplicate for marquee loop
const marqueeClients = [...clients, ...clients, ...clients];

export function ClientLogos() {
  return (
    <section className="py-12 bg-neutral-50 dark:bg-black/50 overflow-hidden border-y border-neutral-100 dark:border-white/5">
        <div className="w-full relative mask-linear-fade">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <motion.div 
                className="flex gap-16 item-center w-max"
                animate={{ x: "-50%" }}
                initial={{ x: 0 }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 30, 
                }}
            >
                {marqueeClients.map((client, i) => (
                    <div key={i} className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                        <client.icon className={`w-8 h-8 ${client.color}`} strokeWidth={2.5} />
                        <span className="text-xl font-bold font-syne tracking-tight hidden md:block">{client.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
  );
}
