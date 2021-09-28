const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const config = require("../../config");

const URI = config.MONGODB_URL;
const mongoClient = new MongoClient(URI, {
  useUnifiedTopology: true, 
  writeConcern: {
    j: true
  }
});

// Private Variables
db = null;

/**
 * Establish connection to a MongoDB database server.
 */
const connect = async () => {  
  try {
    const client = await mongoClient.connect();
    db = await client.db("codegigas");
    return Promise.resolve();
  } catch (error) {
    if (mongoClient.isConnected) {
      await mongoClient.close();
    }
    db = null;
    return Promise.reject(error);
  }
}

const disconnect = async () => {
  if (mongoClient.isConnected) {
    await mongoClient.close();
    return Promise.resolve();
  } else {
    return Promise.reject("ERROR: MongoClient was not connected");
  }
}

/**
 * Returns a database instance
 * @see: {@link https://mongodb.github.io/node-mongodb-native/3.1/api/Db.html}
 */
const getDb = async () => {
  return new Promise((resolve, reject) => {
    if (mongoClient.isConnected && db != null) {
      resolve(db);
    } else {
      reject("ERROR: There is no database instance");
    }
  });
}

module.exports = {
  connect: connect,
  disconnect: disconnect,
  getDb: getDb
}