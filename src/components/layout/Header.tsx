import React from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';
import ThemeToggle from '../ui/ThemeToggle';

type ThemeToggleProps = {
  onThemeChange: (loading: boolean) => void;
};

const Header: React.FC<ThemeToggleProps> = ({ onThemeChange }) => {
  return (
    <header className='flex justify-between items-center p-4 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'>
      <Link href='/'>
        <span className='text-lg font-semibold'>Logo</span>
      </Link>
      <NavMenu />
      <ThemeToggle onThemeChange={onThemeChange} />
    </header>
  );
};

export default Header;
