"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              READY TO <span className="text-brand-red">IGNITE?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build something extraordinary together.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Info & Map */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                {/* Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-bold">PHONE</p>
                                <p className="text-lg">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center text-brand-red">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-bold">EMAIL</p>
                                <p className="text-lg">hello@scarlet.marketing</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground font-bold">HQ</p>
                                <p className="text-lg">123 Creative Blvd, Design City, NY 10001</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                    <div className="flex gap-4">
                        {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-border shadow-md">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043276541!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </motion.div>
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-2xl shadow-xl border border-border"
            >
               <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="text-left">
                      <label htmlFor="name" className="block text-sm font-bold mb-2 ml-1">NAME</label>
                      <input type="text" id="name" className="w-full bg-secondary/50 border-2 border-transparent focus:border-brand-blue rounded-lg px-4 py-3 outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="text-left">
                      <label htmlFor="email" className="block text-sm font-bold mb-2 ml-1">EMAIL</label>
                      <input type="email" id="email" className="w-full bg-secondary/50 border-2 border-transparent focus:border-brand-blue rounded-lg px-4 py-3 outline-none transition-colors" placeholder="john@example.com" />
                  </div>
               </div>
               
               <div className="text-left mb-8">
                   <label htmlFor="message" className="block text-sm font-bold mb-2 ml-1">MESSAGE</label>
                   <textarea id="message" rows={4} className="w-full bg-secondary/50 border-2 border-transparent focus:border-brand-blue rounded-lg px-4 py-3 outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
               </div>
               
               <button type="submit" className="w-full py-4 bg-brand-red text-white font-bold text-lg rounded-lg hover:bg-red-600 transition-colors shadow-lg hover:shadow-red-500/25">
                   SEND TRANSMISSION
               </button>
            </motion.form>
        </div>
      </div>
    </section>
  );
}
