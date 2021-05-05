"use strict";

const TopicModel = require("../models/topic");
const PostModel = require("../models/post");

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
  getEditPostById: getEditPostById,
  postEditPostById: postEditPostById
};