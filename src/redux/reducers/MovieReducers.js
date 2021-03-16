const stateDefault = {
  movieStore: [],
  isLoading: false,
};

export const movieReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST": {
      state.movieStore = [...action.movieStore];
      return { ...state };
    }

    case "OPEN_LOADING": {
      state.isLoading = true;
      return { ...state };
    }

    case "CLOSE_LOADING": {
      state.isLoading = false;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
