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
      className='w-full lg:relative xxl:py-8'
    >
      <div className='relative w-full before:absolute before:content-[""] before:right-0 
        lg:before:w-[300px] before:bg-veryPaleRed before:rounded-[218px] before:rotate-45
        before:h-[614px] before:z-[0]
        sm:before:left-44 sm:before:w-[240px] sm:before:-top-40
        md:before:left-[21rem] md:before:-top-[13rem] md:before:w-[370px]
        md:before:h-[900px]
        lg:absolute lg:before:left-[45rem] lg:z-[2] lg:before:-top-[9.8rem] 
        lg:before:h-[680px] xl:before:left-[57rem] 
        xl:before:h-[900px] xl:before:-top-[18rem]
        xxl:before:h-[970px] xxl:before:left-[61.5rem] xxl:before:w-[370px]
        xxl:before:-top-[16rem]
        
        '
      >
        <div className='
          sm:flex sm:py-10 sm:p-5 lg:px-12 sm:overflow-x-hidden
          md:p-10
          lg:flex lg:justify-between lg:items-center lg:py-2
          xl:m-0 xl:w-full xl:px-20 xl:py-10 xxl:px-32 
        '
        >
          <div className='xl:w-max'>
            <img className='md:h-12 lg:h-7 xl:h-8 xxl:h-10' src={logo} alt="logo" />
          </div>
          <nav className={` sm:z-[999] sm:bg-overlayColor lg:invisible sm:fixed 
            sm:inset-0 lg:relative ${toggleOpen ? "overflow-hidden" : "sm:hidden lg:block"}
            `}
          >
              {<ul className={`
                lg:flex lg:items-center lg:p-0 lg:m-0 lg:gap-6 capitalize lg:font-medium lg:text-base bg-veryLightGray lg:bg-transparent
                bg-transparent text-darkBlue sm:text-center sm:mx-4 sm:mt-24
                sm:text-2xl sm:font-medium sm:py-8 rounded-md lg:visible sm:overflow-x-hidden
                md:mx-20 md:mt-36 md:text-4xl
                xl:w-max xl:text-base xl:gap-8 xxl:text-xl
                `}
              >
                {links.map((link, index) => (
                  <li key={index} className='lg:m-0 sm:m-6 md:my-[3rem]'>
                    <a className='lg:hover:text-darkGrayishBlue' href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>}
            </nav>
          <div className=''>
            <CustomButton className="
              text-veryLightGray bg-brightRed sm:hidden lg:block 
              lg:relative lg:z-[1] lg:px-8 lg:py-2 lg:text-lg
              xl:m-0 xl:py-2 xl:px-10 xxl:px-12 xxl:py-4
              "
            >get started</CustomButton>
            <div 
              onClick={handleToggle}
              className={`${toggleOpen ? "fixed" : "absolute"} z-[999] right-5 top-10 md:right-10 lg:hidden
              `}
            >
            <img className='md:h-9' src={hamburger} alt="hamburger" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 