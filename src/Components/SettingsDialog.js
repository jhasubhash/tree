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
import ThemeSwitch from './themeSwitch'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ColorPickerView from './ColorPickerView';
import ToggleButton from '@material-ui/lab/ToggleButton';
import PaletteIcon from '@material-ui/icons/Palette';

import './SettingsDialog.css';
import { Hidden } from '@material-ui/core';

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


export default function SettingsDialog(props) {
  const classes = useStyles();
  const [activeFontFamily, setActiveFontFamily] = React.useState("Helvetica Neue");
  const [fontSize, setFontSize] = React.useState(11);
  const [fontColorPalette, setFontColorPalette] = React.useState(false);
  const [linkColorPalette, setLinkColorPalette] = React.useState(false);

  const handleClose = () => {
    props.onClose();
  }
  const handleFontColorPalette = () => {
    setFontColorPalette(!fontColorPalette);
  }

  const handleLinkColorPalette = () => {
    setLinkColorPalette(!linkColorPalette);
  }
  const onFontColorPaletteClose = () => {
    setFontColorPalette(false);
  }
  const onLinkColorPaletteClose = () => {
    setLinkColorPalette(false);
  }

  return (
    <div className={classes.root}>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <Dialog open={fontColorPalette} onClose={onFontColorPaletteClose}>
        <ColorPickerView/>
        </Dialog>
        <Dialog open={linkColorPalette} onClose={onLinkColorPaletteClose}>
        <ColorPickerView/>
        </Dialog>
        <DialogTitle id="form-dialog-title">Settings (under development)</DialogTitle>
        <DialogContent dividers style={{overflow:'hidden'}}>
        <Grid container spacing={3} >
        <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Set Font :</Typography>
          </Grid>
          <Grid item>
          <FontPicker
                    apiKey="AIzaSyAqP3g27lowoxPAfG35GRfaixlYsG08VQU"
                    activeFontFamily={activeFontFamily}
                    onChange={(nextFont) =>
                            setActiveFontFamily(nextFont.family)
                    }
                />
          </Grid>
         </Grid>
        <Grid container item xs={12} spacing={3} justify="space-between">
        <Grid item>
          <Typography>Font Size :</Typography>
          </Grid>
          <Grid item>
          <Select
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
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Change Theme (light/dark) </Typography>
          </Grid>
          <Grid item>
          <div><ThemeSwitch/></div>
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Font Color :</Typography>
          </Grid>
          <Grid item>
          <button class="colorButton" onClick={handleFontColorPalette}></button>
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Link Color :</Typography>
          </Grid>
          <Grid item>
          <button class="colorButton" onClick={handleLinkColorPalette}></button>
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3}>
          <Grid item>
          <Typography>Change Background color and texture </Typography>
          </Grid>
          </Grid>
          </Grid>
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
