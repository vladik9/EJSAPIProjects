var mysql = require("mysql");
const { stdModel } = require("../models/student");

var studentConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234Pass",
  database: "ProjectDb",
});

const enableDbConnection = () => {
  studentConnection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `CREATE TABLE ${stdModel.studentTableName} (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))`;
    studentConnection.query(sql, function (err, result) {
      if (err) {
        if (err.errno === 1050) {
          console.log("Table exists: " + stdModel.studentTableName);
        } else {
          console.log(err);
        }
      } else console.log("Table created!");
    });
  });
};
module.exports = {
  enableDbConnection,
  studentConnection,
};
