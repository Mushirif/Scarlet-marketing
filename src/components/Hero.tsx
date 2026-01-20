"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Intro Animation
      const tl = gsap.timeline();
      tl.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
      .from(".hero-shape", {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.7)",
      }, "-=1");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background pt-20"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30 flex items-center justify-center">
        <div className="hero-shape absolute w-[40vw] h-[40vw] bg-brand-yellow rounded-full blur-[100px] -top-20 -right-20 mix-blend-multiply dark:mix-blend-screen animate-pulse-slow"></div>
        <div className="hero-shape absolute w-[35vw] h-[35vw] bg-brand-red rounded-full blur-[120px] bottom-0 left-0 mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="hero-shape absolute w-[30vw] h-[30vw] bg-brand-blue rounded-full blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center justify-center h-full text-center">
        
        {/* Main Text Content */}
        <div ref={textRef} className="flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">DIGITAL</span>
            <span className="block text-black">IMPACT</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">EVOLUTION</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium max-w-lg">
            We craft digital experiences that <span className="text-red-500 font-bold">ignite</span> brands.
          </p>

          <div className="flex gap-6">
            <button className="px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform">
              Start Project
            </button>
            <button className="px-8 py-4 border-2 border-foreground font-bold rounded-full hover:bg-foreground hover:text-background transition-colors">
              View Work
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
