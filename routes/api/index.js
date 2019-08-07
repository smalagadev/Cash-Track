const router = require('Express').Router();
const userRoutes = require('./users');
const tripRoutes = require('./trips');
const expenseRoutes = require('./expenses');
const data = require('..scripts/seedDB.js')

router.use('users', userRoutes);

router.use('trips', tripRoutes);

router.use('expenses', expenseRoutes);

router.use('/scripts/seedDB.js', data);

module.exports = router;
