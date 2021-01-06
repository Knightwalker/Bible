"use strict";

const User = require("../models/user");

const getRegisterPage = (req, res) => {

  const data = {
    pageTitle: "Registration",
    path: "/auth/register",
  }
  res.render("auth/register", data);
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
      User.bCheckIfUsernameIsAvaliableWithPromise(username),
      User.bCheckIfEmailIsAvaliableWithPromise(email),
    ]);
  } catch (err) {
    console.log(err);
    // log error to logger
    // render view with some error
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
    res.render("auth/register", data);
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

  await User.insertOneAsync(user, renderView);
  
  const data = {
    pageTitle: "Registration",
    path: "/auth/register",
  }
  res.render("auth/register", data);
  


}

module.exports = {
  //getLoginPage: getLoginPage,
  getRegisterPage: getRegisterPage,
  //postLogin: postLogin
  postRegister: postRegister
}