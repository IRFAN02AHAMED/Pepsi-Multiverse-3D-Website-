import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 bg-surface/40 backdrop-blur-[40px] border-b border-white/10 shadow-[0px_0px_20px_rgba(0,217,255,0.2)]">
      <Link href="/" className="font-display-hero text-primary tracking-widest text-[32px]">
        Pepsi Multiverse
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link
          className="font-nav-item text-nav-item text-on-surface-variant hover:text-tertiary hover:scale-105 transition-all duration-300"
          href="/"
        >
          Multiverse
        </Link>
        <Link
          className="font-nav-item text-nav-item text-on-surface-variant hover:text-tertiary hover:scale-105 transition-all duration-300"
          href="/viewer"
        >
          Flavors
        </Link>
        <Link
          className="font-nav-item text-nav-item text-on-surface-variant hover:text-tertiary hover:scale-105 transition-all duration-300"
          href="/collections"
        >
          Collections
        </Link>
        <Link
          className="font-nav-item text-nav-item text-on-surface-variant hover:text-tertiary hover:scale-105 transition-all duration-300"
          href="/story"
        >
          Experience
        </Link>
      </div>
      <Link href="/collections">
        <button className="liquid-metallic-gradient text-on-primary font-nav-item text-nav-item px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 neon-glow flex items-center gap-2">
          <Sparkles size={16} /> Explore
        </button>
      </Link>
    </nav>
  );
}
