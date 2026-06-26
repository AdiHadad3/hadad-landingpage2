import { Mail, Instagram } from 'lucide-react';
import logoImg from '@/assets/hadad-logo-new.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 px-6" role="contentinfo">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <img src={logoImg} alt="HADAD" className="h-12 w-auto brightness-0 invert" />

        <div className="flex items-center gap-6">
          <a
            href="mailto:hadadpetals@gmail.com"
            aria-label="Email us"
            className="text-background/60 hover:text-background transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://instagram.com/hadadpetals"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-background/60 hover:text-background transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} HADAD LTD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
