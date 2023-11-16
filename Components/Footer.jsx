import React,{memo} from 'react'
import { 
  FaSquareFacebook, FaSquareYoutube, FaSquareXTwitter, 
  FaSquarePinterest, FaSquareInstagram 
} from "react-icons/fa6";

function Footer({email, logoFooter, handleChange, handleSubmit, error}) {
  const footerLinks = [
    {name: "Home", link: "#"},
    {name: "Pricing", link: "#"},
    {name: "Products", link: "#"},
    {name: "About Us", link: "#"},
    {name: "Careers", link: "#"},
    {name: "Community", link: "#"},
    {name: "Privacy Policy", link: "#"},
  ]
  const firstSideLink = footerLinks.slice(0, 4)
  const secondSideLink = footerLinks.slice(4)
  return (
    <footer  className='bg-veryDarkBlue py-10 md:p-14 lg:p-12 lg:py-16 lg:flex lg:justify-center
     lg:items-start lg:gap-16 sm:relative sm:pb-24
    '
    >
      <form onSubmit={handleSubmit} id='text' className='lg:flex'>
        <div className='lg:order-3 lg:w-[380px]'>
          <div className='flex items-center gap-2 px-5 pt-8 md:gap-3 lg:p-0 
          '>
            <input
              placeholder='Updates in your inbox…'
              className={`w-full outline-none py-2 rounded-full
                px-4 text-lg md:py-5 md:px-8 md:text-2xl 
              ${error && "text-brightRed border-2 border-brightRed"}
              lg:text-lg lg:py-2 lg:px-4`
              }
              type="text"
              value={email} 
              onChange={handleChange}
            />
            <button 
              type='submit' 
              className="rounded-full bg-brightRed my-0 uppercase px-6 py-2
              font-medium text-veryLightGray text-lg  md:px-12 md:py-5 md:text-2xl lg:hover:bg-hoverColor lg:text-lg lg:py-2 lg:px-6" 
            >go</button>
          </div>
          <div className='pl-5 pt-1 block lg:pl-2 '>
            {error && <span className='text-brightRed italic md:text-lg lg:text-sm'>{error}</span>}
          </div>
            <span className='text-darkGrayishBlue lg:relative text-sm sm:absolute
            sm:p-0 sm:bottom-12 sm:text-center sm:right-0 sm:left-0 sm:m-auto md:text-lg 
            lg:block lg:ml-14 lg:mt-[7.9rem]
          '
          >
          Copyright 2023. All Rights Reserved</span>
        </div>
      </form>
      <nav className='flex justify-center py-10 items-top gap-20 md:justify-between md:px-20
        lg:p-0 lg:m-0 lg:-order-2 lg:gap-10 lg:-mt-3'
      >
        <ul className='text-base leading-9 text-veryLightGray md:text-2xl md:leading-loose
          lg:text-base lg:leading-[2.8]
          '
        >
          {firstSideLink.map((link, index) => (
            <li key={index}>
              <a  
                className='lg:hover:text-brightRed' 
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className='text-base leading-9 text-veryLightGray md:text-2xl md:leading-loose
          lg:text-base lg:leading-[2.5]'
        >
          {secondSideLink.map((link, index) => (
            <li key={index}>
              <a  
                className='lg:hover:text-brightRed' 
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='lg:-order-3 lg:flex lg:flex-col lg:gap-[5.5rem]'>
        <div className='text-veryLightGray text-4xl flex gap-8 justify-center md:text-7xl 
          md:gap-12 md:my-6 lg:p-0 lg:m-0 lg:text-3xl lg:gap-2'
        >
          <FaSquareFacebook  className='lg:hover:text-brightRed lg:cursor-pointer'/>
          <FaSquareYoutube  className='lg:hover:text-brightRed lg:cursor-pointer'/>
          <FaSquareXTwitter  className='lg:hover:text-brightRed lg:cursor-pointer'/>
          <FaSquarePinterest  className='lg:hover:text-brightRed lg:cursor-pointer'/>
          <FaSquareInstagram  className='lg:hover:text-brightRed lg:cursor-pointer'/>
        </div>
        <div className='flex justify-center flex-col items-center pt-12 lg:p-0
          lg:m-0 lg:-order-1'
        >
          <img className='md:h-12 lg:h-8 ' src={logoFooter} alt="logo-footer" />
        </div>
      </div>
    </footer>
  )
}
const MemoFooter = memo(Footer)
export default MemoFooter
