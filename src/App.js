import React from 'react';
import Navbar from './Components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import OrderList from './Components/Orderlist.jsx';
import {store} from './store.jsx'




function App() {
  return (
    <Provider store={store}>
    <div className="App">


     <BrowserRouter>
     <Navbar/>
          <Routes>
          <Route path="/orders" element={<OrderList/>} />
          </Routes>
         
        
      </BrowserRouter>
     
    </div>
    </Provider>
  );
}

export default App;
