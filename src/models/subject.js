"use strict";

const mongodb = require("mongodb");
const getDb = require("../database/mongodb").getDb;

const getOneBySlug_WithSectionsWithTopics = async (slug) => {
  
  try {
    const db = await getDb();
    const collection = await db.collection("courses");
    const cursor = await collection.aggregate([
      { $match: { slug: slug } },
      {
        $lookup: {
            from: "sections",
            let: { 'lv1_id': '$_id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$course_id', '$$lv1_id'] } } },
              {
                $lookup: {
                  from: 'topics',
                  let: { 'lv2_id': '$_id' },
                  pipeline: [
                    { '$match': { '$expr': { '$eq': ['$section_id', '$$lv2_id'] } } }
                  ],
                  as: 'topicsArr'
                }
              },
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

module.exports = {
  getOneBySlug_WithSectionsWithTopics: getOneBySlug_WithSectionsWithTopics,
}