import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import './ListView.css';
import { setActiveNode, setFilter } from '../Reducers/actions';
import * as emailjs from 'emailjs-com';
import SettingsDialog from './SettingsDialog';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 250,
  },
});

emailjs.init("user_DyxpTG6qwaTR7AW1vWs4M");

export default function ListView(props) {
  const classes = useStyles();
  const ref = React.useRef(null);
  const ref1 = React.useRef(React.createRef());
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [menu, setMenu] = React.useState(false);
  const [editView, setEditView] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);
  const [feedbackFailed, setFeedbackFailed] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  let feedbackText = React.createRef();
  let editText = React.createRef();
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenu(open);
  };

  const handleClick = (id) => {
    setSelectedIndex(id);
    handleDialogOpen(id, true);
  }

  const handleDialogOpen = (anchor, open) => {
    if(anchor === 'edit'){
      if(!props.editMode)
        setEditView(open);
      else{
        props.handleSaveTree();
        //props.setEditMode(false);
      }
    }
    if(anchor === 'settings')
      setSettings(open);
    if(anchor === 'feedback')
    setFeedback(open);
  };

  const handleDialogClose = () => {
    setEditView(false);
    setFeedback(false);
    setSettings(false);
  };
  
  const handleMenuOpen = (anchor, open, pageNum) => (event) => {
    setSelectedIndex(pageNum);
    toggleDrawer(anchor, open)(event)
  }

  const list = (anchor, ref1) => {
      return (
        <div ref={ref1}
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
          <ListItem button key={'settings'} onClick={()=>{handleClick('settings')}} selected={selectedIndex === 'settings'}>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary={"Tree Settings"} />
          </ListItem>
          <ListItem button key={'edit'} onClick={()=>{handleClick('edit')}} selected={selectedIndex === 'edit'}>
                <ListItemIcon><EditIcon /></ListItemIcon>
                <ListItemText primary={!props.editMode?"Edit Tree":"Save Tree"} />
          </ListItem>
          <ListItem button key={'feedback'} onClick={()=>{handleClick('feedback')}} selected={selectedIndex === 'feedback'}>
                <ListItemIcon><EmailIcon /></ListItemIcon>
                <ListItemText primary={"Send Feedback"} />
          </ListItem>
        </List>
        </div>
  )};

  const handleClose = () => {
    setInvalidPassword(false);
    setFeedbackFailed(false);
    setEditView(false);
    setFeedback(false);
    setSettings(false);
  };

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
                console.log("SUCCESS!", response.status, response.text);
                setFeedback(false);
              },
              function(err) {
                console.error("Your message was not able to be sent");
                setFeedbackFailed(true);
              }
            );
  }

  const handleEditSubmit = () => {
    if(editText.value === props.treeCred){
      setInvalidPassword(false);
      setEditView(false);
		  //setActiveNode('0');
		  setFilter('');
      props.setEditMode(true);
    }else{
      setInvalidPassword(true);
    }
  }

  const editDialog = () => {
    return (
    <div>
      <DialogTitle id="form-dialog-title">Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add or modify names, please enter the admin passcode.
          </DialogContentText>
          {invalidPassword && <DialogContentText >
          <span style={{color: 'red'}}>Wrong Password entered !!!</span>
          </DialogContentText>}
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            inputRef={(c)=>{editText=c}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Enter
          </Button>
        </DialogActions>
    </div>
  )};

  const feedbackDialog = () => {
    return (
    <div>
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
    </div>
  )};

  const attachListener = () =>{
    const target = ref1.current;
    if (!target || !target.addEventListener) return
    const disablePinchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault()
      }
      else if(e.ctrlKey){
          e.preventDefault()
      }
    }
    target.addEventListener("touchmove", disablePinchZoom, { passive: false })
    target.addEventListener("wheel", disablePinchZoom, { passive: false })
  }

  React.useEffect(() => {
    setTimeout(attachListener, 200);
  });

  React.useLayoutEffect(() => {
    const target = ref.current;
    if (!target) return
    const disablePinchZoom = (e) => {
      if (e.touches && e.touches.length > 1) {
        e.preventDefault()
      }
      if(!e.touches){
          e.preventDefault()
      }
    }
    target.addEventListener("touchmove", disablePinchZoom, { passive: false })
    target.addEventListener("wheel", disablePinchZoom, { passive: false })
    return () => {
      target.removeEventListener("touchmove", disablePinchZoom)
      target.removeEventListener("wheel", disablePinchZoom)
    }
  }, [])


  const anchor = 'menu';
  return (
    <div ref={ref} className="ListView">
    <React.Fragment key={anchor}>
        <IconButton onClick={handleMenuOpen(anchor,true,props.pageNum)} size='small' color="primary" ><MenuIcon/></IconButton>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Drawer  classes={{ paper: classes.drawer }} anchor={'left'} open={menu} onClose={toggleDrawer(anchor, false)}>
        {list(anchor,ref1)}
        </Drawer>
        <Dialog open={editView} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
          {editDialog()}
        </Dialog>
        <Dialog open={feedback} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
          {feedbackDialog()}
        </Dialog>
        <SettingsDialog {...props} open={settings} onClose={handleDialogClose} aria-labelledby="form-dialog-title"/>
    </React.Fragment>
    </div>
  );
}
