import * as ActionTypes from "./constant";
import api from "../../../../api/index";

export const actLoginCallApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        sessionStorage.setItem("USER", JSON.stringify(result.data));
        history.replace("/");
      })
      .catch((err) => {
        dispatch(actLoginFail(err?.response?.data));
      });
  };
};

export const actUserLogot = (history) => {
  sessionStorage.removeItem("USER");
  history.replace("/login");
  return {
    type: ActionTypes.USER_LOGOUT,
  };
};

const actLoginRequest = () => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFail = (err) => {
  return {
    type: ActionTypes.LOGIN_FAIL,
    payload: err,
  };
};
