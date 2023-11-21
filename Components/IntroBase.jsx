import React from 'react'

export default function IntroBase({iconSimplify}) {
  return (
    <section className='py-20 lg:relative lg:overflow-hidden lg:z-[0]
     px-8 lg:px-12 lg:py-16 bg-brightRed md:px-44 md:py-28
     xl:px-20 xxl:px-32
     
    '>
      <div className='absolute left-0 lg:hidden'>
        <img src={iconSimplify} className='h-full' alt="simplify-icon" />
      </div>
      <div className='lg:flex lg:justify-between lg:items-center lg:relative
        lg:before:content-[""] lg:before:w-[250px] lg:before:bg-baseColor
        lg:before:h-[514px] lg:before:absolute lg:before:z-[0] lg:before:-top-36
        lg:before:left-[9rem] lg:before:rounded-[218px] lg:before:rotate-45
        lg:after:content-[""] lg:after:w-[250px] lg:after:h-[300px] lg:after:bg-baseColor
        lg:after:absolute lg:after:-right-40 lg:after:rounded-[218px] lg:after:rotate-180
        lg:after:-top-64'
      >
      <h1 className='text-4xl font-bold text-veryLightGray
        px-1 text-center leading-relaxed md:text-5xl relative
        md:leading-normal lg:text-3xl lg:text-left lg:w-[400px]
        xl:text-4xl xl:w-[505px] xl:pr-[3rem] xxl:text-[2.1rem]
        '>Simplify how your team works today.</h1>
      <button className="bg-veryLightGray font-bold mt-10 py-4 px-10 
        sm:text-lg sm:py-3 sm:px-12 
        flex justify-center rounded-full m-auto text-brightRed shadow-none
        md:px-20 md:mt-20 md:py-5 md:text-2xl lg:m-0 lg:py-[12px] lg:px-10 lg:text-lg
        lg:hover:bg-veryPaleRed xl:py-2 xl:px-10 xxl:px-12 xxl:py-4
      "
      >Get Started</button>
      </div>
    </section>
  )
}
