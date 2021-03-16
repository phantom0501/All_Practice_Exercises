import React, { Component } from "react";
import "../assets/GameOanTuXi/css/buble.css";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    return (
      <div className="game__result">
        <p className="text-warning" style={{ fontSize: "70px" }}>
          {this.props.showMessage}
        </p>
        <p className="text-success">
          Số lần thắng:{" "}
          <span className="text-warning"> {this.props.numOfWins}</span>
        </p>
        <p className="text-success">
          Số lượt chơi:{" "}
          <span className="text-warning"> {this.props.numOfPlays}</span>
        </p>
        <button
          className="btn btn-success mt-5"
          onClick={() => this.props.playGame()}
        >
          Play game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMessage: state.gameOanTuXiReducers.showMessage,
    numOfWins: state.gameOanTuXiReducers.numOfWins,
    numOfPlays: state.gameOanTuXiReducers.numOfPlays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;

        if (count > 20) {
          clearInterval(randomComputerItem);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 200);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
