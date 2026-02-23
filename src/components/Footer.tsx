import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">HADAD</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Three decades of growing the world's finest gypsophila. Family-owned, passionately crafted.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-background/50">Navigate</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link to="/" className="text-sm text-background/70 hover:text-background transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-background/70 hover:text-background transition-colors">About</Link>
              <Link to="/gallery" className="text-sm text-background/70 hover:text-background transition-colors">Gallery</Link>
              <Link to="/contact" className="text-sm text-background/70 hover:text-background transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-background/50">Get in Touch</h4>
            <a
              href="mailto:hadadpetals@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors"
            >
              <Mail size={16} />
              hadadpetals@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} HADAD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
