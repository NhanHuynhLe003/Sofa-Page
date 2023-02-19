import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import style from "./OurProduct.module.css";
import room1 from "../../assets/images/room01.jpg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeInCart, setProductData } from "../../redux/actions";
import { myCartSelector, searchProductSelector } from "../../redux/selectors";
export default function OurProduct() {
  const dispatch = useDispatch(); //dispatch(action); con voi creator: dispatch(action(payload));
  const myCart = useSelector(myCartSelector); //useSelector de lay ra du lieu ben trong kho luu tru
  const searchValStore = useSelector(searchProductSelector);
  
  const [productData, setProductData] = useState(undefined);
  const [tempData, setTempData] = useState(undefined);

  useEffect(() => {
    const prevData = tempData && [...tempData]; //dung bien temp Data de luu toan bo gia tri khoi tao, con product den hien thi
    const productSearched = prevData && prevData.filter((product,index) => {
      return product.name.includes(searchValStore);
    })
    setProductData(productSearched);
  },[searchValStore])
  

  useEffect(() => {
    fetch("https://fe21-db.vercel.app/funiro")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setTempData(data);
      });
  }, []);

  function handleAddToCart(product){
    dispatch(addToCart(product));
  }

  return (
    <div>
      <h1 className={style.title}>Our Product</h1>
      <div className={style.cardContainer}>
        {productData ? (
          productData.map((product, index) => (
            <ItemCard
              key={product._id}
              id={product._id}
              url={room1} //van chua doi lai theo img
              title={product.name}
              des={product.description}
              priceAfter={product.discoutedPrice}
              priceBefore={product.price}
              discouter={product.discouter}
              imgProduct={product.img}
              handleAddToCart = {handleAddToCart}
            />
          ))
        ) : (
          <h1>Loading Data . . . . .</h1>
        )}
      </div>
      <div className={style.showMore}>
        <button
          style={{ textTransform: "capitalize" }}
          className={style.btnShow}
        >
          show more
        </button>
      </div>
    </div>
  );
}
