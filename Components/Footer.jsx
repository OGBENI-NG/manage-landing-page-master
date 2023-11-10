import React from 'react'
import CustomButton from './CustomButton'

export default function Footer({email, handleChange, handleSubmit, error}) {
  return (
    <footer  className='bg-veryDarkBlue'>
      <form onSubmit={handleSubmit} className='px-5 py-8'>
        <div className='flex items-center justify-center gap-3 mb-1 pt-10'>
          <input placeholder='Updates in your inbox…' className={`w-full h-12 outline-none rounded-full px-4 text-lg ${error && "text-brightRed border-2 border-brightRed"}`} type="text" value={email} onChange={handleChange}/>
        <CustomButton type='submit' className="flex-none py-3 px-7 my-0 shadow-none" >go</CustomButton>
        </div>
      {error && <span className='text-brightRed italic pl-5'>{error}</span>}
      </form>
    </footer>
  )
}
