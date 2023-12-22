import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const EventForm = () => {
  return (
    <>
      <div className='nav-center'>
        <form className='event-form'>
          <div className='input-form-event'>
            <label htmlFor='eventType'>Event Type</label>
            <input type='text' id='eventType' className='input-event event' />
          </div>
          <div className='input-form-event'>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              id='fullName'
              className='input-event full-name'
            />
          </div>
          <div className='container-event-form'>
            <div className='input-form-event'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' className='input-event' />
            </div>
            <div className='input-form-event'>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input type='tel' id='phoneNumber' className='input-event' />
            </div>
          </div>
          <div className='container-event-form-two'>
            <div className='input-form-event'>
              <label htmlFor='guestsNumber'>Guests #</label>
              <input type='number' id='guestsNumber' className='input-event' />
            </div>
            <div className='input-form-event'>
              <label htmlFor='date'>Date</label>
              <input type='date' id='date' className='input-event' />
            </div>
            <div className='input-form-event'>
              <label htmlFor='time'>Time</label>
              <input type='time' id='time' className='input-event' />
            </div>
          </div>
          <button type='submit' className='btn btn-event input-event'>
            Submit your inquiry
          </button>
        </form>
        <div className='reservations-working-hours event-working'>
          <h3>Business Hours :</h3>
          <p>
            lunch:monday-friday: <span>12pm to 3:30pm</span>
          </p>
          <p>
            dinner:monday-saturday: <span>4pm to 11pm</span> sunday:{' '}
            <span>4pm to 10pm </span>
          </p>
          <div className='reservation-contact'>
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
      </div>
    </>
  )
}

export default EventForm
