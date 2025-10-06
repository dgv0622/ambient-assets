import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Essential',
    price: 25,
    minimum: '25 guests',
    features: [
      'Choice of 2 meats',
      '2 signature sides',
      'Dinner rolls & butter',
      'BBQ sauce selection',
      'Disposable serving ware',
      '2-hour service'
    ]
  },
  {
    name: 'Executive',
    price: 40,
    minimum: '50 guests',
    featured: true,
    features: [
      'Choice of 3 meats',
      '3 signature sides',
      'Appetizer selection',
      'Dinner rolls & cornbread',
      'Premium serving ware',
      'Professional staff',
      '4-hour service'
    ]
  },
  {
    name: 'Prestige',
    price: 60,
    minimum: '75 guests',
    features: [
      'Unlimited meat selection',
      '4 premium sides',
      'Full appetizer spread',
      'Artisan breads',
      'China & glassware',
      'Full service staff',
      'Unlimited service time',
      'Custom menu options'
    ]
  }
];

const Packages = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-muted" id="packages">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-extralight tracking-[0.2em] uppercase text-card-foreground">
            Catering Packages
          </h2>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-10 text-center transition-all duration-700 hover:shadow-card hover:-translate-y-2 ${
                  pkg.featured ? 'border-2 border-accent shadow-glow scale-105' : 'border border-border'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <h3 className="text-2xl font-light tracking-[0.15em] uppercase mb-6 text-card-foreground">
                  {pkg.name}
                </h3>
                <div className="text-5xl font-extralight text-card-foreground mb-2">
                  ${pkg.price}
                  <span className="text-xl font-light">/person</span>
                </div>
                <p className="text-muted-foreground text-sm tracking-wider mb-8">Minimum {pkg.minimum}</p>

                <ul className="space-y-4 mb-10 text-left">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 pb-4 border-b border-border last:border-0 text-muted-foreground font-light"
                    >
                      <span className="text-accent font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToCalculator}
                  className={`w-full py-6 tracking-widest uppercase text-sm transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-gradient-primary hover:shadow-glow hover:-translate-y-1 text-primary-foreground'
                      : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
                  }`}
                >
                  Inquire
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
