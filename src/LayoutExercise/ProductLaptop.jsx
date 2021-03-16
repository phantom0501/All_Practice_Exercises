import React, { Component } from "react";
import { connect } from "react-redux";

class ProductLaptop extends Component {
  render() {
    let { laptop } = this.props;
    return (
      <div>
        <div className="card py-3" style={{ width: "100%", margin: "0 auto" }}>
          <img
            className="card-img-top"
            src={laptop.picture}
            height={200}
            alt={laptop.picture}
          />
          <div className="card-body">
            <h4 className="card-title">{laptop.name}</h4>
            <p className="card-text">{laptop.price + " vnd"}</p>
            <div className="d-flex justify-content-around">
              <button
                className="btn btn-success"
                style={{ fontSize: "12px" }}
                onClick={() => this.props.addProductCart(laptop)}
              >
                Thêm giỏ hàng
              </button>
              <button
                className="btn btn-danger"
                style={{ fontSize: "12px" }}
                data-toggle="modal"
                data-target="#exampleModalLong"
                onClick={() => this.props.detailedProducts(laptop)}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductCart: (laptop) => {
      const laptops = {
        ...laptop,
        quantum: 1,
      };

      const action = {
        type: "ADD_LAPTOP_CART",
        laptops: laptops,
      };
      dispatch(action);
    },

    detailedProducts: (laptop) => {
      dispatch({
        type: "DETAILED_LAPTOP_PRODUCT",
        laptop,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductLaptop);
