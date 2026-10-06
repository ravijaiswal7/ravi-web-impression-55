
import { useState, useEffect } from 'react';
import { Briefcase, Cpu, Code, Award, Sparkles, Building2 } from 'lucide-react';

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

  const certifications = [
    'Generative AI Leader',
    'GenAI Frontend Developer',
    'AWS Agentic AI Essentials',
    'Google Cloud Prompt Engineering',
  ];

  const clients = [
    'World Bank',
    'GE Healthcare',
    'Deloitte',
    'MRI|SIMMONS',
    'NBC Universal',
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-3">About Me</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Frontend Engineering Manager
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <p className="text-lg text-foreground/80 mb-6">
              I'm a Frontend Engineering Manager with 12+ years of experience designing and delivering scalable web applications. My expertise spans React, Next.js, JavaScript, and TypeScript, and I focus on clean architecture and practical decisions that help teams move faster while maintaining reliability and performance.
            </p>
            <p className="text-lg text-foreground/80 mb-6">
              Over the years, I've worked with global clients including the World Bank, GE Healthcare, Deloitte, MRI|SIMMONS, and NBC Universal, leading projects that improved usability, performance, and overall user experience. At HCLTech, I currently lead frontend development for the World Bank Data Hub, where I guided the upgrade to React 18, introduced modern testing practices, and improved Lighthouse performance scores by 30%. At LTIMindtree, I delivered high-impact solutions for healthcare and enterprise clients, mentoring developers and ensuring smooth adoption of new technologies. My earlier roles at Harman, Société Générale, and IGATE gave me a strong foundation in full-stack development, problem-solving, and building robust UI workflows.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Alongside frontend leadership, I hold multiple certifications in Generative AI, including Generative AI Leader, GenAI Frontend Developer, AWS Agentic AI Essentials, and Google Cloud Prompt Engineering. I've built real-world AI applications using Gemini and Imagen, explored multimodal RAG workflows, and applied AI to make frontend development smarter — from automated testing to design optimization.
            </p>
            <p className="text-lg text-foreground/80 mb-10">
              I thrive on bridging the gap between clients and engineering teams, mentoring developers, and solving complex challenges. If you're looking for a leader who combines technical depth with Generative AI expertise and a track record of delivering measurable results, let's connect.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-primary w-5 h-5" />
                  <span className="font-medium">12+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="text-primary w-5 h-5" />
                  <span className="font-medium">React &amp; Next.js Expert</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Cpu className="text-primary w-5 h-5" />
                  <span className="font-medium">GenAI Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-primary w-5 h-5" />
                  <span className="font-medium">Team Leader &amp; Mentor</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="glass-morphism rounded-xl p-6 md:p-8">
                <h4 className="font-display text-xl font-semibold mb-6">Generative AI Certifications</h4>
                
                <div className="space-y-5">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Sparkles className="text-primary w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <h5 className="font-medium">{cert}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="font-display text-xl font-semibold mt-10 mb-6">Global Clients</h4>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {clients.map((client) => (
                      <span
                        key={client}
                        className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm flex items-center gap-1.5"
                      >
                        <Building2 className="w-3.5 h-3.5" />
                        {client}
                      </span>
                    ))}
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
