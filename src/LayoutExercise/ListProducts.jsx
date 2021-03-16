import React, { Component } from "react";
import { connect } from "react-redux";
import ProductSmartPhone from "./ProductSmartPhone.jsx";
import ProductLaptop from "./ProductLaptop.jsx";

class ListProducts extends Component {
  renderSmartPhone = () => {
    return this.props.dataPhone.map((phone, index) => {
      return (
        <div key={index} className="col-3">
          <ProductSmartPhone phone={phone} />
        </div>
      );
    });
  };

  renderLaptop = () => {
    return this.props.dataLaptop.map((laptop, index) => {
      return (
        <div key={index} className="col-3">
          <ProductLaptop laptop={laptop} />
        </div>
      );
    });
  };

  render() {
    return (
      <section className="bg-dark container">
        <h1 className="text-center py-3 text-white">BEST SMARTPHONE</h1>
        <div className="row ">{this.renderSmartPhone()}</div>
        <h1 className="text-center pt-5 pb-2 text-white">BEST LAPTOP</h1>
        <div className="row ">{this.renderLaptop()}</div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataPhone: state.layoutExerciseReducers.layoutExerciseDataPhone,
    dataLaptop: state.layoutExerciseReducers.layoutExerciseDataLaptop,
  };
};

export default connect(mapStateToProps, null)(ListProducts);
