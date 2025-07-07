import React, { ComponentProps, MouseEvent } from 'react';
import { Link as WouterLink } from 'wouter';

/**
 * Utility function to scroll to the top of the page
 * @param behavior - 'smooth' or 'auto' scroll behavior
 */
export const scrollToTop = (behavior: ScrollBehavior = 'auto') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
};

/**
 * Custom Link component that scrolls to top when navigating
 */
interface ScrollLinkProps extends ComponentProps<typeof WouterLink> {
  scrollBehavior?: ScrollBehavior;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ 
  onClick, 
  scrollBehavior = 'auto', 
  ...props 
}) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
    
    // Only scroll to top for non-hash links (not anchor links like #contact)
    if (!props.href?.startsWith('#')) {
      setTimeout(() => scrollToTop(scrollBehavior), 0);
    }
  };

  return React.createElement(WouterLink, { ...props, onClick: handleClick });
};