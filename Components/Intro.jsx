import React from 'react';
import CustomButton from './CustomButton'


export default function Intro({iconIllustrationIntro}) {
  return (
      <section className="z-[0] px-2 font-sans lg:mt-44 sm:mt-6 ">
            <div className='lg:flex lg:justify-center lg:items-start lg:gap-3 lg:px-12'>
                  <div className='flex justify-center lg:order-1 lg:w-1/2'>
                        <img className="block z-[3]" src={iconIllustrationIntro} alt="" />
                  </div>
            <div 
                  className='relative  px-3 flex justify-center flex-col w-full mt-7 md:px-8
                  lg:w-1/2 lg:mt-0 lg:px-0'
            >
                        <h1 className="text-4xl leading-snug text-darkBlue 
                              text-center font-bold md:text-5xl md:px-12 md:leading-snug
                              lg:text-left lg:p-0 lg:text-5xl lg:leading-snug">
                              Bring everyone together to build better products.
                        </h1>
                        <p 
                              className="my-2 text-lg leading-normal text-darkGrayishBlue text-center
                              z-10 md:text-2xl md:px-20 md:leading-normal md:my-5 lg:text-left lg:p-0
                              lg:text-base lg:pr-[5rem] lg:leading-relaxed"
                        >
                              Manage makes it simple for software teams to plan day-to-day 
                              tasks while keeping the larger team goals in view.
                        </p>
                        {/* <div className="absolute z-0 left-64 -right-48 top-12 -mr-20 md:left-2/3 md:top-9">
                              <img  src={iconPattern} alt="pattern" />
                        </div> */}
                        <CustomButton className="z-10 bg-brightRed flex justify-center m-auto 
                        sm:text-lg sm:py-3 sm:px-12 
                        md:px-16 md:py-5 md:text-2xl lg:justify-start lg:m-0 w-max 
                        lg:px-8 lg:py-2 lg:text-lg text-veryLightGray lg:mt-8"
                        >get started</CustomButton>
                        
                  </div>
            </div>
      </section>
  )
}

