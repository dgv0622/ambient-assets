import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-extralight tracking-[0.2em] uppercase text-card-foreground">
            About Us
          </h2>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h3 className="text-3xl font-light text-card-foreground tracking-wider mb-6">
                Crafting Unforgettable Experiences
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Smokehouse Miami represents the pinnacle of authentic BBQ catering, delivering meticulously crafted cuisine to Miami's most discerning corporate and private events.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Our dedication to artisanal smoking techniques and premium ingredients has established us as the premier choice for sophisticated gatherings throughout South Florida.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                Each culinary creation embodies our commitment to excellence, transforming your event into an extraordinary celebration that resonates long after the final course.
              </p>
            </div>

            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
              <div className="relative h-[450px] rounded-lg overflow-hidden shadow-elegant border-2 border-accent/30">
                <img
                  src="https://i.imgur.com/3NhFg9X.jpeg"
                  alt="Smokehouse Miami Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
