import React from 'react';

function CustomButton({ className, children }) {
  return (
    <button className={`my-10 capitalize shadow-lg shadow-brightRed rounded-full 
      ${className} lg:hover:bg-hoverColor lg:hover:shadow-hoverColor `}>
      {children}
    </button>
  );
}

export default CustomButton;
