const { studentConnection } = require("../db/db.config");
const { stdModel } = require("../models/student");
require("mysql");
exports.getAll = () => {
  const promise = new Promise((resolve, reject) => {
    studentConnection.query(
      `SELECT * FROM ${stdModel.studentTableName}`,
      function (err, result) {
        if (err) {
          reject(err);
          throw err;
        } else {
          var resultArray = Object.values(JSON.parse(JSON.stringify(result)));
          resolve(resultArray);
        }
      }
    );
  }, 300);
  return promise;
};

exports.getOne = (id) => {
  const promise = new Promise((resolve, reject) => {
    studentConnection.query(
      `SELECT * FROM ${stdModel.studentTableName} WHERE id = ${id}`,
      function (err, result) {
        if (err) {
          reject(err);
          throw err;
        } else {
          var resultArray = Object.values(JSON.parse(JSON.stringify(result)));
          resolve(resultArray);
        }
      }
    );
  }, 300);
  return promise;
};

exports.createARecord = (name, email) => {
  const promise = new Promise((resolve, reject) => {
    var sql = `INSERT INTO ${stdModel.studentTableName} (id, name, email) VALUES (0, '${name}','${email}')`;
    studentConnection.query(sql, function (err, result) {
      if (err) {
        reject(err);
        throw err;
      } else {
        console.log("1 record inserted");
        console.log(result);
        resolve(result);
      }
    });
  }, 300);
  return promise;
};

exports.updateARecord = (id, name, email) => {
  const promise = new Promise((resolve, reject) => {
    var sql = `UPDATE  ${stdModel.studentTableName} SET name = '${name}', email = '${email}' WHERE id = ${id}`;
    studentConnection.query(sql, function (err, result) {
      if (err) {
        reject(err);
        throw err;
      } else {
        if (result.affectedRows === 0) {
          reject(new Error("Id not fouded!"));
        } else {
          console.log("Number of records deleted: " + result.affectedRows);
          resolve(result);
        }
      }
    });
  }, 300);
  return promise;
};

exports.removeOne = (id) => {
  const promise = new Promise((resolve, reject) => {
    var sql = `DELETE FROM ${stdModel.studentTableName} WHERE id = ${id}`;
    studentConnection.query(sql, function (err, result) {
      if (err) {
        reject(err);
        throw err;
      } else {
        if (result.affectedRows === 0) {
          reject(new Error("Id not fouded!"));
        } else {
          console.log("Number of records deleted: " + result.affectedRows);
          resolve(result);
        }
      }
    });
  }, 300);
  return promise;
};
