import { useEffect } from 'react';
import { useLocation } from 'wouter';

// This component helps with client-side navigation in Netlify
const RouteHandler = () => {
  const [location] = useLocation();

  // Add special handling for browser navigation events (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      // The popstate event is fired when navigating with browser history
      // We don't need to do anything here since wouter will handle it,
      // but we're using this to detect navigation events
      
      // For debugging, log navigation events
      console.log('Navigation event detected:', window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Add a meta tag to help Netlify with SPA routing
  useEffect(() => {
    // Create a meta tag for SPA routing
    const meta = document.createElement('meta');
    meta.name = 'fragment';
    meta.content = '!';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default RouteHandler;