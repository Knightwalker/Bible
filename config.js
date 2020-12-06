const fs = require("fs");

if (process.env.APP_ENVIRONMENT.trim() == "local") {
  let envObj = JSON.parse(fs.readFileSync("./env.json", {encoding: "utf-8"}));
  process.env["APP_HOST"] = envObj.APP_HOST;
  process.env["APP_PORT"] = envObj.APP_PORT;
  process.env["DB_LOCAL_URL"] = envObj.DB_LOCAL_URL;
  process.env["DB_REMOTE_URL"] = envObj.DB_REMOTE_URL;

} else if (process.env.APP_ENVIRONMENT.trim() == "heroku") {
  // check heroku .env file.
  // heroku loads it automatically.
}