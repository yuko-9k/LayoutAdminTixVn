import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import { DefaultButton } from "../../../components/AdminComponent/Button/defaultButton";
import { connect } from "react-redux";
import * as act from "./modules/actions";
import MovieTable from "../../../components/AdminComponent/Table/MovieTable";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import { Controller, useForm } from "react-hook-form";
import moment from "moment";
import { Fragment } from "react";
import { Alert } from "@material-ui/lab";
import { AlertDialog } from "../../../components/AdminComponent/PopUp/DefaultDialog/AlertDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0",
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-around",
  },
  content: {
    padding: "50px",
    color: "#ffffff",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  inputs: {
    width: "200px",
  },
  selectInput: {
    width: "100%",
  },
  formSortDate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  titlePaper: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: "bold",
    fontSize: "30px",
  },
  DialogContent: {
    display: "block",
  },
}));

function MovieManagerPage(props) {
  const classes = useStyles();
  const [openListMovie, setOpenListMovie] = useState(true);
  const [openAddNew, setOpenAddNew] = useState(false);
  const [dataListMovie, setDataListMovie] = useState();
  const [newMovie, setNewMovie] = useState();
  const [newMovieErr, setNewMovieErr] = useState();
  const [openWarning, setOpenWarning] = useState(false);
  const [openError, setOpenError] = useState(false);
  const values = {
    someDate: new Date().toISOString().substring(0, 10),
  };
  const handleGetListMovie = () => {
    setOpenListMovie(true);
    setOpenAddNew(false);
  };
  const { data } = props;

  useEffect(() => {
    props.getListMovie();
	}, []);
	
  useEffect(() => {
    setDataListMovie(data);
  }, [data]);

  const handleAddNewMovie = () => {
    setOpenAddNew(true);
    setOpenListMovie(false);
  };

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => {
    let temp = {
      tuNgay: moment(data.tuNgay).format("DD-MM-YYYY"),
      denNgay: moment(data.denNgay).format("DD-MM-YYYY"),
      maNhom: data.maNhom,
    };
    props.sortMovieByDate(temp);
    const { dat } = props;
    setDataListMovie(dat);
  };

  const submitForm = (data) => {
    data.hinhAnh = data.hinhAnh[0];
    let temp = new FormData();
    for (var key in data) {
      temp.append(key, data[key]);
    }
    props.addNewMovie(temp);
  };
  useEffect(() => {
    const { newMovie, err } = props;
    if (newMovie) {
      console.log(newMovie);
      setNewMovie(newMovie);
      setOpenWarning(true);
    }
    if (err) {
      console.log(err);
      setNewMovieErr(err);
      setOpenError(true);
    }
  }, [props.newMovie, props.err]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} className={classes.root}>
        <Typography
          component="div"
          style={{ backgroundColor: "#2D2D2D", height: "100%" }}
          className={classes.content}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.navButtons}>
              <DefaultButton color="default" onClick={handleGetListMovie}>
                Get List Movie
              </DefaultButton>
              <DefaultButton color="default" onClick={handleAddNewMovie}>
                Add New Movie
              </DefaultButton>
            </Grid>
            <Grid item xs={12}>
              {openListMovie && dataListMovie ? (
                <Fragment>
                  <Paper className={classes.paper}>
                    Lấy danh sách phim theo ngày
                    <FormControl
                      className={classes.formSortDate}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <MyTxt
                        type="date"
                        className={classes.inputs}
                        name="tuNgay"
                        defaultValue="2017-02-05"
                        ref={register({ required: true })}
                      />
                      To
                      <MyTxt
                        type="date"
                        className={classes.inputs}
                        name="denNgay"
                        defaultValue="2017-05-05"
                        ref={register({ required: true })}
                      />
                      Mã nhóm
                      <Controller
                        as={
                          <Select
                            variant="outlined"
                            label="Mã nhóm"
                            autoWidth={true}
                          >
                            <MenuItem value="GP01">GP01</MenuItem>
                            <MenuItem value="GP02">GP02</MenuItem>
                            <MenuItem value="GP03">GP03</MenuItem>
                            <MenuItem value="GP04">GP04</MenuItem>
                          </Select>
                        }
                        name="maNhom"
                        control={control}
                        defaultValue="GP01"
                        className={classes.select}
                      />
                      <DefaultButton type="submit">Submit</DefaultButton>
                    </FormControl>
                  </Paper>
                  <Paper className={classes.paper}>
                    <MovieTable>{dataListMovie}</MovieTable>
                  </Paper>
                </Fragment>
              ) : (
                ""
              )}
              {openAddNew ? (
                <Paper className={classes.paper}>
                  <div className={classes.titlePaper}>{"Add New Movie"}</div>
                  <FormControl onSubmit={handleSubmit(submitForm)}>
                    <MyTxt
                      name="maPhim"
                      label="Mã phim"
                      ref={register({ required: true })}
                    />
                    {errors.maPhim && (
                      <Alert severity="error">This field is required</Alert>
                    )}
                    <MyTxt
                      name="tenPhim"
                      label="Tên phim"
                      ref={register({ required: true })}
                    />
                    {errors.tenPhim && (
                      <Alert severity="error">This field is required</Alert>
                    )}
                    <MyTxt
                      name="biDanh"
                      label="Bí danh"
                      ref={register({ required: true })}
                    />
                    {errors.biDanh && (
                      <Alert severity="error">This field is required</Alert>
                    )}
                    <MyTxt
                      name="trailer"
                      label="Trailer"
                      ref={register({ required: true })}
                    />
                    {errors.trailer && (
                      <Alert severity="error">This field is required</Alert>
                    )}
                    {/* <MyTxt name="hinhAnh" type="file" ref={register} /> */}
                    <input type="file" name="hinhAnh" ref={register} />
                    <MyTxt
                      name="moTa"
                      label="Mô tả"
                      ref={register({ required: true })}
                    />
                    {errors.moTa && (
                      <Alert severity="error">This field is required</Alert>
                    )}
                    <Controller
                      as={
                        <Select
                          variant="outlined"
                          label="Mã nhóm"
                          autoWidth={true}
                        >
                          <MenuItem value="GP01">GP01</MenuItem>
                          <MenuItem value="GP02">GP02</MenuItem>
                          <MenuItem value="GP03">GP03</MenuItem>
                          <MenuItem value="GP04">GP04</MenuItem>
                        </Select>
                      }
                      name="maNhom"
                      control={control}
                      defaultValue="GP01"
                      className={classes.selectInput}
                    />
                    <MyTxt
                      name="ngayKhoiChieu"
                      label="Ngày khởi chiếu"
                      type="date"
                      defaultValue={values.someDate}
                    />
                    <MyTxt
                      name="danhGia"
                      type="number"
                      label="Đánh giá"
                      rowsMax={5}
                      InputProps={{ inputProps: { min: 1, max: 10 } }}
                      ref={register({ required: true })}
                    />
                    {errors.danhGia && (
                      <Alert severity="error">This field is required</Alert>
                    )}
                    <DefaultButton type="submit">Submit</DefaultButton>
                  </FormControl>
                  {newMovie ? (
                    <AlertDialog
                      openWarning={openWarning}
                      setOpenWarning={setOpenWarning}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Add New Movie Success!"}
                      </DialogTitle>
                      <DialogContent className={classes.DialogContent}>
                        <MyTxt
                          disabled
                          label="Mã phim"
                          defaultValue={newMovie.Maphim}
                        />
                        <MyTxt
                          disabled
                          label="Tên phim"
                          defaultValue={newMovie.tenPhim}
                        />
                        <MyTxt
                          disabled
                          label="Mã nhóm"
                          defaultValue={newMovie.maNhom}
                        />
                        <MyTxt
                          disabled
                          label="Hình ảnh"
                          defaultValue={newMovie.hinhAnh}
                        />
                        <MyTxt
                          disabled
                          label="Đánh giá"
                          defaultValue={newMovie.danhGia}
                        />
                        <MyTxt
                          disabled
                          label="Bí danh"
                          defaultValue={newMovie.biDanh}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button
                          color="primary"
                          autoFocus
                          onClick={() => {
                            setOpenWarning(false);
                          }}
                        >
                          Agree
                        </Button>
                      </DialogActions>
                    </AlertDialog>
                  ) : (
                    ""
                  )}
                  {newMovieErr ? (
                    <AlertDialog
                      openWarning={openError}
                      setOpenWarning={setOpenError}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Some thing is wrong!"}
                      </DialogTitle>
                      <DialogContent className={classes.DialogContent}>
                        {newMovieErr}
                      </DialogContent>
                      <DialogActions>
                        <Button
                          color="primary"
                          autoFocus
                          onClick={() => {
                            setOpenError(false);
                          }}
                        >
                          Agree
                        </Button>
                      </DialogActions>
                    </AlertDialog>
                  ) : (
                    ""
                  )}
                </Paper>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const {
    getListMovieReducer,
    getListMovieByDateReducer,
    addNewMovieReducer,
  } = state;
  return {
    loading: getListMovieReducer.loading,
    data: getListMovieReducer.data,
    dat: getListMovieByDateReducer.data,
    newMovie: addNewMovieReducer.data,
    err: addNewMovieReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getListMovie: () => {
      dispatch(act.actGetListMovieCallApi());
    },
    sortMovieByDate: (data) => {
      dispatch(act.actGetListMovieByDate(data));
    },
    addNewMovie: (formData) => {
      dispatch(act.actAddNewMovieCallApi(formData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieManagerPage);
