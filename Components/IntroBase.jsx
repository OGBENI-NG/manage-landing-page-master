import React from 'react'
import CustomButton from './CustomButton'

export default function IntroBase({iconSimplify}) {
  return (
    <section className='py-20 px-8 relative bg-brightRed'>
      <div className='absolute left-0'>
            <img src={iconSimplify} className='h-full' alt="simplify-icon" />
      </div>
      <h1 className='text-4xl font-bold text-veryLightGray px-1 text-center leading-relaxed'>Simplify how your team works today.</h1>
      <CustomButton className="bg-veryLightGray flex justify-center m-auto text-orange-600 shadow-none">Get Started</CustomButton>
    </section>
  )
}
