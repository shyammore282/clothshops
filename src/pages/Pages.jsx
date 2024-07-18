import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../dashboard/Dashboard";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/product" element={<ProductCard />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
