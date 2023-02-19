import React from "react";
import style from "./inspirationTitle.module.css";
export default function InpirationTitle() {
  return (
    <div className={style.contentContainer}>
      <h1 className={style.title}>50+ Beautiful rooms inspiration</h1>
      <p className={style.des}>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
    </div>
  );
}
