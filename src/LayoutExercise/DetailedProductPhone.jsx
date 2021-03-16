import React, { Component } from "react";
import { connect } from "react-redux";

class DetailedProductPhone extends Component {
  render() {
    let { detailedProducts } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "800px" }}
          role="document"
        >
          <div
            className="modal-content"
            style={{ width: "800px", margin: "0 auto" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Thông tin sản phẩm
              </h5>
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
              <div className="container">
                <div className="row">
                  <div className="col-4 mt-4">
                    <div
                      className="card"
                      style={{ width: "100%", border: "none" }}
                    >
                      <img
                        src={detailedProducts.picture}
                        alt={detailedProducts.picture}
                      />
                      <div className="card-body">
                        <h4 className="card-title">{detailedProducts.name}</h4>
                        <p className="card-text">
                          {detailedProducts.price + " vnd"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <h3 className="text-primary">Thông số kỹ thuật</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Màn hình</th>
                          <th>{detailedProducts.manHinh}</th>
                        </tr>
                        <tr>
                          <th>Hệ điều hành</th>
                          <th>{detailedProducts.heDieuHanh}</th>
                        </tr>
                        <tr>
                          <th>Camera trước</th>
                          <th>{detailedProducts.cameraTruoc}</th>
                        </tr>
                        <tr>
                          <th>Camera sau</th>
                          <th>{detailedProducts.cameraSau}</th>
                        </tr>
                        <tr>
                          <th>RAM</th>
                          <th>{detailedProducts.ram}</th>
                        </tr>
                        <tr>
                          <th>ROM</th>
                          <th>{detailedProducts.rom}</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
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
    detailedProducts: state.layoutExerciseReducers.detailedProducts,
  };
};

export default connect(mapStateToProps, null)(DetailedProductPhone);
