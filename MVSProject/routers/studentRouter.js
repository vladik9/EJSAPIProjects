const express = require("express");
const router = new express.Router();
const stdControler = require("../controllers/studentControler");
// manage the get request for this app

router
  .get("/", async (req, res) => {
    // render a message to this webpage and post varaible content in the right place
    const allStudents = await stdControler.getAll();
    res.render("home", {
      records: allStudents,
    });
  })
  .get("/student/allStudents", async (req, res) => {
    // render a message to this webpage and post varaible content in the right place
    const allStudents = await stdControler.getAll();
    res.render("home", {
      records: allStudents,
    });
  })
  .get("/student/searchStudent", async (req, res) => {
    res.render("searchAStudent", {});
  })
  .post("/student/searchStudent", async (req, res) => {
    const id = req.body.id;
    const student = await stdControler.getOne(id);
    res.render("home", { records: student });
  })
  .get("/student/createAStudent", async (req, res) => {
    res.render("createAStudent");
  })
  .post("/student/createAStudent", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    try {
      await stdControler.createARecord(name, email);
      res.render("status/success");
    } catch (err) {
      res.render("status/fail", { errorStatus: err });
    }
  })
  .get("/student/deleteOneStudent", async (req, res) => {
    res.render("deleteAStudent");
  })
  .post("/student/deleteOneStudent", async (req, res) => {
    const id = req.body.id;
    try {
      await stdControler.removeOne(id);
      res.render("status/success");
    } catch (err) {
      res.render("status/fail", { errorStatus: err });
    }
  })
  .get("/student/updateAStudent", (req, res) => {
    res.render("updateAStudent");
  })
  .post("/student/updateAStudent", async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    try {
      await stdControler.updateARecord(id, name, email);
      res.render("status/success");
    } catch (err) {
      res.render("status/fail", { errorStatus: err });
    }
  })
  .get("*", (req, res) => {
    res.render("404");
  });

module.exports = router;
