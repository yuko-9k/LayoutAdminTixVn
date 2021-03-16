import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { MyTxt } from "../../TextField";
import { DefaultButton } from "../../Button/defaultButton";
import { useForm } from "react-hook-form";
import { FormControl } from "../../FormControl";
import Alert from "@material-ui/lab/Alert";
import * as act from "./modules/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  textCenter: {
    textAlign: "center",
  },
}));
function PopOver(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const user = JSON.parse(sessionStorage.getItem("userAdmin"));

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    props.changeInfoUser(data);
  };
  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Change Info
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <FormControl
          className={classes.typography}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography variant="h4" className={classes.textCenter}>
            Change Info
          </Typography>
          <MyTxt
            label="Tài khoản"
            name="taiKhoan"
            defaultValue={user.taiKhoan}
            ref={register({ required: true })}
          />
          {errors.taiKhoan && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}
          <MyTxt
            label="Mật khẩu"
            name="matKhau"
            type="password"
            ref={register({ required: true })}
          />
          {errors.matKhau && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}
          <MyTxt
            label="Email"
            name="email"
            defaultValue={user.email}
            ref={register({ required: true })}
          />
          {errors.email && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}
          <MyTxt
            label="Số điện thoại"
            name="soDt"
            defaultValue={user.soDt}
            ref={register({ required: true })}
          />
          {errors.soDt && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}
          <MyTxt
            label="Mã nhóm"
            name="maNhom"
            defaultValue={user.maNhom}
            ref={register({ required: true })}
          />
          {errors.maNhom && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}
          <MyTxt
            label="Mã loại"
            name="maLoaiNguoiDung"
            defaultValue={user.maLoaiNguoiDung}
            ref={register({ required: true })}
          />
          {errors.maLoaiNguoiDung && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}
          <MyTxt
            label="Họ tên"
            name="hoTen"
            defaultValue={user.hoTen}
            ref={register({ required: true })}
          />
          {errors.hoTen && (
            <Alert severity="error">Vui lòng không để trống</Alert>
          )}

          <DefaultButton type="submit">Submit</DefaultButton>
        </FormControl>
      </Popover>
    </div>
  );
}

const mapDisPatchToProps = (dispatch) => {
  return {
    changeInfoUser: (valueForm) => {
      dispatch(act.actChangeInfoUser(valueForm));
    },
  };
};

export default connect(null, mapDisPatchToProps)(PopOver);
