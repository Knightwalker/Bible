const http = require("http");
const path = require("path");

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config.js");

const mongodb = require("./src/database/mongodb.js");
const routes = require("./src/routes/index.js");

// Settings
const app = express();
const store = new MongoStore({
  url: config.MONGODB_URL,
  collection: "sessions",
  autoRemove: 'interval',
  autoRemoveInterval: 10 // In minutes. Default
});
app.set("view engine", "ejs");
app.set("views", "./src/02_views");

// Middlewares
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/", session({ 
  secret: "cats", 
  cookie: {
    maxAge: 5 * 24 * 60 * 60 * 1000 // In milliseconds. 5 Days in total.
  }, 
  httpOnly: true, 
  saveUninitialized: false, // don't create session until something stored
  resave: false, //don't save session if unmodified
  store: store, 
}));

// Routes
app.use(routes);

const server = http.createServer(app);

async function startServer() {
  try {
    await mongodb.connect();
    console.log("Connected to MongoDB at port 27017");
  } catch (error) {
    await mongodb.disconnect();
    console.log("ERROR Occured: Disconnecting MongoDB");
    console.log(error);
  }

  server.listen(config.APP_PORT, () => {
    console.log(`Server listening at http://localhost:${config.APP_PORT}/`)
  });
}

startServer();