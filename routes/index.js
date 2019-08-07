const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use(function(req, res){
  // res.sendFile(path.join(__dirname, '../cash-track/public/index.html'));
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// Other route paths
// app.get('/log-in', function(req,res){
//     res.send(" This is the Log-In Page");
// });
//
// app.get('/sign-up', function(req,res){
//         res.send(" This is the Sign-up Page");
//       });

module.exports = router;
