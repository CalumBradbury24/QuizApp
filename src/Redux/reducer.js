import DataActionTypes from "./types";

const INITIAL_STATE = {
  //default state
  score : 0
};

const dataReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case DataActionTypes.SET_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    default:
      return state;
  }
};

export default dataReducer;
