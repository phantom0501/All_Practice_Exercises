import React, { Component } from "react";
import { connect } from "react-redux";

class Tai extends Component {
  render() {
    return (
      <div className="block__bet">
        <button className="tai" onClick={() => this.props.btnBet("Tài")}>
          Tài
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    btnBet: (value) => {
      dispatch({
        type: "BTN_BET_TAI",
        value,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Tai);
