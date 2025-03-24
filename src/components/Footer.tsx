
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-8 hover:bg-blue-200 transition-colors"
          >
            <ChevronUp className="text-primary w-6 h-6" />
          </button>
          
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold mb-2">
              <span className="text-gradient">Ravi Jaiswal</span>
            </h3>
            <p className="text-foreground/70 mb-6">
              Senior Front End Developer
            </p>
          </div>
          
          <div className="w-16 h-1 bg-primary/30 mb-6"></div>
          
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Ravi Jaiswal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
