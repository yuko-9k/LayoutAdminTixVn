import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { CardUser } from "../../../components/AdminComponent/Card/CardUser";
import { connect } from "react-redux";
const useStyle = makeStyles({
  root: {
    backgroundColor: "#333",
    color: "#fff",
  },
});
function DashBoard(props) {
  const classes = useStyle();
  const user = JSON.parse(sessionStorage.getItem("USER"));
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container classes={{ root: classes.root }}>
        <Grid item xs={6}>
          {user ? <CardUser>{user}</CardUser> : props.history.replace("/login")}
        </Grid>
        <Grid item xs={6}></Grid>
        <Typography component="div" style={{ height: "100vh" }} />
      </Grid>
    </React.Fragment>
  );
}

export default connect(null, null)(DashBoard);
