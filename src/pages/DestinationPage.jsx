// import React from 'react'
// import Bannerlayout from '../components/Bannerlayout'
// import Faq from '../components/FAQ'
// import MidSection from '../components/MidSection'
// import Tours from '../components/Tours'

// const DestinationPage = () => {
//   return (
//    <>
//    <Bannerlayout/>
//    <Tours/>
//    <MidSection/>
//    <Faq/>
//    </>
//   )
// }

// export default DestinationPage


import React from 'react'
import Bannerlayout from '../components/Bannerlayout'
import Faq from '../components/FAQ'
import MidSection from '../components/MidSection'
import DestinationsList from '../components/DestinationList'


const DestinationPage = () => {
  return (
   <>
   <Bannerlayout/>
   <DestinationsList/>
   <MidSection/>
   <Faq/>
   </>
  )
}

export default DestinationPage