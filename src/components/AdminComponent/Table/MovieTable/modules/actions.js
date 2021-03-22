import * as ActionTypes from "./constant";
import api from "../../../../../api/index";
import * as act from "../../../../../container/AdminTemplate/MovieManager/modules/actions";

export const actDeleteMovie = (maPhim) => {
  return (dispatch) => {
    dispatch(actDeleteMovieRequest());
    api
      .delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
      .then((result) => {
        dispatch(actDeleteMovieSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDeleteMovieFail(err.response.data));
      });
  };
};

const actDeleteMovieRequest = () => {
  return {
    type: ActionTypes.deleteMovieRequest,
  };
};

const actDeleteMovieSuccess = (data) => {
  return {
    type: ActionTypes.deleteMovieSuccess,
    payload: data,
  };
};

const actDeleteMovieFail = (err) => {
  return {
    type: ActionTypes.deleteMovieFail,
    payload: err,
  };
};

// CHANGE INFO MOVIE

export const actChangeInfoMovie = (fomData) => {
  return (dispatch) => {
    dispatch(actChangeInfoMovieRequest());
    api
      .post("/QuanLyPhim/CapNhatPhimUpload", fomData)
      .then((result) => {
        dispatch(actChangeInfoMovieSuccess(result.data));
        dispatch(act.actGetListMovieCallApi());
      })
      .catch((err) => {
        dispatch(actChangeInfoMoviefail(err.response.data));
      });
  };
};

const actChangeInfoMovieRequest = () => {
  return {
    type: ActionTypes.changeInfoMovieRequest,
  };
};

const actChangeInfoMovieSuccess = (data) => {
  return {
    type: ActionTypes.changeInfoMovieSuccess,
    payload: data,
  };
};

const actChangeInfoMoviefail = (err) => {
  return {
    type: ActionTypes.changeInfoMovieFail,
    payload: err,
  };
};
