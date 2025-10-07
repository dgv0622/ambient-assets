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
      <section className="min-h-screen flex items-center justify-center py-32 px-6 bg-gradient-dark relative" id="calculator">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-bbq-red/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="w-full max-w-3xl relative z-10">
          <div
            ref={ref}
            className={`rounded-sm shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Calculator Header */}
            <div className="bg-gradient-to-br from-[#D4AF37] via-[#F4E4A6] to-[#D4AF37] text-gray-900 p-12 text-center relative shadow-lg">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
              <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.2em] uppercase mb-4 text-gray-900">
                Get Your Quote
              </h1>
              <p className="text-lg text-gray-800 font-light tracking-wide">
                Answer a few quick questions for an instant estimate
              </p>
            </div>

            {/* Calculator Body - Transparent fade effect */}
            <div className="p-12 bg-gradient-to-b from-white/95 via-white/80 to-white/60 backdrop-blur-sm">
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
