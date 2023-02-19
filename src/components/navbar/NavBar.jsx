import React, { useEffect, useState } from "react";
import style from "./nav.module.css";
import { FaAngleDown, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import clsx from "clsx";
import MyCart from "../OurProduct_MyCart/MyCart";
import { useDispatch, useSelector } from "react-redux";
import {searchProductText} from "../../redux/actions"
import { searchProductSelector, setProductDataSelector, myCartSelector } from "../../redux/selectors";

export default function NavBar() {
  const [isClickCart, setIsClickCart] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const dispatch = useDispatch();
  const searchInputStored = useSelector(searchProductSelector);
  const myCartSlt= useSelector(myCartSelector);
  console.log(searchInputStored)

  function handleShowShoppingCart(){
    setIsClickCart(!isClickCart)
  }

  function handleChangeInput(e){
    setSearchVal(e.target.value);
  }

  useEffect(() => {
    dispatch(searchProductText(searchVal));
  },[searchVal])
  return (
    <nav className={style.navContainer}>
      <div id="nav-left">
        <ul className={style.listContainer}>
          <li className={style.listNavDirect}>
            <h2 className={style.logo}>Funiro</h2>
          </li>
          <li className={style.listNavDirect}>
            <h5>product</h5>
            <FaAngleDown />
          </li>
          <li className={style.listNavDirect}>
            <h5>rooms</h5>
            <FaAngleDown />
          </li>
          <li className={style.listNavDirect}>
            <h5>inspirations</h5>
          </li>
          <li className={style.listNavDirect}>
            <div className={style.searchbar}>
              <button className={style.searchBtn}>
                <FaSearch />
              </button>
              <input
                type="text"
                value={searchVal}
                onChange={handleChangeInput}
                placeholder="search for minimalist chair"
                className={style.searchInput}
              />
            </div>
          </li>
        </ul>
      </div>
      <div id="nav-right" className={style.rightNav}>
        <div className={clsx(style.favorite, style.navRightItem)}>
          <FaHeart />
        </div>
        <div className={clsx(style.shoppingCart, style.navRightItem)} onClick={handleShowShoppingCart}>
          <FaShoppingCart />
          <span className={style.amountItem}>{myCartSlt.length}</span>
        </div>
        <div className={clsx(style.avatarUser, style.navRightItem)}>
          <img
            src="https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png"
            width={"100%"}
            alt="avatar"
          />
        </div>

        <MyCart isClickCart={isClickCart}/>
      </div>
    </nav>
  );
}
