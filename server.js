// Declare dependencies and variables
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Initialize Server
app.listen(PORT,  () => console.log(`Server is running on port ${PORT}`));

//routes
app.get('/', function(req,res){
    res.send("This is the Home Page")
});

app.get('/log-in', function(req,res){
    res.send(" This is the Log-In Page")
});

app.get('/sign-up', function(req,res){
        res.send(" This is the Sign-up Page")
});