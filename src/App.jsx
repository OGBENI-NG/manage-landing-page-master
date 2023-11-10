import React,{useState, useEffect} from "react";
import Header from "../Components/Header"
import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/icon-hamburger.svg'
import IconClose from '../asset/images/icon-close.svg'
import iconPattern from '../asset/images/bg-tablet-pattern.svg'
import iconIllustrationIntro from '../asset/images/illustration-intro.svg'
import Intro from "../Components/Intro";
import data from "../data"
import Track from "../Components/Track";
import CarouselItem from "../Components/CarouselItem";



export default function App() {
  const [toggleOpen, setToggleOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(0);

  
  function handleToggle() {
    setToggleOpen(prevToggle => !prevToggle)
  }
  const trackItems = data.slice(0, 3)
  const tracks = trackItems.map(item => (
    <Track 
      key={item.id}
      num={item.num}
      title={item.title}
      description={item.description}
    />
  ))

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



  return (
    <main className={"bg-white h-screen font-sans w-full overflow-x-hidden "}>
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
      <div className="flex justify-center my-10 text-3xl font-bold text-darkBlue">
        <h1>What they've said</h1>
      </div>
      <div>{testimonies}</div>
    </main>

  )
}