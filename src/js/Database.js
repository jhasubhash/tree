import firebase from 'firebase/app';
import 'firebase/firestore'; 
import isEqual from 'lodash.isequal';

class Database {
    constructor(){
        if (!Database.instance){
            Database.instance = this;
            this.db = null;
            this.parser = null;
            this.treeDataRef = null;
            this.treeDataBackupRef = null;
            this.treeCredRef = null;
            this.treeCred = null;
            this.treeData = null;
            this.userInfo = {};
        }
        return Database.instance;
    }

    initDatabase(){
        const firebaseConfig = {
            apiKey: "AIzaSyAqP3g27lowoxPAfG35GRfaixlYsG08VQU",
            authDomain: "dashboard-63843.firebaseapp.com",
            databaseURL: "https://dashboard-63843.firebaseio.com",
            projectId: "dashboard-63843",
            storageBucket: "dashboard-63843.appspot.com",
            messagingSenderId: "812486429745",
            appId: "1:812486429745:web:2592255e2738a0b3c19910"
          };
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
        this.db.enablePersistence()
        .catch(function(err) {
            if (err.code === 'failed-precondition') {
                console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time.");
            } else if (err.code === 'unimplemented') {
                console.log("The current browser does not support all of the features required to enable persistence");
            }
        });
        this.treeDataRef = this.db.collection("tree").doc("treeData");
        this.treeDataBackupRef = this.db.collection("tree").doc("treeDataBackup");
        this.treeCredRef = this.db.collection("tree").doc("cred");
        this.userInfoDescRef = this.db.collection("tree").doc("userInfo").collection("description");
    }

    isDataPresent(objArr, obj){
        for(let idx=0; idx<objArr.length; idx++)
            if(isEqual(objArr[idx],obj))
                return idx;
        return -1;
    }

    save(jsonData){
        this.treeData = jsonData;
        return this.treeDataRef.set(jsonData)
                .then(()=>this.saveAllUserInfo());
    }

    saveBackup(jsonData){
        return this.treeDataBackupRef.set(jsonData);
    }

    async getTreeCred(){
        if(this.treeCred) return this.treeData;
        let doc = await this.treeCredRef.get();
        this.treeCred = doc.data();
        return this.treeCred;
    }

    async getTreeData(){
        if(this.treeData) return this.treeData;
        let doc = await this.treeDataRef.get();
        this.treeData = doc.data();
        return this.treeData;
    }

    async getUserInfo(id){
        if(this.userInfo[id]) return this.userInfo[id].info;
        let infoDoc = await this.userInfoDescRef.doc(id).get();
        let json = infoDoc.exists?infoDoc.data():{info:""};
        this.userInfo[id] = {}; 
        this.userInfo[id].info = json.info;
        this.userInfo[id].changed = false;
        return json.info;
    }

    setUserInfo(id, info){
        this.userInfo[id].info = info;
        this.userInfo[id].changed = true;
    }

    async saveUserInfo(id){
        await this.userInfoDescRef.doc(id).set({info:this.userInfo[id].info});
    }

    async saveAllUserInfo(){
        let promises = []
        for (const key of Object.keys(this.userInfo)){
            if(this.userInfo[key].changed)
                promises.push(this.saveUserInfo(key));
        }
        return Promise.all(promises);
    }
}

export default new Database();