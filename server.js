// Declare dependencies and variables
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));
