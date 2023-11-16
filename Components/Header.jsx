import React from 'react'
import CustomButton from './CustomButton'

const Header = ({logo, hamburger, handleToggle, toggleOpen}) => {
  const links = [
    {name: "pricing", link: "/"},
    {name: "product", link: "/"},
    {name: "about us", link: "/"},
    {name: "careers", link: "/"},
    {name: "community", link: "/"}
  ]
  return (
    <header 
      className='w-full lg:relative '
    >
      <div className='relative w-full before:absolute before:content-[""] before:right-0 
        before:w-[300px] before:bg-veryPaleRed before:rounded-[218px] before:rotate-45
        before:h-[614px] before:z-[0]
        sm:before:left-44 sm:before:w-[280px] sm:before:-top-40
        lg:absolute lg:before:left-auto lg:z-[2] lg:before:-top-[9.5rem] 
        
        '
      >
        <div className='
          sm:flex sm:py-10 sm:pl-5 lg:px-12 sm:overflow-x-hidden
          lg:flex lg:justify-between lg:items-center lg:py-2
          xl:px-32
        '
        >
          <div>
            <img className='' src={logo} alt="logo" />
          </div>
          <nav className={` sm:z-[999] sm:bg-overlayColor lg:invisible sm:fixed
            sm:inset-0 lg:relative ${toggleOpen ? "" : "sm:hidden lg:block"}
            `}
          >
              {<ul className={`
                lg:flex lg:items-center lg:p-0 lg:m-0 lg:gap-6 capitalize lg:font-medium lg:text-base sm:bg-veryLightGray lg:bg-transparent
                bg-transparent text-darkBlue sm:text-center sm:mx-4 sm:mt-24
                sm:text-2xl sm:font-medium sm:py-8 rounded-md lg:visible sm:overflow-x-hidden
                `}
              >
                {links.map((link, index) => (
                  <li key={index} className='lg:m-0 sm:m-6'>
                    <a className='lg:hover:text-darkGrayishBlue' href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>}
            </nav>
          <div>
            <CustomButton className="
              text-veryLightGray bg-brightRed py-2 px-8 text-base sm:hidden lg:block 
              lg:relative lg:z-[1] 
              "
            >get started</CustomButton>
            <div 
              onClick={handleToggle}
              className={`${toggleOpen ? "fixed" : "absolute"} z-[999] right-5 top-10 md:right-8 lg:hidden
              `}
            >
            <img className='md:h-10' src={hamburger} alt="hamburger" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 