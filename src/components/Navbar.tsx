import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const links = [
  { href: '#machine', label: 'The Machine' },
  { href: '#features', label: 'Features' },
  { href: '#app', label: 'The App' },
  { href: '#specs', label: 'Specs' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500',
        scrolled
          ? 'py-4 bg-aura-dark/85 backdrop-blur-md border-b border-aura-cream/10 shadow-lg shadow-black/30'
          : 'py-6 bg-transparent border-b border-transparent'
      )}
    >
      <a href="#top" className="flex items-center gap-2">
        <span className="text-2xl font-serif font-semibold tracking-[0.3em] text-aura-cream">AURA</span>
      </a>

      <div className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.2em] text-aura-cream/60">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hover:text-aura-cream transition-colors duration-300">
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#preorder"
        className="px-7 py-3 matte-button uppercase tracking-[0.15em] text-xs"
      >
        Pre-order
      </a>
    </nav>
  );
}
