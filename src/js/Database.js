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
            this.treeCredRef = null;
            this.treeCred = null;
            this.treeData = null;
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
        this.treeDataRef = this.db.collection("tree").doc("treeData");
        this.treeCredRef = this.db.collection("tree").doc("cred");
    }

    isDataPresent(objArr, obj){
        for(let idx=0; idx<objArr.length; idx++)
            if(isEqual(objArr[idx],obj))
                return idx;
        return -1;
    }

    save(jsonData){
        this.treeData = jsonData;
        return this.treeDataRef.set(jsonData);
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
}

export default new Database();