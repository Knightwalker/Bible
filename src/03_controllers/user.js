"use strict";

const Course = require("../01_models/course.js");

const getHomePage = async (req, res) => {
  console.log("get / = " + process.env.NODE_ENV);

  var courses = null;
  try {
    courses = await Course.getAll();
  } catch (error) {
    console.log(error);
  }

  console.log(courses);

  const data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    objUser: req.session.objUser,

    courses: courses
  }

  console.log(data);

  res.render("./user/home.ejs", data);
}

const getPageJsWeb = (req, res) => {
  res.render("paths/js_web.ejs")
} 

const getPageCppWeb = (req, res) => {
  res.render("paths/cpp_games.ejs")
} 

module.exports = {
  getHomePage: getHomePage,
  getPageJsWeb: getPageJsWeb,
  getPageCppWeb: getPageCppWeb
};