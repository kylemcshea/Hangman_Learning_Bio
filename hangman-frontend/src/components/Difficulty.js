import React from "react";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "../style/modals.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Difficulty(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (e) => {
    let max;
    if (e === "Easy") {
      max = 12;
    } else if (e === "Hard") {
      max = 4;
    } else {
      max = 6;
    }
    props.updateState(max);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className="title">
          Difficulty
        </DialogTitle>
        <DialogActions>
          {["Easy", "Medium", "Hard"].map((diff) => (
            <Button className={diff} onClick={() => handleClose(diff)}>
              {diff}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </div>
  );
}
