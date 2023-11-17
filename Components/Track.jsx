import React from 'react'

export default function Track({id, num, title, description}) {
  return (
    <section key={id} className='pl-4 md:pl-8 lg:p-0 lg:m-0 lg:w-[450px] lg:mb-12
      xl:w-[580px]' >
      <div className='flex items-center rounded-l-full gap-3 bg-veryPaleRed 
        lg:bg-transparent lg:gap-7 xl:w-full
      '>
        <h2 className='py-2 px-6 text-veryLightGray rounded-full bg-brightRed
         font-bold text-lg md:text-2xl md:py-4 md:px-9 lg:text-xl lg:py-[5px] lg:px-6
         xl:text-2xl xl:py-[8px] xl:px-7
         '
        >{num}</h2>
        <p className='text-base text-darkBlue font-bold md:text-2xl lg:p-0 
          lg:m-0 lg:text-base xl:text-xl
          '
        >{title}</p>
      </div>
      <p className='text-lg pr-2 pt-3 pb-12 text-left leading-relaxed
       text-darkGrayishBlue md:text-2xl md:pt-5 md:pr-12 md:leading-relaxed 
       lg:m-0 lg:mt-3 lg:p-0 lg:pl-[6.5rem] lg:text-base xl:text-xl xl:pl-[7.2rem]
       '
      >{description}</p>
    </section>
  )
}
