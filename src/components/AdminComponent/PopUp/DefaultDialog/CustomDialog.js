import Dialog from "@material-ui/core/Dialog";

export const MyDialog = ({ openPopUp, setOpenPopUp, children }) => {
  return (
    <div>
      <Dialog
        open={openPopUp}
        onClose={setOpenPopUp}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        {children}
      </Dialog>
    </div>
  );
};
