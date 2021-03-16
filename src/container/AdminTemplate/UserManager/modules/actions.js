import * as ActionTypes from "./constants";
import api from "../../../../api/index";

export const actGetAllUserCallApi = () => {
  return (dispatch) => {
    dispatch(actGetUserRequest());
    api
      .get("/QuanLyNguoiDung/LayDanhSachNguoiDung")
      .then((result) => {
        dispatch(actGetUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actGetUserFail(err));
      });
  };
};

const actGetUserRequest = () => {
  return {
    type: ActionTypes.getAllUserRequest,
  };
};

const actGetUserSuccess = (data) => {
  return {
    type: ActionTypes.getAllUserSuccess,
    payload: data,
  };
};

const actGetUserFail = (err) => {
  return {
    type: ActionTypes.getAllUserFail,
    payload: err,
  };
};

export const actAddNewUser = (data) => {
  return (dispatch) => {
    dispatch(actAddNewUserRequest());
    api
      .post("/QuanLyNguoiDung/ThemNguoiDung", data)
      .then((result) => {
        dispatch(actAddNewUserSucess(result.data));
      })
      .catch((err) => {
        dispatch(actAddNewUserFail(err?.response?.data));
      });
  };
};

const actAddNewUserRequest = () => {
  return {
    type: ActionTypes.addNewUserRequest,
  };
};

const actAddNewUserSucess = (data) => {
  return {
    type: ActionTypes.addNewUserSuccess,
    payload: data,
  };
};

const actAddNewUserFail = (err) => {
  return {
    type: ActionTypes.addNewUserFail,
    payload: err,
  };
};
