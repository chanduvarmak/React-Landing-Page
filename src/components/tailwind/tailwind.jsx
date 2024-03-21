import '../tailwind/tailwind.css';
import react, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
const Tailwind = () => {
  // const DialogBox = () => {
  const [open, setOpen] = useState(false);
  // const [handleClickOpen,handleClose]= useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // }
  return (
    <>
      <div className="tail-head">
        <h1>Blog component works</h1>
      </div>
      <div className="dialog-div">
        <Button variant="outlined" onClick={handleClickOpen}>
          Click here
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <div className='dialog-body'>
            <h2>Tail Title</h2>
            <p>This is the content of the dialog.</p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Dialog>
      </div>
    </>
  );
}
export default Tailwind;