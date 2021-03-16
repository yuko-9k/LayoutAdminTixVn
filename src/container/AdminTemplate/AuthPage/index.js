import React from "react";
import bgLogin from "../../../img/backGround/bgLogin.jpg";
import lgLogin from "../../../img/logo/group@2x.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { MiniLoading } from "../../../components/AdminComponent/MiniLoading";
import * as act from "./modules/actions";
import { connect } from "react-redux";

function LoginPage(props) {
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
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    props.userLogin(data, props.history);
  };
  const classes = useStyle();
  const { err, loading } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} classes={{ root: classes.root }}>
        <Typography component="div" style={{ height: "100vh" }} />
        <div className={classes.wrapperForm}>
          <img src={lgLogin} alt="logo Login" className={classes.logoTitle} />
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <MyTxt
              label="Tài Khoản"
              name="taiKhoan"
              ref={register({ required: true })}
            />
            {errors.taiKhoan && (
              <Alert severity="error">Vui lòng không để trống!</Alert>
            )}
            <MyTxt
              label="Mật khẩu"
              type="password"
              name="matKhau"
              ref={register({ required: true })}
            />
            {errors.matKhau && (
              <Alert severity="error">Vui lòng không để trống!</Alert>
            )}
            <Button variant="contained" color="primary" type="submit">
              Đăng nhập
              {loading ? <MiniLoading size="20px" /> : ""}
            </Button>
            {err ? <Alert severity="error">{err}</Alert> : ""}
          </FormControl>
        </div>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.AuthReducer.loading,
    err: state.AuthReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (user, history) => {
      dispatch(act.actLoginCallApi(user, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
