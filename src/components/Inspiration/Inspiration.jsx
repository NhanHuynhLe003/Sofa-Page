import React from 'react'
import InspirationCarousel from '../Inspiration_carousel/InspirationCarousel'
import InpirationTitle from '../Inspiration_Title/InpirationTitle'
import style from './inspiration.module.css'
export default function Inspiration() {
  return (
    <div className={style.inspContainer}>
      <aside className={style.asideLeft}>
        <InpirationTitle/>
        <button style={{textTransform: 'capitalize'}} className={style.btnMore}>explore more</button>
      </aside>
      <aside className={style.asideRight}>
        <InspirationCarousel/>
      </aside>
    </div>
  )
}
