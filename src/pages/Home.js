// export const Home = () => {
//     return
//     <h1>Home Page</h1>;
// };

import React from 'react'
import HeroSection from '../components/Ui/HeroSection'
import About from './About'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
    </>
  )
}

export default Home
