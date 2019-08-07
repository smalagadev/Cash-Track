const router = require('express').Router();
const expensesController = require('../controllers/expensesController.js');

router.route('/')
.get(expensesController.findAll)
.create(expensesController.create);

router.route('/:index')
.put(expensesController.update)
.delete(expensesController.remove);

module.exports = router;
