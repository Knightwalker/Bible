"use strict";

const crypto = require("crypto");
const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const bCheckIfUsernameIsAvaliable = (username, callback) => {
  const db = getDb();
  db.collection("users").findOne({username: username}, (error, result) => {
    if (error) { 
      callback(error, null);
    } else {
      if (result) {
        callback(null, false);
      } else {
        callback(null, true);
      }
    }
  });
}

const bCheckIfUsernameIsAvaliableWithPromise = async (username) => {
  const db = getDb();
  let result = null;
  try {
    result = await db.collection("users").findOne({username: username});
  } catch (err) {
    throw new Error(err);
  }

  if (result == null) {
    return true;
  } else {
    return false;
  }
    
}

const bCheckIfEmailIsAvaliableWithPromise = async (email) => {
  const db = getDb();
  let result = null;
  try {
    result = await db.collection("users").findOne({email: email});
  } catch (err) {
    throw new Error(err);
  }

  if (result == null) {
    return true;
  } else {
    return false;
  }

}

// Creating a unique salt for a particular user
const generateSalt = () => {
  const salt = crypto.randomBytes(16).toString('hex');
  return salt;
}

// First you need to create a unique salt for every user 
// then this function hashes the user password with their salt creating a hash 
// this hash is stored in the database as a password
const generateHash = (password, salt) => {
  // Hashing user's password and salt with 1000 iterations
  return crypto.pbkdf2Sync(password, salt, 1000, 512, "sha512").toString("hex");
}

const insertOneWithCallback = (user, callback) => {
  const db = getDb();
  db.collection("users").insertOne(user, (err, res) => {
    if (err) {
      callback(err); 
    } else {
      callback(null);
    }
  });
}

const insertOneAsync = async (user) => {
  const db = getDb();
  let result = null;
  try {
    result = await db.collection("users").insertOne(user);
  } catch (err) {
    throw new Error(err);
  }

}

module.exports = {
  bCheckIfUsernameIsAvaliable: bCheckIfUsernameIsAvaliable,
  bCheckIfUsernameIsAvaliableWithPromise: bCheckIfUsernameIsAvaliableWithPromise,
  bCheckIfEmailIsAvaliableWithPromise: bCheckIfEmailIsAvaliableWithPromise,
  generateSalt: generateSalt,
  generateHash: generateHash,
  insertOneAsync: insertOneAsync
};