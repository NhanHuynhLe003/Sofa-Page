import React from "react";
import style from './contentModal.module.css'
export default function ContentModal() {
  return (
    <div className={style.modalContent}>
        <div className={style.mainContent}>
            <h1 className={style.title}>High-Quality Furniture Just For You</h1>
            <p className={style.description}>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <button className={style.shopBtn}>shop now</button>
        </div>
      
    </div>
  );
}
