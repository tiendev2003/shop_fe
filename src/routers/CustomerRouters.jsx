import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/page/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/productDetail/productDetail";
import Checkout from "../customer/components/Checkout/Checkout";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Order from "../customer/components/Order/Order";

const CustomerRouter = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        {/* <HomePage /> */}
        {/* <Product/> */}
        <Route element={<ProductDetails />} path="/product/:productId" />
        {/* <Cart/> */}
       <Route element={ <Checkout/>} path="/checkout" />
       <Route element={ <Order/>} path="/account/order" />
       <Route element={ <OrderDetails/>} path="/account/order/:orderId" />
        {/* <OrderDetails /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouter;
