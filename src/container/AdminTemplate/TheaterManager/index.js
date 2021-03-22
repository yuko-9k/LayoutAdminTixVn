import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Backdrop,
  Button,
  CircularProgress,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FormControl } from "../../../components/AdminComponent/FormControl";
import { Controller, useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as act from "./modules/actions";
import { MyTxt } from "../../../components/AdminComponent/TextField";
import { DefaultButton } from "../../../components/AdminComponent/Button/defaultButton";
import { TheaterToSystemTable } from "../../../components/AdminComponent/Table/TheaterToSystem";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(45, 45, 45)",
    height: "100vh",
    padding: "30px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accorSumma: {
    padding: "10px 16px",
  },
  accorDetails: {
    display: "block",
  },
  checkBox: {
    width: "200px",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    borderRadius: "5px",
    margin: "0 auto",
  },
  formControl: {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
  },
}));

function TheaterManagerPage(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { control, handleSubmit } = useForm();
  const { register: register2, handleSubmit: handleSubmit2 } = useForm();
  const {
    loadingTheater,
    dataTheater,
    dataTheaterToSystem,
    errTheaterToSystem,
  } = props;
  const [infoTheater, setInfoTheater] = useState();
  const [loader, setLoader] = useState(true);
  const [theaterToSystem, setTheaterToSysTem] = useState();

  useEffect(() => {
    setInfoTheater(dataTheater);
    setLoader(loadingTheater);
  }, [loadingTheater, dataTheater]);

  useEffect(() => {
    setTheaterToSysTem(dataTheaterToSystem);
  }, [dataTheaterToSystem, errTheaterToSystem]);

  const onSubmit = (data) => {
    props.getInfoAllTheater(data.maHeThongRap);
  };
  const handleMaHeThongRap = (maHeThongRap) => {
    props.getTheaterToSystem(maHeThongRap.maHeThongRap);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth={false}>
        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.accorSumma}
            >
              <Typography className={classes.heading}>
                Lấy thông tin hệ thống rạp
              </Typography>
              <Typography className={classes.secondaryHeading}>
                (Mã hệ thống, Tên hệ thống, Bí danh...)
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accorDetails}>
              <FormControl onSubmit={handleSubmit(onSubmit)}>
                <InputLabel>Mã hệ thống rạp</InputLabel>
                <Controller
                  as={
                    <Select variant="outlined" className={classes.checkBox}>
                      <MenuItem value="BHDStar">BHDStar</MenuItem>
                      <MenuItem value="CGV">CGV</MenuItem>
                      <MenuItem value="CineStar">CineStar</MenuItem>
                      <MenuItem value="Galaxy">Galaxy</MenuItem>
                      <MenuItem value="LotteCinima">LotteCinima</MenuItem>
                      <MenuItem value="MegaGS">MegaGS</MenuItem>
                    </Select>
                  }
                  name="maHeThongRap"
                  defaultValue={"BHDStar"}
                  control={control}
                />
                <Button type="submit">Submit</Button>
              </FormControl>
              {infoTheater ? (
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="Logo"
                    src={infoTheater?.logo}
                    className={classes.large}
                  />
                  <Typography variant="body2" component="h1">
                    Bí danh: {infoTheater.biDanh}
                  </Typography>
                  <Typography variant="body2" component="h1">
                    Mã hệ thống rạp: {infoTheater.maHeThongRap}
                  </Typography>
                  <Typography variant="body2" component="h1">
                    Tên hệ thống rạp: {infoTheater.tenHeThongRap}
                  </Typography>
                </div>
              ) : (
                ""
              )}
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className={classes.accorSumma}
          >
            <Typography className={classes.heading}>
              Lấy thông tin cụm rạp theo hệ thống
            </Typography>
            <Typography className={classes.secondaryHeading}>
              (Lấy danh sách cụm rạp)
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accorDetails}>
            <FormControl
              className={classes.formControl}
              onSubmit={handleSubmit2(handleMaHeThongRap)}
            >
              <MyTxt
                label="Mã hệ thống rạp"
                fullWidth
                ref={register2({ required: true })}
                name="maHeThongRap"
              />
              <DefaultButton color="default" type="submit">
                Submit
              </DefaultButton>
            </FormControl>
            {theaterToSystem ? (
              <TheaterToSystemTable>{theaterToSystem}</TheaterToSystemTable>
            ) : (
              ""
            )}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Advanced settings
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              Advanced settings
            </Typography>
            <Typography className={classes.secondaryHeading}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { infoTheaterReducer, theaterToSystemReducer } = state;
  return {
    loadingTheater: infoTheaterReducer.loading,
    dataTheater: infoTheaterReducer.data,
    dataTheaterToSystem: theaterToSystemReducer.data,
    errTheaterToSystem: theaterToSystemReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfoAllTheater: (maHeThongRap) => {
      dispatch(act.actGetInfoTheater(maHeThongRap));
    },
    getTheaterToSystem: (maHeThongRap) => {
      dispatch(act.actGetTheaterToSystem(maHeThongRap));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TheaterManagerPage);
