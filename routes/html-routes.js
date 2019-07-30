//path
const path = require("path");

//exports
module.exports = function(app){
  app.get("/", function(req, res) {
<<<<<<< HEAD
    res.send("This is the Index File");
    //res.sendFile(path.join(__dirname, "/cash-track/public/index.html"));
=======
    res.sendFile(path.join(__dirname, "/../cash-track/public/index.html"));
>>>>>>> 67b114966c0e4dfce21dcbd7493c3ec92fe9bd95
  });

  app.get("/log-in", function(req, res) {
    res.send(" This is the Log-In Page");
  });

  app.get("/sign-up", function(req, res) {
    res.send(" This is the Sign-up Page");
  });
};
