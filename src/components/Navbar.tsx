export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 matte-panel border-b-0 py-5 px-6 md:px-12 flex items-center justify-between transition-all">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-serif font-semibold tracking-widest text-aura-cream">AURA</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-aura-cream/70">
        <a href="#product" className="hover:text-aura-cream transition-colors duration-300">Product</a>
        <a href="#features" className="hover:text-aura-cream transition-colors duration-300">Features</a>
        <a href="#blends" className="hover:text-aura-cream transition-colors duration-300">Blends</a>
      </div>
      <button className="px-8 py-3 rounded-none matte-button uppercase tracking-wider text-sm">
        Pre-order Now
      </button>
    </nav>
  );
}
