import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const galleryItems = [
  { image: 'https://i.imgur.com/I78WrM9.jpeg', title: 'Smoked Brisket' },
  { image: 'https://i.imgur.com/cjaP69M.jpeg', title: 'BBQ Ribs' },
  { image: 'https://i.imgur.com/OVdZYr8.jpeg', title: 'Pulled Pork' },
  { image: 'https://i.imgur.com/E45q46k.jpeg', title: 'Smoked Chicken' },
  { image: 'https://i.imgur.com/tHVaDN2.jpeg', title: 'Signature Sides' },
  { image: 'https://i.imgur.com/IR0otiJ.jpeg', title: 'Mac & Cheese' }
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-4 font-extralight tracking-[0.2em] uppercase text-card-foreground">
            Our Specialties
          </h2>
          <div className="w-24 h-0.5 bg-gradient-primary mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`group relative h-80 rounded-lg overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-card hover:-translate-y-2 border-2 border-accent/30 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-foreground text-xl font-light tracking-[0.15em] uppercase">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
