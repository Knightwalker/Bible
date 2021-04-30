const express = require("express");
const router = express.Router();

const homeController = require("../03_controllers/home.js");
const subjectsController = require("../controllers/subjects");

router.get("/", homeController.getHomePage);
router.get("/home", homeController.getHomePage);
router.get("/home/js_web", homeController.getPageJsWeb);
router.get("/home/cpp_games", homeController.getPageCppWeb);

router.get("/courses/:slug", subjectsController.getOneBySlug_WithSectionsWithTopics);

module.exports = router;