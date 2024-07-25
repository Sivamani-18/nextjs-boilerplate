'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavMenu from './NavMenu';
import Loader from '../ui/Loader';
import ThemeToggle from '../ui/ThemeToggle';

type ClientLayoutProps = {
  children: ReactNode;
};

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoading = () => setLoading(false);
    window.addEventListener('load', handleLoading);
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  const handleThemeChange = (isLoading: boolean) => {
    setLoading(isLoading);
    if (!isLoading) {
      // Add any additional logic needed after theme change
    }
  };

  return (
    <div className='min-h-screen flex flex-col   text-text-light dark:text-text-dark'>
      {loading && <Loader />}
      <Header onThemeChange={handleThemeChange} />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
