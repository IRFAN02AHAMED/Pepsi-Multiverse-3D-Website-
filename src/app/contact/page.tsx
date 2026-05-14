"use client";

import { Mail, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-margin-mobile md:px-margin-desktop flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <span className="font-technical-label text-tertiary uppercase tracking-[0.3em] block mb-4">
            Direct Transmission
          </span>
          <h1 className="font-headline-lg text-4xl md:text-6xl text-white">Contact HQ</h1>
        </div>

        <div className="glass-panel rim-light p-8 md:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-4">
              <Mail className="w-12 h-12 text-tertiary mx-auto mb-4" />
              <h2 className="text-2xl text-white font-headline-lg tracking-wide">Want to build a project like this?</h2>
              <p className="text-on-surface-variant font-body-md leading-relaxed">
                Send a message directly to <span className="text-tertiary font-bold">irfan02ahamed@gmail.com</span> with what you want, and I will build an amazing, highly organized website for you!
              </p>
            </div>

            <form action="https://formsubmit.co/irfan02ahamed@gmail.com" method="POST" className="space-y-6 mt-8">
              {/* Hidden FormSubmit configuration */}
              <input type="hidden" name="_subject" value="Project Inquiry: Build a website like Pepsi Multiverse!" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="space-y-2">
                <label className="font-technical-label text-xs text-outline uppercase tracking-widest">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tertiary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-technical-label text-xs text-outline uppercase tracking-widest">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tertiary transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-technical-label text-xs text-outline uppercase tracking-widest">Project Details</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-tertiary transition-colors resize-none"
                  placeholder="Tell me about your dream website. I will make it sentenced and organized for you..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 liquid-metallic-gradient text-on-primary font-technical-label text-sm px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all neon-glow uppercase tracking-widest"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
