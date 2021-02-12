"use strict";

const Course = require("../01_models/course.js");

const getHomePage = async (req, res) => {

  var courses = null;
  try {
    courses = await Course.getAll();
  } catch (error) {
    console.log(error);
  }

  var data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    objUser: req.session.objUser,

    courses: courses
  }

  res.render("./user/home.ejs", data);
}

module.exports = {
  getHomePage: getHomePage
}