import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './pages/MainApp/App'
import MyBillPage from './pages/MyBillPage/MyBillPage'

export default function MainPage() {
  return (
    <Routes>
        <Route path="/" element={<App/>}></Route>
        <Route path="/user-bill" element={<MyBillPage/>}></Route>
    </Routes>
    
  )
}
