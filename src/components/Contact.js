import React, { useEffect } from 'react'
import a from '../assets/team.png'
import Map from "../components/Map"
import { FaEnvelope, FaPhone } from 'react-icons/fa'
const Contact = () => {
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [])
  return (
    <div className='contact' id='contact'>
      <div className='section-center'>
        <div className='title'>
          <h3>contact us</h3>
        </div>
        <div className='contact-container'>
          <article className='map-contact'>
            <Map />
          </article>
          <article className='card-contact'>
            <div className='contact-business'>
              <h3>Business Hours :</h3>
              <p>
                lunch:monday-friday: <span>12pm to 3:30pm</span>
              </p>
              <p>
                dinner:monday-saturday: <span>4pm to 11pm</span> sunday:{' '}
                <span>4pm to 10pm </span>
              </p>
              <div className='contact-business-details'>
                <p>
                  {' '}
                  <span>
                    <FaPhone />
                  </span>
                  +1 (701)858-0777
                </p>
                <p>
                  <span>
                    <FaEnvelope />
                  </span>
                  mimexicominotnd.com
                </p>
              </div>
            </div>
          </article>
        </div>
        <div id='application'>
          <a
            href='https://form.jotform.com/220117445250141'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={a} alt='Description' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
