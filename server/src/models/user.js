"use strict";

const crypto = require("crypto");
const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const bCheckIfUsernameIsAvaliable = async (username, callback) => {
  const db = await getDb();
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

const bCheckIfUsernameIsAvaliableAsync = async (username) => {
  const db = await getDb();
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

const bCheckIfEmailIsAvaliableAsync = async (email) => {
  const db = await getDb();
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

const insertOneWithCallback = async (user, callback) => {
  const db = await getDb();
  db.collection("users").insertOne(user, (err, res) => {
    if (err) {
      callback(err); 
    } else {
      callback(null);
    }
  });
}

const getUserByUsername = async (username) => {
  const db = await getDb();
  return db.collection("users").findOne({username: username});
}

const insertOneAsync = async (user) => {
  const db = await getDb();
  var result = null;
  try {
    result = await db.collection("users").insertOne(user);
  } catch (err) {
    throw new Error(err);
  }

  return result;
}

// Validation Checks
const isUsernameLengthValid = (username) => {
  if (username.length >= 4 && username.length <= 32) { 
    return true; 
  } else { 
    return false; 
  }
}

const isPasswordLengthValid = (password) => {
  if (password.length >= 8 && password.length <= 64) { 
    return true;
  } else {
    return false;
  } 
}

const isEmailValid = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;

  if (regex.test(email)) { 
    return true; 
  } 
  else { 
    return false; 
  }
}

const didUserAgreeWithAge = (age) => {
  // Protect against unexisting variables. HTML form, checkbox will not send value if unchecked. 
  if (typeof age === "undefined") {
    return false;
  } else if (age === "yes") {
    return true;
  } else {
    return false;
  }
}

const didUserAgreeWithTOS = (tos) => {
  // Protect against unexisting variables. HTML form, checkbox will not send value if unchecked. 
  if (typeof tos === "undefined") {
    return false;
  } else if (tos === "yes") {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  bCheckIfUsernameIsAvaliable: bCheckIfUsernameIsAvaliable,
  bCheckIfUsernameIsAvaliableAsync: bCheckIfUsernameIsAvaliableAsync,
  bCheckIfEmailIsAvaliableAsync: bCheckIfEmailIsAvaliableAsync,
  generateSalt: generateSalt,
  generateHash: generateHash,
  insertOneAsync: insertOneAsync,
  getUserByUsername: getUserByUsername,

  isUsernameLengthValid: isUsernameLengthValid,
  isPasswordLengthValid: isPasswordLengthValid,
  isEmailValid: isEmailValid,
  didUserAgreeWithAge: didUserAgreeWithAge,
  didUserAgreeWithTOS: didUserAgreeWithTOS
};