"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const insertOne = async (data) => {
  var docs = {
    name: data.name,
    display_name: data.display_name,
    slug: data.slug,
    position: data.position,
    course_id: new mongodb.ObjectId(data.course_id),
    section_id: new mongodb.ObjectId(data.section_id)
  }

  try {
    const db = await getDb();
    const collection = await db.collection("topics");
    const result = await collection.insertOne(docs);
    return Promise.resolve(result.ops[0]);

  } catch (error) {
    return Promise.reject(error);
  }

}

module.exports = {
  insertOne: insertOne,
}