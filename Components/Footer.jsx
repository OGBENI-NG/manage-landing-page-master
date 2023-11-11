import React from 'react'
import { FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquarePinterest, FaSquareInstagram } from "react-icons/fa6";

export default function Footer({email, logoFooter, handleChange, handleSubmit, error}) {
  return (
    <footer  className='bg-veryDarkBlue py-10'>
      <form onSubmit={handleSubmit} className='px-5'>
        <div className='flex items-center gap-2 pt-8'>
          <input placeholder='Updates in your inbox…' className={`w-full outline-none py-2 rounded-full px-4 text-lg ${error && "text-brightRed border-2 border-brightRed"}`} type="text" value={email} onChange={handleChange}/>
          <button type='submit' className="rounded-full bg-brightRed my-0 uppercase px-6 py-2 font-medium text-veryLightGray text-lg" >go</button>
        </div>
        <div className='pl-5 pt-1 block'>
          {error && <span className='text-brightRed italic '>{error}</span>}
        </div>
      </form>
      <nav className='flex justify-center py-10 items-top gap-20'>
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
      <div className='text-veryLightGray flex gap-8 justify-center text-4xl'>
          <FaSquareFacebook/>
          <FaSquareYoutube/>
          <FaSquareXTwitter/>
          <FaSquarePinterest/>
          <FaSquareInstagram/>
      </div>
      <div className='flex justify-center flex-col items-center pt-12'>
        <img src={logoFooter} alt="" />
      <span className='text-darkGrayishBlue mt-14 text-sm '>Copyright 2023. All Rights Reserved</span>
      </div>
    </footer>
  )
}
