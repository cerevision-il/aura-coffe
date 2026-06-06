export function Footer() {
  return (
    <footer className="bg-aura-dark py-24 px-6 md:px-12 border-t border-aura-cream/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-sm">
          <div className="text-3xl font-serif tracking-widest text-aura-cream mb-6">AURA</div>
          <p className="text-aura-cream/50 text-sm leading-relaxed mb-10 font-light">
            The elegant intersection of ancient botanicals and modern biometric engineering.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 border border-aura-cream/20 flex items-center justify-center hover:bg-aura-cream hover:text-aura-brown text-aura-cream cursor-pointer transition-colors duration-500 uppercase text-xs tracking-widest">X</div>
            <div className="w-12 h-12 border border-aura-cream/20 flex items-center justify-center hover:bg-aura-cream hover:text-aura-brown text-aura-cream cursor-pointer transition-colors duration-500 uppercase text-xs tracking-widest">IG</div>
          </div>
        </div>
        
        <div className="flex gap-20">
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-aura-cream tracking-widest uppercase text-sm">Product</h4>
            <a href="#" className="text-aura-cream/50 hover:text-aura-cream text-sm transition-colors duration-300">Features</a>
            <a href="#" className="text-aura-cream/50 hover:text-aura-cream text-sm transition-colors duration-300">Science</a>
            <a href="#" className="text-aura-cream/50 hover:text-aura-cream text-sm transition-colors duration-300">Pricing</a>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-aura-cream tracking-widest uppercase text-sm">Company</h4>
            <a href="#" className="text-aura-cream/50 hover:text-aura-cream text-sm transition-colors duration-300">About</a>
            <a href="#" className="text-aura-cream/50 hover:text-aura-cream text-sm transition-colors duration-300">Journal</a>
            <a href="#" className="text-aura-cream/50 hover:text-aura-cream text-sm transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <h4 className="font-semibold text-aura-cream mb-6 tracking-widest uppercase text-sm">The Aura Newsletter</h4>
          <div className="flex flex-col gap-4 w-full">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-transparent border-b border-aura-cream/20 py-3 text-sm text-aura-cream focus:outline-none focus:border-aura-cream w-full md:w-72 transition-colors placeholder:text-aura-cream/30"
            />
            <button className="bg-aura-cream text-aura-brown py-4 text-sm font-semibold hover:bg-white transition-colors duration-500 uppercase tracking-widest mt-2 shadow-md shadow-black/20">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-aura-cream/5 flex flex-col md:flex-row justify-between items-center text-xs text-aura-cream/40 tracking-wider">
        <p>&copy; {new Date().getFullYear()} Auralabs Inc. All rights reserved.</p>
        <div className="flex gap-8 mt-6 md:mt-0 uppercase">
          <a href="#" className="hover:text-aura-cream transition-colors duration-300">Privacy</a>
          <a href="#" className="hover:text-aura-cream transition-colors duration-300">Terms</a>
        </div>
      </div>
    </footer>
  );
}
