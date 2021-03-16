import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "5px",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const MiniLoading = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" {...props} />
    </div>
  );
};
