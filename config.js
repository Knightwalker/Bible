const fs = require("fs");

const config = {};

if (process.env.NODE_ENV == "development") {
  let envFileToObj = JSON.parse(fs.readFileSync("./env.json", {encoding: "utf-8"}));

  config = {
    APP_HOST: "localhost",
    APP_PORT: 3000,
    //DB_URL: "mongodb://localhost:27017/codegigas",
    MONGODB_URL: envFileToObj.MONGODB_URL
  }

} else if (process.env.NODE_ENV == "heroku") {
  config = {
    APP_HOST: "codegigas.com",
    APP_PORT: 3000,
    //DB_URL: "mongodb://localhost:27017/codegigas",
    MONGODB_URL: process.env.MONGODB_URL
  }
}

module.exports = {
  APP_HOST: config.APP_HOST,
  APP_PORT: config.APP_PORT,
  MONGODB_URL: config.MONGODB_URL,
};