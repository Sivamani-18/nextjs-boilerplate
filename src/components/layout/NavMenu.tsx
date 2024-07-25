'use client';

import React from 'react';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className='flex items-center justify-between p-4 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark'>
      <div className='flex items-center space-x-4'>
        <Link href='/'>
          <span className='text-lg font-semibold'>Home</span>
        </Link>
        <Link href='/blog/first-post'>
          <span className='text-lg font-semibold'>First Post </span>
        </Link>
        <Link href='/blog/second-post'>
          <span className='text-lg font-semibold'>Second Post</span>
        </Link>
        <Link href='/dashboard'>
          <span className='text-lg font-semibold'>Dashboard</span>
        </Link>
        <Link href='/dashboard/settings'>
          <span className='text-lg font-semibold'>Settings</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavMenu;
