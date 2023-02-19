import React from 'react'
import Carousel from '../carousel/Carousel'
import ContentModal from '../contentModal/ContentModal'
import NavBar from '../navbar/NavBar'
import style from './firstPage.module.css'
import BohausModal from '../BohausModal/BohausModal'
export default function FirstPage() {
  const slidesImg = [
    {url: './src/assets/imgSliderCarousel/imgSlider-01.jpg', title:'img-01'},
    {url: './src/assets/imgSliderCarousel/imgSlider-02.jpg', title:'img-02'},
    {url: './src/assets/imgSliderCarousel/imgSlider-03.jpg', title:'img-03'},
    {url: './src/assets/imgSliderCarousel/imgSlider-04.jpg', title:'img-04'}
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
