

import React, { useEffect } from 'react'
import {Dialog,DialogActions ,DialogContent ,DialogContentText ,DialogTitle,Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
const DeleteDialog = (props) => {

    const handleClose = () => {
      props.setOpen(false);
    };
  
    return (
        <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">

        <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this message?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
        variant="contained"
        color="secondary"
        onClick={props.onDelete}
        startIcon={<DeleteIcon />}
      >
          DELETE
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default DeleteDialog
