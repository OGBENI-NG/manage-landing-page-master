import React from 'react'
import CustomButton from './CustomButton'

export default function Footer({email, handleChange, handleSubmit, error}) {
  return (
    <footer  className='bg-veryDarkBlue py-10'>
      <form onSubmit={handleSubmit} className='px-5'>
        <div className='flex items-center gap-2 pt-8'>
          <input placeholder='Updates in your inbox…' className={`w-full outline-none py-2 rounded-full px-4 text-lg ${error && "text-brightRed border-2 border-brightRed"}`} type="text" value={email} onChange={handleChange}/>
          <button type='submit' className="rounded-full bg-brightRed my-0 uppercase px-7 py-2 font-medium text-veryLightGray text-lg" >go</button>
        </div>
        <div className='pl-5 pt-1 block'>
          {error && <span className='text-brightRed italic '>{error}</span>}
        </div>
      </form>
      <nav className='flex justify-around py-10 items-top '>
        <div className='text-base leading-9 text-veryLightGray'>
          <ul><li><a href="#">Home</a></li></ul>
          <ul><li><a href="#">Pricing</a></li></ul>
          <ul><li><a href="#">Products</a></li></ul>
          <ul><li><a href="#">About Us</a></li></ul>
        </div>
        <div className='text-base leading-9 text-veryLightGray'>
          <ul><li><a href="#">Careers</a></li></ul>
          <ul><li><a href="#">Community</a></li></ul>
          <ul><li><a href="#">PrivacyPolicy</a></li></ul>
        </div>
      </nav>
    </footer>
  )
}
