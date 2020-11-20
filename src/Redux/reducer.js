import DataActionTypes from "./types";

const INITIAL_STATE = {
  //default state
  score : 0,
  scoreShown: true
};

const dataReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case DataActionTypes.SET_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
      case DataActionTypes.SCORE_VIS:
      return {
        ...state,
        scoreShown: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
