import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactHtmlParser from 'react-html-parser'; 
import PreferenceMgr from '../js/PreferenceMgr';
import DB from '../js/Database';

let getNodeFromId = (nodeId, node) => {
    if(node.id === nodeId) return node;
    for(let i=0; i< node.children.length; i++){
        let found = getNodeFromId(nodeId, node.children[i]);
        if(found)
        return found;
    }
    return null;
}

const findParentNode = (targetNode, currNode) => {
    if(!currNode) return null;
    for(let i=0; i< currNode.children.length; i++){
        if(currNode.children[i].id === targetNode.id)
            return currNode;
        let node = findParentNode(targetNode, currNode.children[i]);
        if(node) return node;
    }
    return null;
}


export default function MenuDialog(props) {
    const [openNameDialog, setOpenNameDialog] = React.useState(false);
    const [openPNameDialog, setOpenPNameDialog] = React.useState(false);
    const [openChildrenDialog, setOpenChildrenDialog] = React.useState(false);
    const [openRemoveDialog, setOpenRemoveDialog] = React.useState(false);
    const [openEditInfoDialog, setOpenEditInfoDialog] = React.useState(false);
    const [openInfoDialog, setOpenInfoDialog] = React.useState(false);
    const [childrenUpdate, setChildrenUpdate] = React.useState(false);
    const [newChildrenCnt, setNewChildrenCnt] = React.useState(0);
    const [currNode, setCurrNode] = React.useState(getNodeFromId(props.nodeId, props.data));
    const [userInfo, setUserInfo] = React.useState("");
    let personRef = React.createRef()
    let partnerRef = React.createRef()
    let infoRef = React.createRef();

    DB.getUserInfo(currNode.id).then((info)=>{
        setUserInfo(info);
    });

    React.useEffect(() => {
        let idStr = props.dialogId;
        if(idStr === 'Primary')
            setOpenNameDialog(true);
        else if(idStr === 'Partner')
            setOpenPNameDialog(true);
        else if(idStr === 'Children')
            setOpenChildrenDialog(true);
        else if(idStr === 'Remove')
            setOpenRemoveDialog(true);
        else if(idStr === 'EditInfo')
            setOpenEditInfoDialog(true);
        else if(idStr === 'Info')
            setOpenInfoDialog(true);
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

    const handleCloseRemoveDialog = () => {
        setOpenRemoveDialog(false);
        props.onClose();
    };

    const handleCloseEditInfoDialog = () => {
        setOpenEditInfoDialog(false);
        props.onClose();
    };

    const handleCancelEditInfoDialog = () => {
        setOpenEditInfoDialog(false);
        props.onClose();
    }

    const handleOkEditInfoDialog = () => {
        setUserInfo(currNode.id, infoRef.value);
        DB.setUserInfo(currNode.id, infoRef.value);
        setOpenEditInfoDialog(false);
        props.onClose(true);
    }

    const handleCloseInfoDialog = () => {
        setOpenInfoDialog(false);
        props.onClose();
    };

    const handleOkInfoDialog = () => {
        handleCloseInfoDialog();
    }

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

    const handleCancelRemoveDialog = () => {
        setOpenRemoveDialog(false);
        props.onClose();
    }

    const handleOkRemoveDialog = () => {
        let parent = findParentNode(currNode, props.data);
        if(!parent) return;
        const index = parent.children.indexOf(currNode);
        if (index > -1) {
            parent.children.splice(index, 1);
        }
        setOpenRemoveDialog(false);
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
        let newNode = props.getNextPerson();
        newNode.parent = currNode.id;
        currNode.children.push(newNode);
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
            <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>{currNode.name}</DialogTitle>
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
            <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>{currNode.name}</DialogTitle>
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
            <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>{currNode.name}</DialogTitle>
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

        <Dialog open={openRemoveDialog} onClose={handleCloseRemoveDialog} aria-labelledby="Name">
            <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>{currNode.name}</DialogTitle>
            <DialogContent>
            <DialogContentText>
            {currNode.name} will be removed. All the children will be removed as well.
            Do you want to continue?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleCancelRemoveDialog} color="primary">
                No
            </Button>
            <Button onClick={handleOkRemoveDialog} color="primary">
                Yes
            </Button>
            </DialogActions>
        </Dialog>

        <Dialog open={openEditInfoDialog} onClose={handleCloseEditInfoDialog}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>General Information</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Please add or edit the information related to {currNode.name}
            </DialogContentText>
            <DialogContentText >
            <span style={{color:'red'}}> Accepts html content as well</span>
            </DialogContentText>
            <TextField
            defaultValue={userInfo}
            autoFocus
            margin="dense"
            id="info"
            label="Info"
            type="text"
            variant="filled"
            multiline
            rows={8}
            fullWidth
            inputRef={(c)=>{infoRef=c}}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCancelEditInfoDialog} color="primary">
            Cancel
            </Button>
            <Button onClick={handleOkEditInfoDialog} color="primary">
            Submit
            </Button>
        </DialogActions>
        </Dialog>

        <Dialog open={openInfoDialog} onClose={handleCloseInfoDialog}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" 
            style={{backgroundColor:PreferenceMgr.getBackgroundColor(), 
                backgroundImage:PreferenceMgr.getBackgroundUrl(),
                color:PreferenceMgr.getFontColor(),
                textAlign:'center'}}>{currNode.name} {currNode.partner.name}</DialogTitle>
        <DialogContent 
            style={{backgroundColor:PreferenceMgr.getBackgroundColor(), 
                color:PreferenceMgr.getFontColor()}}>
            <DialogContentText component={'span'} style={{color:PreferenceMgr.getFontColor()}}>
                <div>{ReactHtmlParser(userInfo)}</div>
            </DialogContentText>
        </DialogContent>
        <DialogActions 
            style={{backgroundColor:PreferenceMgr.getBackgroundColor(), 
                backgroundImage:PreferenceMgr.getBackgroundUrl(),
                color:PreferenceMgr.getFontColor()}}>
            <Button onClick={handleOkInfoDialog} variant='outlined' color="primary">
            Ok
            </Button>
        </DialogActions>
        </Dialog>

        </div>
    );
}
