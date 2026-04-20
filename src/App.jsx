import { Routes, Route } from "react-router";
import Hero from "./Hero";
import Title from "./Title";
import Program from "./Program";
import About from "./About";
import Navbar from "./Navbar";
import Campous from "./Campous";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
//import Videoplayer from "./Videoplayer";
import { useState } from "react";





function App() {




  return (


    <>
      <Navbar />
      <Hero />
      <Title subtitle='Our Programs' title='What We Offer' />
      <Program />
      <About />
      <Title subtitle='Gallery' title='Campus Photos' />
      <Campous />
      <Title subtitle='TESTIMONIALS' title='What Student Says' />
      <Testimonial />
      <Title subtitle='Contact Us' title='Get in Touch' />
      <Contact />
      <Footer />
      {/*<Videoplayer playState={playState} setPlayState={setPlayState} />*/}


    </>
  )
}
export default App;