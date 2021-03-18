import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { DefaultButton } from "../../Button/defaultButton";
import { ClickAwayListener } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export const CustomPopOver = (props) => {
  const classes = useStyles();
  const { openPopOver, setOpenPopOver, src } = props;
  console.log(src);
  const id = openPopOver ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={openPopOver}
      onClose={setOpenPopOver}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Typography className={classes.typography}>
        <iframe
          width="560"
          height="315"
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="trailer"
        ></iframe>
      </Typography>
    </Popover>
  );
};
