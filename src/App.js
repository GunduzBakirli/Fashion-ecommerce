import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Basket from "./components/Basket";
import Login from "./components/Login";
import AllProducts from "./components/AllProducts";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/emilfermanli/db/product")
      .then((res) => res.data)
      .then((res) => dispatch({ type: "All_Data", payload: res }));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
