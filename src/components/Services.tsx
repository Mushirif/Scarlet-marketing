"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Brand Strategy",
    description: "Defining your unique voice in a crowded digital landscape.",
    color: "bg-brand-red",
    borderColor: "border-brand-red",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that convert clicks into customers.",
    color: "bg-brand-blue",
    borderColor: "border-brand-blue",
  },
  {
    title: "Web Development",
    description: "High-performance websites built for the future.",
    color: "bg-brand-yellow",
    borderColor: "border-brand-yellow",
  },
  {
    title: "Content Creation",
    description: "Stories that resonate and engage your audience.",
    color: "bg-brand-red",
    borderColor: "border-brand-red",
  },
  {
    title: "SEO Optimization",
    description: "Ranking you higher where it matters most.",
    color: "bg-brand-blue",
    borderColor: "border-brand-blue",
  },
  {
    title: "Social Media",
    description: "Building communities around your brand.",
    color: "bg-brand-yellow",
    borderColor: "border-brand-yellow",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-red">EXPERTISE</span>
            </h2>
            <div className="w-24 h-2 bg-brand-yellow mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative p-8 border-2 border-border hover:${service.borderColor} transition-colors duration-300 bg-card`}
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className="flex justify-between items-start mb-6">
                 <div className={`w-12 h-12 rounded-full ${service.color} opacity-20 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                    <div className="w-4 h-4 bg-background rounded-full"></div>
                 </div>
                 <ArrowUpRight className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>

              <h3 className="text-2xl font-bold mb-4 font-sans tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
