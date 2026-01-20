"use client";

import { Star } from "lucide-react";
import Image from "next/image";

// Ideally, this would be a high-end logo grid or case study thumbnails
// For now, we'll use a premium logo grid layout
const superClients = [
    "TechNova", "ApexDynamics", "FutureLabs", "InnoVate",
    "CircleSync", "BoxChain", "LayerStack", "SquareOne"
];

export function SuperClients() {
  return (
    <section className="py-24 bg-foreground text-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">SUPER <span className="text-brand-yellow">CLIENTS</span></h2>
                <div className="h-1 w-24 bg-brand-red mt-4"></div>
            </div>
            <p className="text-background/60 max-w-md text-lg text-right">
                We work with visionaries who aren't afraid to break the mold.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {superClients.map((client, i) => (
                <div key={i} className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-brand-yellow/50 transition-all duration-300 group cursor-default">
                    <span className="text-2xl font-bold font-syne opacity-50 group-hover:opacity-100 group-hover:text-brand-yellow transition-all">{client}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
