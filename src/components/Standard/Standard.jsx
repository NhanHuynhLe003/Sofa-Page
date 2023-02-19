import React from 'react'
import StandardCard from '../standarCard/StandardCard'
import style from './standard.module.css'
export default function Standard() {
  return (
    <div className={style.container}>
      <StandardCard url='./src/assets/images/trophy 1.png' title='High Quality' content='crafted from top materials'/>
      <StandardCard url='./src/assets/images/trophy 1.png' title='High Quality' content='crafted from top materials'/>
      <StandardCard url='./src/assets/images/shipping.jpg' title='High Quality' content='crafted from top materials'/>
      <StandardCard url='./src/assets/images/trophy 1.png' title='High Quality' content='crafted from top materials'/>
      
    </div>
  )
}
