const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  try {
    const tasks = await Task.find({});
    // res.status(200).json({ status: "success", data: { tasks, nbHits: tasks.length } });
    // res.status(200).json({ tasks, amount: tasks.length });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task }); //using '{}', task is a object.
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    res.status(200).json({ task });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    //new - always return a new item
    //runValidators - will make the validators work
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    // res.status(200).send()
    // res.status(200).json({task:null, status:'success'})
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//UPDATE WITH PUT METHOD.
// const editTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;
//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//       overwrite: true,
//     });
//     //new - always return a new item;
//     //runValidators - will make the validators work;
//     //overWrite - put method have to replace all the object, then overWrite will help with it.
//     if (!task) {
//       return res.status(404).json({ msg: `No task with id: ${taskID}` });
//     }
//     res.status(200).json({ task });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};

//editTask - put method
