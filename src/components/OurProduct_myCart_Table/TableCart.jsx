import React, { useState } from "react";
import style from "./TableCart.module.css";
import { Table, Divider, Radio } from "antd";
import { columns } from "./data_Table/dataTable";
export default function TableCart({ myCart }) {
  // const data = [
  // {
  //   key: "1",
  //   name: "John Brown",
  //   count: <input type="number" style={{width: '30%'}} value={0} name="number" id="1" />,
  //   price: 90000,
  // },

  // ];
  // console.log(myCart)
  const data = myCart && myCart.map((product, index) => {
    return {
      key: index,
      name: product.name,
      count: (
        <input
          type="number"
          style={{ width: "30%" }}
          value={1}
          name="number"
          id="1"
        />
      ),
      price: product.discoutedPrice,
    };
  });
  return (
    <>
      <Table
        rowSelection={{
          type: "checkbox",
        }}
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={{ hideOnSinglePage: true, pageSize: 5}}
      />
    </>
  );
}
