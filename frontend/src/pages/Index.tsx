import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Navigation from '@/components/Navigation';
import QuoteCalculator from '@/components/QuoteCalculator';
import ClientExperience from '@/components/ClientExperience';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Quote Calculator Section */}
      <section className="min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-to-br from-burnt-umber/20 via-cream-white to-faded-mustard/10 relative" id="calculator">
        {/* Subtle smoke effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burnt-umber/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-faded-mustard/20 rounded-full blur-[120px]" />
        </div>

        <div className="w-full max-w-3xl relative z-10">
          <div
            ref={ref}
            className={`rounded shadow-card overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Calculator Header - Heritage Gold */}
            <div className="bg-gradient-to-br from-faded-mustard via-[#D4AF37] to-faded-mustard text-charcoal-gray p-12 text-center relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-burnt-umber/40" />
              <h1 className="text-4xl md:text-5xl tracking-[0.15em] uppercase mb-4 font-serif">
                Get Your Quote
              </h1>
              <p className="text-base text-charcoal-gray/80 tracking-wide font-light">
                Answer a few quick questions for an instant estimate
              </p>
            </div>

            {/* Calculator Body - Transparent fade into background */}
            <div className="p-12 bg-gradient-to-b from-cream-white/95 via-cream-white/75 to-cream-white/50 backdrop-blur-[2px]">
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Section - Right after calculator */}
      <ClientExperience />

      {/* Gallery Section */}
      <Gallery />

      {/* Packages Section */}
      <Packages />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
