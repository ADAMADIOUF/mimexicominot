import React, { useState, useEffect } from 'react'
import slides from '../dataSlider'

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1))
    }

    const interval = setInterval(nextSlide, 3000) // Change 3000 to the desired interval in milliseconds

    return () => clearInterval(interval)
  }, [current, length])

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider' id='home'>
      <button className='slide-btn prev' onClick={prevSlide}>
        &#10094;
      </button>
      <button
        className='slide-btn next'
        onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)}
      >
        &#10095;
      </button>
      {slides.map((slide, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <>
              <img src={slide.image} alt={slide.alt} className='image' />
              <div className='overlay'></div> {/* Overlay element */}
            </>
          )}
        </div>
      ))}
    </section>
  )
}

export default Slider
