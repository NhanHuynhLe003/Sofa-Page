import React from "react";
import style from "./TipAndTrickPage.module.css";
import imgList from "../../assets/images/slideTipTrick/imgList";
import TipTrickCarousel from "../TipAndTrickPage__tipTrickCarousel/TipTrickCarousel";

export default function TipAndTrickPage() {
  const slides = [
    {
      id: 1,
      url: imgList.tip1,
      title: 'How to create a living room to love 1',
      timeUpdate: '21 jan 2020'
    },
    {
      id: 2,
      url: imgList.tip2,
      title: 'How to create a living room to love 2',
      timeUpdate: '22 jan 2020'
    },
    {
      id: 3,
      url: imgList.tip3,
      title: 'How to create a living room to love 3',
      timeUpdate: '23 jan 2020'
    },
    {
        id: 4,
        url: imgList.tip1,
        title: 'How to create a living room to love 4',
        timeUpdate: '24 jan 2020'
      },
      {
        id: 5,
        url: imgList.tip2,
        title: 'How to create a living room to love 5',
        timeUpdate: '25 jan 2020'
      },
      {
        id: 6,
        url: imgList.tip3,
        title: 'How to create a living room to love 6',
        timeUpdate: '26 jan 2020'
      },
      {
        id: 7,
        url: imgList.tip1,
        title: 'How to create a living room to love 7',
        timeUpdate: '27 jan 2020'
      },
      {
        id: 8,
        url: imgList.tip2,
        title: 'How to create a living room to love 8',
        timeUpdate: '28 jan 2020'
      },
      {
        id: 9,
        url: imgList.tip3,
        title: 'How to create a living room to love 9',
        timeUpdate: '29 jan 2020'
      },
  ];

  return (
    <div id="tip-trick-page" className={style.tipTrickPageContainer}>
      <h1 className={style.title}>Tips & Tricks</h1>
        
        <TipTrickCarousel slides={slides}/>
      
        
    </div>
  );
}
