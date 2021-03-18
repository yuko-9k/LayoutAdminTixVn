import * as ActionTypes from "./constants";
import api from "../../../../api/index";

export const RegisterUserCallapi = (data) => {
  return (dispatch) => {
    dispatch(RegisterUserRequest());
    api
      .post("/QuanLyNguoiDung/DangKy", data)
      .then((result) => {
        dispatch(RegisterUserSuccess(result?.data));
      })
      .catch((err) => {
        dispatch(RegisterUserFail(err?.response?.data));
      });
  };
};

const RegisterUserRequest = () => {
  return {
    type: ActionTypes.registerUserRequest,
  };
};

const RegisterUserSuccess = (data) => {
  return {
    type: ActionTypes.registerUserSuccess,
    payload: data,
  };
};

const RegisterUserFail = (err) => {
  return {
    type: ActionTypes.registerUserFail,
    payload: err,
  };
};
