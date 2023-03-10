import React, { useEffect, useRef, useState } from 'react'
import TableCart from '../OurProduct_myCart_Table/TableCart'
import style from './MyCart.module.css'
import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'
import {addToMyBill, submitEditMyBill, deleteProductSelected, deleteBill} from '../../redux/actions'
import {myCartSelector} from '../../redux/selectors'
export default function MyCart({isClickCart}) {
  let [checkBoxStore, setCheckBoxStore] = useState([]);
  let [rowCheckbox, setRowCheckBox] = useState([]);
  

  const dispatch = useDispatch();
  const myCart = useSelector(myCartSelector);

  const [totalPrice, setTotalPrice] = useState(0);
  function handleClickDel(){
      let newCboxKeysStore = [...checkBoxStore];
      
      let listCboxNotSelected= myCart && myCart.listProduct.length>0 && myCart.listProduct.filter((cbox,index) => {
        return !newCboxKeysStore.includes(index)
      })
      
      dispatch(deleteProductSelected(listCboxNotSelected));
      setCheckBoxStore([]);
  }

  
  useEffect(() => {
    console.log(myCart)
  },[myCart])
  

  function handleClickBuy(){
        // console.log(localStorage.getItem('productSelected'));
        if(myCart.isEdit === -1){
           dispatch(addToMyBill(myCart)) 
        } else {
          myCart.listProduct.length !== 0 ? dispatch(submitEditMyBill(myCart)) : dispatch(deleteBill(myCart.isEdit))
        }
  }
  
  

  return (
    <div id='shoppingCart' className={clsx(style.shoppingCart, {
      [style.shoppingCartOn] : isClickCart,
    })}>
      <h3 style={{textAlign: 'center', marginBottom: '1rem'}}>Đơn Hàng Của Tôi</h3>
      <TableCart setRowCheckBox={setRowCheckBox} myCart={myCart} checkBoxStore={checkBoxStore} setCheckBoxStore={setCheckBoxStore} setTotalPrice={setTotalPrice}/>
      <div className={style.submitContainer}>
        <h4 className={style.totalBill}>Tổng Giá Tiền: {totalPrice}</h4>
        <div className={style.controller}>
          <button className={style.delBtn} onClick={(e) => handleClickDel(e)} type='button'>Xóa</button>
          <button onClick={handleClickBuy} className={style.buyBtn} type='button'>{myCart.isEdit === -1 ? 'Buy' : 'Update'} </button>
        </div>
      </div>
    </div>
  )
}
