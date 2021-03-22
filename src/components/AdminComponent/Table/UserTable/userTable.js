import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { DefaultButton } from "../../Button/defaultButton";
import DialogAddNewUser from "../../PopUp/DialogUpdateUser/Dialog";
import { AlertDialog } from "../../PopUp/DefaultDialog/AlertDialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { NotifiCation } from "../../SnackBar/index";
import * as act from "./modules/actions";
import { connect } from "react-redux";

const UserTable = ({ children, ...props }) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
    actions: {
      display: "flex",
      justifyContent: "space-around",
    },
  });
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const columns = [
    { id: "taiKhoan", label: "Tài khoản", minWidth: 170 },
    { id: "hoTen", label: "Họ tên", minWidth: 100 },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
    },
    {
      id: "soDt",
      label: "Số Điện thoại",
      minWidth: 170,
    },
    {
      id: "actions",
      label: "Actions",
      minWidth: 170,
    },
  ];
  const rows = children;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteUser = (userDelete) => {
    if (userDelete) {
      props.deleteUser(userDelete);
    }
  };

  const [openPopup, setOpenPopup] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [user, setUser] = useState();
  const [userDelete, setuserDelete] = useState("");
  const [dataSuccess, setDataSuccess] = useState("");
  const [dataFail, setDataFail] = useState("");
  useEffect(() => {
    const { data, err } = props;
    if (data) {
      setDataSuccess(data);
      setOpenWarning(false);
    }
		if (err) {
			console.log(err);
      setDataFail(err);
    }
  }, [props.data, props.err]);
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell>{row.taiKhoan}</TableCell>
                    <TableCell>{row.hoTen}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.soDt}</TableCell>
                    <TableCell className={classes.actions}>
                      <DefaultButton
                        onClick={() => {
                          setOpenPopup(true);
                          setUser(row);
                        }}
                      >
                        Change
                      </DefaultButton>
                      <DefaultButton
                        color="secondary"
                        onClick={() => {
                          setuserDelete(row.taiKhoan);
                          setOpenWarning(true);
                        }}
                      >
                        Delete
                      </DefaultButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <DialogAddNewUser
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        user={user}
      ></DialogAddNewUser>
      <AlertDialog
        setOpenWarning={setOpenWarning}
        openWarning={openWarning}
        userDelete={userDelete}
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This account will be permanently deleted
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenWarning(false);
            }}
            color="primary"
          >
            Disagree
          </Button>
          <Button
            onClick={() => {
              handleDeleteUser(userDelete);
            }}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </AlertDialog>
      {dataFail ? <NotifiCation severity="error" message={dataFail} /> : ""}
      {dataSuccess ? (
        <NotifiCation severity="success" message={dataSuccess} />
      ) : (
        ""
      )}
    </Paper>
  );
};

const mapStateToProps = (state) => {
  const { DeleteUserReducer, UserReducer } = state;
  return {
    data: DeleteUserReducer.data,
    err: DeleteUserReducer.err,
    allUser: UserReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => {
      dispatch(act.actDeleteUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
