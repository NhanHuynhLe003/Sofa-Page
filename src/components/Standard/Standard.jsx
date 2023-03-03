import React from 'react'
import StandardCard from '../standarCard/StandardCard'
import style from './standard.module.css'
import trophyImg from "../../assets/images/trophy 1.png"
import shippingImg from "../../assets/images/shipping.jpg"
export default function Standard() {
  return (
    <div className={style.container}>
      <StandardCard url={trophyImg} title='High Quality' content='crafted from top materials'/>
      <StandardCard url={shippingImg} title='High Quality' content='crafted from top materials'/>
      <StandardCard url={shippingImg} title='High Quality' content='crafted from top materials'/>
      <StandardCard url={trophyImg} title='High Quality' content='crafted from top materials'/>
      
    </div>
  )
}
