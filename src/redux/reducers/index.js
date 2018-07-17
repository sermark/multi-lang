import { combineReducers } from "redux";

import { actionTypes } from "../utils/constants";

const language = (state = "en", action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LANG:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  language
});

export default rootReducer;
