const router = require('express').Router();
const tripsController = require('../controllers/tripsController.js');
const expensesController = require('../controllers/expensesController.js');

router.route('/:id')
.get(expensesController.findAll);

router.route('/')
.get(tripsController.findAll)
.put(tripsController.update)
.post(tripsController.create)
.delete(usersController.remove);

module.exports = router;
