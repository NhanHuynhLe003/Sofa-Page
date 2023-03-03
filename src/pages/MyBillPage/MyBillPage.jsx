import React from 'react'
import style from "./myBillPage.module.css"
import clsx from 'clsx'
import {myBillSelector} from "../../redux/selectors"
import { useSelector } from 'react-redux';
export default function MyBillPage() {


    const userBill = useSelector(myBillSelector);

  return (
    <div>
        <h1 style={{textAlign:'center' , margin: '1rem 0 2rem 0'}}>Danh Sách Đơn Hàng</h1>
      <ul className={style.MyBillPage__listBill}>
        {userBill && userBill.map((billItem,index) => {
            return(
                <li className={style.MyBillPage__bill}>
          <h3>Đơn hàng 1</h3>
          <h4>Giá tiền: 100000</h4>
          <div className={style.MyBillPage__bill__controller}>
            <button className={clsx(style.MyBillPage__bill__btn, style.btnDetail)}>Chi tiết</button>
            <button className={clsx(style.MyBillPage__bill__btn, style.btnAdd)}>Thêm</button>
            <button className={clsx(style.MyBillPage__bill__btn, style.btnEdit)}>Sửa</button>
            <button className={clsx(style.MyBillPage__bill__btn, style.btnRemove)}>Xóa</button>
          </div>
        </li>
            )
        })}
        
        
      </ul>
    </div>
  )
}
