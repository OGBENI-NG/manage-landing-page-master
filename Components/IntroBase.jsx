import React from 'react'

export default function IntroBase({iconSimplify}) {
  return (
    <section className='py-20 px-8 relative bg-brightRed md:px-44 md:py-28'>
      <div className='absolute left-0'>
        <img src={iconSimplify} className='h-full' alt="simplify-icon" />
      </div>
      <h1 className='text-4xl font-bold text-veryLightGray
       px-1 text-center leading-relaxed md:text-5xl
       md:leading-normal'>Simplify how your team works today.</h1>
      <button className="bg-veryLightGray font-bold 
      mt-10 py-4 px-10 flex justify-center rounded-full
       m-auto text-brightRed shadow-none 
        md:px-16 md:py-5 md:text-2xl">Get Started</button>
    </section>
  )
}
