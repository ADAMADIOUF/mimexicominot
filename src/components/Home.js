import React from 'react'
import Slider from './Slider'
import Reservations from './Reservations'
import Location from './Location'
import About from './About'
import DressCode from './DressCode'
import Dishes from './Dishes'
import Happy from './Happy'
import Event from './Event'
import Gift from './Gift'
import GalleryContent from './Gallery'

const Home = () => {
  return (
    <div className='home' id='home'>
      <Slider />

      <Reservations />
      <div id='location'>
        <Location />
      </div>
      <div id='about'>
        <About />
      </div>
      <Happy />
      <DressCode />
      <Dishes />
      <Event />

      <Gift />
      <div id='gallery'>
        <GalleryContent />
      </div>
    </div>
  )
}

export default Home