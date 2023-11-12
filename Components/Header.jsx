import React from 'react'

const Header = ({logo, hamburger, iconPattern, handleToggle, toggleOpen}) => {
  return (
    <header 
      className='flex bg-white items-center justify-between
       relative py-10 px-4 md:pl-8 lg:block'
    >
      <div 
        className="absolute left-12 z-0 -top-14 right-0 -mr-20
            md:left-48
        "
      >
        <img  src={iconPattern} alt="pattern" />
      </div>
      <div>
        <img className='md:h-14' src={logo} alt="logo" />
      </div>
      <div>
      {toggleOpen && (
        <div 
          className='fixed w-full z-30 inset-0 m-0 flex justify-center
        bg-overlayColor h-screen px-4 md:px-16 lg:block
      '
      >
        <nav className='bg-veryLightGray text-darkBlue font-medium 
        rounded flex flex-col gap-6 items-center w-full h-max mt-28 text-2xl 
        capitalize py-12 md:py-20 md:mt-36 md:text-5xl md:gap-12 lg:block'>
          <li className='flex items-center'><ol><a href="#">pricing</a></ol></li>
          <li className='flex items-center'><ol><a href="#">product</a></ol></li>
          <li className='flex items-center'><ol><a href="#">about us</a></ol></li>
          <li className='flex items-center'><ol><a href="#">careers</a></ol></li>
          <li className='flex items-center'><ol><a href="#">community</a></ol></li>
        </nav>
      </div>)}
      </div>
      <div>
        <div 
          onClick={handleToggle}
          className={`${toggleOpen ? "fixed" : "absolute"} z-30 right-4 top-10 md:right-8 lg:hidden`}
        >
        <img className='md:h-10' src={hamburger} alt="hamburger" />
        </div>
      </div>
    </header>
  )
}

export default Header 