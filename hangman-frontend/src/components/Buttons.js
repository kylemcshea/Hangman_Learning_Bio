import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import alphabet from "../static/alphabet";
const useStyles = makeStyles((theme) => ({
  Buttons: {
    minheight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "10px",
  },
  alphBox1: {
    display: "flex",
  },
  alphBox2: {
    display: "flex",
  },
  button: {
    margin: "5px 10px 5px 10px",
  },
}));
export default function Buttons() {
  const classes = useStyles();
  return (
    <div className={classes.Buttons}>
      <div className={classes.alphBox1}>
        {alphabet.slice(0, 13).map((char) => (
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            {char.toUpperCase()}
          </Button>
        ))}
        <br />
      </div>
      <div className={classes.alphBox2}>
        {alphabet.slice(13, 26).map((char) => (
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            {char.toUpperCase()}
          </Button>
        ))}
      </div>
    </div>
  );
}
