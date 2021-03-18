import React from "react";

import Dialog from "@material-ui/core/Dialog";

export const UpdateMovieDialog = ({
  openUpdateDialog,
  setOpenUpdateDialog,
  children,
}) => {
  return (
    <Dialog
      open={openUpdateDialog}
      onClose={setOpenUpdateDialog}
      aria-labelledby="form-dialog-title"
    >
      {children}
    </Dialog>
  );
};
