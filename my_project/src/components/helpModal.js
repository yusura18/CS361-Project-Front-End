import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          X
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="input-group" >
      <Button variant="outlined" size="small" color="primary" onClick={handleClickOpen}>
        Help
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="uploadHelp" open={open}>
        <DialogTitle id="uploadImageHelp" onClose={handleClose}>
          Upload Instructions:
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Step 1: Choose an image file to upload. Image formats that are accepted: .png, .jpg, jpeg, .gif
            Step 2: Enter a title for your image.
          </Typography>
          <Typography gutterBottom>
            Step 3: Enter your email address 
            Step 4: If you'd like your copyright information displayed, check the copyright box and enter
            your company/portfolio name in the copyright info field.
          </Typography>
          <Typography gutterBottom>
            Step 5: You can enter up to four image tags for your image. Enter the first one in the 
            "image tag one" field. Once you're done, click submit!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}