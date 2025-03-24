import { useState, useEffect, useRef } from 'react';
import { Code, Database, Server, Layout, Cpu, Users } from 'lucide-react';

interface SkillProps {
  category: string;
  skills: Array<{name: string; level: number}>;
  icon: JSX.Element;
  delay: number;
  isVisible: boolean;
}

const SkillCategory = ({ category, skills, icon, delay, isVisible }: SkillProps) => {
  return (
    <div 
      className={`glass-morphism rounded-xl p-6 transition-all duration-1000 hover-card ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-display text-lg font-medium">{category}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-foreground/70">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-bar-fill" 
                style={{ 
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${delay + (index * 100)}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
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
  
  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Layout className="text-primary w-5 h-5" />,
      skills: [
        { name: 'React JS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'TypeScript', level: 85 }
      ],
      delay: 100
    },
    {
      category: 'Languages & Tools',
      icon: <Code className="text-primary w-5 h-5" />,
      skills: [
        { name: 'C#', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'Git', level: 85 }
      ],
      delay: 300
    },
    {
      category: 'Frameworks & Libraries',
      icon: <Cpu className="text-primary w-5 h-5" />,
      skills: [
        { name: 'Redux', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Material UI', level: 85 },
        { name: 'Tailwind CSS', level: 80 }
      ],
      delay: 500
    },
    {
      category: 'Methodology & Soft Skills',
      icon: <Users className="text-primary w-5 h-5" />,
      skills: [
        { name: 'Agile Development', level: 90 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Cross-team Collaboration', level: 85 }
      ],
      delay: 700
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 md:py-28 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-3">Expertise</h2>
          <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Skills & Competencies
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category.category}
              skills={category.skills}
              icon={category.icon}
              delay={category.delay}
              isVisible={isVisible}
            />
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 max-w-3xl mx-auto glass-morphism rounded-xl p-8 relative">
          <div 
            className={`transition-all duration-1000 delay-900 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="font-display text-2xl font-medium mb-4 text-center">
              Major Achievements
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p>
                  <span className="font-medium">Successfully managed freelance projects</span> alongside full-time employment, delivering high-quality solutions during weekends and off-hours.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p>
                  <span className="font-medium">Led critical projects</span> from concept to deployment, ensuring optimal performance and client satisfaction.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p>
                  <span className="font-medium">Implemented performance optimizations</span> that significantly improved application load times and user experience.
                </p>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p>
                  <span className="font-medium">Received multiple spot awards</span> for exceptional performance and project delivery excellence.
                </p>
              </li>
            </ul>
          </div>
          
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-50 rounded-full -z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-50 rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
