import React from 'react'

export default function Track({id, num, title, description}) {
  return (
    <section className='pl-4 md:pl-6' key={id}>
      <div className='flex items-center rounded-l-full gap-3 bg-veryPaleRed'>
        <h2 className='py-2 px-6 text-veryLightGray rounded-full
         bg-brightRed font-bold text-lg md:text-2xl md:py-4 md:px-8'>{num}</h2>
        <p className='text-base text-darkBlue font-bold md:text-2xl'>{title}</p>
      </div>
      <p className='text-lg pr-2 pt-3 pb-12 text-left 
      leading-relaxed text-darkGrayishBlue md:text-2xl md:pr-12 md:leading-relaxed'>{description}</p>
    </section>
  )
}
