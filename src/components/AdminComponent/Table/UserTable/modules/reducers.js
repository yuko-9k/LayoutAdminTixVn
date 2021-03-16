import * as ActionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const DeleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.DELETE_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.DELETE_USER_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default DeleteUserReducer;
