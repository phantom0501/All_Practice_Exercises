const stateDefault = {
  gameStore: [
    { code: "keo", picture: "./img/GameOanTuXi/keo.png", bet: true },
    { code: "bua", picture: "./img/GameOanTuXi/bua.png", bet: false },
    { code: "bao", picture: "./img/GameOanTuXi/bao.png", bet: false },
  ],
  showMessage: "victory!!!",
  computers: {
    code: "bao",
    picture: "./img/GameOanTuXi/bao.png",
    bet: false,
  },
  numOfWins: 0,
  numOfPlays: 0,
};

export const gameOanTuXiReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "BET_ACTION": {
      let gameStoreUpdate = [...state.gameStore];
      gameStoreUpdate = gameStoreUpdate.map((item, index) => {
        if (item.code === action.item.code) {
          return { ...item, bet: true };
        }
        return { ...item, bet: false };
      });

      state.gameStore = gameStoreUpdate;

      return { ...state };
    }

    case "RAN_DOM": {
      let randomGameStore = Math.floor(Math.random() * state.gameStore.length);
      state.computers = state.gameStore[randomGameStore];

      return { ...state };
    }

    case "END_GAME": {
      state.numOfPlays++;

      let players = state.gameStore.find((item) => item.bet === true);
      let computers = state.computers;

      switch (players.code) {
        case "keo": {
          if (computers.code === "keo") {
            state.showMessage = "hòa rồi nhé!!!";
          } else if (computers.code === "bua") {
            state.showMessage = "thua sml!!!";
          } else {
            state.showMessage = "victory!!!";
            state.numOfWins++;
          }
          return { ...state };
        }

        case "bua": {
          if (computers.code === "keo") {
            state.showMessage = "victory!!!";
            state.numOfWins++;
          } else if (computers.code === "bua") {
            state.showMessage = "hòa rồi nhé!!!";
          } else {
            state.showMessage = "thua sml!!!";
          }

          return { ...state };
        }

        case "bao": {
          if (computers.code === "keo") {
            state.showMessage = "thua sml!!!";
          } else if (computers.code === "bua") {
            state.showMessage = "victory!!!";
            state.numOfWins++;
          } else {
            state.showMessage = "hòa rồi nhé!!!";
          }

          return { ...state };
        }
        default:
          state.showMessage = "victory!!!";
          break;
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};
