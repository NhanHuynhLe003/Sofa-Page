import React from "react";
import style from "./standard.module.css";
export default function StandardCard({ content, title, url }) {
  return (
    <div className={style.containerCard}>
      <div className={style.iconStandard}>
        <img style={{width: '100%'}} src={url} alt="anh chat luong" />
      </div>
      <div>
        <h5 className={style.title}>{title}</h5>
        <p className={style.content}>{content}</p>
      </div>
    </div>
  );
}
