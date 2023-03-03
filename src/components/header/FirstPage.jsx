import React from 'react'
import Carousel from '../carousel/Carousel'
import ContentModal from '../contentModal/ContentModal'
import NavBar from '../navbar/NavBar'
import style from './firstPage.module.css'
import BohausModal from '../BohausModal/BohausModal'
import img1 from "../../assets/imgSliderCarousel/imgSlider-01.jpg"
import img2 from "../../assets/imgSliderCarousel/imgSlider-02.jpg"
import img3 from "../../assets/imgSliderCarousel/imgSlider-03.jpg"
import img4 from "../../assets/imgSliderCarousel/imgSlider-04.jpg"
export default function FirstPage() {
  const slidesImg = [
    {url: img1, title:'img-01'},
    {url: img2, title:'img-02'},
    {url: img3, title:'img-03'},
    {url: img4, title:'img-04'}
  ]
  return (
    <div>
        <header className={style.header}><NavBar/></header>
        <section id="content" className={style.content}>
            <div className={style.asideLeft}>
                <ContentModal/>
            </div>
            <div className={style.carouselContainer}>
              <Carousel slidesImg={slidesImg}/>
            </div>
            <div className={style.miniModal}>
              <BohausModal/>
            </div>
        </section>
    </div>
  )
}
