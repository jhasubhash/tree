import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
let _ = require('lodash');


let getNodeFromId = (nodeId, node) => {
    if(node.id === nodeId) return node;
    for(let i=0; i< node.children.length; i++){
        let found = getNodeFromId(nodeId, node.children[i]);
        if(found)
        return found;
    }
    return null;
}

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(true);
  let orgNode = getNodeFromId(props.nodeId, props.data);
  let [currNode, setCurrNode]= React.useState(_.cloneDeep(orgNode));
  let activeNode = Object.assign({},currNode);
  let name = React.createRef()
  let partner = React.createRef()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
      props.formSubmitCB(null);
  };

  const handleOk = () => {
      setOpen(false);
      currNode.name = name.value;
      if(currNode.partner)
      currNode.partner.name = partner.value;
      else if(partner.value){
        currNode.partner = {};
        currNode.partner.name = partner.value;
      }
      orgNode.name = currNode.name;
      orgNode.partner = currNode.partner;
      orgNode.children = currNode.children;
      props.formSubmitCB(currNode);
  }

  let getUserChildren = () => {
        let i = 0;
        let children = [];
        if(!currNode) return children;
        while (i < currNode.children.length) {
            if(i < orgNode.children.length){
            children.push(<TextField
                disabled margin="dense" id="name"
                label={"Child "+(i+1)} key={"Child "+(i+1)}
                type="name" defaultValue={currNode.children[i].name}
                fullWidth variant="outlined"
            />);
            }else{
                children.push(<TextField
                    margin="dense" id="name" label={"Child "+(i+1)}
                    key={"Child "+(i+1)} type="name"
                    defaultValue={currNode.children[i].name}
                    fullWidth variant="outlined"
                />);
            }
          i++;
        }
        return children;
  }

  const handleAddChild = () => {
    activeNode.children.push(props.getNextPerson());
    setCurrNode(activeNode);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth = {'sm'}>
        <DialogTitle id="form-dialog-title">Edit Info</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            defaultValue={currNode.name}
            inputRef={(c)=>{name=c}}
            variant="outlined"
            fullWidth
          />
          {currNode.partner && <TextField
            margin="dense"
            id="partner"
            label="Partner's Name"
            type="name"
            defaultValue={currNode.partner.name}
            variant="outlined"
            inputRef={(c)=>{partner=c}}
            fullWidth
          />}
          {getUserChildren()}
        </DialogContent>
          <Button variant="outlined"  onClick={handleAddChild} color="primary">
            Add Child
          </Button>
        <DialogActions>
          <Button variant="contained" onClick={handleOk} color="primary">
            Ok
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
