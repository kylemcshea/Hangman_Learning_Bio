import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ImageCard from "./ImageCard";
import photos from "../static/imageData";
import useWindowPosition from "../hook/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  game_explained: {
    minheight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  startGameWrapper: {
    display: "flex",
  },
  startGame: {
    textDecoration: "none",
    alignItems: "center",
    margin: "0 auto",
    color: "#fff",
    justifyContent: "center",
    fontSize: "2rem",
  },
}));
export default function GameExplained() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div>
      <div className={classes.game_explained} id="game-explained">
        <ImageCard photo={photos[0]} checked={checked} />
        <ImageCard photo={photos[1]} checked={checked} />
      </div>
      <div className={classes.startGameWrapper}>
        <a className={classes.startGame} href="/Hangman.js">
          <Button className={classes.startGame}> Start Game</Button>
        </a>
      </div>
    </div>
  );
}
