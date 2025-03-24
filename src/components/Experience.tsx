import { useState, useEffect } from 'react';
import { Briefcase, Building, GraduationCap } from 'lucide-react';
import Timeline from './Timeline';
import LoadingImage from './LoadingImage';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (!experienceSection) return;
      
      const rect = experienceSection.getBoundingClientRect();
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
    <section id="experience" className="py-20 md:py-28 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-3">My Journey</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Professional Experience
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-5 mb-12">
            <div className={`w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <Briefcase className="text-primary w-6 h-6" />
            </div>
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h3 className="font-display text-2xl font-bold mb-2">
                Work Experience
              </h3>
              <p className="text-foreground/70">
                Over 10 years of professional experience in front-end development, 
                focusing on creating exceptional user interfaces and experiences.
              </p>
            </div>
          </div>
          
          <Timeline />
          
          <div className="mt-20">
            <div className="flex gap-5 mb-12">
              <div className={`w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <GraduationCap className="text-primary w-6 h-6" />
              </div>
              <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Education
                </h3>
                <p className="text-foreground/70">
                  Formal education and continuous learning through specialized certifications.
                </p>
              </div>
            </div>
            
            <div className="pl-0 md:pl-6">
              <div className={`timeline-item transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <span className="timeline-dot" />
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/mgr_logo.jpg"
                      fallbackSrc="/images/certifications/placeholder.svg"
                      alt="Dr MGR Educational and Research Institute"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium">Bachelor's Degree in Computer Science</h3>
                    <div className="flex items-center text-sm text-foreground/70 mt-1 mb-2">
                      <span className="font-medium text-foreground/80">Dr MGR Educational and Research Institute</span>
                      <span className="mx-2">•</span>
                      <span>2009 - 2013</span>
                    </div>
                    <p className="text-foreground/70">
                      Comprehensive education in computer science fundamentals, data structures, algorithms, and software development principles.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className={`timeline-item transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <span className="timeline-dot" />
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/dav_schools_network_logo.jpg"
                      fallbackSrc="/images/certifications/placeholder.svg"
                      alt="DAV Schools Network"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium">School Education</h3>
                    <div className="flex items-center text-sm text-foreground/70 mt-1 mb-2">
                      <span className="font-medium text-foreground/80">DAV Schools Network</span>
                    </div>
                    <p className="text-foreground/70">
                      Strong foundation in mathematics, science, and computer applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="flex gap-5 mb-12">
              <div className={`w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 transition-all duration-500 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <Building className="text-primary w-6 h-6" />
              </div>
              <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Certifications
                </h3>
                <p className="text-foreground/70">
                  Professional certifications demonstrating expertise and continual learning.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-20">
              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-700 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/microsoft.svg"
                      alt="Microsoft"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      AZ-900: Azure Fundamentals
                    </h4>
                    <p className="text-sm text-foreground/70">Microsoft • August 2023</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Microsoft certification validating foundational knowledge of cloud services and Azure.
                </p>
              </div>
              
              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-800 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/pluralsight.svg"
                      alt="Pluralsight"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      Web Accessibility
                    </h4>
                    <p className="text-sm text-foreground/70">Pluralsight • November 2023</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Comprehensive training in web accessibility standards and best practices.
                </p>
              </div>

              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-900 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/ltimindtree_logo.jpg"
                      alt="LTIMindtree"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      iLead
                    </h4>
                    <p className="text-sm text-foreground/70">LTIMindtree • January 2024</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Leadership development program focusing on team management and project leadership.
                </p>
              </div>

              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-1000 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/ltimindtree_logo.jpg"
                      alt="LTIMindtree"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      GenAI
                    </h4>
                    <p className="text-sm text-foreground/70">LTIMindtree • September 2024</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Advanced training in Generative AI technologies and applications.
                </p>
              </div>

              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-1100 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/pluralsight.svg"
                      alt="Pluralsight"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      Agile Fundamentals
                    </h4>
                    <p className="text-sm text-foreground/70">Pluralsight • October 2024</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Comprehensive understanding of Agile methodologies and practices.
                </p>
              </div>

              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-1200 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/imocha.svg"
                      alt="iMocha"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      Javascript
                    </h4>
                    <p className="text-sm text-foreground/70">iMocha • February 2025</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Advanced JavaScript concepts and modern development practices.
                </p>
              </div>

              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-1300 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/imocha.svg"
                      alt="iMocha"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      Advanced React JS
                    </h4>
                    <p className="text-sm text-foreground/70">iMocha • February 2025</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Expert-level React.js development, including advanced patterns and optimization.
                </p>
              </div>

              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-1400 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/micro1_logo.jpg"
                      alt="Micro1"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      Micro1 Certified Lead Frontend Developer
                    </h4>
                    <p className="text-sm text-foreground/70">Expected in 2025</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Advanced certification in frontend development leadership, architecture, and best practices.
                </p>
              </div>
              
              <div className={`glass-morphism rounded-xl p-6 transition-all duration-700 delay-1500 hover-card ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0">
                    <LoadingImage
                      src="/images/certifications/airtribe.svg"
                      alt="Airtribe"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-medium mb-1">
                      Masterclass on API Development using Node.js
                    </h4>
                    <p className="text-sm text-foreground/70">2023</p>
                  </div>
                </div>
                <p className="text-foreground/80">
                  Comprehensive training in building robust and scalable APIs using Node.js, including security best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
