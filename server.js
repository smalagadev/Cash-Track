// Declare dependencies and variables
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');
const app = express();
const demo = require('./routes/scripts/demo.js');

const PORT = process.env.PORT || 3000;


// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
process.env.NODE_ENV === 'production' ? app.use(express.static('client/build')) : app.use(express.static('public'));
app.use(express.static('public'));

// Connect Routes
// previously require('./routes/')(app);
app.use(routes);

// For demo purposes
app.get('/api/demo', function(req, res){
  res.sendJSON();
});

// Connect to Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cash-track-db', { useNewUrlParser: true });

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on Port:${PORT}`));
