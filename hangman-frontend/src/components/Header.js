import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  appbarTitle: {
    color: "#fff",
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorTitle: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  title: {
    color: "#fff",
    fontSize: "3rem",
    fontFamily: "Nunito",
  },
  dropDown: {
    color: "#fff",
    fontSize: "3rem",
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Hangman <span className={classes.colorTitle}>Learning.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Hangman<span className={classes.colorTitle}>Learning!</span>
          </h1>
          <Scroll to="game-explained" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.dropDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
