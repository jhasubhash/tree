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
import PreferenceMgr from '../js/PreferenceMgr';
import Slider from '@material-ui/core/Slider';

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
  const [activeFontFamily, setActiveFontFamily] = React.useState(props.fontFamily);
  const [fontSize, setFontSize] = React.useState(props.fontSize);
  const [fontColorPalette, setFontColorPalette] = React.useState(false);
  const [linkColorPalette, setLinkColorPalette] = React.useState(false);
  const [bgColorPalette, setBgColorPalette] = React.useState(false);
  const [activeTheme, setActiveTheme] = React.useState("dark");
  const [fontColor, setFontColor] = React.useState(props.fontColor);
  const [linkColor, setLinkColor] = React.useState(props.linkColor);
  const [activeTexture, setActiveTexture] = React.useState(props.activeTexture);
  const [bgColor, setBackgroundColor] = React.useState(props.bgColor);
  const [linkOpacity, setLinkOpacity] = React.useState(props.linkOpacity);

  React.useEffect(() => {
    setFontSize(props.fontSize);
    setActiveFontFamily(props.fontFamily);
    setFontColor(props.fontColor);
    setLinkColor(props.linkColor);
    setLinkOpacity(props.linkOpacity);
    setActiveTexture(PreferenceMgr.getTexture());
    setBackgroundColor(PreferenceMgr.getBackgroundColor());
  },[props]);

  const handleClose = () => {
    props.onClose();
  }
  const handleCancel = () => {
    PreferenceMgr.setPreferencesFromStore();
    let preference = PreferenceMgr.getPreferences();
    setFontSize(preference.fontSize);
    setActiveFontFamily(preference.fontFamily);
    setFontColor(preference.fontColor);
    setLinkColor(preference.linkColor);
    setLinkOpacity(preference.linkOpacity);
    setActiveTexture(preference.textureName);
    setBackgroundColor(preference.bgColor);
    handleClose();
  }
  const handleReset = () => {
    let preference = PreferenceMgr.getOrgPreferences();
    setFontSize(preference.fontSize);
    setActiveFontFamily(preference.fontFamily);
    setFontColor(preference.fontColor);
    setLinkColor(preference.linkColor);
    PreferenceMgr.resetPreferences();
  }

  const handleSave = () => {
    PreferenceMgr.savePreferences();
    handleClose();
  }

  const handleFontColorPalette = () => {
    setFontColorPalette(!fontColorPalette);
  }

  const handleLinkColorPalette = () => {
    setLinkColorPalette(!linkColorPalette);
  }

  const handleOpacityChange = (event, newValue) => {
    setLinkOpacity(newValue);
    PreferenceMgr.setLinkOpacity(newValue);
  }

  const handleBgColorPalette = () => {
    setBgColorPalette(!bgColorPalette);
  }

  const onFontColorPaletteClose = () => {
    setFontColorPalette(false);
  }
  const onLinkColorPaletteClose = () => {
    setLinkColorPalette(false);
  }

  const onBgColorPaletteClose = () => {
    setBgColorPalette(false);
  }

  const onThemeChange = (event) => {
    setActiveTheme(event.target.value);
  }

  const onFontSizeChange = (event) => {
    setFontSize(event.target.value);
    PreferenceMgr.setFontSize(event.target.value);
  }

  const onTextureChange = (event) => {
    setActiveTexture(event.target.value);
    PreferenceMgr.setTexture(event.target.value);
  }

  const onBgColorChange = (color) => {
    setBackgroundColor(color);
    PreferenceMgr.setBackgroundColor(color);
  }

  const onFontFamilyChange = (nextFont)=>{
      setActiveFontFamily(nextFont.family);
      PreferenceMgr.setFontFamily(nextFont.family);
  }

  const onFontColorChange = (color)=>{
    setFontColor(color);
    PreferenceMgr.setFontColor(color);
  }

  const onLinkColorChange = (color)=>{
    setLinkColor(color);
    PreferenceMgr.setLinkColor(color);
  }

  return (
    <div className={classes.root}>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <Dialog open={fontColorPalette} onClose={onFontColorPaletteClose}>
        <ColorPickerView color={fontColor} setColor={onFontColorChange}/>
        </Dialog>
        <Dialog open={linkColorPalette} onClose={onLinkColorPaletteClose}>
        <ColorPickerView color={linkColor} setColor={onLinkColorChange}/>
        </Dialog>
        <Dialog open={bgColorPalette} onClose={onBgColorPaletteClose}>
        <ColorPickerView color={bgColor} setColor={onBgColorChange}/>
        </Dialog>
        <DialogTitle id="form-dialog-title" style={{textAlign:'center'}}>Settings</DialogTitle>
        <DialogContent dividers style={{overflow:'hidden'}}>
        <Grid container spacing={3} >
        <Grid container item xs={12} justify="space-between">
          <Grid item>
          <Typography>Set Font :</Typography>
          </Grid>
          <Grid item>
          <FontPicker
                    apiKey="AIzaSyAqP3g27lowoxPAfG35GRfaixlYsG08VQU"
                    activeFontFamily={activeFontFamily}
                    onChange={onFontFamilyChange}
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
            onChange={onFontSizeChange}
          >
            <MenuItem value={9}>9px</MenuItem>
            <MenuItem value={10}>10px</MenuItem>
            <MenuItem value={11}>11px</MenuItem>
            <MenuItem value={12}>12px</MenuItem>
            <MenuItem value={13}>13px</MenuItem>
            <MenuItem value={14}>14px</MenuItem>
            <MenuItem value={15}>15px</MenuItem>
            <MenuItem value={16}>16px</MenuItem>
            <MenuItem value={17}>17px</MenuItem>
            <MenuItem value={18}>18px</MenuItem>
            <MenuItem value={19}>19px</MenuItem>
            <MenuItem value={20}>20px</MenuItem>
            <MenuItem value={21}>21px</MenuItem>
            <MenuItem value={22}>22px</MenuItem>
            <MenuItem value={23}>23px</MenuItem>
            <MenuItem value={24}>24px</MenuItem>
          </Select>
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Theme :</Typography>
          </Grid>
          <Grid item>
          <Select
            labelId="themeMenu"
            id="themeMenu"
            value={activeTheme}
            onChange={onThemeChange}
          >
            <MenuItem value={"dark"}>Dark</MenuItem>
            <MenuItem value={"light"}>Light</MenuItem>
          </Select>
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Font Color :</Typography>
          </Grid>
          <Grid item>
          <Button style={{backgroundColor:fontColor}} size='small' variant="contained" onClick={handleFontColorPalette}>&nbsp;</Button>
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Link Color :</Typography>
          </Grid>
          <Grid item>
          <Button style={{backgroundColor:linkColor}} size='small' variant="contained" onClick={handleLinkColorPalette}>&nbsp;</Button>
          </Grid>
          </Grid>
          <Grid container item xs={12} justify="space-between">
          <Grid item>
          <Typography>Link Opacity :</Typography>
          </Grid>
          <Grid item>
          <Slider defaultValue={linkOpacity} min={0} step={0.1} max={1} style={{width:'150px'}} 
            value={linkOpacity} onChange={handleOpacityChange}
            aria-labelledby="continuous-slider" />
          </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} justify="space-between">
          <Grid item>
          <Typography>Canvas Color :</Typography>
          </Grid>
          <Grid item>
          <Button style={{backgroundColor:bgColor}} size='small' variant="contained" onClick={handleBgColorPalette}>&nbsp;</Button>
          </Grid>
          </Grid>
          <Grid container item xs={12} justify="space-between">
          <Grid item>
          <Typography>Texture : </Typography>
          </Grid>
          <Grid item>
          <Select
            labelId="textureMenu"
            id="textureMenu"
            value={activeTexture}
            onChange={onTextureChange}
            style={{width:'170px'}}
          >
            <MenuItem value={"none"}>None</MenuItem>
            <MenuItem value={"arabesque"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("arabesque")}}>Arabesque</MenuItem>
            <MenuItem value={"45-degree-fabric-light"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("45-degree-fabric-light")}}>45-degree-fabric-light</MenuItem>
            <MenuItem value={"asfalt-light"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("asfalt-light")}}>Asfalt-light</MenuItem>
            <MenuItem value={"back-pattern"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("back-pattern")}}>Back-pattern</MenuItem>
            <MenuItem value={"az-subtle"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("az-subtle")}}>Az-subtle</MenuItem>
            <MenuItem value={"basketball"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("basketball")}}>Basketball</MenuItem>
            <MenuItem value={"bedge-grunge"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("bedge-grunge")}}>Bedge-grunge</MenuItem>
            <MenuItem value={"beige-paper"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("beige-paper")}}>Beige-paper</MenuItem>
            <MenuItem value={"binding-dark"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("binding-dark")}}>Binding-dark</MenuItem>
            <MenuItem value={"binding-light"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("binding-light")}}>Binding-light</MenuItem>
            <MenuItem value={"black-thread-light"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("black-thread-light")}}>Black-thread-light</MenuItem>
            <MenuItem value={"blizzard"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("blizzard")}}>Blizzard</MenuItem>
            <MenuItem value={"brushed-alum"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("brushed-alum")}}>Brushed-alum</MenuItem>
            <MenuItem value={"brushed-alum-dark"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("brushed-alum-dark")}}>Brushed-alum-dark</MenuItem>
            <MenuItem value={"carbon-fibre"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("carbon-fibre")}}>Carbon-fibre</MenuItem>
            <MenuItem value={"cardboard"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("cardboard")}}>Cardboard</MenuItem>
            <MenuItem value={"circles"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("circles")}}>Circles</MenuItem>
            <MenuItem value={"clean-gray-paper"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("clean-gray-paper")}}>Clean-gray-paper</MenuItem>
            <MenuItem value={"climpek"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("climpek")}}>Climpek</MenuItem>
            <MenuItem value={"dimension"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("dimension")}}>Dimension</MenuItem>
            <MenuItem value={"diamonds-are-forever"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("diamonds-are-forever")}}>Diamonds-are-forever</MenuItem>
            <MenuItem value={"diamond-eyes"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("diamond-eyes")}}>Diamond-eyes</MenuItem>
            <MenuItem value={"green-dust-and-scratches"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("green-dust-and-scratches")}}>Green-dust-and-scratches</MenuItem>
            <MenuItem value={"leather"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("leather")}}>Leather</MenuItem>
            <MenuItem value={"large-leather"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("large-leather")}}>Large-leather</MenuItem>
            <MenuItem value={"light-gray"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("light-gray")}}>Light-gray</MenuItem>
            <MenuItem value={"lyonnette"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("lyonnette")}}>Lyonnette</MenuItem>
            <MenuItem value={"maze-white"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("maze-white")}}>Maze-white</MenuItem>
            <MenuItem value={"skulls"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("skulls")}}>Skulls</MenuItem>
            <MenuItem value={"swirl"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("swirl")}}>Swirl</MenuItem>
            <MenuItem value={"washi"} style={{backgroundImage:PreferenceMgr.getBackgroundUrl("washi")}}>Washi</MenuItem>
            
          </Select></Grid>
          </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {false&&<Button onClick={handleReset} color="primary">
            Reset
          </Button>}
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
