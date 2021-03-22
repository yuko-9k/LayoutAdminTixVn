import * as ActionTypes from "./constant";
import api from "../../../../../api";
import * as act from "../../../../../container/AdminTemplate/UserManager/modules/actions";

export const actDeleteUser = (user) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());
    api
      .delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(result.data));
        dispatch(act.actGetAllUserCallApi());
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
