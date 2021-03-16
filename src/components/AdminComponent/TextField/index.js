import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		'&.MuiOutlinedInput-notchedOutline': {
			borderColor:"#3f51b5"
		},
	},
  multipleColor: {
    color: "red",
  },
}));

export const MyTxt = forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
			fullWidth
      InputProps={{ className: classes.multipleColor }}
      InputLabelProps={{ className: classes.multipleColor }}
      {...props}
    />
  );
});
