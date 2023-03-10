import React from "react";
import style from "./billTable.module.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { myBillSelector } from "../../redux/selectors";

export default function BillTable() {
  const billStore = useSelector(myBillSelector);
  console.log(billStore);
  return (
    <Table striped bordered hover size="lg" responsive="md">
      <thead style={{ backgroundColor: "#d1e7dd", border: "#badbcc" }}>
        <tr>
          <th>#</th>
          <th>Tên Món Hàng</th>
          <th>Số Lượng</th>
          <th>Giá Tiền</th>
        </tr>
      </thead>
      <tbody>
        {billStore.userBill ? (
          billStore.userBill.map((bill, index) => {
            return bill.listProduct.map((userCart, indexCart) => {
              return (
                <tr key={userCart.id}>
                  <td>{indexCart + 1}</td>
                  <td>{userCart.name}</td>
                  <td>{userCart.amount}</td>
                  <td>{userCart.price}</td>
                </tr>
              );
            });
          })
        ) : (
          <tr>
            <td colSpan={4}>Loading Data . . . . .</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
