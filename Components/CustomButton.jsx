import React from 'react';

function CustomButton({ className, children }) {
  return (
    <button className={`my-10 capitalize shadow-lg shadow-brightRed rounded-full 
      ${className} lg:hover:bg-hoverColor lg:hover:shadow-hoverColor md:px-20`}>
      {children}
    </button>
  );
}

export default CustomButton;
