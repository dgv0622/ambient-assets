import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavigation = (item: string) => {
    if (item === 'packages') {
      navigate('/packages');
      setIsMobileMenuOpen(false);
    } else {
      // If not on home page, navigate to home first
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item), 100);
      } else {
        scrollToSection(item);
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-lg border-b border-accent/10' : 'bg-primary/95 backdrop-blur-md border-b border-accent/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://i.imgur.com/JKX6vYH.png" 
              alt="Smokehouse Miami" 
              className="w-12 h-12 object-contain drop-shadow-glow"
            />
            <div className="text-foreground text-xl font-light tracking-[0.2em] uppercase">
              Smokehouse <span className="text-accent font-normal">Miami</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8">
            {['calculator', 'gallery', 'packages', 'about'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-light tracking-wider text-sm uppercase"
                >
                  {item === 'calculator' ? 'Get Quote' : item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {['calculator', 'gallery', 'packages', 'about'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-foreground hover:text-accent transition-colors duration-300 font-light tracking-wider text-sm uppercase w-full text-left"
                  >
                    {item === 'calculator' ? 'Get Quote' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
