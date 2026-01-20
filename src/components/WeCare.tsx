"use client";

import { Users, Heart, Globe } from "lucide-react";

const pillars = [
  {
    title: "Our Team",
    icon: Users,
    desc: "A collective of dreamers, doers, and disruptors. We prioritize mental health, creative freedom, and relentless collaboration.",
    color: "text-brand-blue"
  },
  {
    title: "Our Clients",
    icon: Heart,
    desc: "Your wins are our wins. We embed ourselves in your vision, treating every dollar of budget with the respect of our own.",
    color: "text-brand-red"
  },
  {
    title: "Our Communities",
    icon: Globe,
    desc: "Impact beyond the screen. We dedicate 5% of our annual profits to digital literacy programs in underserved communities.",
    color: "text-brand-yellow"
  }
];

export function WeCare() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900/30 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">WE <span className="text-brand-blue">CARE</span></h2>
            <p className="text-xl text-muted-foreground">The heartbeat behind the hustle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
                <div key={i} className="bg-background border border-neutral-200 dark:border-white/10 p-8 rounded-3xl hover:border-brand-red/50 transition-colors duration-300 group">
                    <div className={`w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${pillar.color}`}>
                        <pillar.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {pillar.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
