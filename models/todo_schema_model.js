const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const TodoSchema = new Schema({
    action:{ 
        type: String,
        required:[true,'the text field is rewuired'],
    },

});
//create model
const TodoModel = mongoose.model('todo',TodoSchema);
module.exports = TodoModel;
