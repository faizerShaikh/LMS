import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD NEW +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event : any) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            
            handleClose();
          },
        }}
      > 
        <DialogTitle>Fill the requird details</DialogTitle>
        <DialogContent>
          <TextField
            required
            margin="dense"
            name="name"
            label="Add Name"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            required
            margin="dense"    
            name="title"
            label="Add Title"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogContent>
          <TextField
            required
            margin="dense"
            name="titleDescription"
            label="Add Title Discription"
            type="string"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">ADD</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}