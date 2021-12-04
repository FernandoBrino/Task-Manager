const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type:String,
    required:[true, 'must provide name'],
    trim:true,
    maxlengh:[20, 'name can not be more than 20 characters']
  },//BultIn validator
  completed:{
    type:Boolean,
    default:false
  }
})
//Only the things passed here will be on the DB,
//other things will be ignored

module.exports = mongoose.model('Task', TaskSchema);