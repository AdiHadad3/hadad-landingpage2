import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/hadad-logo-new.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Products', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const checkHero = () => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setPastHero(heroBottom <= 64);
      } else {
        setPastHero(window.scrollY > 80);
      }
    };
    window.addEventListener('scroll', checkHero, { passive: true });
    checkHero();
    return () => window.removeEventListener('scroll', checkHero);
  }, []);

  const transparent = isHome && !pastHero && !isOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-md border-b border-border'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center h-16 md:h-20">
        {/* Logo — left */}
        <Link to="/" className="flex items-center shrink-0 mr-auto" aria-label="HADAD Home">
          <img
            src={logoImg}
            alt="HADAD"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Nav links — centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans text-sm tracking-wide transition-colors duration-200 ${
                location.pathname === item.path
                  ? transparent ? 'text-white font-medium' : 'text-primary font-medium'
                  : transparent ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-current={location.pathname === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button — right */}
        <button
          className={`md:hidden p-2 cursor-pointer ml-auto ${transparent ? 'text-white' : 'text-foreground'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-3 font-sans text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
