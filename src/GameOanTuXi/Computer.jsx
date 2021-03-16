import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    return (
      <div className="computer__content">
        <div className="theThink">
          <img
            src={this.props.computers.picture}
            alt={this.props.computers.picture}
            className="theThink_img"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/GameOanTuXi/playerComputer.png"
          alt=""
          className="computer__content-img"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computers: state.gameOanTuXiReducers.computers,
  };
};

export default connect(mapStateToProps, null)(Computer);
