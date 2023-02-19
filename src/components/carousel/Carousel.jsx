import React, { useEffect, useState } from 'react'
import style from './carousel.module.css'
import images from '../../assets/svg/svgContainer/images';
import clsx from 'clsx';
export default function Carousel({slidesImg}) {

const [curIndex, setCurIndex] = useState(0);
const [leftIndex, setLeftIndex] = useState(0);
const [rightIndex, setRightIndex] = useState(0);

function handleClickDot(index){
  setCurIndex(index)
}
function handlePrevBtn(index){
  index==0? setCurIndex(slidesImg.length-1) : setCurIndex(index-1); 
}
function handleNextBtn(index){
  index == slidesImg.length-1 ? setCurIndex(0): setCurIndex(index+1);
}
useEffect(()=>{
  if(curIndex == 0){
    setLeftIndex(slidesImg.length-1);
    setRightIndex(curIndex+1);
  } else if(curIndex == slidesImg.length-1){
    setRightIndex(0);
    setLeftIndex(curIndex-1);
  } else {
    setLeftIndex(curIndex - 1);
    setRightIndex(curIndex + 1);
  }
},[curIndex]);

  const slideStyleCenter = {
    backgroundImage:  `url(${slidesImg[curIndex].url})`
  }
  const slideStyleLeft = {
    backgroundImage:  `url(${slidesImg[leftIndex].url})`
  }
  const slideStyleRight = {
    backgroundImage:  `url(${slidesImg[rightIndex].url})`
  }
  
  return (
    <div className={style.slideContainer}>
      <div className={style.switchContainer}>
        <div className={style.dotContainer}>
          {slidesImg.map((dot,index) => {
            return <div onClick={() => handleClickDot(index)} key={`${Math.random(100)}_${index}`} className={clsx(style.dotStyle, {
              [style.dotActive] : curIndex===index,
            })}><img src={curIndex===index ? images.dotBtnActive: images.dotBtn} alt="dot" /></div>
          })}
        </div>
        <div className={style.arrowContainer}>
          <div className={style.arowLeft} onClick={() => handlePrevBtn(curIndex)}><img src={images.arowLeft} alt="prevBtn" /></div>
          <div className={style.arowRight} onClick={() => handleNextBtn(curIndex)}><img src={images.arowRight} alt="NextBtn" /></div>
        </div>
      </div>
      <div className={style.carouselContainer}>
        <div style={slideStyleLeft} className={style.slideLeft}></div>
        <div style={slideStyleCenter} className={style.slideCenter}></div>
        <div style={slideStyleRight} className={style.slideRight}></div>
      </div>
      
    </div>
  )
}
