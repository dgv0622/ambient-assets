const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-foreground py-12 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {['calculator', 'gallery', 'packages', 'about'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-muted-foreground hover:text-accent transition-colors duration-300 font-light tracking-wider text-sm uppercase"
            >
              {item === 'calculator' ? 'Get Quote' : item}
            </button>
          ))}
        </div>

        <div className="text-center text-muted-foreground font-light tracking-wider">
          <p className="mb-2">&copy; 2025 Smokehouse Miami. All rights reserved.</p>
          <p className="text-sm">Premium BBQ Catering | Miami, Florida</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
