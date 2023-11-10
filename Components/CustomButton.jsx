import React from 'react';

function CustomButton({ className, children }) {
  return (
    <button className={`my-10 capitalize text-veryLightGray bg-brightRed py-4 px-10 shadow-lg shadow-brightRed text-xl rounded-full font-medium ${className}`}>
      {children}
    </button>
  );
}

export default CustomButton;
