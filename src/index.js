import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Sidebar from './modules/dashboard/Sidebar';
import Home from './modules/dashboard/Home';
import Product from './modules/products/Product';
import Customer from './modules/customer/Customer';
import Incomes from './modules/incomes/Incomes';
import Promote from './modules/promote/Promot';
import Help from './modules/help/Help';
import Myerrorpage from './modules/error/Myerrorpage';
import Landingpage from './modules/dashboard/Landingpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
    
 
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
       <Route path='/Dashboard' element={<Landingpage/>}>
              <Route path='home' element={<Home/>}/>
              <Route path='product' element={<Product/>}/>
              <Route path='customer' element={<Customer/>}/>
              <Route path='income' element={<Incomes/>}/>
              <Route path='promote' element={<Promote/>}/>
              <Route path='help' element={<Help/>}/>
              <Route path='*' element={<Myerrorpage/>}/>
       </Route>

      </Routes>
    </BrowserRouter>




  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

