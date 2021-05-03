"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb.js").getDb;

const createNew = async (data, callback) => {
  let docs = {
    content: data.content,
    topic_id: new mongodb.ObjectId(data.topic_id)
  }

  try {
    const db = await getDb();
    const collection = await db.collection("posts");
    const result = collection.insertOne(docs);
    return Promise.resolve(result);

  } catch (error) {
    return Promise.reject(errror);
  }
}

module.exports = {
  createNew: createNew
}