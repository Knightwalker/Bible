"use strict";

const CourseModel = require("../models/course");
const TopicModel = require("../models/topic");
const PostModel = require("../models/post");

const getTopicWithPostsBySlug = async (req, res, next) => {
  const slug = req.params.slug;
  
  var course_data = {};
  var topic_data = {};
  var data = {
    course: {},
    topic: {}
  };
  
  try {
    const topic = await TopicModel.getTopicWithPostsBySlugAsync(slug);
    topic_data = topic[0];
    prepareTopic(topic_data);
    const course = await CourseModel.getOneById(topic_data.course_id);
    course_data = course;
  } catch (error) {
    console.log(error);
  }

  data.course = course_data;
  data.topic = topic_data;
  res.render("topics/view_topic.ejs", data);

  function prepareTopic(topic) {
    for (let i = 0; i < topic.posts.length; i++) {
      topic.posts[i].content = escapeHtml_InCodeTags(topic.posts[i].content);
      topic.posts[i].content = custom_nl2br(topic.posts[i].content);
      topic.posts[i].content = escapeCppForHtml(topic.posts[i].content);
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

const getEditPostById = (req, res, next) => {
  const id = req.params.id;

  PostModel.getOneById(id, (error, post) => {
    if (error) {
      console.log(error);
    } else {
      render(post);
    }
  });

  function render(post) {
    let options = {
      post: post
    }
    res.render("edit_post.ejs", options);
  }

}

const postEditPostById = (req, res, next) => {
  const id = req.params.id;
  let content = req.body.content;

  PostModel.modifyOneById(id, content, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      let topic_id = result.value.topic_id;
      getParentTopicById(topic_id);
    }
  });

  const getParentTopicById = (id) => {
    TopicModel.getOneById(id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        let slug = result.slug;
        res.redirect(`/topics/${slug}`);
      }
    });
  }

}

module.exports = {
  getTopicWithPostsBySlug: getTopicWithPostsBySlug,
  getEditPostById: getEditPostById,
  postEditPostById: postEditPostById
};