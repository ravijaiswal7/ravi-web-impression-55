
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ParallaxEffect from './ParallaxEffect';
import LoadingImage from './LoadingImage';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium tracking-wider">
                MODULE LEAD
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              <span className="block">I'm Ravi Jaiswal</span>
              <span className="text-gradient">Front End Developer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-lg">
              Specialized in building exceptional digital experiences with React JS. 
              Currently leading front-end development at LTIMindtree.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 rounded-md border border-input bg-background text-foreground font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                View Experience
              </a>
            </div>
          </div>
          
          <ParallaxEffect speed={0.05} direction="up" className="hidden md:block">
            <div 
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <LoadingImage
                  src="https://media.licdn.com/dms/image/v2/C4E03AQEg1kgPqTL3uw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1570506875201?e=1748476800&v=beta&t=7ueOtXgCykoyPNA0QuypyzEXZPQ4VuDGuCxXkgT98y0"
                  alt="Ravi Jaiswal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-blue-100 rounded-full -z-10 animate-pulse-soft" />
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-indigo-100 rounded-full -z-10 animate-float" />
            </div>
          </ParallaxEffect>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown className="text-primary/60 w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
