import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FormulaShowcase } from './components/FormulaShowcase';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-aura-brown min-h-screen selection:bg-aura-cream/30 selection:text-aura-cream">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FormulaShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
