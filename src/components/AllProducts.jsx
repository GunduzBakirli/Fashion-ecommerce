import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import heart from "../img/heart.gif";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function AllProducts() {
  AOS.init();

  const allData = useSelector((state) => state.allDataReducer);
  const basketData = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    let currentData = basketData.find((index) => index.id == item.id);
    if (currentData) {
      currentData.quantity += 1;
    } else {
      dispatch({ type: "ADD_BASKET", payload: item });
    }
  };
  const [wishlist, Setwish] = useState([]);
  const addwish = (id) => {
    let currentProduct = wishlist.find((index) => index == id);
    if (currentProduct) {
      Setwish(wishlist.filter((index) => index != id));
    } else {
      Setwish([...wishlist, id]);
    }
  };
  return (
    <>
      <div className="cartimg py-5">
        <h1 className="text-center display-4 text-dark py-3">Your Cart.</h1>
        <nav aria-label="breadcrumb" className="text-center text-dark py-2">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item py-2 ">
              <Link className="text-dark" to={"/"}>
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active mx-2 py-2"
              aria-current="page"
            >
              Products
            </li>
          </ol>
        </nav>
      </div>
      <div className="container pt-5">
        <div className="row">
          {allData.map((item, key) => (
            <div
              className="col-sm-12 col-md-6 col-lg-3"
              data-aos="zoom-in"
              key={key}
            >
              <div className="product-card">
                <img src={item.url} alt="" />
                <div>
                  <h3>{item.dressName}</h3>
                  <h4>{item.price}$</h4>
                  <button
                    onClick={(e) => handleAdd(item)}
                    type="button"
                    className="btn btn-danger size"
                  >
                    ADD TO CART
                  </button>
                  <span onClick={() => addwish(item.id)}>
                    {wishlist.find((index) => index == item.id) ? (
                      <img src={heart} alt="" className="w2" />
                    ) : (
                      <i className="fa-regular fa-heart w2 mx-2"></i>
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
