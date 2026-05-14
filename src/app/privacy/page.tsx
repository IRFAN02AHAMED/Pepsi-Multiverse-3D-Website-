export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-technical-label text-tertiary uppercase tracking-[0.3em] block mb-4">
            Security Measures
          </span>
          <h1 className="font-headline-lg text-4xl md:text-6xl text-white">Privacy Protocol</h1>
        </div>
        
        <div className="glass-panel rim-light p-8 md:p-12 rounded-2xl border border-white/10 space-y-8 text-on-surface-variant font-body-md leading-relaxed relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <p className="text-xl text-white opacity-90">
            We care about your privacy in the Pepsi Multiverse. Here is how we handle your data across all dimensions.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl text-white font-headline-lg tracking-wide">1. Data Collection</h2>
            <p>We only collect the absolute minimum data required to synchronize your flavor profile with our dimensions. We do not track your inter-dimensional jumps.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-white font-headline-lg tracking-wide">2. Dimension Security</h2>
            <p>All data is encrypted and securely stored in our core servers. We do not sell your personal telemetry to third-party dimensions or unknown entities.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl text-white font-headline-lg tracking-wide">3. Cookies</h2>
            <p>We use temporal cookies to ensure your connection remains stable when exploring different flavor worlds. You can clear these cookies at any time from your browser.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
