import React, { useState } from "react";
import lady from "../img/lady.jpg";
import girl from "../img/girl.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import heart from "../img/heart.gif";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  AOS.init();

  const [wishlist, Setwish] = useState([]);
  const addwish = (id) => {
    let currentProduct = wishlist.find((index) => index == id);
    if (currentProduct) {
      Setwish(wishlist.filter((index) => index != id));
    } else {
      Setwish([...wishlist, id]);
    }
  };
  const allData = useSelector((state) => state.allDataReducer);
  console.log(allData);
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
  return (
    <>
      <div className="container-fluid">
        <p className="fixed-word1">MODIST - TIME TO GET DRESS</p>
        <p className="fixed-word2">SINCE - 1985</p>
        <div
          className="row hero-bg w-100 position-relative"
          style={{ height: "100vh", margin: "0" }}
        >
          <img
            className="w-100 h-100 hero-img"
            style={{ objectFit: "cover" }}
            src={lady}
            alt=""
          />
          <div className="hero-text">
            <h1 className="fw-bold text-white">LE STYLIST</h1>
            <h2 className="dress-text">WEAR YOUR DRESS</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-12 ttf">
          <div className="section-heading">
            <h1 className="backward">Trending</h1>
            <h1 className="front">Trending</h1>
          </div>
        </div>
        <div className="row">
          {
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {allData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="product-card pb-3">
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
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
      </div>
      <div className="colors col-12">
        <div className="container py-5 d-flex colors">
          <div className="row m-0 justify-content-center align-items-center ">
            <div className="col-md-5 col-sm-12">
              <img src={girl} className="w-100 online-img" alt="Girl" />
            </div>
            <div className="col-md-7 col-sm-12 ">
              <h2 className="display-4 fw-normal mt-5 ms-5">
                MODIST
                <br />
                ONLINE
                <br />
                <span>FASHION SHOP</span>
              </h2>
              <p className="fontt fw-normal mt-3 ms-5">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
              <p className="fontt fw-normal ms-5">
                When she reached the first hills of the Italic Mountains, she
                had a last view back on the skyline of her hometown
                Bookmarksgrove, the headline of Alphabet Village and the subline
                of her own road, the Line Lane. Pityful a rethoric question ran
                over her cheek, then she continued her way.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 ttf colors">
          <div className="section-heading">
            <h1 className="backward">PRODUCTS</h1>
            <h1 className="front">OUR PRODUCTS</h1>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            {allData.map((item, key) => (
              <div
                className="col-sm-12 col-md-6 col-lg-3 mt-4"
                data-aos="flip-left"
                // // data-aos-duration="3500"
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
        <div className="discount col-sm-12">
          <h2 className="discount-event text-center mt-5">SUMMER SALE</h2>
        </div>
        <div className="col-md-12 col-sm-12 ttf colors">
          <div className="section-heading">
            <h1 className="backward">SERVICES</h1>
            <h1 className="front">WE WANT YOU TO EXPRESS YOURSELF</h1>
          </div>
        </div>
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-4 text-center py-5">
              <i className="fa-solid fa-thumbs-up ssz colored"></i>
              <h5 className="colored">REFUND POLICY</h5>
              <div className="colored">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </div>
            </div>
            <div className="col-12 col-md-4 text-center py-5">
              <i className="fa-solid fa-boxes-packing ssz colored"></i>
              <h5 className="colored">PREMIUM PACKAGING</h5>
              <div className="colored">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </div>
            </div>
            <div className="col-12 col-md-4 text-center py-5 ">
              <i className="fa-solid fa-medal ssz colored"></i>
              <h5 className="colored">SUPERIOR QUALITY</h5>
              <div className="colored">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 tft pt-5">
          <div className="section-heading">
            <h1 className="backward">SERVICES</h1>
            <h1 className="front">WE WANT YOU TO EXPRESS YOURSELF</h1>
          </div>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center col-sm-12">
        <div className="d-flex sub-in">
          <input type="text" placeholder="Enter email adress" />
          <input type="button" value="Subscribe" />
        </div>
      </div> */}
    </>
  );
}

export default Home;
