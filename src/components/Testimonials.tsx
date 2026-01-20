"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const endorsements = [
  {
    quote: "Scarlet didn't just rebuild our site; they reimagined our entire digital identity. The result was a 200% increase in leads within the first month.",
    author: "Elena Rodriguez",
    role: "CMO, TechNova",
    rating: 5,
  },
  {
    quote: "The team's ability to blend high-end aesthetics with technical precision is unmatched. They are true partners in growth.",
    author: "Marcus Chen",
    role: "Founder, Apex Ventures",
    rating: 5,
  },
  {
    quote: "Working with them was chaos in the best way possible—creative storms that cleared into perfect strategic clarity. Highly recommended.",
    author: "Sarah Jenkins",
    role: "Director, ArtFlow Gallery",
    rating: 5,
  },
  {
    quote: "A masterpiece of code and design. Our conversion rates have never been higher since the launch.",
    author: "David Kim",
    role: "CTO, NextGen Sol",
    rating: 5,
  }
];

// Duplicate for efficient looping (making sure we have enough content to scroll)
const marqueeItems = [...endorsements, ...endorsements, ...endorsements];

export function Testimonials() {
  return (
    <section className="py-24 bg-background w-full overflow-hidden">
      <div className="max-w-full px-4">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">Client <span className="text-brand-red decoration-wavy underline decoration-brand-yellow">Voices</span></h2>
        </div>

        <div className="relative w-full overflow-hidden mask-linear-fade">
             <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
             <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <motion.div 
                className="flex gap-8 w-max"
                animate={{ x: "-50%" }}
                initial={{ x: 0 }}
                transition={{ 
                    repeat: Infinity, 
                    ease: "linear", 
                    duration: 40, // Adjust speed here
                }}
            >
                {marqueeItems.map((item, i) => (
                    <div key={i} className="flex-shrink-0 w-[400px] bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <div className="flex gap-1 mb-6">
                            {[...Array(item.rating)].map((_, r) => (
                                <Star key={r} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                            ))}
                        </div>
                        
                        <p className="text-lg font-medium text-foreground/80 mb-8 leading-relaxed italic line-clamp-4">
                            "{item.quote}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-brand-red to-brand-blue rounded-full"></div>
                            <div>
                                <h4 className="font-bold text-foreground">{item.author}</h4>
                                <p className="text-sm text-muted-foreground">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
