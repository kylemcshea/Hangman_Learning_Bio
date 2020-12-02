import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import photos from "../static/imageData";
import useWindowPosition from "../hook/useWindowPosition";
const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function GameExplained() {
  const classes = useStyles();
  const checked = useWindowPosition("header");
  return (
    <div className={classes.root} id="game-explained">
      <ImageCard photo={photos[0]} checked={checked} />
      <ImageCard photo={photos[1]} checked={checked} />
    </div>
  );
}
