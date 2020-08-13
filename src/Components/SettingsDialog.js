import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import FontPicker from "font-picker-react";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import './SettingsDialog.css';

export default function SettingsDialog(props) {

  const [activeFontFamily, setActiveFontFamily] = React.useState("Helvetica Neue");
  const [fontSize, setFontSize] = React.useState(11);

  const handleClose = () => {
    props.onClose();
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
        <DialogContent dividers>
          <Typography style={{float:'left'}}>Set Font :</Typography>
          <FontPicker style={{float:'right'}}
                    apiKey="AIzaSyAqP3g27lowoxPAfG35GRfaixlYsG08VQU"
                    activeFontFamily={activeFontFamily}
                    onChange={(nextFont) =>
                            setActiveFontFamily(nextFont.family)
                    }
                />
          <br/>
          <Typography style={{float:'left'}}>Font Size :</Typography>
          <Select style={{float:'right'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fontSize}
            onChange={(event) => {
              setFontSize(event.target.value);
            }}
          >
            <MenuItem value={"9px"}>9px</MenuItem>
            <MenuItem value={"10px"}>10px</MenuItem>
            <MenuItem value={"11px"}>11px</MenuItem>
            <MenuItem value={"12Px"}>12px</MenuItem>
            <MenuItem value={"13Px"}>13px</MenuItem>
            <MenuItem value={"14Px"}>14px</MenuItem>
            <MenuItem value={"15Px"}>15px</MenuItem>
            <MenuItem value={"16Px"}>16px</MenuItem>
            <MenuItem value={"17Px"}>17px</MenuItem>
            <MenuItem value={"18Px"}>18px</MenuItem>
            <MenuItem value={"19Px"}>19px</MenuItem>
            <MenuItem value={"20Px"}>20px</MenuItem>
            <MenuItem value={"21Px"}>21px</MenuItem>
            <MenuItem value={"22Px"}>22px</MenuItem>
            <MenuItem value={"23Px"}>23px</MenuItem>
            <MenuItem value={"24Px"}>24px</MenuItem>
          </Select>
          <br/>
          <Typography style={{float:'left'}}>Change Theme (light/dark) </Typography>
          <br/>
          <Typography style={{float:'left'}}>Change Background color and texture </Typography>
          <br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
