import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import alphabet from "../static/alphabet";
const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "100px",
  },
}));
export default function Buttons() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {alphabet.map((char) => (
        <Button variant="contained" color="secondary">
          {char.toUpperCase()}
        </Button>
      ))}
    </div>
  );
}
