import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let getNodeFromId = (nodeId, node) => {
    if(node.id === nodeId) return node;
    for(let i=0; i< node.children.length; i++){
        let found = getNodeFromId(nodeId, node.children[i]);
        if(found)
        return found;
    }
    return null;
}

export default function MenuDialog(props) {
    const [openNameDialog, setOpenNameDialog] = React.useState(false);
    const [openPNameDialog, setOpenPNameDialog] = React.useState(false);
    const [openChildrenDialog, setOpenChildrenDialog] = React.useState(false);
    const [childrenUpdate, setChildrenUpdate] = React.useState(false);
    const [newChildrenCnt, setNewChildrenCnt] = React.useState(0);
    let personRef = React.createRef()
    let partnerRef = React.createRef()
    let [currNode, setCurrNode] = React.useState(getNodeFromId(props.nodeId, props.data));

    React.useEffect(() => {
        let idStr = props.dialogId;
        if(idStr === 'Primary')
            setOpenNameDialog(true);
        else if(idStr === 'Partner')
            setOpenPNameDialog(true);
        else if(idStr === 'Children')
            setOpenChildrenDialog(true);
    },[props]);

    const handleCloseNameDialog = () => {
        setOpenNameDialog(false);
        props.onClose();
    };

    const handleClosePNameDialog = () => {
        setOpenPNameDialog(false);
        props.onClose();
    };

    const handleCloseChildrenDialog = () => {
        setOpenChildrenDialog(false);
        props.onClose();
    };

    const handleCancelNameDialog = () => {
        setOpenNameDialog(false);
        props.onClose();
    }

    const handleOkNameDialog = () => {
        currNode.name = personRef.value;
        setOpenNameDialog(false);
        props.onClose(true);
    }

    const handleCancelPNameDialog = () => {
        setOpenPNameDialog(false);
        props.onClose();
    }

    const handleOkPNameDialog = () => {
        currNode.name = partnerRef.value;
        setOpenPNameDialog(false);
        props.onClose(true);
    }

    const handleCancelChildrenDialog = () => {
        currNode.children.splice(currNode.children.length-newChildrenCnt, currNode.children.length);
        setNewChildrenCnt(0);
        setOpenChildrenDialog(false);
        props.onClose();
    }

    const handleOkChildrenDialog = () => {
        setOpenChildrenDialog(false);
        props.onClose(true);
    }

    const getUserChildren = () => {
        let i = 0;
        let children = [];
        if(!currNode) return children;
        while (i < currNode.children.length) {
            children.push(<TextField
                disabled margin="dense" id={"Child "+(i+1)}
                label={"Child "+(i+1)} key={"Child "+(i+1)}
                type="name" defaultValue={currNode.children[i].name}
                fullWidth variant="outlined"
            />);
            i++;
        }
        return children;
    }
    
    const handleAddChild = () => {
        setNewChildrenCnt(newChildrenCnt+1);
        currNode.children.push(props.getNextPerson());
        setChildrenUpdate(!childrenUpdate);
    }
    const handleRemoveChild = () => {
        if(!newChildrenCnt) return;
        setNewChildrenCnt(newChildrenCnt-1);
        currNode.children.pop();
        setChildrenUpdate(!childrenUpdate);
    }

    return (
        <div>
        <Dialog open={openNameDialog} onClose={handleCloseNameDialog} aria-labelledby="Name">
            <DialogTitle id="form-dialog-title">{currNode.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Edit name :
            </DialogContentText>
            <TextField defaultValue={currNode.name} inputRef={(ref)=>{personRef=ref}} variant="outlined"
                autoFocus margin="dense" id="person" label="name" type="name" fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCancelNameDialog} color="primary">
                Cancel
            </Button>
            <Button onClick={handleOkNameDialog} color="primary">
                Ok
            </Button>
            </DialogActions>
        </Dialog>

        <Dialog open={openPNameDialog} onClose={handleClosePNameDialog} aria-labelledby="Name">
            <DialogTitle id="form-dialog-title">{currNode.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Edit partner's name :
            </DialogContentText>
            <TextField defaultValue={currNode.partner.name} inputRef={(ref)=>{partnerRef=ref}} variant="outlined"
                autoFocus margin="dense" id="partner" label="name" type="name" fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCancelPNameDialog} color="primary">
                Cancel
            </Button>
            <Button onClick={handleOkPNameDialog} color="primary">
                Ok
            </Button>
            </DialogActions>
        </Dialog>

        <Dialog open={openChildrenDialog} onClose={handleCloseChildrenDialog} aria-labelledby="Name">
            <DialogTitle id="form-dialog-title">{currNode.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Add/Remove Children :
            </DialogContentText>
            {getUserChildren()}
            </DialogContent>
            <Button variant="outlined"  onClick={handleAddChild} color="primary">
                Add Child
            </Button>
            {newChildrenCnt > 0 && <Button variant="outlined"  onClick={handleRemoveChild} color="primary">
                Remove Child
            </Button>}
            <DialogActions>
            <Button onClick={handleCancelChildrenDialog} color="primary">
                Cancel
            </Button>
            <Button onClick={handleOkChildrenDialog} color="primary">
                Ok
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
