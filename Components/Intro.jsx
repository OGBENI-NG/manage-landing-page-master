import React from 'react'
import CustomButton from './CustomButton'

export default function Intro({iconIllustrationIntro, iconPattern}) {
  return (
      <section className="-z-50 px-2 font-sans overflow-hidden md:px-10">
            <div className='flex justify-center'>
                  <img className="block z-0" src={iconIllustrationIntro} alt="" />
            </div>
           <div 
            className='relative -z-0 px-3 flex justify-center flex-col w-full mt-7 md:px-8'
           >
                  <h1 className="text-4xl leading-snug text-darkBlue text-center font-bold md:text-5xl md:px-12 md:leading-snug">
                        Bring everyone together to build better products.
                  </h1>
                  <p 
                        className="my-2 text-lg leading-normal text-darkGrayishBlue text-center z-10 md:text-2xl md:px-20 md:leading-normal md:my-5"
                  >
                        Manage makes it simple for software teams to plan day-to-day 
                        tasks while keeping the larger team goals in view.
                  </p>
                  <div className="absolute z-0 left-64 -right-48 top-12 -mr-20 md:left-2/3 md:top-9">
                        <img  src={iconPattern} alt="pattern" />
                  </div>
                  <CustomButton className="z-10 bg-brightRed flex justify-center m-auto md:px-16 md:py-5 md:text-2xl">get started</CustomButton>
                  
            </div>
            <div className='py-14 px-3 text-center flex justify-center flex-col w-full '>
                  <h2 
                        className='text-darkBlue leading-snug text-4xl font-bold mb-5 md:text-5xl md:px-16 md:leading-snug'
                  >
                        What’s  different about Manage?
                  </h2>
                  <p 
                  className='text-darkGrayishBlue text-lg leading-relaxed md:text-2xl md:px-20 md:leading-normal md:my-5'
                  > 
                        Manage provides all the functionality your team needs, without 
                        the complexity. Our software is tailor-made for modern digital 
                        product teams. 
                  </p>
            </div>
      </section>
  )
}

