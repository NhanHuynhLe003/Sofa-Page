import React, { useRef, useState } from 'react'
import TableCart from '../OurProduct_myCart_Table/TableCart'
import style from './MyCart.module.css'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import {addToMyBill} from '../../redux/actions'
import {myCartSelector} from '../../redux/selectors'
export default function MyCart({isClickCart}) {
  
  const dispatch = useDispatch();
  const myCart = useSelector(myCartSelector);
  
  const [totalPrice, setTotalPrice] = useState(0);
  
  function handleClickBuy(){
    dispatch(addToMyBill(myCart));
  }
  
  return (
    <div id='shoppingCart' className={clsx(style.shoppingCart, {
      [style.shoppingCartOn] : isClickCart,
    })}>
      <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Đơn Hàng Của Tôi</h3>
      <TableCart myCart={myCart} setTotalPrice={setTotalPrice}/>
      <div className={style.submitContainer}>
        <h4 className="totalBill">Tổng Giá Tiền: {totalPrice}</h4>
        <button onClick={handleClickBuy} className={style.buyBtn} type='button'>Buy</button>
      </div>
    </div>
  )
}
