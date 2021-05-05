"use strict";

const CourseModel = require("../models/course");
const TopicModel = require("../models/topic");
const PostModel = require("../models/post");

const BreadcrumbsService = require("../services/BreadcrumbsService.js");

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

const getTopicWithPostsBySlug = async (req, res, next) => {
  const slug = req.params.slug;
  
  var course_data = {};
  var topic_data = null;
  var data = {
    breadcrumbsArr: null,
    course: {},
    topic: {}
  };

  
  try {
    topic_data = await TopicModel.getTopicWithPostsBySlug(slug);
    prepareTopic(topic_data);
    const course = await CourseModel.getOneById(topic_data.course_id);
    course_data = course;
    data.breadcrumbsArr = await BreadcrumbsService.getArrayWithBreadcrumbsByTopicId(topic_data.id);
  } catch (error) {
    console.log(error);
    return;
  }
  
  data.course = course_data;
  data.topic = topic_data;
  res.render("topics/view_topic.ejs", data);

  function prepareTopic(topic) {
    for (let i = 0; i < topic.postsArr.length; i++) {
      topic.postsArr[i].content = escapeHtml_InCodeTags(topic.postsArr[i].content);
      topic.postsArr[i].content = custom_nl2br(topic.postsArr[i].content);
      topic.postsArr[i].content = escapeCppForHtml(topic.postsArr[i].content);
    }
  }

  // https://stackoverflow.com/questions/17646041/php-how-to-keep-line-breaks-using-nl2br-with-html-purifier
  // https://stackoverflow.com/questions/28778928/how-should-one-handle-newlines-in-bbcode
  function custom_nl2br(str){
    // Step 1: Add <br /> tags for each line-break (cross-platform)
    str = str.replace(/(?:\r\n|\r|\n)/g, "<br>");

    // Step 4: Removes extra <br /> tags
    // After <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <p>, <li> tags
    str = str.replace(/<\/h1><br>/g, `</h1>`);
    str = str.replace(/<\/h2><br>/g, `</h2>`);
    str = str.replace(/<\/h3><br>/g, `</h3>`);
    str = str.replace(/<\/h4><br>/g, `</h4>`);
    str = str.replace(/<\/h5><br>/g, `</h5>`);
    str = str.replace(/<\/h6><br>/g, `</h6>`);
    str = str.replace(/<\/p><br>/g, `</p>`);
    str = str.replace(/<\/li><br>/g, `</li>`);

    // Inside and After <ul></ul> tags
    str = str.replace(/<ul><br>/g, `<ul>`);
    str = str.replace(/<br><\/ul>/g, `</ul>`);
    str = str.replace(/<\/ul><br>/g, `</ul>`);

    // Inside and After <ol class="ol_toc"></ol> custom tags
    // Inside and After <ol></ol> tags
    str = str.replace(/<ol class="ol_toc"><br>/g, `<ol class="ol_toc">`);
    str = str.replace(/<ol><br>/g, `<ol>`);
    str = str.replace(/<br><\/ol>/g, `</ol>`);
    str = str.replace(/<\/ol><br>/g, `</ol>`);

    // Inside and After <code class="code_language_cpp"></code> custom tags
    str = str.replace(/<code class="code_normal"><br>/g, `<code class="code_normal">`);
    str = str.replace(/<code class="code_cmd"><br>/g, `<code class="code_cmd">`);
    str = str.replace(/<code class="code_language_cpp"><br>/g, `<code class="code_language_cpp">`);
    str = str.replace(/<code><br>/g, `<code>`);
    str = str.replace(/<br><\/code>/g, `</code>`);
    str = str.replace(/<\/code><br>/g, `</code>`);

    // Inside and After <table"></table> tags
    str = str.replace(/<table class="code_table"><br>/g, `<table class="code_table">`);
    str = str.replace(/<table><br>/g, `<table>`);
    str = str.replace(/<tbody><br>/g, `<tbody>`);
    str = str.replace(/<tr><br>/g, `<tr>`);
    str = str.replace(/<td><br>/g, `<td>`);
    str = str.replace(/<br><\/table>/g, `</table>`);
    str = str.replace(/<br><\/tbody>/g, `</tbody>`);
    str = str.replace(/<br><\/tr>/g, `</tr>`);
    str = str.replace(/<br><\/td>/g, `</td>`);
    str = str.replace(/<\/table><br>/g, `</table>`);
    str = str.replace(/<\/tbody><br>/g, `</tbody>`);
    str = str.replace(/<\/tr><br>/g, `</tr>`);
    str = str.replace(/<\/td><br>/g, `</td>`);

    return str;
  }

  function escapeCppForHtml(str) {
     str = str.replace(/<iostream>/g, "&lt;iostream&gt;");
     str = str.replace(/<string>/g, "&lt;string&gt;");
     str = str.replace(/vector<int>/g, "vector&lt;int&gt;");
     str = str.replace(/vector<double>/g, "vector&lt;double&gt;");
     str = str.replace(/<vector>/g, "&lt;vector&gt;");
     str = str.replace(/<Type\*>/g, "&lt;Type*&gt;");

     return str;
  }

  function escapeHtml_InCodeTags(str) {
    var sb = "";
    
    while(true) {
      const openingTag = `<code class="code_normal">`;
      const closingTag = `</code>`;
      const openingTagLen = openingTag.length;
      const closingTagLen = closingTag.length;
      const firstIndexOfOpeningTag = str.indexOf(openingTag);
      const firstIndexOfClosingTag = str.indexOf(closingTag);

      if (firstIndexOfOpeningTag >= 0 && firstIndexOfClosingTag >= 0) {
        let leftStr = str.substring(0, firstIndexOfOpeningTag);
        let midStr = str.substring(firstIndexOfOpeningTag + openingTagLen, firstIndexOfClosingTag); 
        let rightStr = str.substring(firstIndexOfClosingTag + closingTagLen);
      
        sb += leftStr;
        sb += openingTag;
        sb += escapeHTML(midStr);
        sb += closingTag;
        str = rightStr //save the rest for next iteration 
      }

      if (firstIndexOfOpeningTag == -1 || firstIndexOfClosingTag == -1) { 
        sb += str;
        break; 
      }
    }

    return sb;
 }

 function escapeHTML(str) {
    str = str.replace(/</g, "&lt;")
    str = str.replace(/>/g, "&gt;")

    return str;
 }
 
} // END getTopicWithPostsBySlug

module.exports = {
  getNewTopic: getNewTopic,
  postNewTopic: postNewTopic,
  getTopicWithPostsBySlug: getTopicWithPostsBySlug
};