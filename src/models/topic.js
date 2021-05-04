"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const getOneById = async (id, callback) => {
  const db = await getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("topics").findOne({_id: _id}, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });

}

const getTopicWithPostsBySlugAsync = async (slug) => {
  const db = await getDb();

  try {
    const collection = await db.collection("topics");
    const result = await collection.aggregate([
      {
        $match: {
          slug: slug
        }
      },
      {
        $lookup:
          {
            from: "posts",
            localField: "_id",
            foreignField: "topic_id",
            as: "posts"
          }
      }
    ]);
    const resultArr = await result.toArray();
    return Promise.resolve(resultArr);
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
  getTopicWithPostsBySlugAsync: getTopicWithPostsBySlugAsync,
  insertOne: insertOne,
}