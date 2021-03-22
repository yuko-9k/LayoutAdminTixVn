import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { DefaultButton } from "../../../components/AdminComponent/Button/defaultButton";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { Controller, useForm } from "react-hook-form";
import { Fragment } from "react";
import * as act from "./modules/actions";
import { connect } from "react-redux";
import { ShowMovieOfCinema } from "../../../components/AdminComponent/Table/BookingTable/showMovieOfCinema";
import { DanhSachPhongVeTable } from "../../../components/AdminComponent/Table/DanhSachPhongVe/DanhSachPhongVe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import { NotifiCation } from "../../../components/AdminComponent/SnackBar";

const useStyles = makeStyles((theme) => ({
  Container: {
    padding: 0,
    color: "#ffffff",
  },
  Typo: {
    padding: "50px",
  },
  AccordionContent: {
    display: "block",
    textAlign: "center",
  },
  Forms: {
    width: "60%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  FormTaoLichChieu: {
    width: "80%",
    margin: "0 auto",
    display: "block",
  },
  inputSearchs: {
    width: "300px",
  },
  inputs: {
    maxWidth: "500px",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
}));

function BookingManagerPage(props) {
  const { handleSubmit, control } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const { register: register3, handleSubmit: handleSubmit3 } = useForm();
  const classes = useStyles();
  const [getCode, setGetCode] = useState(false);
  const [listCinema, setListCinema] = useState();
  const [getListCinemaErr, setListCinemaErr] = useState();
  const [listMovie, setListMovie] = useState();
  const { dataCinema, errCinema } = props;
  const [showListMovie, setShowListMovie] = useState();
  const [showMovieOfCinema, setShowMovieOfCinema] = useState();
  const [danhSachPhongVe, setDanhSachPhongVe] = useState();
  const [errPhongVe, setErrPhongVe] = useState();
	const [expanded, setExpanded] = useState("panel1");
	const [errTaoLich, setErrTaoLich] = useState(false);
	const [successTaoLich, setSuccessTaoLich] = useState(false);

	const handleGetCinema = () => {
    props.GetDetailCinema();
  };
  useEffect(() => {
    setListCinema(dataCinema);
    setListCinemaErr(errCinema);
  }, [dataCinema, errCinema]);

  const {
    dataMovie,
    errMovie,
    dataDanhSachPhongVe,
		errDanhSachPhongVe,
		dataTaoLichChieu,
		errTaoLichChieu,
  } = props;

	useEffect(() => {
		setErrTaoLich(errTaoLichChieu);
		setSuccessTaoLich(dataTaoLichChieu);
	},[dataTaoLichChieu,errTaoLichChieu])

  useEffect(() => {
    setListMovie(dataMovie);
  }, [dataMovie, errMovie]);

  useEffect(() => {
    if (listMovie) {
      setShowListMovie(true);
      let temp = listMovie[0].lstCumRap;
      let arr = [];
      temp.forEach((item) => {
        item.danhSachPhim.forEach((lstLichChieu) => {
          lstLichChieu.lstLichChieuTheoPhim.forEach((maLichChieu) => {
            let data = {
              tenPhim: lstLichChieu.tenPhim,
              maPhim: lstLichChieu.maPhim,
              maRap: maLichChieu.maRap,
              hinhAnh: lstLichChieu.hinhAnh,
              maLichChieu: maLichChieu.maLichChieu,
            };
            arr.push(data);
          });
        });
      });
      if (arr.length > 0) {
        setShowMovieOfCinema(arr);
      }
    }
  }, [listMovie]);

  useEffect(() => {
    if (dataDanhSachPhongVe) {
      setDanhSachPhongVe(dataDanhSachPhongVe);
      setGetCode(false);
      setShowMovieOfCinema();
    }
    if (errDanhSachPhongVe) {
      setErrPhongVe(errDanhSachPhongVe);
    }
  }, [dataDanhSachPhongVe, errDanhSachPhongVe]);

  const getDetailCinema = (data) => {
    props.GetMovieOfCinema(data.maHeThongRap, data.maNhom);
  };

  const layDanhSachPhongVe = (data) => {
    props.layDanhSachPhongVe(data.maLichChieu);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleTaoLichChieu = (data) => {
    data.ngayChieuGioChieu = moment(data.ngayChieuGioChieu).format(
      "DD/MM/YYYY hh:mm:ss"
    );
    console.log(data);
    props.taoLichChieu(data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} className={classes.Container}>
        <Typography
          component="div"
          style={{ backgroundColor: "rgb(45, 45, 45)", height: "100vh" }}
          className={classes.Typo}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Lấy danh sách phòng vé
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    (Xem thông tin phòng vé, lấy mã phim, mã rạp)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionContent}>
                  <FormControl
                    className={classes.Forms}
                    onSubmit={handleSubmit2(layDanhSachPhongVe)}
                  >
                    <MyTxt
                      label="Mã Lịch Chiếu"
                      className={classes.inputs}
                      name="maLichChieu"
                      type="number"
                      ref={register2({ required: true })}
                    />
                    <DefaultButton color="secondary" type="submit">
                      Submit
                    </DefaultButton>
                    <Button
                      onClick={() => {
                        setGetCode(true);
                        setDanhSachPhongVe();
                        handleGetCinema();
                      }}
                    >
                      Lấy mã lịch chiếu?
                    </Button>
                  </FormControl>
                  {getCode ? (
                    <Fragment>
                      <h1>Lấy mã lịch chiếu</h1>
                      <FormControl
                        onSubmit={handleSubmit(getDetailCinema)}
                        className={classes.Forms}
                      >
                        {listCinema ? (
                          <div style={{ display: "flex" }}>
                            <div>
                              <InputLabel id="idRap">
                                Mã hệ thống rạp
                              </InputLabel>
                              <Controller
                                as={
                                  <Select variant="outlined" autoWidth={true}>
                                    {listCinema?.map((list, index) => {
                                      return (
                                        <MenuItem
                                          value={list.maHeThongRap}
                                          key={index}
                                        >
                                          {list.maHeThongRap}
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                }
                                name="maHeThongRap"
                                defaultValue={listCinema[0]?.maHeThongRap}
                                control={control}
                                id="idRap"
                              />
                            </div>
                            <div>
                              <InputLabel id="idNhom">Mã nhóm</InputLabel>
                              <Controller
                                as={
                                  <Select variant="outlined" autoWidth={true}>
                                    <MenuItem value="GP01">GP01</MenuItem>
                                    <MenuItem value="GP02">GP02</MenuItem>
                                    <MenuItem value="GP03">GP03</MenuItem>
                                    <MenuItem value="GP04">GP04</MenuItem>
                                  </Select>
                                }
                                name="maNhom"
                                defaultValue={"GP01"}
                                control={control}
                                id="maNhom"
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        <DefaultButton color="default" type="submit">
                          Get
                        </DefaultButton>
                      </FormControl>
                    </Fragment>
                  ) : (
                    ""
                  )}
                  {showMovieOfCinema ? (
                    <ShowMovieOfCinema>{showMovieOfCinema}</ShowMovieOfCinema>
                  ) : (
                    ""
                  )}
                  {danhSachPhongVe ? (
                    <DanhSachPhongVeTable>
                      {danhSachPhongVe}
                    </DanhSachPhongVeTable>
                  ) : (
                    ""
                  )}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Tạo lịch chiếu{" "}
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    (Tạo lịch chiếu phim)
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.AccordionContent}>
                  <FormControl
                    className={classes.FormTaoLichChieu}
                    onSubmit={handleSubmit3(handleTaoLichChieu)}
                  >
                    <MyTxt
                      label="Mã phim"
                      fullWidth
                      ref={register3({ required: true })}
                      name="maPhim"
                      type="number"
                    />
                    <MyTxt
                      type="datetime-local"
                      name="ngayChieuGioChieu"
                      defaultValue="2017-05-24T10:30"
                      ref={register3({ required: true })}
                    />

                    <MyTxt
                      label="Mã rạp"
                      ref={register3({ required: true })}
                      name="maRap"
                      type="number"
                    />
                    <MyTxt
                      label="Giá vé"
                      ref={register3({ required: true })}
                      name="giaVe"
                      type="number"
                    />
                    <DefaultButton type="submit">Submit</DefaultButton>
									</FormControl>
                </AccordionDetails>
							</Accordion>
							{errTaoLich ? <NotifiCation severity="error" message={errTaoLich} /> : ""}
							{successTaoLich? <NotifiCation severity="success" message={successTaoLich} />:""}
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  const {
    GetListCinemaReducer,
    getMovieOfCinemaReducer,
    layDanhSachPhongVeReducer,
    createShowTimesReducer,
  } = state;
  return {
    loadingCinema: GetListCinemaReducer.loading,
    dataCinema: GetListCinemaReducer.data,
    errCinema: GetListCinemaReducer.err,
    dataMovie: getMovieOfCinemaReducer.data,
    errMovie: getMovieOfCinemaReducer.err,
    dataDanhSachPhongVe: layDanhSachPhongVeReducer.data,
    errDanhSachPhongVe: layDanhSachPhongVeReducer.err,
    dataTaoLichChieu: createShowTimesReducer.data,
    errTaoLichChieu: createShowTimesReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetDetailCinema: () => {
      dispatch(act.actGetDetailCinema());
    },
    GetMovieOfCinema: (maHeThongRap, maNhom) => {
      dispatch(act.actGetMovieOfCinema(maHeThongRap, maNhom));
    },
    layDanhSachPhongVe: (maLichChieu) => {
      dispatch(act.actlayDanhSachPhongVe(maLichChieu));
    },
    taoLichChieu: (data) => {
      dispatch(act.actCreateShowTimes(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingManagerPage);
