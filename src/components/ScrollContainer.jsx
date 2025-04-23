import React, { useEffect } from 'react';

const ScrollContainer = ({ children }) => {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      window.scrollBy(0, -e.deltaY);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return <div className="scroll-container">{children}</div>;
};

export default ScrollContainer;
