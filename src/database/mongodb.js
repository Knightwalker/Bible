const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db = null;
let url = process.env.DB_REMOTE_URL;

const options = {
  useUnifiedTopology: true
}

const connect = (callback) => {
  MongoClient.connect(url, options, (err, client) => {
    if (err) { 
      callback(err); 
    } else {
      db = client.db();
      callback(null);
    }
  });
}

const getDb = () => {
  if (db) {
    return db;
  } else {
    throw "MongoDB is unable to get codegigas"; // this is not needed
  }
}

module.exports = {
  connect: connect,
  getDb: getDb
};