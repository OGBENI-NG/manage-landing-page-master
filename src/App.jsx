import React,{useState, useEffect, useCallback} from "react";
import Header from "../Components/Header"
import logo from '../asset/images/logo.svg'
import logoFooter from '../asset/images/logo-footer.svg'
import hamburger from '../asset/images/icon-hamburger.svg'
import IconClose from '../asset/images/icon-close.svg'
import iconPattern from '../asset/images/bg-tablet-pattern.svg'
import iconIllustrationIntro from '../asset/images/illustration-intro.svg'
import iconSimplify from '../asset/images/bg-simplify-section-mobile.svg'
import Intro from "../Components/Intro";
import data from "../data"
import Track from "../Components/Track";
import MemoCarouselItem from "../Components/CarouselItem";
import CustomButton from "../Components/CustomButton";
import IntroBase from "../Components/IntroBase";
import MemoFooter from "../Components/Footer";
import Section from "../Components/Section";





export default function App() {
  const [toggleOpen, setToggleOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(0);
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  //toggle menu hamburger
  function handleToggle() {
    setToggleOpen(prevToggle => !prevToggle)
  }

  //track items in data
  const trackItems = data.slice(0, 3)
  const tracks = trackItems.map(item => (
    <Track 
      key={item.id}
      num={item.num}
      title={item.title}
      description={item.description}
    />
  ))

  //testimonies items in data
  const testimoniesData = data.slice(3)
  const testimonies = testimoniesData.map((item, index) => (
    <MemoCarouselItem
      key={item.id}
      id={item.id}
      name={item.name}
      testimonial={item.testimonial}
      userImg={item.userImg}
      isActive={index === currentItem}
      currentItem={currentItem}
      onDotClick={onDotClick}
    />
  ))
  useEffect(() => {
    // Check if there are items before setting up the interval
    if (testimoniesData.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentItem((prevItem) => (prevItem + 1) % testimoniesData.length);
      }, 4000);

      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [testimoniesData.length]);

  //clicking on the dot index
  function onDotClick(index) {
    setCurrentItem(index);
  }

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setEmail(value)
    setError('');
  }, [email])


  function handleSubmit(e) {
    e.preventDefault();
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!email.trim()) {
      setError('Please insert valid email');
    } else if (!emailRegex.test(email)) {
      setError('Please insert valid email');
    } else {
      setEmail("")
      // Your logic for handling the form submission goes here
      // Clear error on successful submission
      setError('');
    }
  }

  return (
    <main className={` bg-white lg:overflow-x-auto snap-scrollbar h-screen scroll-smooth font-sans w-full`}>
      <div className="overflow-x-hidden w-full">
      <Header
        hamburger={toggleOpen ? IconClose : hamburger}
        logo={logo}
        iconPattern={iconPattern}
        toggleOpen={toggleOpen}
        handleToggle={handleToggle}
      />
      <Intro 
        iconIllustrationIntro={iconIllustrationIntro}
      />
      <div  className="lg:flex lg:justify-center lg:items-start lg:gap-3 lg:px-12 lg:mt-28
        xl:px-20 xl:justify-between xl:gap-16 xxl:px-32"
      >
        <Section/>
        <div>{tracks}</div>
      </div>
      <div className="flex justify-center sm:my-10 text-3xl font-bold
       text-darkBlue md:text-5xl md:my-20 lg:my-28 lg:mb-12 lg:text-3xl
        xl:text-4xl xxl:text-5xl xxl:my-24">
        <h1>What they've said</h1>
      </div>
      <div className="lg:flex lg:mx-1 lg:items-center lg:gap-4 
      lg:overflow-auto carousel">
        {testimonies}
      </div>
      <CustomButton className="flex m-auto justify-center bg-brightRed 
        sm:text-lg sm:py-3 sm:px-12 
        md:px-16 md:py-5 md:text-2xl mb-14 text-veryLightGray 
        lg:py-3 lg:px-12 lg:text-lg lg:mb-36 xl:py-2 xl:px-10
        xxl:px-12 xxl:py-4"
      >get started</CustomButton>
      <IntroBase
        iconSimplify={iconSimplify}
      />
      <MemoFooter
        email={email}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        logoFooter={logoFooter}
      />
      </div>
    </main>

  )
}