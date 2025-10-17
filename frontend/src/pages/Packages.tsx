import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Essential',
    price: 25,
    minimum: '25 guests',
    tagline: 'Perfect for intimate gatherings',
    features: [
      'Choice of 2 premium meats',
      '2 signature sides',
      'Dinner rolls & butter',
      'BBQ sauce selection',
      'Disposable serving ware',
      '2-hour service window'
    ],
    color: 'burnt-umber'
  },
  {
    name: 'Executive',
    price: 40,
    minimum: '50 guests',
    tagline: 'Our most popular choice',
    featured: true,
    features: [
      'Choice of 3 premium meats',
      '3 signature sides',
      'Appetizer selection',
      'Dinner rolls & cornbread',
      'Premium serving ware',
      'Professional staff',
      '4-hour service window'
    ],
    color: 'dusty-red'
  },
  {
    name: 'Prestige',
    price: 60,
    minimum: '75 guests',
    tagline: 'The ultimate BBQ experience',
    features: [
      'Unlimited meat selection',
      '4 premium sides',
      'Full appetizer spread',
      'Artisan breads',
      'China & glassware',
      'Full service staff',
      'Unlimited service time',
      'Custom menu options'
    ],
    color: 'faded-mustard'
  }
];

const Packages = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToCalculator = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-white via-cream-white to-burnt-umber/5">
      {/* Header */}
      <div className="bg-gradient-to-r from-burnt-umber via-dusty-red to-burnt-umber text-cream-white py-8 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-cream-white hover:text-faded-mustard hover:bg-cream-white/10 mb-4 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center mt-8">
            <p className="text-faded-mustard text-sm uppercase tracking-[0.3em] font-medium mb-3 animate-in fade-in-up duration-700">
              Choose Your Experience
            </p>
            <h1 className="text-5xl md:text-6xl font-serif tracking-wide mb-4 animate-in fade-in-up duration-700" style={{ animationDelay: '200ms' }}>
              Catering Packages
            </h1>
            <p className="text-cream-white/80 text-lg max-w-2xl mx-auto animate-in fade-in-up duration-700" style={{ animationDelay: '400ms' }}>
              From intimate gatherings to grand celebrations, we have the perfect package for your event
            </p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="relative group animate-in fade-in-up duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect Background */}
              <div 
                className={`absolute -inset-1 bg-gradient-to-r rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500 ${
                  pkg.color === 'burnt-umber' ? 'from-burnt-umber/50 via-burnt-umber/70 to-burnt-umber/50' :
                  pkg.color === 'dusty-red' ? 'from-dusty-red/50 via-dusty-red/70 to-dusty-red/50' :
                  'from-faded-mustard/50 via-faded-mustard/70 to-faded-mustard/50'
                }`}
              />

              {/* Card */}
              <div 
                className={`relative bg-white rounded-xl overflow-hidden transition-all duration-500 ${
                  pkg.featured ? 'shadow-card scale-105' : 'shadow-soft'
                } ${
                  hoveredIndex === index ? 'transform -translate-y-2 shadow-2xl' : ''
                }`}
              >
                {/* Animated Border Glow */}
                <div 
                  className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    hoveredIndex === index 
                      ? pkg.color === 'burnt-umber' ? 'ring-2 ring-burnt-umber' :
                        pkg.color === 'dusty-red' ? 'ring-2 ring-dusty-red' :
                        'ring-2 ring-faded-mustard'
                      : 'ring-1 ring-burnt-umber/10'
                  }`}
                />

                {/* Header Section */}
                <div className={`relative p-8 pb-6 transition-all duration-500 ${
                  hoveredIndex === index
                    ? pkg.color === 'burnt-umber' ? 'bg-gradient-to-br from-burnt-umber via-burnt-umber/90 to-burnt-umber/80' :
                      pkg.color === 'dusty-red' ? 'bg-gradient-to-br from-dusty-red via-dusty-red/90 to-dusty-red/80' :
                      'bg-gradient-to-br from-faded-mustard via-faded-mustard/90 to-faded-mustard/80'
                    : 'bg-gradient-to-br from-charcoal-gray/5 via-burnt-umber/5 to-charcoal-gray/5'
                }`}>
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full rounded-full blur-2xl ${
                      pkg.color === 'burnt-umber' ? 'bg-burnt-umber' :
                      pkg.color === 'dusty-red' ? 'bg-dusty-red' :
                      'bg-faded-mustard'
                    }`} />
                  </div>

                  <div className="relative">
                    <h3 className={`text-3xl font-serif tracking-wide mb-2 transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-cream-white' : 'text-charcoal-gray'
                    }`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mb-6 transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-cream-white/80' : 'text-charcoal-gray/60'
                    }`}>
                      {pkg.tagline}
                    </p>
                    
                    <div className={`text-5xl font-light mb-1 transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-cream-white' : 'text-charcoal-gray'
                    }`}>
                      ${pkg.price}
                      <span className="text-xl">/person</span>
                    </div>
                    <p className={`text-sm tracking-wider transition-colors duration-500 ${
                      hoveredIndex === index ? 'text-cream-white/70' : 'text-charcoal-gray/60'
                    }`}>
                      Minimum {pkg.minimum}
                    </p>
                  </div>
                </div>

                {/* Features Section */}
                <div className="p-8 pt-6">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 pb-3 border-b border-burnt-umber/10 last:border-0 transition-all duration-300 hover:translate-x-1"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-500 ${
                          hoveredIndex === index
                            ? pkg.color === 'burnt-umber' ? 'bg-burnt-umber' :
                              pkg.color === 'dusty-red' ? 'bg-dusty-red' :
                              'bg-faded-mustard'
                            : 'bg-burnt-umber/20'
                        }`}>
                          <Check className={`w-3 h-3 transition-colors duration-500 ${
                            hoveredIndex === index ? 'text-cream-white' : 'text-burnt-umber'
                          }`} strokeWidth={3} />
                        </div>
                        <span className="text-charcoal-gray/80 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToCalculator}
                    className={`w-full py-6 text-sm uppercase tracking-wider font-semibold transition-all duration-500 ${
                      pkg.color === 'burnt-umber' 
                        ? 'bg-burnt-umber hover:bg-burnt-umber/90 text-cream-white hover:shadow-lg hover:shadow-burnt-umber/50' :
                      pkg.color === 'dusty-red'
                        ? 'bg-dusty-red hover:bg-dusty-red/90 text-cream-white hover:shadow-lg hover:shadow-dusty-red/50' :
                        'bg-faded-mustard hover:bg-faded-mustard/90 text-charcoal-gray hover:shadow-lg hover:shadow-faded-mustard/50'
                    } ${
                      hoveredIndex === index ? 'transform scale-105' : ''
                    }`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-in fade-in-up duration-700" style={{ animationDelay: '600ms' }}>
          <p className="text-charcoal-gray/60 mb-6">
            Need something custom? We're happy to create a package that fits your exact needs.
          </p>
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="bg-gradient-to-r from-burnt-umber via-dusty-red to-burnt-umber hover:shadow-xl hover:scale-105 text-cream-white px-12 py-6 text-base transition-all duration-300"
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
