const express = require("express");
const router = new express.Router();
const stdControler = require("../controllers/studentControler");
// manage the get request for this app

router
  .get("/", async (req, res) => {
    // render a message to this webpage and post varaible content in the right place
    const allStudents = await stdControler.getAll();
    if (allStudents.length === 0)
      res.status(404).send("No students in the table: " + [0]);
    else {
      res.status(200).send(allStudents);
    }
  })
  .get("/student/allStudents", async (req, res) => {
    // render a message to this webpage and post varaible content in the right place
    const allStudents = await stdControler.getAll();
    if (allStudents.length === 0)
      res.status(404).send("No students in the table: " + [0]);
    else {
      res.status(200).send(allStudents);
    }
  })
  .post("/student/searchStudent/:id", async (req, res) => {
    const id = req.params.id;
    const student = await stdControler.getOne(id);
    if (student.length === 0) {
      res.status(404).send("No such student whit this id: " + id);
    } else {
      res.status(200).send(student);
    }
  })
  .post("/student/createAStudent", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    console.log(name, email);
    try {
      await stdControler.createARecord(name, email);
      res.status(201).send("Student created successfully: " + name);
    } catch (err) {
      res
        .status(404)
        .send("Error creating student: " + name + " " + err.message);
    }
  })
  .delete("/student/deleteOneStudent/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      await stdControler.removeOne(id);
      res.status(201).send("Student deleted successfully whit id : " + id);
    } catch (err) {
      res.status(404).send("Error deleting student: " + err);
    }
  })
  .put("/student/updateAStudent/:id", async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    try {
      const student = await stdControler.updateARecord(id, name, email);
      res.status(201).send("Student updatet successfully whit id : " + id);
    } catch (err) {
      res.status(404).send("Error updating a student: " + err);
    }
  });
module.exports = router;
