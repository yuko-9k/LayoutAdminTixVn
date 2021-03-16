import * as ActionTypes from "./constants";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getAllUserRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.getAllUserSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.getAllUserFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

const newUserState = {
  loading: false,
  data: null,
  err: null,
};

const addNewUserReduce = (state = newUserState, action) => {
  switch (action.type) {
    case ActionTypes.addNewUserRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.addNewUserSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.addNewUserFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export { UserReducer, addNewUserReduce };
