import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";

export const StandardTextField = forwardRef((props, ref) => {
  return <TextField margin="normal" {...props} inputRef={ref} />;
});
