import React, { useEffect, useRef, useState } from "react";
import style from "./SlideCard.module.css";
export default function SlideCard({
  index,
  slide,
  updateWidthSlide,
  isMouseDown,
  curIndex,
  setLeftSlide,
}) {
  const card = document.getElementsByClassName(style.slideCard);
  const slideCardRef = useRef(-1);

  useEffect(() => {
    updateWidthSlide(slideCardRef.current.getBoundingClientRect().width);
  }, []);
  
 

  return (
    <div ref={slideCardRef} className={style.slideCard}>
      <div className={style.cardImg}>
        <img src={slide.url} height="100%" width="100%" alt="card image" />
      </div>
      <div className="contentCard">
        <h4 className={style.title}>{slide.title}</h4>
        <p className={style.timeUpdate}>{slide.timeUpdate}</p>
      </div>
    </div>
  );
}
