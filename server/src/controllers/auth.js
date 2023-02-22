"use strict";

const User = require("../models/user");

const getLoginPage = (req, res) => {
    const data = {
        pageTitle: "Registration",
        path: "/auth/register",
        bUserIsAuthenticated: req.session.bUserIsAuthenticated
    }
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
        user = await User.getUserByUsername(username);
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

    req.session.bUserIsAuthenticated = true;
    req.session.objUser = {
        user_id: user._id,
        username: user.username,
        email: user.email
    };
    req.session.save((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect("/");
    });
}

const postRegister = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordRe = req.body.passwordRe;
    const email = req.body.email;
    const verify_age = req.body.verify_age;
    const verify_tos = req.body.verify_tos;

    // Step 1. Validation
    const bUsernameFieldIsEmpty = (username === "" ? true : false);
    const bPasswordFieldIsEmpty = (password === "" ? true : false);
    const bEmailFieldIsEmpty = (email === "" ? true : false);
    const bUsernameLengthIsValid = User.isUsernameLengthValid(username);
    const bPasswordLengthIsValid = User.isPasswordLengthValid(password);
    const bPasswordsMatch = (password === passwordRe);
    const bEmailIsValid = User.isEmailValid(email);
    const bUserAgreedWithAge = User.didUserAgreeWithAge(verify_age);
    const bUserAgreedWithTOS = User.didUserAgreeWithTOS(verify_tos);

    if (bUsernameLengthIsValid == false || bPasswordLengthIsValid == false) {
        const data = {
            username: username,
            password: password,
            passwordRe: passwordRe,
            email: email,
            verify_age: verify_age,
            verify_tos: verify_tos,
            objRegisterErrors: {
                bUsernameFieldIsEmpty: bUsernameFieldIsEmpty,
                bPasswordFieldIsEmpty: bPasswordFieldIsEmpty,
                bEmailFieldIsEmpty: bEmailFieldIsEmpty,
                bUsernameLengthIsValid: bUsernameLengthIsValid,
                bPasswordLengthIsValid: bPasswordLengthIsValid,
                bPasswordsMatch: bPasswordsMatch,
                bEmailIsValid: bEmailIsValid,
                bUserAgreedWithAge: bUserAgreedWithAge,
                bUserAgreedWithTOS: bUserAgreedWithTOS
            }
        }
        res.render("auth/register.ejs", data);
        return;
    }

    // Step 2. Database Validation
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
            password: password,
            passwordRe: passwordRe,
            email: email,
            verify_age: verify_age,
            verify_tos: verify_tos,
            objRegisterErrors: {
                bUsernameIsAvaliable: bUsernameIsAvaliable,
                bEmailIsAvaliable: bEmailIsAvaliable
            }
        }
        res.render("auth/register.ejs", data);
        return;
    }

    // Step 3. User Creation
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