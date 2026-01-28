"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { 
      name: "Services", 
      href: "/services",
      children: [
        { name: "Branding", href: "/services/branding" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Printing", href: "/services/printing" },
        { name: "Corporate Gift", href: "/services/corporate-gift" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "Video Production", href: "/services/video-production" },
      ]
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border" onMouseLeave={() => setActiveDropdown(null)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
              <div className="relative w-6 h-6 md:w-15 md:h-15">
                  <Image 
                    src="/scarlet-logo.png" 
                    alt="Scarlet Logo" 
                    fill
                    className="object-contain" // Maintain aspect ratio
                  />
              </div>
              <span className="font-bold text-xl tracking-tighter">SCARLET</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:text-brand-blue transition-colors relative py-2 flex items-center gap-1"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 top-full mt-2 w-56 bg-background border border-border rounded-xl shadow-xl overflow-hidden"
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            {item.children.map((child) => (
                                <Link 
                                    key={child.name} 
                                    href={child.href}
                                    className="block px-4 py-3 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                >
                                    {child.name}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-brand-blue transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border bg-background overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                    <Link
                    href={item.href}
                    className="block text-lg font-medium hover:text-brand-red transition-colors"
                    onClick={() => { if(!item.children) setIsOpen(false) }}
                    >
                    {item.name}
                    </Link>
                    
                    {/* Mobile Submenu */}
                    {item.children && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-border ml-2">
                             {item.children.map((child) => (
                                <Link
                                    key={child.name}
                                    href={child.href}
                                    className="block text-base text-muted-foreground hover:text-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {child.name}
                                </Link>
                             ))}
                        </div>
                    )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
