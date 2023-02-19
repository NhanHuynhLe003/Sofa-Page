import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./inspirationCarousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "./inspCarousel.css";
import roomBeauty from "../../assets/images/room-beautiful.jpg";
import roomBeauty2 from "../../assets/images/room-beautiful2.jpg";
// import required modules
import { Pagination } from "swiper";
import images from "../../assets/svg/svgContainer/images";
import clsx from "clsx";
export default function InspirationCarousel() {
  const [curIndex, setCurIndex] = useState(0);
  const imgBgCard = useRef(null);
  const roomImgConainer = [
    {
      id: 1,
      url: roomBeauty,
    },
    { id: 2, url: roomBeauty2 },
    {
      id: 3,
      url: roomBeauty,
    },
    { id: 4, url: roomBeauty2 },
    {
      id: 5,
      url: roomBeauty,
    },
    { id: 6, url: roomBeauty2 },
  ];
  useEffect(() => {
    const bulletList = document.querySelectorAll('.swiper-pagination-bullet');
    const bulletContainer = bulletList[0].parentNode;
    const swiperSlide = document.querySelectorAll('.swiper-slide');
    // console.log(swiperSlide);
        bulletContainer.style.display = 'flex';
        bulletContainer.style.alignItems = 'center';
        
    bulletList.forEach((bullet,index) => {
      
      if(index === curIndex){
        bullet.style.backgroundImage = `url(${images.dotBtnActive})`;
        bullet.style.backgroundRepeat= 'no-repeat';
        bullet.style.backgroundColor = '#fff';
        bullet.style.width = '27px';
        bullet.style.height = '27px';
        bullet.style.opacity = '1';
        swiperSlide[index].style.height = '30rem';
        
        if(index === 0){
          bulletContainer.style.left = '60%';
        } else  {
          bulletContainer.style.left = '3%';
        } 
        
      } else {
        bullet.style.backgroundImage = `url(${images.dotBtn})`;
        bullet.style.width = '11px';
        bullet.style.height = '11px';
        bullet.style.opacity = '1';
        swiperSlide[index].style.height = '26rem';
        
      }
    })
    
  }, [curIndex]);
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        onActiveIndexChange={(swiper) => {
          const activeIndex = swiper.activeIndex;

          setCurIndex(activeIndex);
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            
            return `<span class='${className}' 
            style="background-image: url(${images.dotBtn}); width: 11px; height: 11px; 
            background: #D8D8D8; opacity: 1;" "
            ></span>`;
          },
        }}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        {roomImgConainer ? (
          roomImgConainer.map((roomImg, index) => {
            return (
              <SwiperSlide>
                {({ isActive }) => (
                  <div ref={imgBgCard} key={roomImg.id} style={{ height: "100%" }}>
                    <img src={roomImg.url} alt="room Images" />
                  </div>
                )}
              </SwiperSlide>
            );
          })
        ) : (
          <h1>Loading . . .</h1>
        )}
      </Swiper>
    </div>
  );
}
