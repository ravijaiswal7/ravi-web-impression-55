
import { useRef, useEffect, useState, ReactNode } from 'react';

interface ParallaxEffectProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxEffect = ({ 
  children, 
  speed = 0.1, 
  direction = 'up',
  className = "" 
}: ParallaxEffectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  
  const handleScroll = () => {
    if (!ref.current) return;
    
    const elementTop = ref.current.getBoundingClientRect().top;
    const elementBottom = ref.current.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    // Only apply parallax when element is in viewport
    if (elementTop < windowHeight && elementBottom > 0) {
      const scrollPosition = window.scrollY;
      setOffset(scrollPosition * speed);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  const getTransform = () => {
    switch(direction) {
      case 'up':
        return `translateY(-${offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(-${offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(-${offset}px)`;
    }
  };
  
  return (
    <div 
      ref={ref}
      style={{ 
        transform: getTransform(),
        transition: 'transform 0.1s ease-out'
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default ParallaxEffect;
