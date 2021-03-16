import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1200px" }}
          role="document"
        >
          <div
            className="modal-content"
            style={{ width: "1200px", margin: "0 auto" }}
          >
            <div className="modal-header" style={{ border: "none" }}>
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.cartProducts.length === 0 ? (
                <p className="text-danger">
                  Không có sản phẩm nào. Tiếp tục mua sắm.
                </p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.cartProducts.map((cartProduct, index) => {
                      return (
                        <tr key={index}>
                          <td>{cartProduct.code}</td>
                          <td>{cartProduct.name}</td>
                          <td>
                            <img
                              src={cartProduct.picture}
                              alt={cartProduct.picture}
                              width={50}
                            />
                          </td>
                          <td>{cartProduct.price}</td>
                          <td>
                            {cartProduct.quantum === 1 ? (
                              <button
                                onClick={() =>
                                  this.props.inCreaseDecrease(
                                    cartProduct.code,
                                    false
                                  )
                                }
                                disabled
                                className="btn btn-secondary py-0 px-2 mr-2"
                              >
                                -
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  this.props.inCreaseDecrease(
                                    cartProduct.code,
                                    false
                                  )
                                }
                                className="btn btn-secondary py-0 px-2 mr-2"
                              >
                                -
                              </button>
                            )}

                            {cartProduct.quantum}
                            {cartProduct.quantum === 20 ? (
                              <button
                                onClick={() =>
                                  this.props.inCreaseDecrease(
                                    cartProduct.code,
                                    true
                                  )
                                }
                                disabled
                                className="btn btn-secondary py-0 px-2 ml-2"
                              >
                                +
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  this.props.inCreaseDecrease(
                                    cartProduct.code,
                                    true
                                  )
                                }
                                className="btn btn-secondary py-0 px-2 ml-2"
                              >
                                +
                              </button>
                            )}
                          </td>
                          <td>{cartProduct.price * cartProduct.quantum}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                this.props.deletePhoneCart(cartProduct.code)
                              }
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
            <div className="modal-footer" style={{ border: "none" }}>
              {this.props.cartProducts.length === 0 ? (
                <button
                  type="button"
                  className="btn btn-success"
                  style={{ display: "none" }}
                >
                  Đặt hàng
                </button>
              ) : (
                <button type="button" className="btn btn-success">
                  Đặt hàng
                </button>
              )}

              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts: state.layoutExerciseReducers.cartProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePhoneCart: (code) => {
      dispatch({
        type: "DELETE_PHONE_CART",
        code,
      });
    },

    inCreaseDecrease: (code, quantum) => {
      dispatch({
        type: "INCREASE_DECREASE",
        code,
        quantum,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
