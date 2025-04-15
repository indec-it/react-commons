import React from 'react';

export function useScreenSize() {
  const [screenSize, setScreenSize] = React.useState({
    isMobile: false,
    isDesktop: false
  });

  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 768,
        isDesktop: width >= 768
      });
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return screenSize;
}