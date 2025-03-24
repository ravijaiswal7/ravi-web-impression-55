import { useVisitorTracking } from "@/hooks/useVisitorTracking";

export const VisitorStats = () => {
  const { totalVisits, lastVisit } = useVisitorTracking();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="text-sm font-medium">
        <p className="text-gray-700 dark:text-gray-300">
          Total Visits: <span className="font-bold">{totalVisits}</span>
        </p>
        {lastVisit && (
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
            Last Visit: {new Date(lastVisit).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}; 