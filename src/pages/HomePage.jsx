import React from 'react'

import Hero from '../components/Hero'
import Tours from '../components/Tours'
import MidSection from '../components/MidSection'
import Package from '../components/Package'
import BgBanner from '../components/bgbanner'
import Whychose from '../components/Whychose'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import FollowUs from '../components/FollowUs'


const HomePage = () => {
  return (
   <>

   <Hero/>
   <Tours/>
   <MidSection/>
   <Package/>
   <BgBanner/>
   <Whychose/>
   <Testimonial/>
   <Contact/>
   <FollowUs/>

   </>
  )
}

export default HomePage