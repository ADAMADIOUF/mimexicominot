import React, { useEffect } from 'react'
import MenuCategories from './MenuCategories'

const Menu = () => {
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [])
  return (
    <div className='menus' id='menus'>
     <div className="menu-header"></div>
     <div className="overlay-1"></div>
      <div className="section center">
     <div className="title">
      <h3>our menu</h3>
     </div>
     <MenuCategories/>
      </div>
    </div>
  )
}

export default Menu
