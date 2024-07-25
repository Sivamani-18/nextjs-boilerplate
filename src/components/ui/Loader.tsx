'use client';

import React from 'react';

const Loader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark z-50'>
      <div className='loader'></div>
    </div>
  );
};

export default Loader;
