// Declare dependencies and variables
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));

//routes
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/cash-track/public/index.html'));
});

app.get('/log-in', function(req,res){
    res.send(" This is the Log-In Page")
});

app.get('/sign-up', function(req,res){
        res.send(" This is the Sign-up Page")
});
