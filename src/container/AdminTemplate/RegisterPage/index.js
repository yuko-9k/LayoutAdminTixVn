import React, { useEffect, useState } from "react";
import bgLogin from "../../../img/backGround/bgLogin.jpg";
import lgLogin from "../../../img/logo/group@2x.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { MiniLoading } from "../../../components/AdminComponent/MiniLoading";
import { connect } from "react-redux";
import { DefaultButton } from "../../../components/AdminComponent/Button/defaultButton";
import * as act from "./modules/actions";
import { NavLink } from "react-router-dom";

function RegisterPage(props) {
  const useStyle = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${bgLogin})`,
      backgroundSize: "cover",
    },
    wrapperForm: {
      maxWidth: "360px",
      padding: "40px 32px 30px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      backgroundImage:
        "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
      boxShadow: "0 0 10px 0 rgb(0 0 0 / 45%)",
      textAlign: "center",
      color: "#fff",
      borderRadius: "6px",
    },
    logoTitle: {
      width: "209px",
      marginBottom: "50px",
      cursor: "pointer",
    },
  }));
  const classes = useStyle();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    let temp = { ...data, maLoaiNguoiDung: "KhachHang", maNhom: "GP04" };
    props.RegisterUser(temp);
  };
  const [userRegister, setUserRegister] = useState({
    loading: false,
    data: null,
    err: null,
  });
  useEffect(() => {
    const { loading, data, err } = props;
    setUserRegister({ ...userRegister, loading, data, err });
  }, [props.loading, props.data, props.err]);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} classes={{ root: classes.root }}>
        <Typography component="div" style={{ height: "100vh" }} />
        <div className={classes.wrapperForm}>
          <img src={lgLogin} alt="logo Login" className={classes.logoTitle} />
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <MyTxt
              name="taiKhoan"
              label="Tài khoản"
              ref={register({ required: true })}
            />
            {errors.taiKhoan && <Alert>This field is required</Alert>}
            <MyTxt
              name="matKhau"
              label="Mật khẩu"
              type="password"
              ref={register({ required: true })}
            />
            {errors.matKhau && <Alert>This field is required</Alert>}
            <MyTxt
              name="email"
              label="Email"
              ref={register({ required: true })}
            />
            {errors.email && <Alert>This field is required</Alert>}
            <MyTxt
              name="soDt"
              label="Số điện thoại"
              ref={register({ required: true })}
            />
            {errors.soDt && <Alert>This field is required</Alert>}
            <MyTxt
              name="hoTen"
              label="Họ tên"
              ref={register({ required: true })}
            />
            {errors.hoTen && <Alert>This field is required</Alert>}
            <DefaultButton fullWidth color="default" type="submit">
              Register
              {userRegister.loading ? <MiniLoading /> : ""}
            </DefaultButton>
            <DefaultButton fullWidth>
              <NavLink to="/login">Login</NavLink>
            </DefaultButton>
          </FormControl>
        </div>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.RegisterUserReducer.loading,
    data: state.RegisterUserReducer.data,
    err: state.RegisterUserReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RegisterUser: (data) => {
      dispatch(act.RegisterUserCallapi(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
