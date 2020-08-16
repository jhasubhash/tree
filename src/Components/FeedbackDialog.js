import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import PreferenceMgr from '../js/PreferenceMgr';
import { useSnackbar } from 'notistack';

import * as emailjs from 'emailjs-com';

emailjs.init("user_DyxpTG6qwaTR7AW1vWs4M");
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function FeedbackDialog(props) {
    const classes = useStyles();
    const [feedbackFailed, setFeedbackFailed] = React.useState(false);
    
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    let feedbackText = React.createRef();

    const handleFeedbackSubmit = () => {
        if(feedbackText.value===""){
            setFeedbackFailed(true);
            return;
        }
        setFeedbackFailed(false);
        const templateParams = {
        from_name: "Family Tree User",
        to_name: "Subhash",
        message_html: feedbackText.value
        };
        emailjs
            .send("default_service", "template_rLhbphnf", templateParams)
            .then(
                function(response) {
                    enqueueSnackbar("Message sent successfully",{ 
                        variant: 'success',
                    })
                    console.log("SUCCESS!", response.status, response.text);
                },
                function(err) {
                    enqueueSnackbar("Unable to send message",{ 
                        variant: 'error',
                    })
                    console.error("Your message was not able to be sent")
                }
            );
        handleClose();
    }

    const handleClose = () => {
        setFeedbackFailed(false);
        props.onClose();
    }

    return (
    <div className={classes.root}>
        <Dialog open={props.open} onClose={props.onClose}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Feedback</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Please provide your feedback. Also let us know if you want to update any information.
            </DialogContentText>
            {feedbackFailed && <DialogContentText><span style={{color: 'red'}}>Unable to send the message</span></DialogContentText>}
            <TextField
            autoFocus
            margin="dense"
            id="feedback"
            label="Feedback"
            type="text"
            variant="filled"
            multiline
            rows={8}
            fullWidth
            inputRef={(c)=>{feedbackText=c}}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
            <Button onClick={handleFeedbackSubmit} color="primary">
            Submit
            </Button>
        </DialogActions>
        </Dialog>
    </div>
    );
}