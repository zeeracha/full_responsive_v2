import React from 'react'
import { Content } from '../components/Content/Content.jsx'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import { heroOne, heroTwo } from '../data/HeroData'
// Hero frature content 

const Home = () => {
  return (
    <>
    <Hero/>
    <Features/>
    <Content {...heroOne}/>
    {/* <Content {...heroTwo}/> */}
    </>
  )
}

export default Home