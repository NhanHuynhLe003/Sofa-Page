import React, { useEffect, useRef, useState } from "react";
import style from "./TableCart.module.css";
import { Table, Divider, Radio } from "antd";
import { columns } from "./data_Table/dataTable";
export default function TableCart({ myCart, setTotalPrice }) {

  const [changeInput, setChangeInput] = useState(1);
  
  
  function handleChangeVal(e, product){
      //khi bam len thi e.target.value lien tuc cap nhat, value hien tai ko doi nen moi lan chi +1 roi tra ve so cu
      
      const newAmount = Number(e.target.value);
      
      product.amount = newAmount;
      setChangeInput(prev => prev+1);

  }

  const totalPriceProduct = myCart && myCart.reduce((sum, item) => sum + item.discoutedPrice*item.amount, 0);
    setTotalPrice(totalPriceProduct);

  const data = myCart && myCart.map((product, index) => {
    return {
      key: index,
      name: product.name,
      count: (
        <input

          type="number"
          style={{ width: "50%" }}
          value={product.amount}
          onChange={(e) => handleChangeVal(e, product)}
          name="number"
          id={index+1}
          min={1}
          
        />
      ),
      price: product.discoutedPrice*product.amount,
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
        pagination={{ hideOnSinglePage: true, pageSize: 4}}
      />
    </>
  );
}
