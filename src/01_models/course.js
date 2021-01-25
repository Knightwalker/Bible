"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const getAll = async () => {
  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const result = await collection.find({}).toArray();
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
}

const readOneByIdAsync = async (id) => {
  const db = getDb();
  const _id = new mongodb.ObjectId(id);

  try {
    const collection = await db.collection("courses");
    const result = collection.findOne({_id: _id});
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }

}

const readOneById = (id, callback) => {
  const db = getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("courses").findOne({_id: _id}, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });

}

const readOneBySlug_WithTopics = (slug, callback) => {
  const db = getDb();

  db.collection("courses").aggregate([
    {
      $match: {
        slug: slug
      }
    },
    {
      $lookup: {
          from: "topics",
          localField: "_id",
          foreignField: "course_id",
          as: "topics"
      },
    }
  ]).toArray((err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });

}

const updateOneById_IncrementTopicsCountByOne = (id, callback) => {
  const db = getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("courses").updateOne({_id: _id}, {
    $inc: {topics_count: 1}
  }, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });
}

module.exports = {
  readOneByIdAsync: readOneByIdAsync,
  readOneById: readOneById,
  readOneBySlug_WithTopics: readOneBySlug_WithTopics,
  updateOneById_IncrementTopicsCountByOne: updateOneById_IncrementTopicsCountByOne,
  getAll: getAll
}