import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <section className="container px-0">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" style={{ height: "400px" }}>
            <div className="carousel-item  active" style={{ height: "100%" }}>
              <img
                className="d-block w-100"
                style={{ height: "100%" }}
                src="./img/LayoutExercise/slide_1.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item" style={{ height: "100%" }}>
              <img
                className="d-block w-100"
                style={{ height: "100%" }}
                src="./img/LayoutExercise/slide_2.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item" style={{ height: "100%" }}>
              <img
                className="d-block w-100"
                style={{ height: "100%" }}
                src="./img/LayoutExercise/slide_3.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
