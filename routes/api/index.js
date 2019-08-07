const router = require('Express').Router();
const userRoutes = require('./users');
const tripRoutes = require('./trips');
const expenseRoutes = require('./expenses');

routers.use('users', userRoutes);

routers.use('trips', tripRoutes);

routers.use('expenses', expenseRoutes);

module.exports = router;
