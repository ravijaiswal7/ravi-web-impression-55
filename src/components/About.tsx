
import { useState, useEffect } from 'react';
import { Briefcase, BookOpen, Code, Award, Heart } from 'lucide-react';
import LoadingImage from './LoadingImage';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (!aboutSection) return;
      
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-3">About Me</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Senior Front End Developer
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-lg text-foreground/80 mb-6">
              I am a dedicated Front End Developer with over 10 years of experience in building 
              exceptional digital experiences. Currently serving as a Module Lead at LTIMindtree, 
              I specialize in React JS development and front-end technologies.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              With a strong foundation in Computer Science and expertise in modern web technologies, 
              I focus on creating responsive, performant, and accessible user interfaces. I am passionate 
              about clean code, innovative solutions, and collaborative development practices.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-primary w-5 h-5" />
                  <span className="font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="text-primary w-5 h-5" />
                  <span className="font-medium">Computer Science Graduate</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Code className="text-primary w-5 h-5" />
                  <span className="font-medium">Front End Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary w-5 h-5" />
                  <span className="font-medium">Multiple Spot Awards</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-lg mb-4">Personal Interests</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm">
                  Cricket
                </span>
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm">
                  Technology
                </span>
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm">
                  Professional Networking
                </span>
                <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm">
                  Volunteering
                </span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="glass-morphism rounded-xl p-6 md:p-8">
                <h4 className="font-display text-xl font-semibold mb-6">Volunteer Work</h4>
                
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Heart className="text-primary w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium">iCare</h5>
                      <p className="text-foreground/70 text-sm mt-1">
                        Providing IT education to underprivileged youth
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <Heart className="text-primary w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium">HelpAge India</h5>
                      <p className="text-foreground/70 text-sm mt-1">
                        Social services for elderly care and support
                      </p>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-display text-xl font-semibold mt-10 mb-6">Languages</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">English</span>
                      <span className="text-xs text-foreground/70">Fluent</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Hindi</span>
                      <span className="text-xs text-foreground/70">Fluent</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Kannada</span>
                      <span className="text-xs text-foreground/70">Elementary</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-bar-fill" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-blue-50 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-50 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
