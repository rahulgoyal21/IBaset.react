import { LOGIN_USER } from "../constants";
const initialState = {};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return { ...state, payload };
    default:
      return state;
  }
};

export default loginReducer;
