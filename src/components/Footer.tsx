"use client";

import Image from "next/image";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-background/20 pb-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center"><div className="relative w-20 h-20 mb-6">
                         <Image 
                            src="/scarlet-logo.png" 
                            alt="Scarlet Logo" 
                            fill
                            className="object-contain object-left" 
                          />
                    </div>
                    <h2 className="text-2xl font-black mb-6 tracking-tighter">SCARLET</h2>
                    </div>
                    <p className="max-w-sm text-background/60 text-lg">
                        Redefining digital landscapes with bold creativity and strategic precision.
                    </p>
                </div>
                <div>
                    <h3 className="font-bold mb-4 text-brand-yellow">QUICK LINKS</h3>
                    <ul className="space-y-2 text-background/80">
                        <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-brand-red transition-colors">Services</a></li>
                        <li><a href="#work" className="hover:text-brand-red transition-colors">Work</a></li>
                        <li><a href="#about" className="hover:text-brand-red transition-colors">About</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-4 text-brand-blue">CONTACT</h3>
                    <ul className="space-y-2 text-background/80">
                        <li>hello@scarlet.com</li>
                        <li>+1 (555) 123-4567</li>
                        <li>123 Digital Ave, Tech City</li>
                    </ul>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-4">
                <p className="text-background/40 text-sm">© 2026 Scarlet Digital. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Twitter className="w-5 h-5 hover:text-brand-blue transition-colors cursor-pointer" />
                    <Instagram className="w-5 h-5 hover:text-brand-red transition-colors cursor-pointer" />
                    <Linkedin className="w-5 h-5 hover:text-brand-blue transition-colors cursor-pointer" />
                    <Facebook className="w-5 h-5 hover:text-brand-blue transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    </footer>
  );
}
