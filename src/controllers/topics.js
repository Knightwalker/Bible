"use strict";

const CourseModel = require("../models/course");
const TopicModel = require("../models/topic");
const PostModel = require("../models/post");

const getNewTopic = async (req, res, next) => {
  const course_id = req.query.course_id;

  var data = {
    course_id: course_id
  }

  try {
    const course = await CourseModel.getOneById_WithSections(course_id);
    data.course_slug = course.slug;
    data.sectionsArr = course.sectionsArr;
  } catch (error) {
    console.log(error);
  }

  res.render("topics/new_topic.ejs", data);

};

const postNewTopic = async (req, res, next) => {
  console.log(req.body);
  const course_id = req.body.course_id;
  const section_id = req.body.section_id;
  const topic_name = req.body.topic_name;
  const post_content = req.body.post_content;

  let topic_display_name = topic_name[0].toUpperCase() + topic_name.substring(1, topic_name.length);
  let topic_slug = topic_name.toLowerCase().split(" ").join("-");

  let course_data = {

  }

  let topic_data = {
    name: topic_name,
    display_name: topic_display_name,
    slug: topic_slug,
    course_id: course_id,
    section_id: section_id
  }

  let post_data = {
    content: post_content
  }

  var view_data = {}

  var course = null;
  try {
    await CourseModel.updateOneById_IncrementTopicsCountByOne(course_id);
    course = await CourseModel.getOneById(course_id);
    view_data.course_slug = course.slug;
    topic_data.position = 1 || course.topics_count; // WIP Figure this out later

    const topic = await TopicModel.insertOne(topic_data);
    post_data.topic_id = topic._id;
    await PostModel.createNew(post_data);

  } catch (error) {
    return console.log(error);
  }

  res.redirect(`/courses/${view_data.course_slug}`);
  
}

module.exports = {
  getNewTopic: getNewTopic,
  postNewTopic: postNewTopic
};