import React from 'react';

function CarouselItem({ id, userImg, name, testimonial, isActive, currentItem }) {

  const colors = ['bg-brightRed', 'bg-brightRed', 'bg-brightRed', 'bg-brightRed'];

  return (
    <section key={id} className={`px-5 pt-12 ${isActive ? 'block' : 'hidden'}`}>
      <div className='bg-veryLightGray rounded gap-5 pb-10 flex flex-col items-center'>
            <div className='w-20 h-20 -mt-9'>
            <img className='w-full h-full' src={userImg} alt="user-img" />
            </div>
            <p className='text-lg font-bold text-darkBlue'>{name}</p>
            <p className='text-lg text-center text-darkGrayishBlue leading-loose px-6'>{testimonial}</p>
            </div>
      <div className='flex items-center gap-1 justify-center mt-7 mb-12'>
        {colors.map((color, index) => (
          <span
            key={index}
            className={`h-4 w-4 rounded-full border-brightRed border-2 ${currentItem === index ? color : 'bg-veryLightGray'}`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default CarouselItem;
