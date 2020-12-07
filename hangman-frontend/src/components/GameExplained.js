import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ImageCard from "./ImageCard";
import photos from "../static/imageData";
import useWindowPosition from "../hook/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  game_explained_root: {
    minheight: "100vh",
  },
  game_explained: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  startGameWrapper: {
    display: "flex",
  },
  startGame: {
    display: "flex",
    textDecoration: "none",
    alignSelf: "center",
    margin: "0 auto",
    justifyContent: "center",
    fontSize: "2rem",
    backgroundColor: "#2fcb53",
    borderColor: "#2fcb53",
    width: "100%",
    color: "#fff",
    padding: "4px",
  },
}));
export default function GameExplained() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.game_explained_root}>
      <div className={classes.game_explained} id="game-explained">
        <ImageCard photo={photos[0]} checked={checked} />
        <ImageCard photo={photos[1]} checked={checked} />
        <ImageCard photo={photos[2]} checked={checked} />
      </div>
      <div className={classes.startGameWrapper}>
        <a className={classes.startGame} href="/Hangman.js">
          <Button className={classes.startGame}> Start Game</Button>
        </a>
      </div>
    </div>
  );
}
