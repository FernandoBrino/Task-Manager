const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
  } catch (error) {
    res.status(500).send({msg: error});
  }
}

const createTasks = async (req, res) => {
  try {
    res.status(201).json({task});//using '{}', task is a object.
    const task = await Task.create(req.body)
  } catch (error) {
    res.status(500).send({msg: error});
  }
  
}

const getTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID});
    res.status(200).json({task})  
    if(!task) {
      return
    }
  } catch (error) {
    
  }

}

const updateTask = (req, res) => {
  res.send('Update task')
}

const deleteTask = (req, res) => {
  res.send('Delete task')
}

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask
}