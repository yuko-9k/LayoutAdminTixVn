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
import GradeIcon from "@material-ui/icons/Grade";
import { DefaultButton } from "../../Button/defaultButton";
import { CustomPopOver } from "../../PopOver/CustomPopOver";
import * as act from "./modules/actions";
import { connect } from "react-redux";
import { AlertDialog } from "../../PopUp/DefaultDialog/AlertDialog";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
} from "@material-ui/core";
import { NotifiCation } from "../../SnackBar";
import { UpdateMovieDialog } from "../../PopUp/DialogUpdateMovie";
import { FormControl } from "../../FormControl";
import { MyTxt } from "../../TextField";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Alert } from "@material-ui/lab";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 450,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  inputs: {
    width: "100%",
  },
}));

function MovieTable({ children, ...props }) {
  const columns = [
    { id: "maPhim", label: "Mã phim", minWidth: 170 },
    { id: "tenPhim", label: "Tên phim", minWidth: 100 },
    {
      id: "biDanh",
      label: "Bí danh",
      minWidth: 170,
    },
    {
      id: "trailer",
      label: "Trailer",
      minWidth: 170,
    },
    {
      id: "hinhAnh",
      label: "Hình ảnh",
      minWidth: 170,
    },
    {
      id: "moTa",
      label: "Mô tả",
      minWidth: 170,
    },
    {
      id: "maNhom",
      label: "Mã nhóm",
      minWidth: 170,
    },
    {
      id: "ngayKhoiChieu",
      label: "Ngày khởi chiếu",
      minWidth: 170,
    },
    {
      id: "danhGia",
      label: "đánh giá",
      minWidth: 170,
    },
    {
      id: "Actions",
      label: "Actions",
      minWidth: 170,
    },
  ];
  const rows = children;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openPopOver, setOpenPopOver] = useState(false);
  const [openWarning, setOpenWarning] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
  const [movieUpdate, setMovieUpdate] = useState();

  const handleClose = () => {
    setOpenPopOver(false);
  };

  const values = {
    someDate: new Date().toISOString().substring(0, 10),
  };

  const handleDeleteMovie = (maPhim) => {
    props.DeleteMovie(maPhim);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { register, handleSubmit, errors, control } = useForm();
  const onSubmit = (data) => {
    data.maPhim = Number(data.maPhim);
    data.hinhAnh = data.hinhAnh[0];
    data.ngayKhoiChieu = moment(data.ngayKhoiChieu).format("DD-MM-YYYY");
    let temp = new FormData();
    for (let key in data) {
      temp.append(key, data[key]);
    }
    props.ChangeInfoMovie(temp);
  };

  const { dataDeleteMovie, errDeleteMovie, errChangeMovie, movie } = props;
  useEffect(() => {
    if (movie) {
      console.log(movie);
      setOpenUpdateDialog(false);
    }
  }, [movie]);
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
                    <TableCell>{row.maPhim}</TableCell>
                    <TableCell>{row.tenPhim}</TableCell>
                    <TableCell>{row.biDanh}</TableCell>
                    <TableCell>
                      <DefaultButton
                        onClick={() => {
                          setOpenPopOver(true);
                        }}
                      >
                        Play trailer
                      </DefaultButton>
                      <CustomPopOver
                        openPopOver={openPopOver}
                        setOpenPopOver={handleClose}
                        src={row.trailer}
                      />
                    </TableCell>
                    <TableCell>
                      <img
                        src={row.hinhAnh}
                        alt="hinh anh"
                        style={{
                          width: "100px",
                          borderRadius: "5px",
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.moTa}</TableCell>
                    <TableCell>{row.maNhom}</TableCell>
                    <TableCell>{row.ngayKhoiChieu}</TableCell>
                    <TableCell>
                      {row.danhGia}
                      <GradeIcon />
                    </TableCell>
                    <TableCell>
                      <DefaultButton
                        onClick={() => {
                          setOpenUpdateDialog(true);
                          setMovieUpdate(row);
                        }}
                      >
                        Update
                      </DefaultButton>
                      {errChangeMovie ? (
                        <NotifiCation
                          severity="error"
                          message={errChangeMovie}
                        />
                      ) : (
                        ""
                      )}
                      <DefaultButton
                        onClick={() => {
                          setOpenWarning(true);
                        }}
                      >
                        Delete
                      </DefaultButton>
                      <AlertDialog
                        openWarning={openWarning}
                        setOpenWarning={setOpenWarning}
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Sure?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this movie?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <DefaultButton
                            color="primary"
                            onClick={() => {
                              setOpenWarning(false);
                            }}
                          >
                            Disagree
                          </DefaultButton>
                          <DefaultButton
                            color="primary"
                            autoFocus
                            onClick={() => {
                              setOpenWarning(false);
                              handleDeleteMovie(row.maPhim);
                            }}
                          >
                            Agree
                          </DefaultButton>
                        </DialogActions>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <UpdateMovieDialog
          openUpdateDialog={openUpdateDialog}
          setOpenUpdateDialog={setOpenUpdateDialog}
        >
          <DialogTitle id="form-dialog-title">Update Movie</DialogTitle>
          <DialogContent>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
              <MyTxt
                name="maPhim"
                label="Mã phim"
                defaultValue={movieUpdate?.maPhim}
                ref={register({ required: true })}
              />
              {errors.maPhim && (
                <Alert severity="error">This field is required</Alert>
              )}
              <MyTxt
                name="tenPhim"
                label="Tên phim"
                defaultValue={movieUpdate?.tenPhim}
                ref={register({ required: true })}
              />
              {errors.tenPhim && (
                <Alert severity="error">This field is required</Alert>
              )}
              <MyTxt
                name="biDanh"
                label="Bí danh"
                defaultValue={movieUpdate?.biDanh}
                ref={register({ required: true })}
              />
              {errors.biDanh && (
                <Alert severity="error">This field is required</Alert>
              )}
              <MyTxt
                name="trailer"
                label="Trailer"
                defaultValue={movieUpdate?.trailer}
                ref={register({ required: true })}
              />
              {errors.trailer && (
                <Alert severity="error">This field is required</Alert>
              )}
              <MyTxt
                type="file"
                name="hinhAnh"
                filename={movieUpdate?.hinhAnh}
                ref={register({ required: true })}
              />
              {errors.hinhAnh && (
                <Alert severity="error">This field is required</Alert>
              )}
              <MyTxt
                name="moTa"
                label="Mô tả"
                defaultValue={movieUpdate?.moTa}
                ref={register({ required: true })}
              />
              {errors.moTa && (
                <Alert severity="error">This field is required</Alert>
              )}
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
                defaultValue={movieUpdate?.maNhom}
                className={classes.inputs}
              />
              <MyTxt
                name="ngayKhoiChieu"
                type="date"
                ref={register({ required: true })}
                defaultValue={values.someDate}
              />
              {errors.ngayKhoiChieu && (
                <Alert severity="error">This field is required</Alert>
              )}
              <MyTxt
                name="danhGia"
                type="number"
                label="Đánh giá"
                rowsMax={5}
                defaultValue={movieUpdate?.danhGia}
                InputProps={{ inputProps: { min: 1, max: 10 } }}
                ref={register({ required: true })}
              />
              {errors.danhGia && (
                <Alert severity="error">This field is required</Alert>
              )}
              <DialogActions>
                <Button
                  color="primary"
                  onClick={() => {
                    setOpenUpdateDialog(false);
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
        </UpdateMovieDialog>
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
      {errDeleteMovie ? (
        <NotifiCation severity="error" message={errDeleteMovie} />
      ) : (
        ""
      )}
      {dataDeleteMovie ? (
        <NotifiCation severity="success" message={"Delete Movie Success"} />
      ) : (
        ""
      )}
      {movie ? (
        <NotifiCation severity="success" message={"Update Movie Success"} />
      ) : (
        ""
      )}
    </Paper>
  );
}

const mapStateToProps = (state) => {
  const { DeleteMovieReducer, ChangeInfoMovieReducer } = state;
  return {
    dataDeleteMovie: DeleteMovieReducer.data,
    errDeleteMovie: DeleteMovieReducer.err,
    movie: ChangeInfoMovieReducer.data,
    errChangeMovie: ChangeInfoMovieReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DeleteMovie: (maPhim) => {
      dispatch(act.actDeleteMovie(maPhim));
    },
    ChangeInfoMovie: (fomData) => {
      dispatch(act.actChangeInfoMovie(fomData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
