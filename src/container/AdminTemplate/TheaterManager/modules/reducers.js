import * as ActionTypes from "./constants";

const infoTheaterState = {
  loading: false,
  data: null,
  err: null,
};

const infoTheaterReducer = (state = infoTheaterState, action) => {
  switch (action.type) {
    case ActionTypes.getInfoTheaterRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionTypes.getInfoTheaterSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionTypes.getInfoTheaterFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

// LAY THONG TIN CUM RAP THEO HE THONG
const theaterToSystemState = {
  loading: false,
  data: null,
  err: null,
};

const theaterToSystemReducer = (state = theaterToSystemState, action) => {
  switch (action.type) {
    case ActionTypes.getTheaterToSystemRequest:
      state.loading = true;
      state.data = null;
      state.err = null;
			return { ...state };
		
    case ActionTypes.getTheaterToSystemSuccess:
      state.loading = false;
      state.data = action.payload;
      state.err = null;
      return { ...state };

    case ActionTypes.getTheaterToSystemFail:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };

    default:
      return {...state};
  }
};

export { infoTheaterReducer, theaterToSystemReducer };
