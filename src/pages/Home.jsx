import React from 'react'
import AboutUs from '../components/About-us/About'
import Features from '../components/Feature-section/Features'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Faqq from '../components/Faq/Faqq'
import Footer from '../components/Footer/Footer'
import Courses from '../components/Courses-section/Courses'
import Contact from '../components/Contact/Contact'


const Home = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutUs/>
    <Features/>
    <Courses/>
    <Faqq/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home