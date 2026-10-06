
import { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import LoadingImage from './LoadingImage';

interface TimelineItemProps {
  company: string;
  location?: string;
  position: string;
  period: string;
  description: string[];
  logoUrl?: string;
  index: number;
  isVisible: boolean;
}

const getInitials = (name: string) =>
  name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

const TimelineItem = ({ 
  company, 
  location,
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
          <div className="flex flex-wrap items-center text-sm text-foreground/70 mt-1 mb-2">
            <span className="font-medium text-foreground/80">{company}</span>
            {location && (
              <>
                <span className="mx-2">•</span>
                <span>{location}</span>
              </>
            )}
            <span className="mx-2">•</span>
            <span>{period}</span>
          </div>
          <ul className="space-y-1.5">
            {description.map((point, i) => (
              <li key={i} className="text-sm text-foreground/70 flex gap-2">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
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
      company: 'HCLTech',
      location: 'Bangalore',
      position: 'Technical Manager – Lead Frontend Developer',
      period: 'Apr 2025 – Present',
      description: [
        'Led World Bank Data Hub frontend delivery on AEM and Edge Delivery Services, improving Lighthouse performance by 30%.',
        'Mentored 5+ developers through code reviews and Agile routines, reducing defects by 20%.',
        'Partnered with clients on system design and technical blockers, cutting resolution time by 40%.'
      ],
      logoUrl: undefined
    },
    {
      company: 'LTIMindtree',
      location: 'Bangalore',
      position: 'Module Lead',
      period: 'Feb 2021 – Apr 2025',
      description: [
        'Delivered AEM and Edge Delivery applications across 5 enterprise projects, reducing defects by 20%.',
        'Led React 18 upgrades and React Testing Library adoption to strengthen reliability.',
        'Championed Agile practices, code reviews, and knowledge sharing across project teams.'
      ],
      logoUrl: '/images/certifications/ltimindtree_logo.jpg'
    },
    {
      company: 'HARMAN India',
      location: 'Bangalore',
      position: 'Technical Lead',
      period: 'Oct 2019 – Jan 2021',
      description: [
        'Drove Simmons Insights proof-of-concepts, improving usability and securing stakeholder buy-in.',
        'Owned architecture decisions, achieving 90%+ test coverage with Jest and Enzyme.'
      ],
      logoUrl: undefined
    },
    {
      company: 'Société Générale Global Solutions Centre',
      location: 'Bangalore',
      position: 'Senior Software Engineer',
      period: 'Apr 2017 – Oct 2019',
      description: [
        'Automated KPI dashboards for leadership reporting, improving reporting efficiency by 40%.',
        'Built React-Redux applications on Web API and SQL Server, improving data visualization and workflow efficiency.'
      ],
      logoUrl: undefined
    },
    {
      company: 'IGATE',
      location: 'Bangalore',
      position: 'Software Engineer',
      period: 'Jun 2014 – Apr 2017',
      description: [
        'Delivered COMPASS and SCORE systems for NBCUniversal, supporting 10,000+ media assets.',
        'Built front-end solutions using React and Redux, improving system reliability.',
        'Developed backend components in C# and SQL Server, ensuring seamless UI integration.'
      ],
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
