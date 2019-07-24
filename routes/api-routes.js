const path = require('path');

exports.modules = function(app){
  app.get('/api/', function(req, res){
    res.json({ thing: 'apple' });
  })
}
