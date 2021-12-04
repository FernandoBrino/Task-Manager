const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send('Get all tasks')
}

const createTasks = async (req, res) => {
  try {
    res.status(201).json({task});//using '{}' task is a object.
    const task = await Task.create(req.body)
  } catch (error) {
    res.status(500).send({msg: error});
  }
  
}

const getTask = (req, res) => {
  res.json({id:req.params.id})    
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