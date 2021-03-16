import React, { Component } from "react";
import { connect } from "react-redux";

class DetailedProductLaptop extends Component {
  render() {
    let { detailedProducts } = this.props;
    return (
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: "1200px" }}
        >
          <div
            className="modal-content"
            style={{ width: "1200px", margin: "0 auto" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
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
              <div className="row">
                <div className="col-4 mt-5">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={detailedProducts.picture}
                      alt={detailedProducts.picture}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{detailedProducts.name}</h4>
                      <p className="card-text">{detailedProducts.price}</p>
                    </div>
                  </div>
                </div>

                <div className="col-8">
                  <h3>Thông số kỹ thuật</h3>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Manufacturer</th>
                        <th>{detailedProducts.manufacturer}</th>
                      </tr>
                      <tr>
                        <th>Species</th>
                        <th>{detailedProducts.species}</th>
                      </tr>
                      <tr>
                        <th>Part Number</th>
                        <th>{detailedProducts.partNumber}</th>
                      </tr>
                      <tr>
                        <th>Microprocessor</th>
                        <th>{detailedProducts.microprocessor}</th>
                      </tr>
                      <tr>
                        <th>VGA</th>
                        <th>{detailedProducts.vga}</th>
                      </tr>
                      <tr>
                        <th>Card</th>
                        <th>{detailedProducts.card}</th>
                      </tr>
                      <tr>
                        <th>Pin</th>
                        <th>{detailedProducts.pin}</th>
                      </tr>
                      <tr>
                        <th>Operating System</th>
                        <th>{detailedProducts.operatingSystem}</th>
                      </tr>
                    </thead>
                  </table>
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

export default connect(mapStateToProps, null)(DetailedProductLaptop);
