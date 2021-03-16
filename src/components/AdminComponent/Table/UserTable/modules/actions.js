import * as ActionTypes from "./constant";
import api from "../../../../../api";

export const actDeleteUser = (user) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());
    api
      .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDeleteUserFail(err.response.data));
      });
  };
};

const actDeleteUserRequest = () => {
  return {
    type: ActionTypes.DELETE_USER_REQUEST,
  };
};
const actDeleteUserSuccess = (data) => {
  return {
    type: ActionTypes.DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFail = (err) => {
  return {
    type: ActionTypes.DELETE_USER_FAIL,
    payload: err,
  };
};
