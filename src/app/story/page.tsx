"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import Link from "next/link";
import { ArrowRight, Quote, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

function FounderMesh() {
  const texture = useTexture("/founder.png");
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        (state.pointer.x * Math.PI) / 8,
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        (-state.pointer.y * Math.PI) / 8,
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[3, 4]} />
      <meshStandardMaterial map={texture} roughness={0.4} metalness={0.1} side={THREE.DoubleSide} />
    </mesh>
  );
}

const storyBeats = [
  {
    label: "Smoothness",
    value: "Super Chill",
    accent: "tertiary",
  },
  {
    label: "Bubbles",
    value: "Never-ending Fizz",
    accent: "primary",
  },
  {
    label: "Color",
    value: "Deep Space Blue",
    accent: "secondary-container",
  },
];

import { useFlavorStore } from "@/store/useFlavorStore";
import { useRouter } from "next/navigation";

export default function StoryPage() {
  const { startSync } = useFlavorStore();
  const router = useRouter();

  const handleSync = () => {
    startSync(() => {
      router.push("/viewer");
    });
  };
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
            How It Began
          </span>
          <h1 className="font-display-hero text-display-hero leading-tight text-white mb-8 md:text-[120px] text-[64px]">
            Made for <br />
            <span className="text-tertiary">Every World</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed opacity-80">
            The Pepsi Universe isn't just a drink; it's an adventure. We captured the glow of neon cities and the coolest ice from deep space to create the best tasting drink ever made.
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
                Perfect Bubbles
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every single bubble is made to be perfect. The flavors are mixed just right so every sip tastes amazing the second it hits your tongue.
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
                FUN FACTS // 001
              </span>
              <h3 className="font-headline-lg text-[40px] text-white leading-none mb-6">
                What's <br /> Inside
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

          {/* History Arc */}
          <div className="col-span-12 lg:col-span-5 glass-panel rim-light rounded-xl p-12 border border-white/5 flex flex-col justify-center relative overflow-hidden">
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">
              Where It All Started
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
              Long before we traveled across universes, Pepsi was born in 1893 right here on Earth! Created by Caleb Bradham in New Bern, North Carolina, it was first called "Brad's Drink". By 1898, it was officially named Pepsi-Cola.
            </p>
            <div className="flex flex-wrap gap-4 relative z-10">
              {/* Buttons removed as requested */}
            </div>
          </div>

          {/* Caleb Bradham Visual */}
          <div className="col-span-12 lg:col-span-7 relative flex items-center justify-center p-8 group perspective-[1000px]">
            <div className="glass-panel rim-light rounded-xl overflow-hidden w-full max-w-md aspect-[3/4] border border-white/10 relative">
              <div className="absolute inset-0 z-0 cursor-move">
                <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                  <ambientLight intensity={1.5} />
                  <directionalLight position={[2, 5, 2]} intensity={2} />
                  <Suspense fallback={null}>
                    <FounderMesh />
                  </Suspense>
                </Canvas>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 z-20 pointer-events-none">
                <span className="font-technical-label text-tertiary uppercase tracking-widest text-[10px] mb-2 block">
                  Founder // 1893
                </span>
                <h3 className="font-headline-lg text-white text-3xl">Caleb Bradham</h3>
              </div>
              {/* Subtle 3D floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-16 h-16 border border-tertiary/30 rounded-full pointer-events-none"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-12 right-12 w-8 h-8 border border-tertiary/60 rounded-full pointer-events-none"
              />
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
            The Coolest <br /> Drinks Ever
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
            We use special super-cold bottles to keep everything at exactly -2°C, making sure every drop stays perfectly fizzy and refreshing when it travels to you!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GlassCard className="p-6 rounded-xl!">
              <div className="text-tertiary font-headline-lg text-4xl mb-1">
                99.9%
              </div>
              <div className="font-technical-label text-outline uppercase text-[10px]">
                Awesome Taste
              </div>
            </GlassCard>
            <GlassCard className="p-6 rounded-xl!">
              <div className="text-primary font-headline-lg text-4xl mb-1">
                0.02s
              </div>
              <div className="font-technical-label text-outline uppercase text-[10px]">
                Fast Flavor
              </div>
            </GlassCard>
          </div>
          <div className="flex flex-col items-start gap-2">
            <button 
              onClick={handleSync}
              className="liquid-metallic-gradient text-on-primary font-nav-item text-nav-item px-10 py-4 rounded-full hover:scale-105 transition-all neon-glow flex items-center gap-2 group"
            >
              Initiate Sync <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="font-technical-label text-[10px] text-tertiary/60 uppercase tracking-widest pl-4">
              Starts immersive 3D experience
            </span>
          </div>
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
