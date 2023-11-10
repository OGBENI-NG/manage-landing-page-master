import React from 'react'

export default function Track({id, num, title, description}) {
  return (
    <section className='pl-4' key={id}>
      <div className='flex items-center rounded-l-full gap-3 bg-veryPaleRed'>
        <h2 className='py-2 px-6 text-veryLightGray rounded-full bg-brightRed font-bold text-lg'>{num}</h2>
        <p className='text-base text-darkBlue font-bold'>{title}</p>
      </div>
      <p className='text-lg pr-2 pt-3 pb-12 text-left leading-relaxed text-darkGrayishBlue'>{description}</p>
    </section>
  )
}
