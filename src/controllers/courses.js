"use strict";

const TopicModel = require("../models/topic");
const PostModel = require("../01_models/post");
const CourseModel = require("../models/course");

const getOneBySlug_WithChildrenWithTopics = async (req, res, next) => {
  const slug = req.params.slug;
  
  // Part 1 - Get Data
  var data = {};
  try {
    const course = await CourseModel.getOneBySlug_WithChildrenWithTopics(slug);
    data.course = course;
  } catch (error) {
    console.log(error);
    return;
  }
  
  // Part 2 - Sort Data
  const sSortBy = "position";
  const sSortMode = "ascending";

  const compareByPositionAsc = (a, b) => {
    if (a.position > b.position) {
      return 1;  // -1 means the first goes before the second, 1 means it goes after, and 0 means they're equivalent.
    } else if (a.position < b.position) {
      return -1;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < data.course.childrenArr.length; i++) {
    data.course.childrenArr[i].topicsArr.sort(compareByPositionAsc);
  }

  // Part 3 - Render View
  res.render("course", data);
}

module.exports = {
  getOneBySlug_WithChildrenWithTopics: getOneBySlug_WithChildrenWithTopics
};