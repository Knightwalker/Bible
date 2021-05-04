const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin")
const authMiddleware = require("../middlewares/authentication.js");
const topicsController = require('../controllers/topics');

router.get("/topics/:slug", adminController.getTopicWithPostsBySlug);

router.get("/post/edit/:id", authMiddleware.authenticateAdmin, adminController.getEditPostById) // protected routes for now
router.post("/post/edit/:id", [
  authMiddleware.authenticateAdmin, 
  express.urlencoded({ extended: true }),
  adminController.postEditPostById
]) // protected routes for now

// protected routes for now
router.get("/topics/mode/new_topic", [
  authMiddleware.authenticateAdmin, 
  topicsController.getNewTopic
]);

// protected routes for now
router.post("/topics/mode/new_topic", [
  authMiddleware.authenticateAdmin, 
  express.urlencoded({ extended: true }),
  topicsController.postNewTopic
]);

module.exports = router;