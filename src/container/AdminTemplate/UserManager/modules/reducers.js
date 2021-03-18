import * as ActionTypes from "./constants";

// get All User
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
// add new user

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

const findUser = {
  loading: false,
  data: null,
  err: null,
};

const findUserReducer = (state = findUser, action) => {
  switch (action.type) {
    case ActionTypes.searchUserRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.searchUserSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.searchUserFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export { UserReducer, addNewUserReduce, findUserReducer };
