const fs = require("fs");

if (process.env.NODE_ENV === "development") {
  let envObj = JSON.parse(fs.readFileSync("./env.json", {encoding: "utf-8"}));
  process.env["APP_HOST"] = envObj.APP_HOST;
  process.env["APP_PORT"] = envObj.APP_PORT;
  process.env["DB_LOCAL_URL"] = envObj.DB_LOCAL_URL;
  process.env["DB_REMOTE_URL"] = envObj.DB_REMOTE_URL;

} else if  (process.env.NODE_ENV === "production") {
  process.env["APP_PORT"] = process.env.PORT;
  // check heroku .env file on herokus platform.
  // heroku loads it automatically.
}