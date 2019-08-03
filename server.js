// Declare dependencies and variables
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;


// Routing
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Middleware
app.use(express.static('public'));

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));
