import React from 'react'
import a from "../assets/dress-code.png"
const DressCode = () => {
  return (
    <div className='dress-code'>
      <div className='section-center'>
        <div className='title'>
          <h6>Dress to make impact</h6>
          <h4>attire guidelines</h4>
          <p>
            in order to maintain an enjoyable environment for all, we
            respectfully ask our guests to get dressed up for a great dining
            experience.
          </p>
          <h5>Attire guidelines is always better to be with.</h5>
          <p>Call to you:</p>
          <p>
            asual wear such as jeans, t-shirts, and sneakers may be acceptable.
            Khakis or dress pants with a collared shirt for men; dress or blouse
            with dress pants or a skirt for women. Business-appropriate attire
            such as collared shirts, blouses, dress pants, skirts, and
            closed-toe shoes.
          </p>
          <p>
            Attendee who do not to adhere to these guidelines may be asked to
            return at another time. You are going to have a great time.
          </p>
        </div>
      </div>
      <div className="dress-code-img">
       <img src={a} alt="" />
      </div>
    </div>
  )
}

export default DressCode
