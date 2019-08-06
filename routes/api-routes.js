const path = require('path');
const db = require('./../models'); // Require all models

module.exports = function(app){
<<<<<<< HEAD

  // Example collection from database
  app.get('/ex/', function(req, res){
    res.json({ thing: 'apple' });
  })

};
=======
  app.get('/users/', function(req, res){
    res.json({ thing: 'apple' });
  });

  app.post('/users/', function(req, res){
    db.User.create(req.body)
    .then(function(user){
      res.json(user);
    })
    .catch(function(err){
      res.json(err);
    });
  });

  app.post('/trips/', function(req, res){

  });

  app.post('/expenses/', function(req, res){

  });
}
>>>>>>> back-end
