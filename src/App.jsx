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
import CarouselItem from "../Components/CarouselItem";
import CustomButton from "../Components/CustomButton";
import IntroBase from "../Components/IntroBase";
import Footer from "../Components/Footer";



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
    <CarouselItem
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
    <main className={"bg-white h-screen scroll-smooth font-sans w-full overflow-x-hidden "}>
      <Header
        hamburger={toggleOpen ?  IconClose : hamburger}
        logo={logo}
        iconPattern={iconPattern}
        toggleOpen={toggleOpen}
        handleToggle={handleToggle}
      />
      <Intro 
        iconIllustrationIntro={iconIllustrationIntro}
        iconPattern={iconPattern}
      />
      <div>{tracks}</div>
      <div className="flex justify-center my-10 text-3xl font-bold
       text-darkBlue md:text-5xl md:my-20">
        <h1>What they've said</h1>
      </div>
      <div>{testimonies}</div>
      <CustomButton className="flex m-auto justify-center bg-brightRed
      md:px-16 md:py-5 md:text-2xl mb-14">get started</CustomButton>
      <IntroBase
        iconSimplify={iconSimplify}
      />
      <Footer
        email={email}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        error={error}
        logoFooter={logoFooter}
      />
    </main>

  )
}