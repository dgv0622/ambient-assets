import { Button } from '@/components/ui/button';

const StickyCTA = () => {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculator');
    calculator?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom duration-500">
      <div className="bg-gradient-to-r from-burnt-umber via-dusty-red to-burnt-umber text-cream-white py-4 px-6 shadow-2xl border-t border-faded-mustard/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm md:text-base font-light tracking-wide">
              Let's Make Your Next Event Unforgettable
            </p>
          </div>
          <Button
            onClick={scrollToCalculator}
            className="h-11 px-6 bg-faded-mustard hover:bg-faded-mustard/90 text-charcoal-gray font-medium rounded shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;