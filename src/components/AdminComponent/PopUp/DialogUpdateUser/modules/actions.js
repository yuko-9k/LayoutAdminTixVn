import * as ActionTypes from "./constants";
import api from "../../../../../api/index";

export const actChangeInfoUser = (user) => {
  return (dispatch) => {
    dispatch(UserRequest());
    api
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      .then((result) => {
        dispatch(UserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(UserFail(err));
      });
  };
};

const UserRequest = () => {
  return {
    type: ActionTypes.CHANGE_INFO_USER_REQUEST,
  };
};

const UserSuccess = (data) => {
  return {
    type: ActionTypes.CHANGE_INFO_USER_SUCCESS,
    payload: data,
  };
};

const UserFail = (err) => {
  return {
    type: ActionTypes.CHANGE_INFO_USER_FAIL,
    payload: err,
  };
};
