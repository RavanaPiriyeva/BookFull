const express = require('express');
const { writerController } = require('../controllers/writerController');


const writerRoutes = express.Router();



writerRoutes.get('/', writerController.getAll)
writerRoutes.get('/:id', writerController.getById)
writerRoutes.delete('/:id', writerController.delete)
writerRoutes.post('/', writerController.add)


module.exports = {
    writerRoutes
}
