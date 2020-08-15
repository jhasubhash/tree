
import { setFontSize, setFontColor, setLinkColor } from '../Reducers/actions';
import { setLinkOpacity, setFontFamily, setNodeShape } from '../Reducers/actions';
import $ from 'jquery';

const orgPref = {
    fontFamily : "Helvetica Neue",
    fontSize : 12,
    fontColor : '#F4F4F4',
    linkColor : '#2593B8',
    linkOpacity : 0.4,
    nodeShape : 'circle',
    textureName: 'arabesque',
    bgColor: '#242424',
    version: 1.0
}

function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

function setBodyBgColor(color){
    $('body').css('background-color', color);
}

function setBodyBackground(textureName){
    if(textureName === 'none')
        $('body').css('background-image', 'none');
    else
        $('body').css('background-image', 'url(https://www.transparenttextures.com/patterns/'+textureName+'.png)');
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
        //window.localStorage.clear();
        let preferences = window.localStorage.getItem("preferences");
        if(preferences){
            let savedPreference = JSON.parse(preferences);
            if(savedPreference.version === orgPref.version)
                this.setPreferences(savedPreference);
            else{
                //new properties has been added
                Object.keys(orgPref)
                    .forEach(key => savedPreference[key] === undefined && (savedPreference[key] = orgPref[key]))
                window.localStorage.setItem("preferences", JSON.stringify(savedPreference));
                this.setPreferences(savedPreference);
            }
            this.notifyAll();
        }else{
            this.setPreferences(orgPref);
            window.localStorage.setItem("preferences", JSON.stringify(orgPref));
        }
        addGoogleFont(this.preferences.fontFamily);
        this.setTexture(this.preferences.textureName);
        this.setBackgroundColor(this.preferences.bgColor);
    }


    notifyAll(){
        setFontSize(this.preferences.fontSize);
        setFontFamily(this.preferences.fontFamily);
        setLinkColor(this.preferences.linkColor);
        setFontColor(this.preferences.fontColor);

        setBodyBgColor(this.preferences.bgColor);
        setBodyBackground(this.preferences.textureName);
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

    setBackgroundColor(color){
        this.preferences.bgColor = color;
        setBodyBgColor(color);
    }

    getBackgroundColor(color){
        return this.preferences.bgColor;
    }

    setTexture(textureName){
        this.preferences.textureName = textureName;
        setBodyBackground(textureName);
    }

    getTexture(){
        return this.preferences.textureName;
    }
}

export default new PreferenceMgr();