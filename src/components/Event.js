import React from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
import EventForm from './EventForm'
import a from '../assets/big-event.png'
const Event = () => {
  return (
    <div className='event'>
      <div className='section-center'>
        <div className='title'>
          <h3>exclusive event</h3>
          <h6>view our exclusive list of dishes</h6>
          <p>
            "Plan your event with us at Mexican Resturant for an unforgettable
            experience featuring award-winning steaks, exquisite wines, and
            exceptional hospitality. Whether it's a family celebration or a
            corporate event, you can choose from our selection of Passed Hors
            d’Oeuvres, Cocktails, or Prix Fixe menus. Submit your inquiry, and
            we'll respond promptly to assist you in creating a memorable
            occasion.”
          </p>
          <div className='event-icon'>
            <p>
              <span>
                <FaPhone />
              </span>
              <a href='tel:+1701804077'>++1 (701)858-0777</a>
            </p>
            <p>
              <span>
                <FaLocationArrow />
              </span>
              <a href='mailto:mimexicominotnd.com'>mimexicominotnd.com</a>
            </p>
          </div>
        </div>
        <EventForm />
      </div>
      <div className='big-event-img'>
        <img src={a} alt='' />
      </div>
    </div>
  )
}

export default Event
