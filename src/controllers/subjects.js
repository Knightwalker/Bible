"use strict";

const CourseModel = require("../01_models/course");
const TopicModel = require("../01_models/topic");
const PostModel = require("../01_models/post");
const SubjectModel = require("../models/subject");

const getOneBySlug_WithSectionsWithTopics = async (req, res, next) => {
  const slug = req.params.slug || "c-plus-plus";
  
  // Part 1 - Get Data
  var data = {};
  try {
    const subject = await SubjectModel.getOneBySlug_WithSectionsWithTopics(slug);
    data.subject = subject;
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

  for (let i = 0; i < data.subject.sectionsArr.length; i++) {
    data.subject.sectionsArr[i].topicsArr.sort(compareByPositionAsc);
  }

  // Part 3 - Render View
  res.render("subject", data);
}

module.exports = {
  getOneBySlug_WithSectionsWithTopics: getOneBySlug_WithSectionsWithTopics,
};