// Declare dependencies and variables
const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const mongojs = require('mongojs');
const app = express();

const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
// mongo
const db = mongojs('cash-track-db')

// Routing
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Middleware
app.use(express.static('public'));

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));
=======
// Connect to Mongoose
mongoose.connect('mongodb://localhost/cash-track-db', { useNewUrlParser: true });

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static('public'));

// Connect Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on Port:${PORT}`));
>>>>>>> back-end
