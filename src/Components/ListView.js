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
import FeedbackIcon from '@material-ui/icons/Feedback';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './ListView.css';
import { setActiveNode, setFilter } from '../Reducers/actions';
import SettingsDialog from './SettingsDialog';
import FeedbackDialog from './FeedbackDialog';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 250,
  },
});

export default function ListView(props) {
  const classes = useStyles();
  const ref = React.useRef(null);
  const ref1 = React.useRef(React.createRef());
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [menu, setMenu] = React.useState(false);
  const [editView, setEditView] = React.useState(false);
  const [feedback, setFeedback] = React.useState(false);
  const [invalidPassword, setInvalidPassword] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  let editText = React.createRef();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

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
  const saveCB = (success) => {
    if(success){
      enqueueSnackbar("Tree data saved successfully",{ 
        variant: 'success',
    })
    }else{
      enqueueSnackbar("Failed to save the data",{ 
        variant: 'error',
    })
    }
  }
  const handleDialogOpen = (anchor, open) => {
    if(anchor === 'edit'){
      if(!props.editMode)
        setEditView(open);
      else{
        props.handleSaveTree(saveCB);
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
        style={{pointerEvents: 'all'}}
        >
        <List>
          <ListItem button key={'back'}>
              <ListItemIcon><ArrowBackIcon/></ListItemIcon>
              <ListItemText primary={'Go Back'} />
          </ListItem>
        </List>
        <Divider />
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
                <ListItemIcon><FeedbackIcon /></ListItemIcon>
                <ListItemText primary={"Send Feedback"} />
          </ListItem>
        </List>
        </div>
  )};

  const handleClose = () => {
    setInvalidPassword(false);
    setEditView(false);
    setFeedback(false);
    setSettings(false);
  };

  const handleEditSubmit = () => {
    if(editText.value === props.treeCred || editText.value === props.treeSuperCred){
      setInvalidPassword(false);
      setEditView(false);
		  //setActiveNode('0');
      setFilter('');
      props.setEditMode(true);
      if(editText.value === props.treeSuperCred)
        props.setSuperEditMode(true);
      enqueueSnackbar("Right click on a node to edit",{ 
        variant: 'info',
      })
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
        <FeedbackDialog {...props} open={feedback} onClose={handleDialogClose} aria-labelledby="form-dialog-title"/>
        <SettingsDialog {...props} open={settings} onClose={handleDialogClose} aria-labelledby="form-dialog-title"/>
    </React.Fragment>
    </div>
  );
}
