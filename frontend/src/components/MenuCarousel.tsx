import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    name: 'Brisket',
    description: 'Slow-smoked 14 hours over post oak',
    details: 'Salt and pepper crust, perfectly pink smoke ring, melts in your mouth',
  },
  {
    name: 'Pulled Pork',
    description: 'Tender shoulder, hickory-kissed',
    details: 'Hand-pulled, seasoned with our signature rub',
  },
  {
    name: 'Smoked Ribs',
    description: 'Fall-off-the-bone St. Louis style',
    details: 'Dry-rubbed and smoked low and slow for 6 hours',
  },
  {
    name: 'Smoked Turkey',
    description: 'Brined overnight, smoked golden',
    details: 'Juicy, tender, with a perfect smoke flavor',
  },
  {
    name: 'Sausage Links',
    description: 'House-made jalapeño cheddar',
    details: 'Snappy casing, bold flavor, perfect char',
  },
];

const MenuCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Auto-rotate menu items at the same speed as testimonials (4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % menuItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % menuItems.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-cream-white to-burnt-umber/5" id="menu">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-faded-mustard text-sm uppercase tracking-[0.2em] font-medium mb-2">
            Feasts Made Honest
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal-gray tracking-wide">
            Our Menu
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {menuItems.map((item, index) => {
              const isActive = index === activeIndex;
              const isHovered = index === hoveredIndex;
              const offset = index - activeIndex;
              
              return (
                <div
                  key={item.name}
                  className={`relative transition-all duration-500 ${
                    isActive ? 'md:col-span-3' : 'md:col-span-1'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`bg-white rounded shadow-soft overflow-hidden border border-burnt-umber/10 transition-all duration-300 ${
                    isHovered ? 'shadow-card scale-105' : ''
                  }`}>
                    {/* Image placeholder */}
                    <div className={`bg-gradient-to-br from-burnt-umber/30 to-charcoal-gray/20 transition-all duration-500 ${
                      isActive ? 'h-72' : 'h-48'
                    } flex items-center justify-center`}>
                      <div className="text-cream-white/30 text-6xl font-serif">{item.name[0]}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-serif text-charcoal-gray mb-2">{item.name}</h3>
                      <p className="text-burnt-umber text-sm font-medium mb-3">{item.description}</p>
                      
                      {(isActive || isHovered) && (
                        <p className="text-charcoal-gray/70 text-sm leading-relaxed animate-in fade-in duration-300">
                          {item.details}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-burnt-umber/30 hover:bg-burnt-umber/10"
            >
              <ChevronLeft className="w-5 h-5 text-burnt-umber" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-burnt-umber/30 hover:bg-burnt-umber/10"
            >
              <ChevronRight className="w-5 h-5 text-burnt-umber" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {menuItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-burnt-umber w-8' 
                    : 'bg-burnt-umber/30 hover:bg-burnt-umber/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuCarousel;