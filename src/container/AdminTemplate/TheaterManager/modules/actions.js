import * as ActionTypes from "./constants";
import api from "../../../../api/index";

// LAY THONG TIN HE THONG RAP
export const actGetInfoTheater = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(actGetInfoTheaterRequest());
    api
      .get(`/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`)
      .then((rs) => {
        dispatch(actGetInfoTheaterSuccess(rs?.data[0]));
      })
      .catch((err) => {
        dispatch(actGetInfoTheaterFail(err?.response?.data));
      });
  };
};

const actGetInfoTheaterRequest = () => {
  return {
    type: ActionTypes.getInfoTheaterRequest,
  };
};

const actGetInfoTheaterSuccess = (data) => {
  return {
    type: ActionTypes.getInfoTheaterSuccess,
    payload: data,
  };
};

const actGetInfoTheaterFail = (err) => {
  return {
    type: ActionTypes.getInfoTheaterFail,
    payload: err,
  };
};

// LAY THONG TIN CUM RAP THEO HE THONG
export const actGetTheaterToSystem = (maHeThongRap) => {
  return (dispatch) => {
    dispatch(getTheaterToSystemRequest());
    api
      .get(
        `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
      )
      .then((rs) => {
        dispatch(getTheaterToSystemSuccess(rs.data));
      })
      .catch((err) => {
        dispatch(getTheaterToSystemFail(err?.response?.data));
      });
  };
};

const getTheaterToSystemRequest = () => {
  return {
    type: ActionTypes.getTheaterToSystemRequest,
  };
};

const getTheaterToSystemSuccess = (data) => {
  return {
    type: ActionTypes.getTheaterToSystemSuccess,
    payload: data,
  };
};

const getTheaterToSystemFail = (err) => {
  return {
    type: ActionTypes.getTheaterToSystemFail,
    payload: err,
  };
};
