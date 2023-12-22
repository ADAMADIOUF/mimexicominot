import React, { useState } from 'react'

import a from "../assets/chownow.png"
import axios from 'axios'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    numéroDeTéléphone: '',
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        '/.netlify/functions/reservations',
        formData
      )
      console.log('Réservation envoyée:', response.data)

      setSuccessMessage('Reservation sent successfully.')

      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        phoneNumber: '',
      })

      setTimeout(() => {
        setSuccessMessage('')
        // Reload the page to make the navigation link work
        window.location.reload()
      }, 3000)
    } catch (error) {
      console.error("Erreur lors de l'envoi de la réservation:", error)
    }
  }

  
  return (
    <div className='form-contact'>
      <form className='event-form reservation-form' onSubmit={handleSubmit}>
        <div className='input-form-event'>
          <label htmlFor='fullName' className='label-name'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='input-event'
          />
        </div>
        <div className='container-event-form'>
          <div className='input-form-event'>
            <label htmlFor='email' className='label-name'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='input-event'
            />
          </div>
          <div className='input-form-event'>
            <label htmlFor='phoneNumber' className='label-name'>
              Phone Number
            </label>
            <input
              type='text'
              id='number'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className='input-event'
            />
          </div>
        </div>
        <div className='container-event-form-two'>
          <div className='input-form-event'>
            <label htmlFor='guestsNumber' className='label-name'>
              Guests #
            </label>
            <input
              type='number'
              id='guests'
              name='guests'
              value={formData.guests}
              onChange={handleChange}
              required
              className='input-event'
            />
          </div>
          <div className='input-form-event'>
            <label htmlFor='date' className='label-name'>
              Date
            </label>
            <input
              type='date'
              id='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              required
              className='input-event'
            />
          </div>
          <div className='input-form-event'>
            <label htmlFor='time' className='label-name'>
              Time
            </label>
            <input
              type='time'
              id='time'
              name='time'
              value={formData.time}
              onChange={handleChange}
              required
              className='input-event'
            />
          </div>
        </div>
        <button type='submit' className='btn btn-event input-event'>
          request a table
        </button>
      </form>
      <div>
        {successMessage && (
          <div className='success-message'>{successMessage}</div>
        )}
      </div>
      <div className='shop-btn'>
        <a
          href='https://direct.chownow.com/order/16089/locations/22847'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={a} alt='Description' />
        </a>
      </div>
    </div>
  )
}

export default ContactForm
