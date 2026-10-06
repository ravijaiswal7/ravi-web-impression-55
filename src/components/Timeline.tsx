
import { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import LoadingImage from './LoadingImage';

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  logoUrl?: string;
  index: number;
  isVisible: boolean;
}

const getInitials = (name: string) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const TimelineItem = ({ 
  company, 
  position, 
  period, 
  description, 
  logoUrl, 
  index,
  isVisible
}: TimelineItemProps) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <div 
      className={`timeline-item transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-12'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms`
      }}
    >
      <span className="timeline-dot" />
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-lg bg-white shadow-soft flex items-center justify-center p-2 flex-shrink-0 overflow-hidden">
          {logoError || !logoUrl ? (
            <span className="font-display text-lg font-semibold text-primary">
              {getInitials(company)}
            </span>
          ) : (
            <img
              src={logoUrl}
              alt={company}
              loading="lazy"
              className="w-full h-full object-contain"
              onError={() => setLogoError(true)}
            />
          )}
        </div>
        <div>
          <h3 className="font-display text-lg font-medium">{position}</h3>
          <div className="flex items-center text-sm text-foreground/70 mt-1 mb-2">
            <span className="font-medium text-foreground/80">{company}</span>
            <span className="mx-2">•</span>
            <span>{period}</span>
          </div>
          <p className="text-foreground/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById('timeline');
      if (!timelineSection) return;
      
      const rect = timelineSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineItems = [
    {
      company: 'LTIMindtree',
      position: 'Module Lead, Senior Front End Developer',
      period: 'Current',
      description: 'Leading front-end development teams in React JS, implementing best practices, and driving innovation to deliver exceptional user experiences.',
      logoUrl: '/images/certifications/ltimindtree_logo.jpg'
    },
    {
      company: 'HARMAN India',
      position: 'Technical Lead',
      period: '2019 - 2021',
      description: 'Spearheaded front-end development initiatives, mentored junior developers, and implemented complex UI features for automotive solutions.',
      logoUrl: undefined
    },
    {
      company: 'Societe Generale Global Solution Centre',
      position: 'Senior Software Engineer',
      period: '2017 - 2019',
      description: 'Delivered robust front-end solutions for financial applications, collaborated with cross-functional teams, and optimized application performance.',
      logoUrl: undefined
    },
    {
      company: 'IGATE',
      position: 'Software Engineer',
      period: '2014 - 2017',
      description: 'Built responsive and accessible web interfaces, collaborated with UX teams, and contributed to the implementation of design systems.',
      logoUrl: undefined
    }
  ];

  return (
    <div id="timeline" className="mt-16">
      <div className="pl-0 md:pl-6">
        {timelineItems.map((item, index) => (
          <TimelineItem
            key={index}
            company={item.company}
            position={item.position}
            period={item.period}
            description={item.description}
            logoUrl={item.logoUrl}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
