import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const UseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export const txtButton = ({ children, ...props }) => {
  const classes = UseStyles();

  return (
    <div className={classes.root}>
      <Button color="primary" {...props}>
				temp
      </Button>
    </div>
  );
};
