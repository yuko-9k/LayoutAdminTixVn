import * as ActionTypes from "./constants";
import api from "../../../../../api/index";

export function actChangeInfoUser(valueForm) {
  return (dispatch) => {
    dispatch(actChangeInfoUserRequest());
    api
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", valueForm)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

const actChangeInfoUserRequest = () => {
  return {
    type: ActionTypes.changeInfoUserRequest,
  };
};

const actChangeInfoUserSuccess = (data) => {
  return {
    type: ActionTypes.changeInfoUserSuccess,
    payload: data,
  };
};

const actChangeInfoUserFail = (err) => {
  return {
    type: ActionTypes.changeInfoUserFail,
    payload: err,
  };
};
