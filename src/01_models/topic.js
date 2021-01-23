"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const insertOne = (data, callback) => {
  const db = getDb();

  let doc = {
    name: data.name,
    display_name: data.display_name,
    slug: data.slug,
    position: data.position,
    course_id: new mongodb.ObjectId(data.course_id)
  }

  db.collection("topics").insertOne(doc, (error, result) => {
    if (error) {
      callback(error, null); 
    } else {
      callback(null, result);
    }
  });
}

const getOneById = (id, callback) => {
  const db = getDb();
  const _id = new mongodb.ObjectId(id);

  db.collection("topics").findOne({_id: _id}, (error, result) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, result);
    }
  });

}

const getTopicWithPostsBySlug = (slug, cb) => {
  const db = getDb();

  db.collection("topics").aggregate([
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
  ]).toArray((err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res);
    }
  });

}

module.exports = {
  insertOne: insertOne,
  getOneById: getOneById,
  getTopicWithPostsBySlug: getTopicWithPostsBySlug
}