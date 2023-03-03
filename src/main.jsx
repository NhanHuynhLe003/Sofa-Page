import React from 'react'
import ReactDOM from 'react-dom/client'

//--------------import redux-------------------
import store from './redux/store';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom"
import MainPage from './MainPage';
//----------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ----------setup provider for redux--------- */}
    <BrowserRouter>
      <Provider store={store}>
        <MainPage/>
      </Provider>
    </BrowserRouter>
    {/* ----------setup provider for redux--------- */}
  </React.StrictMode>,
)
