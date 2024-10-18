import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const Modal = ({ isOpen, onClose, onSave, title, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="modal-title">
      <DialogTitle id="modal-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
        <Button onClick={onSave} color="primary">
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
