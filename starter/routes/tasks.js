const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
//editTask - put method

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
//.put(editTask); - put method
//remember to create route

module.exports = router;
