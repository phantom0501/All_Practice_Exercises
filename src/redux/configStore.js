import { applyMiddleware, combineReducers, createStore } from "redux";
import { layoutExerciseReducers } from "./reducers/LayoutExerciseReducers";
import { gameOanTuXiReducers } from "./reducers/GameOanTuXiReducers";
import { gameXucXacReducers } from "./reducers/GameXucXacReducers";
import { burgerReducer } from "./reducers/BurgerReducer";
import { movieReducers } from "./reducers/MovieReducers";
import reduxThunk from "redux-thunk";

const rootReducers = combineReducers({
  layoutExerciseReducers,
  gameOanTuXiReducers,
  gameXucXacReducers,
  burgerReducer,
  movieReducers,
});

export const store = createStore(rootReducers, applyMiddleware(reduxThunk));
