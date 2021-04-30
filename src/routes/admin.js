const express = require("express");
const router = express.Router();

const adminController = require("../03_controllers/admin")
const authMiddleware = require("../middlewares/authentication.js");
const subjectsController = require("../controllers/subjects");

router.get("/courses/:slug", subjectsController.getOneBySlug_WithSectionsWithTopics);
// router.get("/courses/:slug", adminController.readOneBySlug_WithTopics)

router.get("/topics/:slug", adminController.getTopicWithPostsBySlug);

router.get("/post/edit/:id", authMiddleware.authenticateAdmin, adminController.getEditPostById) // protected routes for now
router.post("/post/edit/:id", [
  authMiddleware.authenticateAdmin, 
  express.urlencoded({ extended: true }),
  adminController.postEditPostById
]) // protected routes for now

router.get("/topics/mode/new_topic", authMiddleware.authenticateAdmin, adminController.getNewTopic); // protected routes for now
router.post("/topics/mode/new_topic", [
  authMiddleware.authenticateAdmin, 
  express.urlencoded({ extended: true }),
  adminController.postNewTopic]); // protected routes for now

module.exports = router;