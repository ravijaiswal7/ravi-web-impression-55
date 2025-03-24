import { useEffect, useState } from 'react';

interface VisitorStats {
  totalVisits: number;
  lastVisit: string;
  visitorId: string;
}

const generateVisitorId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const useVisitorTracking = () => {
  const [visitorStats, setVisitorStats] = useState<VisitorStats>({
    totalVisits: 0,
    lastVisit: '',
    visitorId: '',
  });

  useEffect(() => {
    const trackVisit = () => {
      const storedStats = localStorage.getItem('visitorStats');
      let stats: VisitorStats;

      if (storedStats) {
        stats = JSON.parse(storedStats);
        stats.totalVisits += 1;
        stats.lastVisit = new Date().toISOString();
      } else {
        stats = {
          totalVisits: 1,
          lastVisit: new Date().toISOString(),
          visitorId: generateVisitorId(),
        };
      }

      localStorage.setItem('visitorStats', JSON.stringify(stats));
      setVisitorStats(stats);
    };

    trackVisit();
  }, []);

  return visitorStats;
}; 