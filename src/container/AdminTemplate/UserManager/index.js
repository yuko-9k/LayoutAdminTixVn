import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, MenuItem, Select } from "@material-ui/core";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import * as act from "./modules/actions";
import { connect } from "react-redux";
import UserTable from "../../../components/AdminComponent/Table/UserTable/userTable";
import { LinearCustom } from "../../../components/AdminComponent/Progress/Linear";
import { DefaultButton } from "../../../components/AdminComponent/Button/defaultButton";
import { MyDialog } from "../../../components/AdminComponent/PopUp/DefaultDialog/CustomDialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { Controller, useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { NotifiCation } from "../../../components/AdminComponent/SnackBar";

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  content: {
    padding: "20px 0",
  },
  select: {
    width: "100%",
  },
});

function UserManager(props) {
  const classes = useStyles();
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    props.getAllUser();
  }, []);

  const { data, loading, dat, er } = props;
  if (searchUser) {
    const temp = data.filter((item) => {
      return item.taiKhoan == searchUser;
    });
    console.log(temp);
  }

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    let temp = { ...data, maNhom: "GP01" };
    props.addNewUser(temp);
  };

  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth={false} className={classes.root}>
          <Typography
            component="div"
            style={{ backgroundColor: "#2D2D2D", height: "100%" }}
            className={classes.content}
          >
            <Container maxWidth="lg">
              <MyTxt
                label="Tìm kiếm"
                onChange={(e) => {
                  setSearchUser(e.target.value);
                }}
              />
              <DefaultButton
                color="primary"
                onClick={() => {
                  setOpenPopUp(true);
                }}
              >
                Thêm người dùng
              </DefaultButton>
              {loading ? <LinearCustom /> : ""}
              {data ? <UserTable>{data}</UserTable> : ""}
            </Container>
          </Typography>
          <MyDialog openPopUp={openPopUp} setOpenPopUp={setOpenPopUp}>
            <DialogTitle id="form-dialog-title">Add New User</DialogTitle>
            <DialogContent>
              <FormControl onSubmit={handleSubmit(onSubmit)}>
                <MyTxt
                  name="taiKhoan"
                  label="Tài khoản"
                  ref={register({ required: true })}
                />
                {errors.taiKhoan && (
                  <Alert severity="error">This field is required!</Alert>
                )}
                <MyTxt
                  label="Mật khẩu"
                  name="matKhau"
                  type="password"
                  ref={register({ required: true })}
                />
                {errors.matKhau && (
                  <Alert severity="error">This field is required!</Alert>
                )}

                <MyTxt
                  label="Email"
                  name="email"
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <Alert severity="error">This field is required!</Alert>
                )}

                <MyTxt
                  label="Số điện thoại"
                  name="soDt"
                  ref={register({ required: true })}
                />
                {errors.soDt && (
                  <Alert severity="error">This field is required!</Alert>
                )}

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
                  defaultValue="KhachHang"
                  className={classes.select}
                />

                <MyTxt
                  label="Họ tên"
                  name="hoTen"
                  ref={register({ required: true })}
                />
                {errors.hoTen && (
                  <Alert severity="error">This field is required!</Alert>
                )}

                <DialogActions>
                  <Button
                    color="primary"
                    onClick={() => {
                      setOpenPopUp(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    onClick={() => {
                      setOpenPopUp(false);
                    }}
                  >
                    Submit
                  </Button>
                </DialogActions>
              </FormControl>
              {dat ? <NotifiCation severity="success" message="Success" /> : ""}
              {er ? <NotifiCation severity="error" message={er} /> : ""}
            </DialogContent>
          </MyDialog>
        </Container>
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { UserReducer, addNewUserReduce } = state;
  return {
    loading: state.UserReducer.loading,
    data: state.UserReducer.data,
    dat: state.addNewUserReduce.data,
    er: state.addNewUserReduce.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUser: () => {
      dispatch(act.actGetAllUserCallApi());
    },
    addNewUser: (data) => {
      dispatch(act.actAddNewUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
