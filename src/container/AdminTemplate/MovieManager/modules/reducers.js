import * as ActionTypes from "./constant";

let initialState = {
  loading: false,
  data: null,
  err: null,
};

const getListMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getListMovieRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.getListMovieSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.getListMovieFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

// get Movie By Date
let init = {
  loading: false,
  data: null,
  err: null,
};

const getListMovieByDateReducer = (state = init, action) => {
  switch (action.type) {
    case ActionTypes.getListMovieByDateRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.getListMovieByDateSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.getListMovieByDateFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

// add New Movie
let ini = {
  loading: false,
  data: null,
  err: null,
};

const addNewMovieReducer = (state = ini, action) => {
  switch (action.type) {
    case ActionTypes.addNewMovieRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.addNewMovieSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.addNewMovieFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export { getListMovieReducer, getListMovieByDateReducer, addNewMovieReducer };
