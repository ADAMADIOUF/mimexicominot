import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import {
  AiFillCloseCircle,
  AiFillPauseCircle,
  AiFillPlayCircle,
} from 'react-icons/ai'

import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from 'react-icons/tb'
import a from '../assets/g2.png'
import b from '../assets/g3.png'
import c from '../assets/g4.png'
import d from '../assets/g5.png'
import e from '../assets/g6.png'
import f from '../assets/g7.png'
import g from '../assets/g8.png'
import h from '../assets/g9.png'
import i from '../assets/g10.png'
import j from '../assets/g11.png'
import k from '../assets/g12.png'
import l from '../assets/g13.png'
import m from '../assets/g14.png'
import n from '../assets/g15.png'
import o from '../assets/g16.png'
import p from '../assets/g17.png'
import q from '../assets/g18.png'
import r from '../assets/g19.png'
import s from '../assets/g20.png'
import t from '../assets/g21.png'
import u from '../assets/g22.png'
import v from '../assets/g23.png'
import w from '../assets/g24.png'
import x from '../assets/g25.png'
import z from "../assets/gallery-img.png"
const GalleryContent = () => {
  const images = [
    {
      src: a,
      title:
        'Guacamole Tradicional - Freshly mashed avocados with cilantro, lime, and onions.',
    },
    {
      src: b,
      title:
        'Ceviche de Camarón - Shrimp marinated in lime juice with tomatoes, onions, and cilantro.',
    },
    {
      src: c,
      title:
        'Queso Fundido - Melted cheese with chorizo served with warm tortillas.',
    },
    {
      src: d,
      title:
        'Nachos Supremos - Tortilla chips topped with beans, cheese, jalapeños, and pico de gallo.',
    },
    {
      src: e,
      title:
        'Empanadas de Pollo - Pastry filled with seasoned chicken and cheese.',
    },
    {
      src: f,
      title:
        'Taquitos Dorados - Crispy rolled tacos filled with beef or chicken.',
    },
    {
      src: g,
      title:
        'Elote Callejero - Grilled corn on the cob with chili powder, lime, and cotija cheese.',
    },
    {
      src: h,
      title: `Sopa Azteca - Traditional tortilla soup with avocado, cheese, and sour cream.
Main Courses:`,
    },
    {
      src: i,
      title:
        'Tacos al Pastor - Marinated pork with pineapple and onions on corn tortillas.',
    },
    {
      src: j,
      title:
        'Enchiladas Verdes - Chicken enchiladas topped with green tomatillo sauce and melted cheese.',
    },
    {
      src: k,
      title: 'Carne Asada - Grilled marinated steak with peppers and onions.',
    },
    {
      src: l,
      title:
        'Fajitas Mixtas - Sizzling platter of marinated steak, chicken, and shrimp with vegetables.',
    },
    {
      src: m,
      title:
        'Churros con Chocolate - Fried dough pastry dusted with sugar and served with chocolate sauce.',
    },
    {
      src: n,
      title: 'Flan de Caramelo - Creamy caramel custard.',
    },
    {
      src: o,
      title: 'Tres Leches Cake - Sponge cake soaked in three kinds of milk.',
    },
    {
      src: p,
      title: 'Arroz con Leche - Rice pudding with cinnamon and raisins.',
    },
    {
      src: q,
      title: 'Pastel de Elote - Sweet corn cake.',
    },
    {
      src: r,
      title: 'Helado de Nieve de Garrafa - Hand-churned Mexican ice cream.',
    },
    {
      src: s,
      title:
        'Margarita Clásica - Classic tequila cocktail with lime and salt rim.',
    },
    {
      src: t,
      title: 'Horchata - Refreshing rice and cinnamon drink.',
    },
    {
      src: u,
      title: 'Michelada - Spicy beer cocktail with lime and tomato juice.',
    },
    {
      src: v,
      title: 'Agua Fresca de Tamarindo - Sweet and sour tamarind drink.',
    },
    {
      src: w,
      title:
        'Mezcal con Sangrita - Mezcal served with a chaser of spicy tomato juice.',
    },
    {
      src: x,
      title:
        'Café de Olla - Traditional Mexican coffee with cinnamon and piloncillo.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        if (currentIndex === images.length - 1) {
          setCurrentIndex(0)
        } else {
          setCurrentIndex(currentIndex + 1)
        }
      }, 3000)
      return () => clearInterval(timer)
    }
  }, [currentIndex, isPlaying, images])

  const openGallery = (index) => {
    setCurrentIndex(index)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
  }

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }
useEffect(() => {
  AOS.init({
    duration: 2000, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
  })
}, [])
  return (
    <div className='third-banner' id='gallery'>
      <div className='title'>
        <h3>gallery</h3>
      </div>
      <div className='third-banner-container section-center'>
        <div className='third-banner-img'>
          {images.map((item, index) => (
            <article
              key={index}
              onClick={() => openGallery(index)}
              data-aos='fade-up'
            >
              <img src={item.src} alt={item.title} />
              <div className='image-overlay'>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
      {isGalleryOpen && (
        <div className='gallery'>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
          />

          <button className='play-pause' onClick={togglePlay}>
            {isPlaying ? (
              <AiFillPauseCircle className='icon-gallery' />
            ) : (
              <AiFillPlayCircle className='icon-gallery' />
            )}
          </button>
          <div className='container-btn'>
            <button className='prev-btn' onClick={prevImage}>
              <TbPlayerTrackNextFilled className='icon-gallery' />
            </button>

            <button className='next-btn' onClick={nextImage}>
              <TbPlayerTrackPrevFilled className='icon-gallery' />
            </button>
          </div>
          <button className='close' onClick={closeGallery}>
            <AiFillCloseCircle className='icon-gallery' />
          </button>
        </div>
      )}
      <div className='gallery-big-img'>
        <img src={z} alt='' />
      </div>
    </div>
  )
}
export default GalleryContent
