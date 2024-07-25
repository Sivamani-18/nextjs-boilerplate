import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='p-2 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark rounded'
    >
      {children}
    </button>
  );
};

export default Button;
