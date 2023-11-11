import React from 'react'
import CustomButton from './CustomButton'

export default function Footer({email, handleChange, handleSubmit, error}) {
  return (
    <footer  className='bg-veryDarkBlue py-10'>
      <form onSubmit={handleSubmit} className='px-5'>
        <div className='flex items-center gap-2 h-auto'>
          <input placeholder='Updates in your inbox…' className={`w-full h-full outline-none py-4 rounded-full px-4 text-lg ${error && "text-brightRed border-2 border-brightRed"}`} type="text" value={email} onChange={handleChange}/>
        <button type='submit' className="shadow-none bg-brightRed my-0" >go</button>
        </div>
        <div className='pl-5 pt-1 block'>
          {error && <span className='text-brightRed italic '>{error}</span>}
        </div>
      </form>
    </footer>
  )
}
