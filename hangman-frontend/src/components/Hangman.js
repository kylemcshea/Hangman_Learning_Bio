import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Buttons from "./Buttons";
const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Hangman() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Buttons />
    </div>
  );
}
