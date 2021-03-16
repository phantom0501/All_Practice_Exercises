import React, { Component } from "react";
import Carousel from "./Carousel.jsx";
import Cart from "./Cart.jsx";
import DetailedProductLaptop from "./DetailedProductLaptop.jsx";
import DetailedProductPhone from "./DetailedProductPhone.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ListProducts from "./ListProducts.jsx";

export default class DemoLayout extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <Header />
        <div className="wrapper__content">
          <Carousel />
          <ListProducts />
          <Footer />
          <Cart />
          <DetailedProductPhone />
          <DetailedProductLaptop />
        </div>
      </div>
    );
  }
}
