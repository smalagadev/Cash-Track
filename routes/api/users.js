const router = require('express').Router();
const usersController = require('../controllers/usersController.js');
const tripsController = require('../controllers/tripsController.js');

// router.route('/sign-up')
// .post(usersController.create);

router.route('/:id')
.get(tripsController.findAll);
// .put(usersController.update)
// .delete(usersController.remove);

module.exports = router;
