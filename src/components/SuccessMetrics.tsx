"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  { id: 1, value: 50, suffix: "+", label: "Projects Delivered" },
  { id: 2, value: 12, suffix: "M", label: "Revenue Generated" },
  { id: 3, value: 98, suffix: "%", label: "Client Retention" },
  { id: 4, value: 5, suffix: "Y", label: "Years Experience" },
];

export function SuccessMetrics() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".metric-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-background w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">SUCCESS IN <span className="text-brand-red">NUMBERS</span></h2>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Measurable impact driven by data, creativity, and relentless execution.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent p-px rounded-3xl overflow-hidden">
            {metrics.map((metric) => (
                <div key={metric.id} className="metric-item bg-background p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                    <div className="text-5xl md:text-7xl font-black text-foreground mb-2 font-syne group-hover:scale-110 transition-transform duration-500">
                        {metric.value}<span className="text-brand-blue text-4xl align-top">{metric.suffix}</span>
                    </div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-2 group-hover:text-brand-red transition-colors">{metric.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
