import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "#000000",
    margin: "20px",
  },
  media: {
    height: 250,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#000000",
  },
});

export default function ImageCard({ photo, checked }) {
  const classes = useStyles();

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={photo.imageUrl}
          title={photo.title}
        />
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {photo.title}
          </Typography>
          <Typography
            className={classes.desc}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {photo.desc}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
