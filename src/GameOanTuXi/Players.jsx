import React, { Component } from "react";
import { connect } from "react-redux";

class Players extends Component {
  renderGameStore = () => {
    return this.props.gameStore.map((item, index) => {
      let border = {};
      if (item.bet === true) {
        border = { border: "5px solid #45d994" };
      }
      return (
        <button
          key={index}
          style={border}
          className="btn"
          onClick={() => this.props.theBetAction(item)}
        >
          <img src={item.picture} alt={item.picture} />
        </button>
      );
    });
  };
  render() {
    return (
      <div className="players__content">
        <div className="theThink">
          <img
            src={
              this.props.gameStore.find((sGame) => sGame.bet === true).picture
            }
            alt=""
            className="theThink_img"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/GameOanTuXi/player.png"
          alt=""
          className="players__content-img"
        />

        <div className="player__content-list">{this.renderGameStore()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameStore: state.gameOanTuXiReducers.gameStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    theBetAction: (item) => {
      dispatch({
        type: "BET_ACTION",
        item,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
