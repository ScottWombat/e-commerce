class DatabaseProvider{
  db:any;
  dbName:string;
  dbVersion:number;
  stores:any;
  request:any;
  constructor() {
    this.db = {};
    this.dbName = 'todos';
    this.dbVersion = 1;
    this.stores = { TODOS: 'todos' };
    this.request = null;
  }

  init = () => {
    return new Promise((resolve) => {
      this.request = window.indexedDB.open(this.dbName, this.dbVersion);

      this.request.onupgradeneeded = () => {
        this.db = this.request.result;
        this.createTodosStore();
      };

      this.request.onsuccess = event => {
        this.db = event.target.result;
        resolve(this.db);
      };

      this.request.onerror = error => console.error({ error });
    });
  }

  createTodosStore = () => {
    //const storeConfig = { keyPath: "id", autoIncrement: true };
    const storeConfig = { keyPath: "id"};
    const objectStore = this.db.createObjectStore(this.stores.TODOS, storeConfig);
    objectStore.createIndex("data", "data");
    objectStore.createIndex("completed", "completed");
  }

  getTodosObjectStore = () => {
    const transaction = this.db.transaction([this.stores.TODOS], "readwrite");
    transaction.onerror = error => console.error('There was a transaction error', { error });
    return transaction.objectStore(this.stores.TODOS)
  }

  add = name => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore();
      const addRequest = objectStore.put({ data:'d', completed: false });
      addRequest.onsuccess = async () => {
        const allTodos = await this.getAll();
        resolve(allTodos);
      }
      addRequest.onerror = error => reject(error);
    });
  }
  getAll = () => {
    return new Promise((resolve, reject) => {
      const objectStore = this.getTodosObjectStore();

      const openCursor = objectStore.openCursor();
      const items = [];

      openCursor.onsuccess = event => {
        const cursor = event.target.result;
        if (cursor) {
          items.push(cursor.value);
          cursor.continue();
        } else {
          resolve(items);
        }
      };

      openCursor.onerror = error => reject(error);
    });
  }

}
export const DatabaseService = new DatabaseProvider()