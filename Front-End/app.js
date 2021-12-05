const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8081;

// seting the bodyparser extension
app.use(bodyParser.urlencoded({ extended: true }));
// aplay the static webpage for Css
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/home.html");
});

// used for port starting
app.listen(PORT, () => {
  console.log(`App is on ${PORT} port running`);
});
