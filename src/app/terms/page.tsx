export default function TermsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-technical-label text-tertiary uppercase tracking-[0.3em] block mb-4">
            Legal Guidelines
          </span>
          <h1 className="font-headline-lg text-4xl md:text-6xl text-white">Terms of Service</h1>
        </div>
        
        <div className="glass-panel rim-light p-8 md:p-12 rounded-2xl border border-white/10 space-y-8 text-on-surface-variant font-body-md leading-relaxed relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <p className="text-xl text-white opacity-90">
            Welcome to the Pepsi Multiverse. By accessing our dimensional portals, you agree to these terms.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl text-white font-headline-lg tracking-wide">1. Access Rules</h2>
            <p>You must be of legal age in your local dimension to access certain high-energy flavor zones. Always explore responsibly.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-white font-headline-lg tracking-wide">2. User Conduct</h2>
            <p>Be respectful to fellow travelers. Any attempt to destabilize the multiverse, hack the portals, or spread negative energy will result in immediate disconnection from our servers.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-white font-headline-lg tracking-wide">3. Intellectual Property</h2>
            <p>All flavor profiles, 3D assets, and dimensional coordinates belong exclusively to the Pepsi Multiverse creators. Do not steal or replicate our worlds without permission.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
