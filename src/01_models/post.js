"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb.js").getDb;

const getOneById = async (id, callback) => {
  const db = await getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("posts").findOne({_id: _id}, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

const modifyOneById = async (id, content, callback) => {
  const db = await getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("posts").findOneAndUpdate({_id: _id}, {
    $set: {content: content}
  }, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  getOneById: getOneById,
  modifyOneById: modifyOneById
}