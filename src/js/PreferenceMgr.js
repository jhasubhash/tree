
import { setFontSize, setFontColor, setLinkColor } from '../Reducers/actions';
import { setLinkOpacity, setFontFamily, setNodeShape } from '../Reducers/actions';
import $ from 'jquery';

const orgPref = {
    fontFamily : "Libre Franklin",
    fontSize : 12,
    fontColor : '#F4F4F4',
    linkColor : '#2593B8',
    linkOpacity : 0.5,
    nodeShape : 'circle',
    textureName: 'arabesque',
    bgColor: '#242424',
    theme: 'dark',
    version: 1.2
}

const themeMap = {};
themeMap['dark'] = orgPref;
themeMap['light'] = {
    fontFamily : "Libre Franklin",
    fontSize : 13,
    fontColor : '#110000',
    linkColor : '#071D53',
    linkOpacity : 0.3,
    nodeShape : 'circle',
    textureName: 'cardboard',
    bgColor: '#FFFFFF',
    theme: 'light',
    version: 1.2
}
themeMap['classic'] = {
    fontFamily : "Merriweather",
    fontSize : 12,
    fontColor : '#F4F4F4',
    linkColor : '#E5F702',
    linkOpacity : 0.6,
    nodeShape : 'circle',
    textureName: 'skulls',
    bgColor: '#242424',
    theme: 'classic',
    version: 1.2
}

function addGoogleFont(FontName) {
    $("head").append("<link href='https://fonts.googleapis.com/css?family=" + FontName + "' rel='stylesheet' type='text/css'>");
}

addGoogleFont(orgPref.fontFamily);

function setBodyBgColor(color){
    $('body').css('background-color', color);
}

function setBodyBackground(url){
        $('body').css('background-image', url);
}

function getPreferenceFromTheme(themeStr){
    return themeMap[themeStr];
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
        setLinkOpacity(this.preferences.linkOpacity);
        setFontColor(this.preferences.fontColor);

        setBodyBgColor(this.preferences.bgColor);
        setBodyBackground(this.getBackgroundUrl(this.preferences.textureName));
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

    getLinkOpacity(opacity){
        return this.preferences.linkOpacity;
    }

    setActiveTheme(theme){
        if(theme === this.preferences.theme) return;
        this.preferences = getPreferenceFromTheme(theme);
        this.notifyAll();
    }

    getActiveTheme(){
        return this.preferences.theme;
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

    getBackgroundUrl(textureName){
        if(textureName === 'none')
            return textureName;
        if(textureName === undefined)
            return 'url(https://www.transparenttextures.com/patterns/'+this.preferences.textureName+'.png)';
        return 'url(https://www.transparenttextures.com/patterns/'+textureName+'.png)';
    }

    setTexture(textureName){
        this.preferences.textureName = textureName;
        setBodyBackground(this.getBackgroundUrl(textureName));
    }

    getTexture(){
        return this.preferences.textureName;
    }
}

export default new PreferenceMgr();