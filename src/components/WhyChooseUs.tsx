"use client";

import { Zap, Target, Users, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "We move fast without breaking things. Our agile workflow ensures your project hits the market while the trend is hot."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Laser-focused strategies that reach your ideal audience. No wasted ad spend, just pure ROI."
  },
  {
    icon: Users,
    title: "Human-Centric Design",
    description: "We build for people, not bots. Experiences that resonate emotionally and drive deeper connections."
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Data-backed frameworks tailored to scale with your business, from startup to enterprise."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-blue-800 text-background w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">WHY <span className="text-brand-yellow">CHOOSE US?</span></h2>
                <div className="w-24 h-2 bg-brand-blue rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reasons.map((reason, index) => (
                    <div 
                        key={index}
                        className="group p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-colors duration-300 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                        
                        <div className="w-12 h-12 bg-brand-red text-white rounded-lg flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                            <reason.icon className="w-6 h-6" />
                        </div>
                        
                        <h3 className="text-xl font-bold mb-4 group-hover:text-brand-yellow transition-colors">{reason.title}</h3>
                        <p className="text-white/60 leading-relaxed font-light">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
