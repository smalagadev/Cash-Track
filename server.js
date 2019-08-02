// Declare dependencies and variables
const path = require('path');
const mongo = require('mongojs');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Mongo DB section
const db = mongo('cash-track-db', ['Users', 'Trips', 'Expenses']);

db.on('error', function(error){
  console.log(`Database Error: ${error}`);
});

app.get('/users', function(req, res){
  db.Users.find({}, function(error, results){
    error ? console.log(error) : res.json(results);
  });
});

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on Port:${PORT}`));

//routes
