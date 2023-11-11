import React from 'react'
import CustomButton from './CustomButton'

export default function Footer({email, handleChange, handleSubmit, error}) {
  return (
    <footer  className='bg-veryDarkBlue py-10'>
      <form onSubmit={handleSubmit} className='px-5'>
        <div className='flex items-center gap-2 pt-8'>
          <input placeholder='Updates in your inbox…' className={`w-full outline-none py-4 rounded-full px-4 text-xl ${error && "text-brightRed border-2 border-brightRed"}`} type="text" value={email} onChange={handleChange}/>
          <button type='submit' className="rounded-full bg-brightRed my-0 capitalize px-7 py-4 font-medium text-veryLightGray text-xl" >go</button>
        </div>
        <div className='pl-5 pt-1 block'>
          {error && <span className='text-brightRed italic '>{error}</span>}
        </div>
      </form>
    </footer>
  )
}
