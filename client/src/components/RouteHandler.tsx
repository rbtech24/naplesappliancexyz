import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * RouteHandler component for improving SPA navigation
 * This helps with back/forward buttons and page refreshes on Netlify
 */
const RouteHandler = () => {
  const [location, setLocation] = useLocation();

  // Store the current path in localStorage when it changes
  useEffect(() => {
    if (location) {
      localStorage.setItem('lastPath', location);
    }
  }, [location]);

  // Handle browser navigation events (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      // Get the current path from the URL
      const currentPath = window.location.pathname;
      
      // If the URL doesn't match our current location in the app,
      // update our location to match
      if (currentPath !== location) {
        setLocation(currentPath);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location, setLocation]);

  // Handle page refresh - restore the last path from localStorage
  useEffect(() => {
    // Only run this once on initial load
    const lastPath = localStorage.getItem('lastPath');
    
    // If we have a stored path and it's not the current path,
    // redirect to the stored path
    if (lastPath && lastPath !== '/' && lastPath !== location) {
      setLocation(lastPath);
    }
  }, []);
  
  return null; // This component doesn't render anything
};

export default RouteHandler;