import React from 'react'

import a from "../assets/gategories.png"
import b from '../assets/gategories2.png'
import c from '../assets/gategories3.png'
import d from '../assets/gategories4.png'
import e from '../assets/big-dishes.png'




const Dishes = () => {
  return (
    <div className='dishes'>
      <div className='section-center'>
        <div className='title'>
          <p>Find</p>
          <h3>list of dishes</h3>
          <p>
            At the center part of Mexican Dishes is our traditional eatery of
            premium-quality beef." sweatable in-house dry-aged beef.
          </p>
        </div>
        <div className='dishes-container'>
          <article>
            <img src={a} alt='' />
            <h3>dinner</h3>
            <h6>view dishes</h6>
            <div className='underline dishes-underline'></div>
          </article>
          <article>
            <img src={b} alt='' />
            <h3>lunch</h3>
            <h6>view dishes</h6>
            <div className='underline dishes-underline'></div>
          </article>
          <article>
            <img src={c} alt='' />
            <h3>dessert</h3>
            <h6>view dishes</h6>
            <div className='underline dishes-underline'></div>
          </article>
          <article>
            <img src={d} alt='' />
            <h3>exclusive Event</h3>
            <h6>view dishes</h6>
            <div className='underline dishes-underline'></div>
          </article>
        </div>
      </div>
      <div className="dishes-big-img">
       <img src={e} alt="" />
      </div>
    </div>
  )
}

export default Dishes
