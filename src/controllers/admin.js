"use strict";

const CourseModel = require("../models/course");
const TopicModel = require("../models/topic");
const PostModel = require("../models/post");

const readOneBySlug_WithTopics = (req, res, next) => {
  const slug = req.params.slug;

  const sSortBy = "position";
  const sSortMode = "ascending";

  let options = {

  }

  const task1 = () => {
    CourseModel.readOneBySlug_WithTopics(slug, (error, course) => {
      if (error) {
        console.log(error);
      } else {
        options.course = course[0];
        task2();
      }
    });
  }

  const task2 = () => {
    options.course.topics.sort(function(a, b) {
      if (sSortBy == "position" && sSortMode == "ascending")
      if (a.position > b.position) {
        return 1;  // -1 means the first goes before the second, 1 means it goes after, and 0 means they're equivalent.
      } else if (a.position < b.position) {
        return -1;
      }
    });

    task3();
  }

  const task3 = () => {
    res.render("course_view", options);
  }
  task1();

}

const getTopicWithPostsBySlug = (req, res, next) => {
  const slug = req.params.slug;
  
  let course_data = {};
  let topic_data = {};
  let data = {
    course: {},
    topic: {}
  };
  
  TopicModel.getTopicWithPostsBySlug(slug, (err, topic) => {
    if (err) {
      console.log(err);
    } else {
      topic_data = topic[0];
      task2();
    }
  });

  const task2 = () => {
    CourseModel.readOneById(topic_data.course_id, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        course_data = result;
        prepareTopic(topic_data);
      }
    });
  }

  function prepareTopic(topic) {
    for (let i = 0; i < topic.posts.length; i++) {
      topic.posts[i].content = custom_nl2br(topic.posts[i].content);
      topic.posts[i].content = escapeCppForHtml(topic.posts[i].content);
    }
    fRender();
  }

  // https://stackoverflow.com/questions/17646041/php-how-to-keep-line-breaks-using-nl2br-with-html-purifier
  function custom_nl2br(str){
    // Step 1: Add <br /> tags for each line-break
    str = str.replace(/(?:\r\n|\r|\n)/g, "<br>");

    // Step 4: Removes extra <br /> tags
    // Inside and After <ol class="ol_toc"></ol> custom tags
    // Inside and After <ol></ol> tags
    str = str.replace(/<ol class="ol_toc"><br>/g, `<ol class="ol_toc">`);
    str = str.replace(/<ol><br>/g, `<ol>`);
    str = str.replace(/<br><\/ol>/g, `</ol>`);
    str = str.replace(/<\/ol><br>/g, `</ol>`);

    // Inside and After <code class="code_language_cpp"></code> custom tags
    str = str.replace(/<code class="code_language_cpp"><br>/g, `<code class="code_language_cpp">`);
    str = str.replace(/<code><br>/g, `<code>`);
    str = str.replace(/<br><\/code>/g, `</code>`);
    str = str.replace(/<\/code><br>/g, `</code>`);

    // Inside and After <table"></table> tags
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
     str = str.replace(/<vector>/g, "&lt;vector&gt;");
     str = str.replace(/vector<int>/g, "vector&lt;int&gt;");
     str = str.replace(/vector<double>/g, "vector&lt;double&gt;");
     str = str.replace(/<Type\*>/g, "&lt;Type*&gt;");

     return str;
  }

  function fRender() {
    data.course = course_data;
    data.topic = topic_data;
    res.render("topics/view_topic.ejs", data);
  }

}

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
  readOneBySlug_WithTopics: readOneBySlug_WithTopics,
  getTopicWithPostsBySlug: getTopicWithPostsBySlug,
  getEditPostById: getEditPostById,
  postEditPostById: postEditPostById,
  getNewTopic: getNewTopic,
  postNewTopic: postNewTopic
};