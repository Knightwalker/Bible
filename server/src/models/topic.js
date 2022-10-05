"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const getOneById = async (id, callback) => {
  const _id = new mongodb.ObjectId(id);
  const db = await getDb();

  db.collection("topics").findOne({_id: _id}, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });

}

const getOneByIdAsync = async (id) => {
  const _id = new mongodb.ObjectId(id);
 
  try {
    const db = await getDb();
    const collection = await db.collection("topics");
    const result = collection.findOne({_id: _id});
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
}

const getTopicWithPostsBySlug = async (slug) => {
  try {
    const db = await getDb();
    const collection = await db.collection("topics");
    const cursor = await collection.aggregate([
      { $match: { slug: slug } },
      {
        $lookup:
        {
          from: "posts",
          let: { "lv1_id": "$_id" },
          pipeline: [
            { $match: { $expr: { $eq: ['$topic_id', '$$lv1_id'] } } },
            { $addFields: { id: { $toString: "$_id" }, topic_id: { $toString: "$topic_id" } } },
            { $project: { "_id": 0 } }
          ],
          as: "postsArr"
        },
      },
      { $addFields: { id: { $toString: "$_id" }, course_id: { $toString: "$course_id" } } },
      { $project: { "_id": 0 } }
    ]);
    const resultArr = await cursor.toArray();
    return Promise.resolve(resultArr[0]);
  } catch (error) {
    return Promise.reject(error);
  }

}

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
  getOneById: getOneById,
  getOneByIdAsync: getOneByIdAsync,
  getTopicWithPostsBySlug: getTopicWithPostsBySlug,
  insertOne: insertOne,
}