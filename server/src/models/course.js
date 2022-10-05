"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const getOneById = async (id) => {
  const _id = new mongodb.ObjectId(id);

  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const result = collection.findOne({_id: _id});
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }

}

const getOneById_WithSections = async (course_id) => {
  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const cursor = await collection.aggregate([
      { $match: { _id: new mongodb.ObjectID(course_id) } },
      {
        $lookup: {
            from: "sections",
            let: { 'lv1_id': '$_id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$course_id', '$$lv1_id'] } } },
            ],
            as: "sectionsArr"
        },
      }
    ]);
    const result = await cursor.toArray();
    return Promise.resolve(result[0]);

  } catch (error) {
    return Promise.reject(error);
  }

}

const getOneBySlug_WithChildrenWithTopics = async (slug) => {
  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const cursor = await collection.aggregate([
      { $match: { slug: slug } },
      {
        $lookup: {
            from: "courses",
            let: { 'lv1_id': '$_id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$parent_id', '$$lv1_id'] } } },
              {
                $lookup: {
                  from: 'topics',
                  let: { 'lv2_id': '$_id' },
                  pipeline: [
                    { '$match': { '$expr': { '$eq': ['$course_id', '$$lv2_id'] } } }
                  ],
                  as: 'topicsArr'
                }
              },
            ],
            as: "childrenArr"
        },
      }
    ]);
    const result = await cursor.toArray();
    return Promise.resolve(result[0]);

  } catch (error) {
    return Promise.reject(error);
  }
  
}

const updateOneById_IncrementTopicsCountByOne = async (id) => {
  const _id = new mongodb.ObjectId(id);
  
  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const result = await collection.updateOne({_id: _id}, {
      $inc: {topics_count: 1}
    });
    return Promise.resolve(result);
  
  } catch (error) {
    return Promise.reject(error);
  }

}

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

const getAllPrimary = async () => {
  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const result = await collection.find({parent_id: "root"}).toArray();
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  getOneById: getOneById,
  getOneById_WithSections: getOneById_WithSections,
  getOneBySlug_WithChildrenWithTopics: getOneBySlug_WithChildrenWithTopics,
  updateOneById_IncrementTopicsCountByOne: updateOneById_IncrementTopicsCountByOne,
  getAll: getAll,
  getAllPrimary: getAllPrimary
}