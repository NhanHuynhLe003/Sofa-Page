import React, { useEffect, useRef, useState } from "react";
import style from "./TableCart.module.css";
import { Table, Divider, Radio, Checkbox } from "antd";
import { columns } from "./data_Table/dataTable";
import { myCartSelector } from "../../redux/selectors";
import { useSelector } from "react-redux";
export default function TableCart({
  myCart,
  setTotalPrice,
  checkBoxStore,
  setCheckBoxStore,
  setRowCheckBox,

}) {
  const [changeInput, setChangeInput] = useState(1);
  const [data, setData] = useState([]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  function handleSelect(selectedRowKeysInput, selectedRowsInput) {

    setCheckBoxStore(selectedRowKeysInput); // !important: nho doi gia tri lai rong sau khi cap nhat

    setRowCheckBox(selectedRowsInput);

  }
  function handleChangeVal(e, product) {
    const newAmount = Number(e.target.value);
    product.amount = newAmount;
    setChangeInput((prev) => prev + 1);
  }

  useEffect(() => {
    const totalPriceProduct =
      myCart.listProduct &&
      myCart.listProduct.reduce(
        (sum, item) => sum + item.discoutedPrice * item.amount,
        0
      );
    setTotalPrice(totalPriceProduct);

    const newListProduct =
      myCart.listProduct &&
      myCart.listProduct.map((product, index) => {
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
              id={index + 1}
              min={1}
            />
          ),
          price: product.discoutedPrice * product.amount,
          isChecked: false
        };
      });

    setData(newListProduct);
  }, [myCart.listProduct, changeInput]);
  
  return (
    <>
      <Table
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: checkBoxStore, // de sua san pham ben trong
          onChange: handleSelect,
          
        }}
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={{ hideOnSinglePage: true, pageSize: 4 }}
      />
    </>
  );
}
