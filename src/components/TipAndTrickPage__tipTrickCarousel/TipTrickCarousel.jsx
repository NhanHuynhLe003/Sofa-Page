import React, { useEffect, useRef, useState } from "react";
import SlideCard from "../TipTrickCarousel_slideCard/SlideCard";
import style from "./TipTrickCarousel.module.css";
import images from "../../assets/svg/svgContainer/images";

export default function TipTrickCarousel({ slides }) {
  const [curIndex, setCurIndex] = useState(0);
  const [widthSlide, setWidthSlide] = useState(-1);
  const [leftSlide, setLeftSlide] = useState(-1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const StartRef = useRef();
  const scrollLeftRef = useRef();
  const slideListContainerRef = useRef(null);
  const startPositionRef = useRef(null);
  function updateWidthSlide(width) {
    setWidthSlide(width);
  }
  function handleNextBtn(){
    curIndex<slides.length-3 ? setCurIndex(curIndex+1) : setCurIndex(0);
  }
  function handlePrevBtn(){
    curIndex>0 ? setCurIndex(curIndex-1): setCurIndex(slides.length-3);
  }
  function handleMouseDown(e) {
    /**cac bien ben trong chua gia tri truoc khi keo chuot */
    setIsMouseDown(true);
    startPositionRef.current = e.pageX; //vi tri ban dau cua element cha tren scroll bar
    StartRef.current =
      startPositionRef.current - slideListContainerRef.current.offsetLeft;
    // console.log(startPositionRef.current)
    scrollLeftRef.current = slideListContainerRef.current.scrollLeft;
  }
  function handleMouseLeave(e) {
    setIsMouseDown(false);
    startPositionRef.current = null;
  }
  function handleMouseUp(e) {
    setIsMouseDown(false);
    startPositionRef.current = null;
  }
  function handleClickBullet(index) {
    setCurIndex(index);
    
  }

  function scrollToCurSlide(index){
    slideListContainerRef.current.scrollLeft = index * widthSlide + index * 30;
  }

  useEffect(() => {
    scrollToCurSlide(curIndex);
  },[curIndex])

  function handleMouseMove(e) {
    if (!isMouseDown) return;

    e.preventDefault();
    const x = e.pageX - slideListContainerRef.current.offsetLeft;
    const walk = (x - StartRef.current) * 3;
    /**
     * Ở đây, chúng ta sử dụng biến isMouseDown để kiểm tra xem người dùng đã giữ chuột hay chưa, biến startX để lưu giữ vị trí
     * ban đầu của chuột khi người dùng giữ chuột, và biến scrollLeft để lưu giữ vị trí scroll hiện tại của danh sách.
     * Khi người dùng di chuyển chuột, chúng ta tính toán khoảng cách di chuyển (walk) và thay đổi giá trị của scrollLeft
     * tương ứng để di chuyển danh sách sang trái hoặc sang phải.
     *
     * e.pageX được sử dụng để xác định vị trí người dùng kéo chuột trên trục hoành (theo chiều ngang)
     * e.pageX được sử dụng để di chuyển các list item trong phạm vi cho phép, dựa trên khoảng cách di chuyển của chuột và giới hạn của phạm vi scroll.
     */
    slideListContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  }

  return (
    <>
      
        <span className={style.prevBtn} onClick={handlePrevBtn}>
          <img src={images.btnPrev} alt="prevBtn" />
        </span>
        <span className={style.nextBtn} onClick={handleNextBtn}>
          <img src={images.nextBtn} alt="NextBtn" />
        </span>
      
      <div
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        ref={slideListContainerRef}
        className={style.slideListContainer}
      >
        <div className={style.slideCardContainer}>
          {slides.map((slide, index) => {
            return (
              <SlideCard
                setCurIndex={setCurIndex}
                curIndex={curIndex}
                setLeftSlide={setLeftSlide}
                key={`${slide}_${Math.random()}`}
                slide={slide}
                index={index}
                updateWidthSlide={updateWidthSlide}
                isMouseDown={isMouseDown}
              />
            );
          })}
        </div>
      </div>
      <ul className={style.bulletList}>
        {slides.map((slide, index) => {
          if (index < slides.length - 2) {
            return (
              <li
                key={`${slide}_${index}_${Math.random()}`}
                onClick={() => handleClickBullet(index)}
                className={style.bulletItem}
              >
                <img
                  src={curIndex == index ? images.dotBtnActive : images.dotBtn}
                  alt="bullet"
                />
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
