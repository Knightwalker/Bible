const path = require("path");

const express = require("express");
const app = express();
const config = require("./config.js");

const database = require("./src/database/mongodb");
const adminRoutes = require("./src/routes/admin");
const userRoutes = require("./src/routes/user");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use(adminRoutes.routes);
app.use(userRoutes.routes);

// Routes
app.get("/", (req, res, next) => {
  console.log(process.env.NODE_ENV);
  res.render("index.ejs");
});

const port = process.env.APP_PORT;

// App Init
database.connect((err) => {
  if (err) { throw err; }
  console.log("Connected to MongoDB at port 27017");

  app.listen(port, () => {
    console.log("Server listening at http://localhost:5000/")
  });
});