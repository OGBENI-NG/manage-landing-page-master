import React from 'react';
import CustomButton from './CustomButton'


export default function Intro({iconIllustrationIntro}) {
  return (
      <section className=" px-2 font-sans lg:mt-44 sm:mt-6 xl:mt-36">
            <div className='lg:flex lg:justify-center lg:items-center lg:gap-6 lg:px-12
            xl:px-20 xl:justify-between xxl:px-32'>
                  <div className='flex justify-center lg:order-1 lg:w-1/2
                  ' 
                  >
                        <img className="block z-[3] xl:w-full" src={iconIllustrationIntro} alt="" />
                  </div>
                  <div 
                        className='relative  px-3 flex justify-center flex-col w-full mt-7 
                        md:px-8 lg:w-1/2 lg:mt-0 lg:px-0'
                  >
                        <h1 className="text-4xl leading-snug text-darkBlue 
                              text-center font-bold md:text-5xl md:px-12 
                              md:leading-snug md:relative md:z-[3]
                              lg:text-left lg:p-0 lg:text-5xl lg:leading-snug
                              xl:text-5xl xl:leading-snug xxl:text-6xl xxl:leading-[120%]
                              "
                        >
                              Bring everyone together to build better products.
                        </h1>
                        <p 
                              className="my-2 text-lg leading-normal text-darkGrayishBlue text-center
                              z-10 md:text-2xl md:px-20 md:leading-normal md:my-5 lg:text-left lg:p-0
                              lg:text-base lg:pr-[5rem] lg:leading-relaxed
                              xl:text-xl xxl:text-2xl xxl:leading-snug"
                        >
                              Manage makes it simple for software teams to plan day-to-day 
                              tasks while keeping the larger team goals in view.
                        </p>
                        <CustomButton className="z-10 bg-brightRed flex justify-center m-auto 
                        sm:text-lg sm:py-3 sm:px-12 
                        md:py-5 md:text-2xl lg:justify-start lg:m-0 w-max 
                        lg:px-8 lg:py-2 lg:text-lg text-veryLightGray lg:mt-8
                        xl:py-2 xl:px-10 xxl:px-12 xxl:py-4"
                        >get started</CustomButton>
                        
                  </div>
            </div>
      </section>
  )
}

