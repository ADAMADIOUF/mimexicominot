import React, { useEffect, useState } from 'react'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import { Link as RouterLink,  useNavigate } from 'react-router-dom'
import { links } from '../data'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'


const Navbar = () => {
 
   const navigate = useNavigate()
  const [isMenuOpen, setMenuOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    const isScrolled = window.scrollY > 0
    setScrolled(isScrolled)
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

   const handleItemClick = (href) => {
     setMenuOpen(false)
     const additionalOffset = 80 // Adjust this value based on your fixed header's height

     if (window.location.pathname !== '/') {
       // If not on the home page, navigate to the home page and then scroll to the section
       navigate('/')
       setTimeout(() => {
         const element = document.getElementById(href)
         if (element) {
           scroll.scrollTo(element.offsetTop - additionalOffset)
         }
       }, 100) // Adjust the timeout as needed
     } else {
       // If already on the home page, scroll directly to the section
       const element = document.getElementById(href)
       if (element) {
         scroll.scrollTo(element.offsetTop - additionalOffset)
       }
     }
   }


  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='nav-header nav-center section-nav'>
        <span className='logo'>
          <RouterLink to={`/`}>
            <img src={logo} alt='Mi Mexico' />
            <h3>Mi Mexico</h3>
          </RouterLink>
        </span>

        <div className='menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {links.map(({ id, href, text }) => {
            const isPageLink = href === 'menus' || href === 'contact'

            return (
              <li key={id} className='nav-item'>
                {isPageLink ? (
                  <RouterLink
                    to={`/${href}`}
                    className={`page-link ${
                      isPageLink ? 'page-link-special' : ''
                    }`}
                    onClick={() => handleItemClick(href)}
                  >
                    {text}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={href}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => handleItemClick(href)}
                  >
                    {text}
                  </ScrollLink>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
