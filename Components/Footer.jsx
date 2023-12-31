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
    <footer  className='bg-veryDarkBlue py-10 md:p-14 md:pb-28
      lg:p-12 lg:pb-4 lg:py-16 lg:flex lg:justify-center
      lg:items-start lg:gap-16 sm:relative sm:pb-24
      xl:p-20 xl:pb-8 xl:justify-between xxl:px-32
      xxl:h-max
    '
    >
      <form onSubmit={handleSubmit} id='text' className='lg:flex'>
        <div className='lg:order-3 lg:w-[380px]'>
          <div className='flex items-center gap-2 px-5 pt-8 md:gap-3 lg:p-0
          xxl:gap-4
          '>
            <input
              placeholder='Updates in your inbox…'
              className={`w-full outline-none py-2 rounded-full
                px-4 text-lg md:py-5 md:px-8 md:text-2xl 
              ${error && "text-brightRed border-2 border-brightRed"}
              lg:text-lg lg:py-2 lg:px-4 xl:text-base xxl:text-lg 
              xxl:py-3   xxl:px-5`
              }
              type="text"
              value={email} 
              onChange={handleChange}
            />
            <button 
              type='submit' 
              className="rounded-full bg-brightRed my-0 uppercase px-6 py-2
              font-medium text-veryLightGray text-lg  md:px-12 md:py-5 md:text-2xl lg:hover:bg-hoverColor 
              lg:text-lg lg:py-2 lg:px-6 xl:text-base xxl:text-lg xxl:py-3 xxl:px-7" 
            >go</button>
          </div>
          <div className='pl-8 pt-1 block lg:pl-2 xl:pl-4'>
            {error && <span className='text-brightRed italic md:text-lg lg:text-sm'>{error}</span>}
          </div>
            <span className='text-darkGrayishBlue lg:relative text-sm sm:absolute
            sm:p-0 sm:bottom-12 sm:text-center sm:right-0 sm:left-0 sm:m-auto 
            md:text-lg lg:text-sm
            lg:block lg:ml-14 lg:mt-[7.9rem] xl:mt-[10rem]
            xxl:text-lg xxl:mt-[11rem]
          '
          >
          Copyright 2023. All Rights Reserved</span>
        </div>
      </form>
      <nav className='flex justify-center py-10 items-top gap-20 md:justify-between md:px-20
        lg:p-0 lg:m-0 lg:-order-2 lg:gap-10 lg:-mt- xl:gap-24'
      >
        <ul className='text-base leading-9 text-veryLightGray md:text-3xl md:leading-loose
          lg:text-base lg:leading-[2.8] xl:text-[1rem] xl:leading-10 xxl:text-xl 
          xxl:leading-[2.6]
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
        <ul className='text-base leading-9 text-veryLightGray md:text-3xl md:leading-loose
          lg:text-base lg:leading-[2.5] xl:text-[1rem] xl:leading-10 xxl:text-xl
          xxl:leading-[2.6]'
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
      <div className='lg:-order-3 lg:flex lg:flex-col lg:gap-[6rem] 
        xl:gap-[6.4rem]'>
        <div className='text-veryLightGray text-4xl flex gap-8 justify-center md:text-7xl 
          md:gap-12 md:my-6 lg:p-0 lg:m-0 lg:text-3xl lg:gap-3
          xl:text-3xl xl:gap-3 xxl:text-5xl'
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
          <img className='md:h-12 lg:h-8 xl:h-8 xxl:h-12' src={logoFooter} alt="logo-footer" />
        </div>
      </div>
    </footer>
  )
}
const MemoFooter = memo(Footer)
export default MemoFooter
