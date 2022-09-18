"use strict";

const TopicModel = require("../models/topic");

const getTopicById = async (id) => {
  let topic = null;
  try {
    topic = TopicModel.getOneById(id);
  } catch (error) {
    return Promise.reject(error);
  }

  return Promise.resolve(topic);

}

module.exports = {
  getTopicById: getTopicById
}