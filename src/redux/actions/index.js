import { actionTypes } from "../utils/constants";

export const changeLang = payload => {
  return {
    payload,
    type: actionTypes.CHANGE_LANG
  };
};

export const setLang = lang => dispatch => {
  localStorage.lang = lang;
  dispatch(changeLang(lang));
};
