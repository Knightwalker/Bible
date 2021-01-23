"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const createNew = (data, callback) => {
  const db = getDb();

  let doc = {
    content: data.content,
    topic_id: new mongodb.ObjectId(data.topic_id)
  }

  db.collection("posts").insertOne(doc, (err, res) => {
    if (err) {
      callback(err); 
    } else {
      callback(null);
    }
  });
}

const getOneById = (id, callback) => {
  const db = getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("posts").findOne({_id: _id}, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

const modifyOneById = (id, content, callback) => {
  const db = getDb();
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
  createNew: createNew,
  getOneById: getOneById,
  modifyOneById: modifyOneById
}