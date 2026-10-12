import React from 'react'
import AboutBanner from '../components/AboutBanner'
import AboutSplit from '../components/AboutSplit'
import AboutWhy from '../components/AboutWhy'
import AboutSplit2 from '../components/AboutSplit2'

const AboutPage = () => {
  return (
    <>
      <AboutBanner />

      <AboutSplit
        title="Urban Sherpa"
        img="/images/himalaya.jpg"
        alt="Snow-capped Himalayan peak above the clouds"
        paragraphs={[
          'We are the local travel bugs based in Kathmandu. Our passion for travel got us on board with the international giants of the travel industry working in Nepal. But after seeing the unfair game, we decided to jump on our own raft.',
          'Our experience with international travel companies gave us a true sense of delivering, and our familiarity with the difficulty of the ground has made us humble and compassionate toward the guides and porters we work with on every trip.',
        ]}
      />

      <AboutSplit2
        title="Fair for the people on the ground"
        img="/images/t1.jpg"
        alt="Farmers working fields below the Annapurna range"
        paragraphs={[
          'Even simple research shows that the returns of a trip are not fairly shared with local workers, although the whole operation relies on them. From the airport pickup to safety measures, every issue depends on local enthusiasts. Yet despite high trip prices, only a meager salary reaches the people in the field, while the major chunk goes to head offices that deserve only a commission for marketing.',
          'When the resources come from here, the trip is managed here and safety is kept in check by the people here, we believe the real credit should go to them. We believe in fair payment to our guides and porters who work in remote terrains, rather than the fat bank accounts of middlemen.',
        ]}
      />

      <AboutWhy />
    </>
  )
}

export default AboutPage