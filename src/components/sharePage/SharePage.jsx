import React from "react";
import style from "./SharePage.module.css";
import clsx from "clsx";
import roomImg from "../../assets/images/sharePage/roomImg";

export default function SharePage() {
  const listImgRoom = [
    {
      id: 1,
      url: roomImg.room1,
    },
    {
      id: 2,
      url: roomImg.room2,
    },
    {
      id: 3,
      url: roomImg.room3,
    },
    {
      id: 4,
      url: roomImg.room4,
    },
    {
      id: 5,
      url: roomImg.room5,
    },
    {
      id: 6,
      url: roomImg.room6,
    },
    {
      id: 7,
      url: roomImg.room7,
    },
    {
      id: 8,
      url: roomImg.room8,
    },
    {
      id: 9,
      url: roomImg.room9,
    },
  ];

  return (
    <div>
      <h1 style={{textAlign: 'center', fontWeight: 'bold'}}>#FuniroFurniture</h1>
      <div className={style.galleryContainer}>
        <div className={clsx(style.col, style.columnBig, style.columnLeft)}>
          <div className={clsx(style.row, style.rowUp)}>
            <span className={style.imgContainer}>
              <img src={roomImg.room1} alt="room1" />
            </span>
            <span className={style.imgContainer}>
              <img src={roomImg.room2} alt="room2" />
            </span>
          </div>
          <div className={clsx(style.row, style.rowDown)}>
            <span className={style.imgContainer}>
              <img src={roomImg.room3} alt="room3" />
            </span>
            <span className={style.imgContainer}>
              <img src={roomImg.room4} alt="room4" />
            </span>
          </div>
        </div>
        <div className={clsx(style.col, style.columnSmall)}>
          <div className={clsx(style.row)}>
            <span className={style.imgContainer}>
              <img src={roomImg.room5} alt="room5" />
            </span>
          </div>
        </div>
        <div className={clsx(style.col, style.columnBig, style.columnRight)}>
          <div className={clsx(style.row, style.rowUp)}>
            <span className={style.imgContainer}>
              <img src={roomImg.room6} alt="room6" />
            </span>
            <span className={style.imgContainer}>
              <img src={roomImg.room7} alt="room7" />
            </span>
          </div>
          <div className={clsx(style.row, style.rowDown)}>
            <span className={style.imgContainer}>
              <img src={roomImg.room8} alt="room8" />
            </span>
            <span className={style.imgContainer}>
              <img src={roomImg.room9} alt="room9" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
