import { useState } from 'react'
import FirstPage from '../../components/header/FirstPage'
import NavBar from '../../components/navbar/NavBar'
import style from './App.module.css'
import SecondPage from '../../components/SecondPage/SecondPage'
import Inspiration from '../../components/Inspiration/Inspiration'
import TipAndTrickPage from '../../components/TipAndTrickPage/TipAndTrickPage'
import SharePage from '../../components/sharePage/SharePage'


function App() {

  return (
    <div className={style.App}>
      <FirstPage/>
      <SecondPage/>
      <Inspiration/>
      <TipAndTrickPage/>
      <SharePage/>
      
    </div>
  )
}

export default App
