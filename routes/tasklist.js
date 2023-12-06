const express = require("express");
const router = express.Router();

const {createNewTask} = require("../controller/tasklist");


router.post("/addTask/:id",createNewTask)

module.exports = router