import { useEffect } from 'react';
import { useLocation } from 'wouter';

// This hook helps manage browser history state for better back/refresh behavior
export function useHistoryState() {
  const [location] = useLocation();

  useEffect(() => {
    // Save the current page to browser history state
    const currentState = { path: location, scrollPos: window.scrollY };
    window.history.replaceState(currentState, '', location);

    // Handle browser back/forward buttons
    const handlePopState = () => {
      if (window.history.state?.path) {
        // We already have this route in our history
        // Just maintain the scroll position if needed
        if (window.history.state.scrollPos) {
          setTimeout(() => {
            window.scrollTo(0, window.history.state.scrollPos);
          }, 0);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [location]);

  // Save scroll position when navigating away from current page
  useEffect(() => {
    const handleBeforeUnload = () => {
      const currentState = { path: location, scrollPos: window.scrollY };
      window.history.replaceState(currentState, '', location);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location]);
}