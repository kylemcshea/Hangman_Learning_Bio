import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import "../style/modals.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WinLossModal(prop) {
  const { width, height } = useWindowSize();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div>
      {prop.victory && <Confetti width={width} height={height} />}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle className="title" id="alert-dialog-slide-title">
          {prop.victory ? "Congratulations" : "Game Over"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className="title"
            id="alert-dialog-slide-description"
          >
            {prop.victory ? "You Win" : "You Lose"}!
          </DialogContentText>
        </DialogContent>
        <DialogActions className="wrapper">
          <Button onClick={playAgain} color="primary">
            Play Again
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
