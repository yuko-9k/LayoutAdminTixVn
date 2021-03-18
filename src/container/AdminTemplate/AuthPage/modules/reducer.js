import * as ActionTypes from "./constant";

const inittialState = {
  loading: false,
  data: null,
  err: null,
};

const AuthReducer = (state = inittialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.LOGIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.LOGIN_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    case ActionTypes.USER_LOGOUT:
      state.loading = false;
      state.data = null;
      state.err = null;
      return { ...state };
    default:
      state.data = JSON.parse(sessionStorage.getItem("USER"));
      return { ...state };
  }
};

export default AuthReducer;
