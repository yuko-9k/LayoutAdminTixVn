import { makeStyles } from "@material-ui/core";
import { forwardRef } from "react";

export const FormControl = forwardRef(({ children, ...props }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate {...props} autoComplete="off">
      {children}
    </form>
  );
});
