
import { setFontSize, setFontColor, setLinkColor } from '../Reducers/actions';
import { setLinkOpacity, setFontFamily, setNodeShape } from '../Reducers/actions';
import $ from 'jquery';

const orgPref = {
    fontFamily : "Helvetica Neue",
    fontSize : 12,
    fontColor : '#F4F4F4',
    linkColor : '#2593B8',
    linkOpacity : 0.6,
    nodeShape : 'circle',
}

function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

class PreferenceMgr {
    constructor(){
        if (!PreferenceMgr.instance){
            PreferenceMgr.instance = this;
            this.preferences = orgPref;
            this.init = false;
        }
        return PreferenceMgr.instance;
    }

    initPreferenceMgr(){
        if(this.init) return;
        this.init = true;
        let preferences = window.localStorage.getItem("preferences");
        if(preferences){
            this.setPreferences(JSON.parse(preferences));
            this.notifyAll();
        }else{
            this.setPreferences(orgPref);
            window.localStorage.setItem("preferences", JSON.stringify(orgPref));
        }
        addGoogleFont(this.preferences.fontFamily);
    }

    notifyAll(){
        setFontSize(this.preferences.fontSize);
        setFontFamily(this.preferences.fontFamily);
        setLinkColor(this.preferences.linkColor);
        setFontColor(this.preferences.fontColor);
    }

    savePreferences(){
        window.localStorage.setItem("preferences", JSON.stringify(this.preferences));
    }

    setPreferencesFromStore(){
        this.setPreferences(JSON.parse(window.localStorage.getItem("preferences")));
        this.notifyAll();
    }

    resetPreferences(){
        this.setPreferences(orgPref);
        this.notifyAll();
    }
    
    setPreferences(currPref){
        this.preferences = currPref;
    }

    setFontSize(size){
        this.preferences.fontSize = size;
        setFontSize(size);
    }

    setFontFamily(family){
        this.preferences.fontFamily = family;
        setFontFamily(family);
    }

    getFontSize(){
        return this.preferences.fontSize;
    }

    getFontFamily(){
        return this.preferences.fontFamily;
    }

    setFontColor(color){
        this.preferences.fontColor = color;
        setFontColor(color);
    }

    setLinkColor(color){
        this.preferences.linkColor = color;
        setLinkColor(color);
    }

    getFontColor(){
        return this.preferences.fontColor;
    }

    getLinkColor(){
        return this.preferences.linkColor;
    }

    setLinkOpacity(opacity){
        this.preferences.linkOpacity = opacity;
        setLinkOpacity(opacity);
    }

    getPreferences(){
        return this.preferences;
    }
    getOrgPreferences(){
        return orgPref;
    }
}

export default new PreferenceMgr();