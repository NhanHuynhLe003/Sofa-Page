import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import css from "./main.css"
//--------------import redux-------------------
import store from './redux/store';
import {Provider} from 'react-redux'
//----------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* ----------setup provider for redux--------- */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* ----------setup provider for redux--------- */}
  </React.StrictMode>,
)
