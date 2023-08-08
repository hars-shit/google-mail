import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/slice/main.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


// import './index.css'

let persistor=persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>


    <App />
    </PersistGate>
  </Provider>
  
)
