"use strict";

const User = require("../models/user");

const getLoginPage = (req, res) => {
  const data = {
    pageTitle: "Registration",
    path: "/auth/register",
    bUserIsLoggedIn: req.session.bUserIsLoggedIn
  }
  console.log(req.sessionID);
  console.log(req.session);
  res.render("auth/login", data);
}

const getRegisterPage = (req, res) => {
  res.render("auth/register.ejs");
}

const postLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  var user = null;
  try {
    user = await User.getUser(username);
  } catch (err) {
    console.log(err);
    res.render("index.ejs");
    return;
  }

  if (user == null) {
    const data = {
      bUserDoesNotExist: true
    }
    res.render("auth/login.ejs", data);
    return;
  }

  const salt = user.salt;
  const hash = user.hash;
  const current_hash = User.generateHash(password, salt);

  if (hash != current_hash) {
    const data = {
      bPasswordIsIncorrect: true
    }
    res.render("auth/login.ejs", data);
    return;
  }

  req.session.bUserIsLoggedIn = true;
  req.session.user = user;
  req.session.save((err) => {
    res.redirect("/");
  })
}

const postRegister = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const passwordRe = req.body.passwordRe;
  const email = req.body.email;
  const verify_age = req.body.verify_age;
  const verify_tos = req.body.verify_tos;
  
  var results = null;
  try {
    results = await Promise.all([
      User.bCheckIfUsernameIsAvaliableAsync(username),
      User.bCheckIfEmailIsAvaliableAsync(email),
    ]);
  } catch (err) {
    console.log(err);
    res.render("index.ejs");
    return;
  }

  const bUsernameIsAvaliable = results[0];
  const bEmailIsAvaliable = results[1];

  if (bUsernameIsAvaliable == false || bEmailIsAvaliable == false) {
    const data = {
      username: username,
      email: email,
      password: password,
      passwordRe: passwordRe,
      bUsernameIsAvaliable: bUsernameIsAvaliable,
      bEmailIsAvaliable: bEmailIsAvaliable
    }
    res.render("auth/register.ejs", data);
    return;
  }
 

  const salt = User.generateSalt();
  const hash = User.generateHash(password, salt);
  
  const user = {
    username: username,
    email: email,
    salt: salt,
    hash: hash
  }

  await User.insertOneAsync(user);
  res.render("auth/register_successfully.ejs");
  
}

const postLogout = (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
}

module.exports = {
  getLoginPage: getLoginPage,
  getRegisterPage: getRegisterPage,
  postLogin: postLogin,
  postRegister: postRegister,
  postLogot: postLogout
}