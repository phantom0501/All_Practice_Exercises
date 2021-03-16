import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  renderTotalScore = () => {
    let totalScore = this.props.gameStore.reduce((total, item, index) => {
      return total + item.code;
    }, 0);

    if (totalScore >= 11) {
      return (
        <h2 className="text-danger showScore">
          Tổng điểm: <span className="text-primary">{totalScore}</span>
          <span className="arrow text-info"> {"=> "}</span>
          Tài
        </h2>
      );
    } else {
      return (
        <h2 className="text-danger showScore">
          Tổng điểm: <span className="text-primary">{totalScore}</span>
          <span className="arrow text-info"> {"=> "}</span>
          Xỉu
        </h2>
      );
    }
  };
  render() {
    return (
      <div className="result__game">
        <div className="result__game-img">
          {this.props.gameStore.map((item, index) => {
            return <img key={index} src={item.picture} alt={item.picture} />;
          })}
          {this.renderTotalScore()}
        </div>

        <div className="result__game-info mt-3">
          <p className="text-success">
            Bạn đặt cược:
            <span className="text-warning"> {this.props.theBet}</span>
          </p>

          <p className="text-success">
            Số lần thắng:
            <span className="text-danger"> {this.props.numOfWins}</span>
          </p>

          <p className="text-success">
            Số lần thua:
            <span className="text-info"> {this.props.numOfLoss}</span>
          </p>

          <p className="text-success">
            Số lượt chơi:
            <span className="text-primary"> {this.props.numOfPlays}</span>
          </p>

          <button
            className="btn btn-success mt-4"
            onClick={() => this.props.playGame()}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameStore: state.gameXucXacReducers.gameStore,
    numOfWins: state.gameXucXacReducers.numOfWins,
    numOfLoss: state.gameXucXacReducers.numOfLoss,
    numOfPlays: state.gameXucXacReducers.numOfPlays,
    theBet: state.gameXucXacReducers.theBet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let randomXucXacItem = setInterval(() => {
        dispatch({
          type: "PLAY_GAME",
        });

        count++;

        if (count > 20) {
          clearInterval(randomXucXacItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 200);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
