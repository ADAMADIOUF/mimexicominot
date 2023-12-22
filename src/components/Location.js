import React from 'react'
import a from "../assets/location.png"
import Map from './Map'
const Location = () => {
  return (
    <section className='location ' id='location'>
   <div className="location-container">
    <article className='location-img'>
     <img src={a} alt="" />
    </article>
    <article className="map-location">
     <Map/>
    </article>
   </div>
    </section>
  )
}

export default Location
