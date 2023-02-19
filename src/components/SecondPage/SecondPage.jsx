import React from 'react'
import OurProduct from '../OurProduct/OurProduct'
import Standard from '../Standard/Standard'
import style from './secondPage.module.css'
export default function SecondPage() {
  return (
    <>
        <section className={style.head}>
            <Standard/>
            <OurProduct/>
        </section>
    </>
  )
}
