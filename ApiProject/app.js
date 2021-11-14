const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/db.config");

db.enableDbConnection();
// stdControler.createARecord();
const app = express();
const PORT = process.env.PORT || 8080;
//use of ejs view engine

// seting the bodyparser extension
app.use(bodyParser.urlencoded({ extended: true }));
// aplay the static webpage for Css
app.use(express.static("public"));
app.use(express.json());
//for student app
const student_route = require("./routers/studentRouter");
app.use(student_route);

// used for port starting
app.listen(PORT, () => {
  console.log(`App is on ${PORT} port running`);
});
