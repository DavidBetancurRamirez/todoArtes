import React, { type ReactNode, useEffect, useState } from 'react';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
