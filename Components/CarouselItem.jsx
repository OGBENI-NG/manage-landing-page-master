import React from 'react';

function CarouselItem({ id, userImg, name, testimonial, isActive, currentItem, onDotClick }) {
  const colors = ['bg-brightRed', 'bg-brightRed', 'bg-brightRed', 'bg-brightRed'];

  return (
    <section key={id} className={`px-5 pt-12 ${isActive ? 'block' : 'hidden'} md:mt-24 md:mx-10 md:rounded-sm`}>
      <div className='bg-veryLightGray rounded gap-5 pb-10 flex flex-col items-center md:pb-14 md:gap-10'>
        <div className='w-20 h-20 -mt-9 md:w-28 md:h-28 md:-mt-12'>
         <img className='w-full h-full' src={userImg} alt="user-img" />
        </div>
        <p className='text-lg font-bold text-darkBlue md:text-2xl'>{name}</p>
        <p className='text-lg text-center text-darkGrayishBlue leading-loose px-6 md:text-2xl md:px-20 md:leading-relaxed'>{testimonial}</p>
      </div>
      <div className='flex items-center gap-2 justify-center mt-7 mb-12 md:mt-12 md:mb-24'>
        {colors.map((color, index) => (
          <span
            key={index}
            onClick={() => onDotClick(index)}
            className={`h-4 w-4 md:h-6 md:w-6 rounded-full border-brightRed border-2 ${currentItem === index ? color : 'bg-veryLightGray'}`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default CarouselItem;
