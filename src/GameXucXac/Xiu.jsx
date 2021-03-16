import React, { Component } from "react";
import { connect } from "react-redux";

class Xiu extends Component {
  render() {
    return (
      <div className="block__bet">
        <button className="xiu" onClick={() => this.props.btnBet("Xỉu")}>
          Xỉu
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    btnBet: (value) => {
      dispatch({
        type: "BTN_BET_XIU",
        value,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Xiu);
