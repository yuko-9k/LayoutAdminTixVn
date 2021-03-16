import Dialog from "@material-ui/core/Dialog";

export const AlertDialog = ({ openWarning, setOpenWarning, children }) => {
  const handleClose = () => {
    setOpenWarning(false);
  };
  return (
    <div>
      <Dialog
        open={openWarning}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    </div>
  );
};
