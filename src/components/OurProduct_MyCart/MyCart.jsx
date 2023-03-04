import React, { useEffect, useRef, useState } from 'react'
import TableCart from '../OurProduct_myCart_Table/TableCart'
import style from './MyCart.module.css'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import {addToMyBill, submitEditMyBill} from '../../redux/actions'
import {myCartSelector} from '../../redux/selectors'
export default function MyCart({isClickCart}) {
  
  const [isEditBill, setIsEditBill] = useState(false);

  const dispatch = useDispatch();
  const myCart = useSelector(myCartSelector);
  
  const [totalPrice, setTotalPrice] = useState(0);
  
  function handleClickBuy(){
        // console.log(localStorage.getItem('productSelected'));
        if(myCart.isEdit === -1){
          dispatch(addToMyBill(myCart));
        } else {
          dispatch(submitEditMyBill(myCart));
        }
        
  }
  
  

  return (
    <div id='shoppingCart' className={clsx(style.shoppingCart, {
      [style.shoppingCartOn] : isClickCart,
    })}>
      <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Đơn Hàng Của Tôi</h3>
      <TableCart myCart={myCart} setTotalPrice={setTotalPrice}/>
      <div className={style.submitContainer}>
        <h4 className="totalBill">Tổng Giá Tiền: {totalPrice}</h4>
        <button onClick={handleClickBuy} className={style.buyBtn} type='button'>{myCart.isEdit === -1 ? 'Buy' : 'Update'} </button>
      </div>
    </div>
  )
}
