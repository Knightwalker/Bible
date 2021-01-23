const express = require("express");
const router = express.Router();

const adminController = require("../03_controllers/admin")

router.get("/courses/:slug", adminController.readOneBySlug_WithTopics)

router.get("/topics/:slug", adminController.getTopicWithPostsBySlug);

router.get("/post/edit/:id", adminController.getEditPostById)
router.post("/post/edit/:id", adminController.postEditPostById)

router.get("/topics/mode/new_topic", adminController.getNewTopic);
router.post("/topics/mode/new_topic", adminController.postNewTopic);

module.exports = {
  routes: router,
};