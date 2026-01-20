"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A standard branding project takes 4-6 weeks, while a full web application can take 8-12 weeks. We prioritize quality and clear milestones."
  },
  {
    id: 2,
    q: "Do you offer post-launch support?",
    a: "Absolutely. We offer various retainer packages for maintenance, updates, and continuous optimization to ensure your digital asset remains peak performing."
  },
  {
    id: 3,
    q: "What industries do you specialize in?",
    a: "We are industry-agnostic but favor bold disruptors. We've done extensive work in FinTech, E-commerce, SaaS, and High-End Lifestyle brands."
  },
  {
    id: 4,
    q: "What is your pricing model?",
    a: "We work primarily on a project-based fixed fee or monthly retainer for ongoing partnerships. Each engagement is tailored to specific business goals."
  }
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-neutral-50 dark:bg-black w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter text-center">FREQUENTLY ASKED <span className="text-brand-blue">QUESTIONS</span></h2>

            <div className="space-y-4">
                {questions.map((item) => (
                    <div 
                        key={item.id} 
                        className="border border-neutral-200 dark:border-neutral-800 rounded-xl bg-background overflow-hidden"
                    >
                        <button 
                            onClick={() => setOpenId(openId === item.id ? null : item.id)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                        >
                            <span className="text-lg font-bold">{item.q}</span>
                            {openId === item.id ? <Minus className="w-5 h-5 text-brand-red" /> : <Plus className="w-5 h-5" />}
                        </button>

                        <AnimatePresence>
                            {openId === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                                        {item.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
