import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { MyTxt } from "../../TextField";
import { useForm } from "react-hook-form";
import { FormControl } from "../../FormControl";
import Alert from "@material-ui/lab/Alert";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";
import { makeStyles, MenuItem } from "@material-ui/core";
import * as act from "./modules/actions";
import { connect } from "react-redux";
import { NotifiCation } from "../../SnackBar";

const useStyles = makeStyles({
  root: {
    overflowY: "unset",
  },
  select: {
    width: "100%",
  },
});

const DialogAddNewUser = (props) => {
  const classes = useStyles();
  const { user, openPopup, setOpenPopup } = props;
  const { register, handleSubmit, control, errors } = useForm();
  const { err, data } = props;
  const onSubmit = (data) => {
    let temp = { ...data, maNhom: "GP01" };
    props.ChangeInfoUser(temp);
  };
  return (
    <div>
      <Dialog
        open={openPopup}
        onClose={setOpenPopup}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <FormControl onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle id="form-dialog-title">Change Info User</DialogTitle>
          <DialogContent className={classes.root}>
            <DialogContentText>Update Information Of User</DialogContentText>
            <MyTxt
              defaultValue={user?.taiKhoan}
              name="taiKhoan"
              label="Tài khoản"
              ref={register({ required: true })}
            />
            {errors.taiKhoan && (
              <Alert severity="error">This field is required</Alert>
            )}
            <MyTxt
              defaultValue={user?.matKhau}
              name="matKhau"
              label="Mật khẩu"
              type="password"
              ref={register({ required: true })}
            />
            {errors.matKhau && (
              <Alert severity="error">This field is required</Alert>
            )}
            <MyTxt
              defaultValue={user?.hoTen}
              label="Họ tên"
              name="hoTen"
              ref={register({ required: true })}
            />
            {errors.hoTen && (
              <Alert severity="error">This field is required</Alert>
            )}
            <MyTxt
              defaultValue={user?.email}
              label="Email"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <Alert severity="error">This field is required</Alert>
            )}
            <MyTxt
              defaultValue={user?.soDt}
              name="soDt"
              label="Số điện thoại"
              ref={register({ required: true })}
            />
            {errors.soDt && (
              <Alert severity="error">This field is required</Alert>
            )}
            <InputLabel>Mã loại người dùng</InputLabel>
            <Controller
              as={
                <Select
                  variant="outlined"
                  label="Mã loại người dùng"
                  autoWidth={true}
                >
                  <MenuItem value="KhachHang">Khách hàng</MenuItem>
                  <MenuItem value="QuanTri">Quản trị</MenuItem>
                </Select>
              }
              name="maLoaiNguoiDung"
              control={control}
              defaultValue={user?.maLoaiNguoiDung}
              className={classes.select}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenPopup(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpenPopup(false);
              }}
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </DialogActions>
        </FormControl>
      </Dialog>
      {data ? (
        <NotifiCation
          message={"Thay đổi thông tin thành công"}
          severity="success"
        />
      ) : (
        ""
      )}
      {err ? (
        <NotifiCation message={"Something is wrong!!!"} severity="error" />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.ChangeUserReducer.data,
    loading: state.ChangeUserReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeInfoUser: (user) => {
      dispatch(act.actChangeInfoUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogAddNewUser);
