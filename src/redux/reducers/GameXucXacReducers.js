const stateDefault = {
  gameStore: [
    { code: 1, picture: "./img/GameXucXac/1.png" },
    { code: 2, picture: "./img/GameXucXac/2.png" },
    { code: 3, picture: "./img/GameXucXac/3.png" },
  ],
  theBet: "Tài",
  numOfWins: 0,
  numOfLoss: 0,
  numOfPlays: 0,
};

export const gameXucXacReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "BTN_BET_TAI": {
      state.theBet = action.value;
      return { ...state };
    }

    case "BTN_BET_XIU": {
      state.theBet = action.value;
      return { ...state };
    }

    case "PLAY_GAME": {
      let newGameStore = [];
      for (let i = 0; i < 3; i++) {
        let randomItemGame = Math.floor(Math.random() * 6) + 1;

        let arrRandom = {
          code: randomItemGame,
          picture: `./img/GameXucXac/${randomItemGame}.png`,
        };

        newGameStore.push(arrRandom);
      }

      state.gameStore = newGameStore;

      return { ...state };
    }

    case "END_GAME": {
      state.numOfPlays++;

      let totalScore = state.gameStore.reduce((total, item, index) => {
        return total + item.code;
      }, 0);

      if (
        (totalScore >= 11 && state.theBet === "Tài") ||
        (totalScore < 11 && state.theBet === "Xỉu")
      ) {
        state.numOfWins++;
      } else {
        state.numOfLoss++;
      }

      return { ...state };
    }

    default:
      return { ...state };
  }
};
