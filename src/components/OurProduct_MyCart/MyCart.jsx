import React from 'react'
import TableCart from '../OurProduct_myCart_Table/TableCart'
import style from './MyCart.module.css'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import {myCartSelector} from '../../redux/selectors'
export default function MyCart({isClickCart}) {
  const dispatch = useDispatch();
  const myCart = useSelector(myCartSelector);
  function handleSubmitBuy(e){
    e.preventDefault();
  }
  const totalPrice = myCart && myCart.reduce((sum, item) => sum + item.discoutedPrice, 0);
  return (
    <div id='shoppingCart' className={clsx(style.shoppingCart, {
      [style.shoppingCartOn] : isClickCart,
    })}>
      <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Đơn Hàng Của Tôi</h3>
      <TableCart myCart={myCart}/>
      <form onSubmit={handleSubmitBuy} className={style.submitContainer}>
        <h4 className="totalBill">Tổng Giá Tiền: {totalPrice}</h4>
        <button className={style.buyBtn} type='submit'>Buy</button>
      </form>
    </div>
  )
}
