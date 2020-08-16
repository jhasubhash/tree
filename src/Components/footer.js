import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import FeedbackIcon from '@material-ui/icons/Feedback';
import FeedbackDialog from './FeedbackDialog';
import SettingsDialog from './SettingsDialog';
import IconButton from '@material-ui/core/IconButton';
import BackupIcon from '@material-ui/icons/Backup';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Footer(props) {
    const [settingsView, setSettingsView] = React.useState(false);
    const [feedbackView, setFeedbackView] = React.useState(false);
    const classes = useStyles();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onSettings = ()=>{
        setSettingsView(!settingsView);
    }

    const onFeedback = ()=>{
        setFeedbackView(!feedbackView);
    }
    const handleDialogClose = ()=>{
        setSettingsView(false);
        setFeedbackView(false);
    }

    const saveCB = (success) => {
        if(success){
          enqueueSnackbar("Backup saved successfully",{ 
            variant: 'success',
        })
        }else{
          enqueueSnackbar("Failed to save the backup",{ 
            variant: 'error',
        })
        }
    }

    const handleSave = ()=>{
        props.saveTreeBackup(saveCB);
    }

    return (
        <div>
            <SettingsDialog {...props} open={settingsView} onClose={handleDialogClose}/>
            <FeedbackDialog {...props} open={feedbackView} onClose={handleDialogClose}/>
            {!props.editMode && !props.superEditMode &&
            <div className={classes.root} id="footer">
            <Fab color="primary" size={'small'} aria-label="settings" style={{float:'left', pointerEvents: 'all'}} onClick={onSettings}>
                <SettingsIcon />
            </Fab>
            <Fab color="primary" size={'small'} aria-label="feedback" style={{float:'right', pointerEvents: 'all'}} onClick={onFeedback}>
                <FeedbackIcon />
            </Fab>
            </div>}
            {props.superEditMode &&
            <div className={classes.root} id="footer">
            <IconButton onClick={handleSave} 
						variant="contained" 
						color="primary"
						style={{ maxHeight: '25px', minHeight: '25px', 
						fontSize: '11px', float: 'right', pointerEvents: 'all' }}
						size="small" ><BackupIcon/></IconButton>
            </div>}
        </div>
    );
}
