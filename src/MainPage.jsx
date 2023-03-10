import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./pages/MainApp/App";
import MyBillPage from "./pages/MyBillPage/MyBillPage";

import BillDetail from "./pages/BillDetail/BillDetail";
import mainCss from "./main.css"
export default function MainPage() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/user-bill" element={<MyBillPage />}></Route>
          <Route path="/user-bill/:id" element={<BillDetail />}></Route>
        </Routes>
      </main>
    </>
  );
}
