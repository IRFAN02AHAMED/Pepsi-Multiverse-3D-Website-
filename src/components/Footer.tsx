import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full px-margin-desktop py-12 flex flex-col items-center gap-8 bg-surface-container-lowest bg-gradient-to-t from-surface-container-lowest to-transparent mt-24">
      <div className="font-headline-lg text-on-surface text-[48px] tracking-widest">
        Pepsi Multiverse
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        <Link
          className="font-technical-label text-technical-label text-outline hover:text-primary transition-colors hover:translate-y-[-4px] duration-500"
          href="/privacy"
        >
          Privacy Protocol
        </Link>
        <Link
          className="font-technical-label text-technical-label text-outline hover:text-primary transition-colors hover:translate-y-[-4px] duration-500"
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className="font-technical-label text-technical-label text-outline hover:text-primary transition-colors hover:translate-y-[-4px] duration-500"
          href="/contact"
        >
          Contact HQ
        </Link>
      </div>
      <div className="h-[1px] w-full max-w-md bg-white/10"></div>
      <div className="font-body-md text-body-md text-outline">
        © {new Date().getFullYear()} Pepsi Multiverse. All Dimensions Reserved.
      </div>
    </footer>
  );
}
