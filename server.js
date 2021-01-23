const path = require("path");

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config.js");

const database = require("./src/database/mongodb");
const adminRoutes = require("./src/routes/admin");
const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth.js");

// Settings
const app = express();
const store = new MongoStore({
  url: process.env.DB_REMOTE_URL,
  collection: "sessions",
  autoRemove: 'interval',
  autoRemoveInterval: 10 // In minutes. Default
});
const port = process.env.APP_PORT;
app.set("view engine", "ejs");
app.set("views", "./src/02_views");

// Middlewares
app.use("/", express.urlencoded({ extended: true }));
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

app.get("/", (req, res, next) => {
  console.log("get / = " + process.env.NODE_ENV);

  const data = {
    bUserIsAuthenticated: req.session.bUserIsAuthenticated,
    objUser: req.session.objUser
  }

  console.log(data);

  res.render("index.ejs", data);
});

// App Init
database.connect((err) => {
  if (err) { throw err; }
  console.log("Connected to MongoDB at port 27017");

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)
  });
});