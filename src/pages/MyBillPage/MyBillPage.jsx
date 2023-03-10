import React from "react";
import style from "./myBillPage.module.css";
import clsx from "clsx";
import { myBillSelector } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {deleteBill, editMyBill} from "../../redux/actions"
import { Link } from "react-router-dom";
export default function MyBillPage() {
  const dispatch = useDispatch();
  const userBillStore = useSelector(myBillSelector).userBill;
  console.log(useSelector(myBillSelector));
  function handleEditBill(indexProduct){
    dispatch(editMyBill(indexProduct));
  }

  function handleDeleteBill(index){
    dispatch(deleteBill(index));
  }

  function handleSumPrice(list){
    return list.reduce((sum, item) => sum + item.discoutedPrice*item.amount, 0);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}>
        Đơn Hàng Của Tôi
      </h1>
      <ul className={style.MyBillPage__listBill}>
        {userBillStore &&
          userBillStore.map((billItem, index) => {
            return (
              <li className={style.MyBillPage__bill} key={`${Math.random()}_${index}`}>
                <div className={style.content}>
                  <h3>Đơn hàng {index+1}</h3>
                  <h4>Giá tiền: {handleSumPrice(billItem.listProduct)}</h4>
                </div>
                <div className={style.MyBillPage__bill__controller}>
                  <button
                    className={clsx(
                      style.MyBillPage__bill__btn,
                      style.btnDetail
                    )}
                  >
                    Chi tiết
                  </button>
                  <button
                  style={{padding: '0.5rem 0'}}
                    className={clsx(style.MyBillPage__bill__btn, style.btnEdit)}
                    onClick={() => handleEditBill(index)}
                  >
                    <Link style={{textDecoration:'none', color:"#fff"}} to='/'>
                      Sửa
                    </Link>
                  </button>
                  <button
                    className={clsx(
                      style.MyBillPage__bill__btn,
                      style.btnRemove
                    )}
                    onClick={() => handleDeleteBill(index)}
                  >
                    Xóa
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
