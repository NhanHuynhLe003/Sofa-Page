import React, { useEffect, useState } from "react";
import style from "./ItemCard.module.css";
import {FaShare, FaHeart} from 'react-icons/fa'
export default function ItemCard({ url, title, des, priceBefore, priceAfter, handleAddToCart, discouter, id, imgProduct }) {
  const [isHoverCard, setIsHoverCard] = useState(false);

  return (
    <div className={style.cardInfo}>
          <div className={style.imgContainer}>
            <img src={url} alt="room img" />
          </div>
          <div className={style.contentContainer}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{des}</p>
            <div className={style.priceContainer}>
              <h3 className={style.PriceAfter}>Rp {priceAfter}</h3>
              <h5 className={style.priceBefore}>Rp {priceBefore}</h5>
            </div>
          </div>
        
          <div className={style.containerBtnBuy}>
            <button className={style.addToCartBtn} onClick={() => 
              handleAddToCart({
                id,
                name: title,
                price: priceBefore,
                discoutedPrice: priceAfter,
                discouter,
                description: des,
                imgProduct
              })}>Add to cart</button>
            <div className={style.addToFavourite}>
              <span className={style.btnFavor}><FaShare/> <h4 className={style.headingFavor}>Share</h4></span>
              <span className={style.btnFavor}><FaHeart/> <h4 className={style.headingFavor}>Like</h4></span>
            </div>
          </div>
        
    </div>
  );
}
