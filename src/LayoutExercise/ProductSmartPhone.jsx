import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    let { phone } = this.props;
    return (
      <div className="card" style={{ width: "100%", margin: "0 auto" }}>
        <img
          className="card-img-top"
          src={phone.picture}
          alt={phone.picture}
          height={230}
        />
        <div className="card-body">
          <h4 className="card-title">{phone.name}</h4>
          <p className="card-text">{phone.price + " vnd"}</p>
          <div className="d-flex justify-content-around">
            <button
              className="btn btn-success"
              style={{ fontSize: "12px" }}
              onClick={() => this.props.addProductCart(phone)}
            >
              Thêm giỏ hàng
            </button>
            <button
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#exampleModal"
              style={{ fontSize: "12px" }}
              onClick={() => this.props.detailedProducts(phone)}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductCart: (phone) => {
      const phones = {
        ...phone,
        quantum: 1,
      };

      const action = {
        type: "ADD_PHONE_CART",
        phones: phones,
      };
      dispatch(action);
    },

    detailedProducts: (phone) => {
      dispatch({
        type: "DETAILED_PRODUCTS",
        phone,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);
