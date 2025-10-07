import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import SmokeDivider from '@/components/SmokeDivider';
import MenuCarousel from '@/components/MenuCarousel';
import OurValues from '@/components/OurValues';
import Testimonials from '@/components/Testimonials';
import QuoteCalculator from '@/components/QuoteCalculator';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import StickyCTA from '@/components/StickyCTA';

const Index = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyCTA(scrollPercentage > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-white relative">
      <Navigation />

      {/* Hero Section - Film Grain & Smoke */}
      <Hero />

      {/* Our Story Section */}
      <OurStory />

      {/* Smoke Line Divider */}
      <SmokeDivider />

      {/* Menu Carousel */}
      <MenuCarousel />

      {/* Smoke Line Divider */}
      <SmokeDivider />

      {/* Our Values Section */}
      <OurValues />

      {/* Testimonials - Stories from the Table */}
      <Testimonials />

      {/* Quote Calculator Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-burnt-umber/10 via-cream-white to-faded-mustard/5 relative" id="calculator">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-burnt-umber/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-faded-mustard/20 rounded-full blur-[120px]" />
        </div>

        <div className="w-full max-w-3xl mx-auto relative z-10">
          <div
            ref={ref}
            className={`rounded shadow-card overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-faded-mustard via-[#D4AF37] to-faded-mustard text-charcoal-gray p-12 text-center relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-burnt-umber/40" />
              <h2 className="text-3xl md:text-4xl tracking-[0.15em] uppercase mb-3 font-serif">
                Plan Your Feast
              </h2>
              <p className="text-sm text-charcoal-gray/70 tracking-wide font-light">
                Tell us about your gathering — we'll bring the fire
              </p>
            </div>

            <div className="p-12 bg-gradient-to-b from-cream-white/95 via-cream-white/75 to-cream-white/50 backdrop-blur-[2px]">
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Sticky CTA Bar */}
      {showStickyCTA && <StickyCTA />}

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
