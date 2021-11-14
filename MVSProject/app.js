const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const db = require("./db/db.config");

db.enableDbConnection();
// stdControler.createARecord();
const app = express();
const PORT = process.env.PORT || 8082;
//use of ejs view engine
app.set("view engine", "ejs");
// seting the bodyparser extension
app.use(bodyParser.urlencoded({ extended: true }));
// aplay the static webpage for Css
app.use(express.static("public"));
//use routes for student
const student_route = require("./routers/studentRouter");
app.use(student_route);

// used for port starting
app.listen(PORT, () => {
  console.log(`App is on ${PORT} port running`);
});
