const stateDefault = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: { salad: 4, cheese: 8, beef: 30 },
  total: 42,
};

export const burgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ADD_BREADMID": {
      let { name, amount } = action;
      let burgerUpdate = { ...state.burger };
      if (amount === -1 && state.burger[name] < 1) {
        return { ...state };
      }
      if (amount === 1 && state.burger[name] === 5) {
        return { ...state };
      }

      burgerUpdate[name] += amount;
      // burger.salad = 1
      // burger.cheese = 1
      // burger.beef = 1
      state.burger = burgerUpdate;

      // Total money
      state.total += amount * state.menu[name];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
