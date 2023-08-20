import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import HomePage from "./customer/page/HomePage/HomePage";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/productDetail/productDetail";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerRouter from "./routers/CustomerRouters";

function App() {
  return (
       <Routes>
        <Route path="/*" element={<CustomerRouter />}></Route>
      </Routes>
   );
}

export default App;
