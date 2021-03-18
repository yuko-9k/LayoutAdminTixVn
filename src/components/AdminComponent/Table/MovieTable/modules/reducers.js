import * as ActionTypes from "./constant";

const initialState = {
  loading: false,
  data: null,
  err: null,
};

const DeleteMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.deleteMovieRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.deleteMovieSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.deleteMovieFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

const init = {
  loading: false,
  data: null,
  err: null,
};

const ChangeInfoMovieReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.changeInfoMovieRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.changeInfoMovieSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.changeInfoMovieFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export { DeleteMovieReducer, ChangeInfoMovieReducer };
