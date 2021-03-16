import * as ActionTypes from "./constant";
import api from "../../../../api/index";

export const actLoginCallApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    api
      .post("/QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        dispatch(actLoginSuccess(result.data));
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          sessionStorage.setItem("userAdmin", JSON.stringify(result.data));
          sessionStorage.setItem(
            "accessToken",
            JSON.stringify(result.data.accessToken)
          );
          history.replace("/dashboard");
        } else {
          return Promise.reject({
            response: { data: "Bạn không có quyền truy cập" },
          });
        }
      })
      .catch((err) => {
        dispatch(actLoginFail(err.response.data));
      });
  };
};

export const actUserLogot = (history) => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("userAdmin");
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
