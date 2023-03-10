import React from 'react'
import BillTable from '../../components/BillDetail__Table/BillTable'
import style from "./BillDetail.module.css"
export default function BillDetail() {
  return (
    <div className={style.BillDetail}>
      <header className={style.header}>
        <h1>Đơn Hàng 1</h1>
      </header>
      <section className={style.content}>
        <BillTable/>
      </section>
    </div>
  )
}
