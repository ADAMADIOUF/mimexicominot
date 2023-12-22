import React, { useEffect, useState } from 'react'
import { FaPhone, FaLocationArrow } from 'react-icons/fa'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useNavigate, useLocation } from 'react-router-dom'
const TopNav = () => {
  
    const navigate = useNavigate()
    const location = useLocation()
    const [hasNavigated, setHasNavigated] = useState(false)

    useEffect(() => {
      if (hasNavigated) {
        scroll.scrollTo(document.getElementById('reservation').offsetTop, {
          duration: 500,
        })
        setHasNavigated(false) // Reset the state
      }
    }, [hasNavigated])

    const handleReservationClick = () => {
      if (location.pathname !== '/') {
        navigate('/')
        setHasNavigated(true)
      }
      // If already on the home page, the existing Link behavior will work
    }
  return (
    <div className='top-nav'>
      <p>
        <span>
          <FaPhone />
        </span>
        <a href='tel:+1701804077'>+1 (701)858-0777</a>
      </p>
      <p>
        <span>
          <FaLocationArrow />
        </span>
        <a
          href='https://www.google.com/maps/dir/?api=1&destination=3816+S+BROADWAY+MINOT+ND'
          target='_blank'
          rel='noopener noreferrer'
        >
          3816 S BROADWAY MINOT, ND
        </a>
      </p>
      <Link
        to='reservation'
        spy={true}
        smooth={true}
        duration={500}
        className='btn btn-reservation'
        onClick={handleReservationClick}
      >
        Reservations
      </Link>
    </div>
  )
}

export default TopNav
