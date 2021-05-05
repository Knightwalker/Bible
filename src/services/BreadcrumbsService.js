"use strict";

const CourseModel = require("../models/course");
const TopicModel = require("../models/topic");

const getArrayWithBreadcrumbsByTopicId = async (topic_id) => {
  let breadcrumbsArr = [];
  let parent_id = "";

  try {
    const topic = await TopicModel.getOneByIdAsync(topic_id);
    parent_id = topic.course_id;
    breadcrumbsArr.push({
      name: topic.name,
      type: "topic",
      slug: topic.slug
    });
  } catch(error) {
    return Promise.reject(error);
  }

  while(true) {
    if (parent_id == "root") { break; }

    try {
      const course = await CourseModel.getOneById(parent_id);
      parent_id = course.parent_id;
      if (course.type === "course") {
        breadcrumbsArr.push({
          name: course.name,
          type: course.type,
          slug: course.slug
        });
      } else if (course.type === "section") {
        breadcrumbsArr.push({
          name: course.name,
          type: course.type
        });
      }
    } catch (error) {
      return Promise.reject(error);
    }

  }

  breadcrumbsArr.reverse();
  return Promise.resolve(breadcrumbsArr);

}

module.exports = {
  getArrayWithBreadcrumbsByTopicId: getArrayWithBreadcrumbsByTopicId
}