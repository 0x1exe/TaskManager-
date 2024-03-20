const Task = require("C:/Users/me4co115/Desktop/Codebase/TaskManager/starter_files/models/Task.js");
const asyncWrapper = require("C:/Users/me4co115/Desktop/Codebase/TaskManager/starter_files/middleware/asyncWrap.js");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Invalid ID: no task with ID=${taskID} was found` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Invalid ID: no task with ID=${taskID} was found` });
  }
  res.status(200).json({ task });
});

const editTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res
      .status(404)
      .json({ msg: `Invalid ID: no task with ID=${taskID} was found` });
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  editTask,
  deleteTask,
};
