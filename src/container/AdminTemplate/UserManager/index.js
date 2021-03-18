import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles, MenuItem, Select } from "@material-ui/core";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import * as act from "./modules/actions";
import { connect } from "react-redux";
import UserTable from "../../../components/AdminComponent/Table/UserTable/userTable";
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
  formFindUser: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  inputNoSpace: {
    margin: 0,
    width: "50%",
  },
  Controller: {
    width: "150px",
  },
});

function UserManager(props) {
  const classes = useStyles();
  const [errAddUser, setErrAddUser] = useState("");
  const [successAddUser, setSuccessAddUser] = useState("");
  const [dataUser, setDataUser] = useState();
  const [searchUser, setSearchUSer] = useState({ search: "", result: "" });
  useEffect(() => {
    props.getAllUser();
  }, []);

  useEffect(() => {
    const { data, er, dat } = props;
    if (data) {
      setDataUser(data);
    }
    if (er) {
      setErrAddUser(er);
    }
    if (dat) {
      setSuccessAddUser(dat);
      setOpenPopUp(false);
    }
  }, [props.data, props.dat]);

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    let temp = { ...data, maNhom: "GP01" };
    props.addNewUser(temp);
  };
  const handleSearchUser = (data) => {
    props.findUser(data.tuKhoa, data.maNhom);
  };
  useEffect(() => {
    const { dataFindUser } = props;
    if (dataFindUser) {
      setDataUser(dataFindUser);
    }
  }, [props.dataFindUser]);

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
              <FormControl
                className={classes.formFindUser}
                onSubmit={handleSubmit(handleSearchUser)}
              >
                <MyTxt
                  label="Find User"
                  className={classes.inputNoSpace}
                  name="tuKhoa"
                  ref={register({ required: true })}
                />
                <Controller
                  as={
                    <Select variant="outlined" label="Mã nhóm" autoWidth={true}>
                      <MenuItem value="GP01">GP01</MenuItem>
                      <MenuItem value="GP02">GP02</MenuItem>
                      <MenuItem value="GP03">GP03</MenuItem>
                      <MenuItem value="GP04">GP04</MenuItem>
                    </Select>
                  }
                  name="maNhom"
                  control={control}
                  defaultValue="GP01"
                  className={classes.Controller}
                />
                <DefaultButton color="default" type="submit" autoFocus>
                  Submit
                </DefaultButton>
              </FormControl>

              <DefaultButton
                color="primary"
                onClick={() => {
                  setOpenPopUp(true);
                }}
              >
                ADD NEW USER
              </DefaultButton>
              {dataUser ? <UserTable>{dataUser}</UserTable> : ""}
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
                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </DialogActions>
              </FormControl>
            </DialogContent>
          </MyDialog>
          {successAddUser ? (
            <NotifiCation severity="success" message="Success" />
          ) : (
            ""
          )}
          {errAddUser ? (
            <NotifiCation severity="error" message={errAddUser} />
          ) : (
            ""
          )}
        </Container>
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { UserReducer, addNewUserReduce, findUserReducer } = state;
  return {
    loading: UserReducer.loading,
    data: UserReducer.data,
    dat: addNewUserReduce.data,
    er: addNewUserReduce.err,
    dataFindUser: findUserReducer.data,
    errFindUser: findUserReducer.err,
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
    findUser: (data, group) => {
      dispatch(act.actSearchUser(data, group));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
