import React from 'react'
import "../menu.css"
import { NavLink } from 'react-router-dom'
import BackGroundComponent from "../BackGroundComponent.jsx"

const MenuBox = ({imageSrc, title}) => {
  return (
    <div id='menu-box'>
        <NavLink id='menu-box-link'>
           <BackGroundComponent imageUrl={imageSrc} title={title}/>
        </NavLink>
    </div>
  )
}

export default MenuBox
