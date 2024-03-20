const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
} = require("C:/Users/me4co115/Desktop/Codebase/TaskManager/starter_files/controllers/controls");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(editTask).delete(deleteTask);

module.exports = router;
