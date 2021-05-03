"use strict";

const TopicModel = require("../01_models/topic");
const PostModel = require("../01_models/post");
const CourseModel = require("../models/course");

const getOneBySlug_WithSectionsWithTopics = async (req, res, next) => {
  const slug = req.params.slug || "c-plus-plus";
  
  // Part 1 - Get Data
  var data = {};
  try {
    const course = await CourseModel.getOneBySlug_WithSectionsWithTopics(slug);
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

  for (let i = 0; i < data.course.sectionsArr.length; i++) {
    data.course.sectionsArr[i].topicsArr.sort(compareByPositionAsc);
  }

  // Part 3 - Render View
  res.render("course", data);
}

module.exports = {
  getOneBySlug_WithSectionsWithTopics: getOneBySlug_WithSectionsWithTopics,
};