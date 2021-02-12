const path = require("path");

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config.js");

const mongodb = require("./src/database/mongodb.js");
const homeRoutes = require("./src/routes/home.js");
const adminRoutes = require("./src/routes/admin");
const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth.js");

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
app.use(adminRoutes.routes);
app.use(userRoutes.routes);
app.use(authRoutes.routes);
app.use(homeRoutes.routes);

// APP Init - Using Top Level Await
(async () => {
  try {
    await mongodb.connect();
    console.log("Connected to MongoDB at port 27017");
  } catch (error) {
    await mongodb.disconnect();
    console.log("ERROR Occured: Disconnecting MongoDB");
    console.log(error);
  }

  app.listen(config.APP_PORT, () => {
    console.log(`Server listening at http://localhost:${config.APP_PORT}/`)
  });

})();
