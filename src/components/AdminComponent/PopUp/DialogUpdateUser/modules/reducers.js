import * as ActionTypes from "./constants";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const ChangeUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_INFO_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.CHANGE_INFO_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.CHANGE_INFO_USER_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default ChangeUserReducer;
