"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingData } from "@/lib/pricingData";

const services = Object.keys(pricingData);

interface PricingTabsProps {
  initialService?: string;
  hideTabs?: boolean;
}

export function PricingTabs({ initialService = "Branding", hideTabs = false }: PricingTabsProps) {
  const [selectedService, setSelectedService] = useState(initialService);
  const plans = pricingData[selectedService] || pricingData["Branding"];

  return (
    <div className="w-full">
      {/* Tabs - Only show if hideTabs is false */}
      {!hideTabs && (
        <div className="flex overflow-x-auto gap-2 md:gap-4 pb-8 mb-8 no-scrollbar md:justify-center">
            {services.map((service) => (
            <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                selectedService === service
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/25 scale-105"
                    : "bg-neutral-100 dark:bg-white/5 text-muted-foreground hover:bg-neutral-200 dark:hover:bg-white/10"
                }`}
            >
                {service}
            </button>
            ))}
        </div>
      )}

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
            {plans.map((plan, index) => (
                <motion.div
                    key={plan.name + selectedService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`relative p-8 rounded-2xl border ${
                        plan.recommended 
                            ? "border-brand-blue bg-background shadow-xl scale-105 z-10" 
                            : "border-border bg-neutral-50 dark:bg-white/5"
                    }`}
                >
                    {plan.recommended && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                            Most Popular
                        </div>
                    )}

                    <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-4 font-syne text-brand-red">{plan.price}</div>
                    <p className="text-muted-foreground mb-8 min-h-[48px]">{plan.description}</p>

                    <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-4 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 ${
                        plan.recommended
                            ? "bg-foreground text-background"
                            : "bg-background border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
                    }`}>
                        Choose {plan.name}
                    </button>
                </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
