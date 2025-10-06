import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'Tech Solutions Inc.',
    text: 'Smokehouse Miami transformed our corporate event into an unforgettable experience. The brisket was phenomenal, and the service was impeccable.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    company: 'Wedding - June 2024',
    text: 'They catered our wedding for 150 guests, and every single person raved about the food. Professional, punctual, and absolutely delicious.',
    rating: 5
  },
  {
    name: 'Jennifer Chen',
    company: 'Private Event',
    text: 'The Executive package exceeded all expectations. The pulled pork and ribs were melt-in-your-mouth perfection. Highly recommend!',
    rating: 5
  }
];

const ClientExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" id="client-experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-extralight tracking-[0.2em] uppercase text-card-foreground">
            Client Experience
          </h2>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-gradient-subtle border border-border rounded-lg p-8 transition-all duration-500 hover:border-accent hover:shadow-card hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed font-light">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-medium text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground font-light tracking-wide">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
            {[
              { number: '500+', label: 'Events Catered' },
              { number: '15K+', label: 'Happy Guests' },
              { number: '10+', label: 'Years Experience' },
              { number: '5★', label: 'Average Rating' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-4xl font-extralight text-accent mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;
