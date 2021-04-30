"use strict";

const CourseModel = require("../01_models/course");
const TopicModel = require("../01_models/topic");
const PostModel = require("../01_models/post");

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

    const course = await CourseModel.readOneByIdAsync(topic_data.course_id);
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

const getNewTopic = (req, res, next) => {
  const course_id = req.query.course_id;

  let options = {
    course_id: course_id
  }

  CourseModel.readOneById(course_id, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      options.course_slug = result.slug;
      fRender();
    }
  });

  const fRender = () => {
    res.render("topics/new_topic.ejs", options);
  }
  
}

const postNewTopic = (req, res, next) => {
  const course_id = req.body.course_id;
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
    course_id: course_id
  }

  let post_data = {
    content: post_content
  }

  let options = {

  }

  const task1 = () => {
    CourseModel.updateOneById_IncrementTopicsCountByOne(course_id, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        //console.log(result);
        task2();
      }
    });
  }

  const task2 = () => {
    CourseModel.readOneById(course_id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        //console.log(result);
        options.course_slug = result.slug;
        topic_data.position = result.topics_count;
        task3();
      }
    });
  }

  const task3 = () => {
    TopicModel.insertOne(topic_data, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        post_data.topic_id = result.ops[0]._id;
        task4(post_data);
      }
    });
  }

  const task4 = (post_data) => {
    PostModel.createNew(post_data, (error) => {
      if (error) {
        console.log(error);
      } else {
        task5();
      }
    });
  }

  const task5 = () => {
    res.redirect(`/courses/${options.course_slug}`);
  }
  task1();

}

module.exports = {
  getTopicWithPostsBySlug: getTopicWithPostsBySlug,
  getEditPostById: getEditPostById,
  postEditPostById: postEditPostById,
  getNewTopic: getNewTopic,
  postNewTopic: postNewTopic
};