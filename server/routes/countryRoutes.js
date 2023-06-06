const express = require('express');
const { countryController } = require('../controllers/countryController');

const countryRoutes = express.Router();



countryRoutes.get('/', countryController.getAll)
countryRoutes.get('/:id', countryController.getById)
countryRoutes.post('/',  countryController.add)
countryRoutes.delete('/:id', countryController.deleteById)
countryRoutes.put('/:id', countryController.update)


module.exports = {
    countryRoutes
}