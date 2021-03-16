import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  renderMenuDetail = () => {
    let { menu, burger } = this.props;

    return Object.entries(menu).map(([name, value], index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>
            {burger[name] === 0 ? (
              <button
                disabled
                className="btn btn-danger py-0 px-2 mx-1"
                onClick={() => this.props.addAmount(name, -1)}
              >
                -
              </button>
            ) : (
              <button
                className="btn btn-danger py-0 px-2 mx-1"
                onClick={() => this.props.addAmount(name, -1)}
              >
                -
              </button>
            )}

            {burger[name]}

            {burger[name] === 5 ? (
              <button
                disabled
                className="btn btn-success py-0 px-2 mx-1"
                onClick={() => this.props.addAmount(name, 1)}
              >
                +
              </button>
            ) : (
              <button
                className="btn btn-success py-0 px-2 mx-1"
                onClick={() => this.props.addAmount(name, 1)}
              >
                +
              </button>
            )}
          </td>
          <td>{value}</td>
          <td>{burger[name] * value}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <p className="my-3">Chọn thức ăn</p>
        <table className="table">
          <thead>
            <tr>
              <th style={{ borderTop: "none" }}>Thức ăn</th>
              <th style={{ borderTop: "none" }}></th>
              <th style={{ borderTop: "none" }}>Giá/1 miếng</th>
              <th style={{ borderTop: "none" }}>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderMenuDetail()}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2"></td>
              <td>
                Tổng tiền<nav></nav>
              </td>
              <td>{this.props.total}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button className="btn btn-primary">Thanh toán</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAmount: (name, amount) => {
      dispatch({
        type: "ADD_BREADMID",
        name,
        amount,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
