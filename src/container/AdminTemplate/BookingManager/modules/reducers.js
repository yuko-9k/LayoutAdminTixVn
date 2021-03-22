import * as ActionTypes from "./constant";

// GET LIST CINEMA
const initialState = {
  loading: false,
  data: null,
  err: null,
};

const GetListCinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.getAllCinemaRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.getAllCinemaSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.getAllCinemaFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

// Get Movie Of cinema
const stateMovie = {
  loading: false,
  data: null,
  err: null,
};

const getMovieOfCinemaReducer = (state = stateMovie, action) => {
  switch (action.type) {
    case ActionTypes.getShowtimesRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.getShowtimesSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.getShowtimesFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

// LAY DANH SACH PHONG VE
const stateCinema = {
  loading: false,
  data: null,
  err: null,
};

const layDanhSachPhongVeReducer = (state = stateCinema, action) => {
  switch (action.type) {
    case ActionTypes.getCinemaRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };

    case ActionTypes.getCinemaSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.getCinemaFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

// TAO LICH CHIEU

const createShowTimes = {
  loading: false,
  data: null,
  err: null,
};

const createShowTimesReducer = (state = createShowTimes, action) => {
  switch (action.type) {
    case ActionTypes.createShowTimesRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.createShowTimesSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.createShowTimesFail:
      state.loading = true;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export {
  GetListCinemaReducer,
  getMovieOfCinemaReducer,
  layDanhSachPhongVeReducer,
  createShowTimesReducer,
};
