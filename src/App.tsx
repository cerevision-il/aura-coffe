import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { Machine } from './components/Machine';
import { Features } from './components/Features';
import { AppControl } from './components/AppControl';
import { Menu } from './components/Menu';
import { Specs } from './components/Specs';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-aura-brown min-h-screen selection:bg-aura-cream/30 selection:text-aura-cream">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Machine />
        <Features />
        <AppControl />
        <Menu />
        <Specs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
