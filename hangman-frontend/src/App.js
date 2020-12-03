import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import GameExplained from "./components/GameExplained";
import Hangman from "./components/Hangman";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/bg2.jpeg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Route exact path="/">
          <Header />
          <GameExplained />
        </Route>
        <Route exact path="/Hangman.js">
          <Hangman />
        </Route>
      </Router>
    </div>
  );
}
