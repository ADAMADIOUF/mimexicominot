import { FaEnvelope, FaPhone } from "react-icons/fa"
import ContactForm from "./ContactForm"



const Reservations = () => {
  
  return (
    <section className='reservation section-center' id='reservation'>
      <div className='title'>
        <h3>reservations</h3>
        <div className='underline'></div>
      </div>
      <div className='reservations-working-hours'>
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
      <ContactForm />
    </section>
  )
}

export default Reservations
