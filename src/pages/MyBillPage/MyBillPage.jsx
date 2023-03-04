import React from "react";
import style from "./myBillPage.module.css";
import clsx from "clsx";
import { myBillSelector } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import {deleteBill, editMyBill} from "../../redux/actions"
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
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "1rem 0 2rem 0" }}>
        Danh Sách Đơn Hàng
      </h1>
      <ul className={style.MyBillPage__listBill}>
        {userBillStore &&
          userBillStore.map((billItem, index) => {
            return (
              <li className={style.MyBillPage__bill} key={`${Math.random()}_${index}`}>
                <h3>Đơn hàng 1</h3>
                <h4>Giá tiền: 100000</h4>
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
                    className={clsx(style.MyBillPage__bill__btn, style.btnEdit)}
                    onClick={() => handleEditBill(index)}
                  >
                    Sửa
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
