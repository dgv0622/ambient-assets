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
            className={`bg-card rounded-sm shadow-elegant overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Calculator Header */}
            <div className="bg-gradient-dark text-foreground p-12 text-center relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-primary" />
              <h1 className="text-4xl md:text-5xl font-extralight tracking-[0.2em] uppercase mb-4">
                Get Your Quote
              </h1>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Answer a few quick questions for an instant estimate
              </p>
            </div>

            {/* Calculator Body */}
            <div className="p-12">
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
    </div>
  );
};

export default Index;
