import { useEffect } from 'react';

const ScrollToTopOnReload = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0); // Scroll to the top of the page
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollToTopOnReload;