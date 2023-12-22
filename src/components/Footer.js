import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaTiktok, FaTwitter } from 'react-icons/fa'
import a from "../assets/team.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className='section-center container-footer'>
        <article className='socials-footer'>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaTiktok />
          </span>
        </article>
        <article className='footer-contact'>
          <div>
            <h3>
              <span>
                <FaPhone />
              </span>
              +1 (701)858-0777 |
            </h3>
          </div>
          <div>
            <h3>
              <span>
                <FaLocationArrow />
              </span>
              3816 S Broadway Minot, ND |
            </h3>
          </div>
          <div>
            <h3>
              <span>
                <FaEnvelope />
              </span>
              mimexicominotnd.com
            </h3>
          </div>
        </article>
        <div className='footer-date'>
          <h5>
            &copy;
            {new Date().getFullYear()}
            <span> Mi Mexico Minot ,ND 58701 </span>
          </h5>
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
      <div className='footer-date'>
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span> Adama Diouf </span>
        </h5>
        <h5> All rights reserved</h5>
      </div>
    </div>
  )
}

export default Footer
