import React from 'react'

export default function Section() {
  return (
      <div className='py-14 px-3 lg:p-0 text-center lg:text-left flex justify-center 
            flex-col w-full lg:w-[450px] xl:w-full'
      >
            <h2 className='text-darkBlue leading-snug sm:text-4xl font-bold
             sm:mb-5 md:text-5xl md:px-16 md:leading-snug lg:px-0 lg:mx-0 
             lg:py-0 lg:mb-0 lg:text-3xl xl:text-[2.3rem] xl:pr-9 xl:leading-tight
             xxl:text-[2.8rem]'
            >
                  What’s  different about Manage?
            </h2>
            <p 
            className='text-darkGrayishBlue text-lg relative leading-relaxed 
                  before:content-[""] lg:before:w-[300px] before:bg-veryPaleRed 
                  before:h-[614px] before:absolute before:z-[1] before:rounded-[218px]
                  before:rotate-45 
                  sm:before:right-0 sm:before:-top-[41.7rem] sm:before:left-[25.22rem]
                  sm:before:-z[3] sm:before:w-[200px]
                  md:before:w-[370px] md:before:left-[38.66rem] md:before:-top-[54rem]
                  md:before:h-[750px] md:before:z-[0]
                  md:text-2xl md:px-20 md:leading-normal md:my-5 
                  lg:p-0 lg:pr-20 lg:mt-8 lg:text-base lg:leading-relaxed
                  lg:before:top-28 lg:before:-left-48  lg:before:right-auto
                  lg:before:h-[614px] xl:before:-left-60 
                  xl:before:h-[800px] xl:text-base xl:pr-28 xxl:text-xl
                  '
            > 
                  Manage provides all the functionality your team needs, without 
                  the complexity. Our software is tailor-made for modern digital 
                  product teams. 
            </p>
      </div>
  )
}
