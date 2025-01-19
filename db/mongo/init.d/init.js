//print('Start #################################################################');

// Create a new database and switch to it

db = db.getSiblingDB('mydb');
//db.createCollection("products")
//db.products.getPlanCache().clear()


// Create a new collection and insert documents
db.myCollection.insert([
  { name: 'Document 1' },
  { name: 'Document 2' },
  { name: 'Document 3' }
]);

// Create a user with read and write privileges for the database
db.createUser({
  user: 'myuser',
  pwd: 'mypassword',
  roles: [
    { role: 'readWrite', db: 'mydb' }
  ]
});