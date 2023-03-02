
const express = require('express');
const router = express.Router();
//import the model
const TodoModel = require('../models/todo_schema_model')
//routes for GET, POST, and DELETE

router.get('/todos', (req, res, next) => {
    //read all data
    TodoModel.find({},'action')
    .then((data) => res.json(data))
    .catch(next);
});
//new tasks
 
router.post('/todos', (req,res,next ) => {
    if(req.body.action ){
        TodoModel.create(req.body)
        .then((data) =>res.json(data))
        catch(next);
    } else{
        res.json({
            error: 'the input field is empty'
        });
    }

});
/**
router.put('/todos', (req,res,next ) => {

});
*/
router.delete('/todos/:id', (req,res,next) => {
    TodoModel.findOneAndDelete({_id: req.params.id})
    .then((data) => res.json(data))
    .catch(next);
});
module.exports = router;

