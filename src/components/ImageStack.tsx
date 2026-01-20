"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  { src: "/future-visions-business-technology-concept.jpg", title: "Strategy" },
  { src: "/ali-morshedlou-WMD64tMfc4k-unsplash.jpg", title: "Design" },
  { src: "/christin-hume-PNWp1dZ7sO0-unsplash.jpg", title: "Development" },
  { src: "/toni-g-NqjE-CSb1lQ-unsplash.jpg", title: "Growth" },
];

export function ImageStack() {
  const containerRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const overlaysRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${images.length * 100}%`,
          scrub: 2,
          pin: true,
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (index === 0) return;

        scrollTl.fromTo(card, 
            { y: "150%" },
            {
               y: "0%",
               duration: 1,
               ease: "none",
            }
        );
        
        if (index > 0) {
            scrollTl.to(cardsRef.current[index - 1], {
                scale: 0.95,
                duration: 1, 
            }, "<");
            
            // Texture/Depth Fade for previous card
            if (overlaysRef.current[index - 1]) {
                scrollTl.fromTo(overlaysRef.current[index - 1], 
                    { opacity: 0.4 }, // Initial overlay opacity
                    { opacity: 0.8, duration: 1 }, // Darken as it moves back
                    "<"
                );
            }
        }

      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToCards = (el: any) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };
  
  const addToOverlays = (el: any) => {
    if (el && !overlaysRef.current.includes(el)) {
        overlaysRef.current.push(el);
    }
  }

  // Reset refs on render to avoid duplicates/stale refs
  cardsRef.current = [];
  overlaysRef.current = [];

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center bg-background relative overflow-hidden">
        <div className="absolute top-10 text-center z-10 w-full">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter mix-blend-difference text-blue-600">OUR <span className="text-brand-red">APPROACH</span></h2>
        </div>

        <div className="relative w-full h-full flex items-center justify-center mt-20">
             {images.map((img, i) => (
                <div
                    key={i}
                    ref={addToCards}
                    className={`absolute w-[95%] h-[80vh] md:w-[90%] md:h-[80vh] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden transition-transform will-change-transform bg-neutral-900 border border-white/10`}
                    style={{
                         zIndex: i + 1,
                    }}
                >
                    <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <div 
                        ref={addToOverlays}
                        className="absolute inset-0 bg-black/40" 
                        style={{ willChange: "opacity" }} 
                    /> {/* Overlay for readability & depth */}
                    
                    <div className="relative z-10 text-center p-8">
                        <span className="block text-[10vw] md:text-[8vw] font-black text-white/90 tracking-tighter mix-blend-overlay leading-none">{img.title}</span>
                         <p className="mt-8 text-white/80 text-xl max-w-2xl mx-auto font-medium">
                            Redefining the digital boundary with precision and chaos.
                         </p>
                    </div>
                </div>
             ))}
        </div>
    </section>
  );
}
