/*
https://codesandbox.io/p/sandbox/indexeddb-example-trv2f?file=%2Findex.js%3A93%2C22
*/
export default class DBHandler {
    databaseName: string;
    db:any;
    constructor(databaseName) {
      this.databaseName = databaseName;
      this.addData = this.addData.bind(this);
      this.removeData = this.removeData.bind(this);
      this.readAllData = this.readAllData.bind(this);
    }
  
    setDatabaseStores(event) {
      const db = event.target.result;
      const userObjectStore = db.createObjectStore("users", {
        keyPath: "userid"
      });
      userObjectStore.createIndex("name", "name", { unique: false });
      userObjectStore.createIndex("email", "email", { unique: true });
    }
  
    async openDatabase() {
      return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(this.databaseName,1);
        request.onerror = function(e) {
          reject();
        };
        request.onsuccess = (() => {
          this.db = request.result;
          resolve(request.result);
        });
        request.onupgradeneeded = this.setDatabaseStores;
      });
    }
  
    async addData(data) {
      return new Promise((resolve, reject) => {
        const userReadWriteTransaction = this.db.transaction(
          ["users"],
          "readwrite"
        );
        const newObjectStore = userReadWriteTransaction.objectStore("users");
  
        const addRequest = newObjectStore.add(data);
        addRequest.onsuccess = function() {
          resolve('add');
        };
  
        addRequest.onerror = e => {
          reject(e);
        };
      });
    }
  
    async removeData(id) {
      return new Promise((resolve, reject) => {
        const request = this.db
          .transaction("users", "readwrite")
          .objectStore("users")
          .delete(id);
  
        request.onsuccess = () => {
          resolve('success');
        };
      });
    }
  
    async readData(id) {
      return new Promise((resolve, reject) => {
        const readTransaction = this.db.transaction(["users"]);
        const objectStore = readTransaction.objectStore("users");
        const request = objectStore.get(id);
        request.onsuccess = (event) =>{
          resolve(event.result);
        };
      });
    }
  
    async readAllData() {
      return new Promise((resolve, reject) => {
        const readTransaction = this.db.transaction(["users"]);
        const objectStore = readTransaction.objectStore("users");
        objectStore.getAll().onsuccess = (event) => {
          resolve(event.result);
        };
      });
    }
  }