import React from 'react'
import { FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, FaSquarePinterest, FaSquareInstagram } from "react-icons/fa6";

export default function Footer({email, logoFooter, handleChange, handleSubmit, error}) {
  return (
    <footer  className='bg-veryDarkBlue py-10 md:p-14'>
      <form onSubmit={handleSubmit} id='text' className='px-5'>
        <div className='flex items-center gap-2 pt-8 md:gap-3'>
          <input
             placeholder='Updates in your inbox…'
            className={`w-full outline-none py-2 rounded-full
              px-4 text-lg md:py-5 md:px-8 md:text-2xl 
             ${error && "text-brightRed border-2 border-brightRed"}`
            } 
            type="text"
            value={email} 
            onChange={handleChange}
          />
          <button type='submit' className="rounded-full bg-brightRed my-0 
          uppercase px-6 py-2 font-medium text-veryLightGray 
          text-lg  md:px-12 md:py-5 md:text-2xl" >go</button>
        </div>
        <div className='pl-5 pt-1 block'>
          {error && <span className='text-brightRed italic '>{error}</span>}
        </div>
      </form>
      <nav className='flex justify-center py-10 items-top gap-20 md:justify-between md:px-20'>
        <div className='text-base leading-9 text-veryLightGray md:text-2xl md:leading-loose'>
          <ul><li><a href="#">Home</a></li></ul>
          <ul><li><a href="#">Pricing</a></li></ul>
          <ul><li><a href="#">Products</a></li></ul>
          <ul><li><a href="#">About Us</a></li></ul>
        </div>
        <div className='text-base leading-9 text-veryLightGray md:text-2xl md:leading-loose'>
          <ul><li><a href="#">Careers</a></li></ul>
          <ul><li><a href="#">Community</a></li></ul>
          <ul><li><a href="#">PrivacyPolicy</a></li></ul>
        </div>
      </nav>
      <div className='text-veryLightGray text-4xl flex gap-8 justify-center md:text-7xl md:gap-12 md:my-6'>
        <FaSquareFacebook/>
        <FaSquareYoutube/>
        <FaSquareXTwitter/>
        <FaSquarePinterest/>
        <FaSquareInstagram/>
      </div>
      <div className='flex justify-center flex-col items-center pt-12'>
        <img className='md:h-12' src={logoFooter} alt="" />
      <span className='text-darkGrayishBlue mt-14 text-sm md:text-lg'>Copyright 2023. All Rights Reserved</span>
      </div>
    </footer>
  )
}
