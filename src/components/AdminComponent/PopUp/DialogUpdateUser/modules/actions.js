import * as ActionTypes from "./constants";
import api from "../../../../../api/index";
import * as act from "../../../../../container/AdminTemplate/UserManager/modules/actions";

export const actChangeInfoUser = (user) => {
  return (dispatch) => {
    dispatch(UserRequest());
    api
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
      .then((result) => {
        dispatch(UserSuccess(result.data));
        dispatch(act.actGetAllUserCallApi());
      })
      .catch((err) => {
        dispatch(UserFail(err?.response?.data));
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
