const path = require('path');

module.exports = function(app){

  // Example collection from database
  app.get('/ex/', function(req, res){
    res.json({ thing: 'apple' });
  })

};
