"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import Link from "next/link";
import { ArrowRight, Quote, Zap } from "lucide-react";

const storyBeats = [
  {
    label: "Viscosity Status",
    value: "Optimized for Max Chill",
    accent: "tertiary",
  },
  {
    label: "Carbonation Cycle",
    value: "Perpetual Pulse Pattern",
    accent: "primary",
  },
  {
    label: "Color Spectrum",
    value: "Deep Nebula Blue #001B3D",
    accent: "secondary-container",
  },
];

export default function StoryPage() {
  return (
    <main className="relative pt-20 overflow-x-hidden">
      {/* Hero Brand Story */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-margin-desktop overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            alt="Cinematic Pepsi can in space"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK9zLJhJPcAXOa31ecph0LELlByDMjxcVrhpe5zzEii3k33rYri-ulOuixNCLpH7yxX72H90R-J9yex_YjYgvow07fSwFbsGpNT9s9_hHQMOygYDr8uSaBJ-aOriNEW5GSS4RKIwo3I0kZG0PmcexABC8J_aoUyD5J-G3g1bTTaacYw1vlTNXXyMSMfncKibq2Y3zuf9h0s-xXIjbHaQKX89v4QzH8KMhjvMgFY-fxgEnVuxLhM240ikPnW-dyEe_lhPwb48yeKO-0"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <span className="font-technical-label text-technical-label text-tertiary uppercase tracking-[0.3em] mb-6 block">
            Origin Protocol
          </span>
          <h1 className="font-display-hero text-display-hero leading-tight text-white mb-8 md:text-[120px] text-[64px]">
            Crafted Beyond <br />
            <span className="text-tertiary">This Dimension</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed opacity-80">
            The Pepsi Multiverse is not just a drink; it is a sensory expedition.
            We&apos;ve harnessed the elemental energy of neon-drenched metropolises
            and the chill of deep space to engineer a hydration experience that
            defies classical physics.
          </p>
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-technical-label text-technical-label text-outline uppercase">
            Scroll to descend
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Narrative Layers */}
      <section className="py-32 px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Large Visual Slab */}
          <div className="col-span-12 lg:col-span-8 group relative overflow-hidden glass-panel rim-light rounded-xl p-1 h-[600px]">
            <img
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-1000 opacity-60"
              alt="Futuristic lab"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbfvYXeQvxIwsXdSHPoT_AXTda_m5ljrAYSs12EvKKtfsY6FZKf9l3I9N0rDR1xG_ODpOYqKMnSf_S6qkDORXJzxOqO2IzYFt655LHqntLjVlQjXRVNcEeI-VYxX25c2H2xf6UkMDZqdHek4ybpq0pTm7U6qCNJjEOfFVcDYU0Ifydce1ZdueONXhgEi4x-mEmXV4Ta2FZTps7VQCYchaDJ2phApRZWQeMzQpoO1fY8_R5YiHnDTrummKYrpQ_XVgT008qr1-2i1ka"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            <div className="absolute bottom-12 left-12 max-w-lg">
              <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                Atomic Precision
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every bubble is precision-engineered using molecular synthesis.
                Our flavor profiles are calibrated to resonate with your neural
                receptors at the exact moment of impact.
              </p>
            </div>
          </div>

          {/* Vertical HUD Info */}
          <div className="col-span-12 lg:col-span-4 glass-panel rim-light rounded-xl p-8 flex flex-col justify-between border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Zap className="text-tertiary w-10 h-10" />
            </div>
            <div>
              <span className="font-technical-label text-technical-label text-tertiary mb-2 block">
                DATA STREAM // 001
              </span>
              <h3 className="font-headline-lg text-[40px] text-white leading-none mb-6">
                The Liquid <br /> Architecture
              </h3>
              <div className="space-y-6">
                {storyBeats.map((beat) => (
                  <div key={beat.label} className="flex items-start gap-4">
                    <div
                      className={`w-1 h-12 mt-1 ${
                        beat.accent === "tertiary"
                          ? "bg-tertiary"
                          : beat.accent === "primary"
                          ? "bg-primary"
                          : "bg-secondary-container"
                      }`}
                    />
                    <div>
                      <div className="font-technical-label text-on-surface uppercase text-[10px]">
                        {beat.label}
                      </div>
                      <div className="text-white font-nav-item text-nav-item">
                        {beat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href="/collections"
              className="mt-8 flex items-center gap-2 text-tertiary font-nav-item text-nav-item hover:gap-4 transition-all group"
            >
              Technical Specs{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-2" size={18} />
            </Link>
          </div>

          {/* Wide Story Arc */}
          <div className="col-span-12 lg:col-span-5 glass-panel rim-light rounded-xl p-12 border border-white/5 flex flex-col justify-center">
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">
              A Legacy Refracted
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              We took the heritage of the globe—the red, the white, and the
              blue—and sent it through a prism. What emerged on the other side was
              a multiverse of taste that exists simultaneously across every
              possible reality.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-primary/30 rounded-full font-technical-label text-primary">
                Reality A-101
              </span>
              <span className="px-4 py-2 border border-tertiary/30 bg-tertiary/10 rounded-full font-technical-label text-tertiary">
                The Glitch Variant
              </span>
              <span className="px-4 py-2 border border-white/30 rounded-full font-technical-label text-white">
                Classic Core
              </span>
            </div>
          </div>

          {/* Interactive Node Visual */}
          <div className="col-span-12 lg:col-span-7 glass-panel rim-light rounded-xl relative overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-40 grayscale"
                alt="Circuit board neon"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnHu_ZpSOp-Q9xumrUfV2MaNd0jm_IaV5k3P1Zqessf095TBUZraLKHotTlVvODxk6AkcCkENTmymCYCZFbWvn64crj0L0zfeUPl5NTSnFK2JGz4it5F4m_oJzt42KLJEcRoUNkzzM2vJxUdD2HcuZdgAVoL1WGuF74lmOt2veNArre-RGx0HIlDSCGb-EEMjsirXJ8kDcQkoNAP_DYVrdCKGHI-i44j5xyncbcWQEKH3Gx7cOMP-rsG-BQHst85YFY8VFTn9-qaTh"
              />
            </div>
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-tertiary/20 flex items-center justify-center border border-tertiary/50"
              >
                <div className="w-12 h-12 rounded-full bg-tertiary shadow-[0_0_30px_rgba(0,217,255,0.8)]" />
              </motion.div>
              <div className="absolute w-40 h-40 border border-tertiary/20 rounded-full" />
              <div className="absolute w-64 h-64 border border-tertiary/10 rounded-full" />
            </div>
            <div className="absolute top-8 left-8">
              <span className="font-technical-label text-tertiary uppercase">
                Active Node: FLAVOR_CORE_04
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Quote */}
      <section className="relative py-48 bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 flex justify-center items-center select-none pointer-events-none">
          <h2 className="font-display-hero text-[clamp(80px,20vw,400px)] text-primary whitespace-nowrap">
            REFRESH
          </h2>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-margin-mobile">
          <Quote className="text-tertiary mx-auto mb-8 w-16 h-16" />
          <blockquote className="font-headline-lg text-[clamp(32px,4vw,56px)] text-white leading-tight mb-12">
            &ldquo;In the multiverse, every sip is a portal to a different version of
            yourself. Choose the boldest one.&rdquo;
          </blockquote>
          <cite className="font-technical-label text-technical-label text-primary uppercase tracking-[0.2em]">
            — The Architect of Fizz
          </cite>
        </div>
      </section>

      {/* Liquid Luxury */}
      <section className="py-32 px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-max-width mx-auto">
        <div className="space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-white">
            The Aesthetic of <br /> Liquid Luxury
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            We utilize vacuum-sealed glass vessels designed to maintain a
            consistent temperature of -2°C, ensuring the carbonation structure
            remains intact during inter-dimensional transport.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6 rounded-xl!">
              <div className="text-tertiary font-headline-lg text-4xl mb-1">
                99.9%
              </div>
              <div className="font-technical-label text-outline uppercase text-[10px]">
                Purity Index
              </div>
            </GlassCard>
            <GlassCard className="p-6 rounded-xl!">
              <div className="text-primary font-headline-lg text-4xl mb-1">
                0.02s
              </div>
              <div className="font-technical-label text-outline uppercase text-[10px]">
                Flavor Activation
              </div>
            </GlassCard>
          </div>
          <Link href="/cta">
            <button className="liquid-metallic-gradient text-on-primary font-nav-item text-nav-item px-10 py-4 rounded-full hover:scale-105 transition-all neon-glow flex items-center gap-2">
              Initiate Sync <ArrowRight size={18} />
            </button>
          </Link>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-tertiary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img
            className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-[1.02] transition-transform duration-700"
            alt="Glass with ice and cola"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY7ICjJPBiekRAP2LqxYJTt_EhSCIo7Kb-eA4DZwhrXsnlJMNTCkKqR-pxqWwBF3dQPWm-OEQrTjl3oto_EZiHqyYlUkFk7wTXSkh9OZAE7ryTDgQe8rdtPuV-ziD9yBXg9erSzthnRhCeR9hzqN303q1gLYFqwc4MUAma4banLL0YPr1iF6ahd3TMXsoZZIbLecwiKj6rOWO6TvIE40T5ySq8Ns7i7hGRX64IZYMC1m8UsTh4nb20gNIsTo5tmDEMhxkcsDImNJY4"
          />
        </div>
      </section>
    </main>
  );
}
