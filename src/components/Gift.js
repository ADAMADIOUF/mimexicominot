import React, { useState } from 'react'
import a from "../assets/gift-card1.png"
import b from '../assets/gift2.png'

import PayPalButton from './PayPalButton'

const Gift = () => {
 const [selectedPrice, setSelectedPrice] = useState(null)

 const prices = [100, 150, 200, 250, 300, 500]
 const handleClose = () => {
   setSelectedPrice(null) // Reset the selected price to hide the PayPal button
 }

  return (
    <div className='section-center gift'>
      <div className='container-gift'>
        <article className='gift-img'>
          <img src={a} alt='' />
        </article>
        <article className='gift-details'>
          <h3>gift voucher</h3>
          <p>the superb voucher for family,friends and attendee!</p>
          <div className='gift-button'>
            <article className='button-gift-container'>
              {prices.map((price) => (
                <button key={price} onClick={() => setSelectedPrice(price)}>
                  ${price}
                </button>
              ))}
            </article>
            {selectedPrice && (
              <>
                <PayPalButton amount={selectedPrice} />
                <button onClick={handleClose} className='btn-close'>
                  Close
                </button>
              </>
            )}
          </div>
        </article>
      </div>
      <div className="gift-big-img">
       <img src={b} alt="" />
      </div>
    </div>
  )
}

export default Gift
