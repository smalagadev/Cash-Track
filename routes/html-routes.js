//path
const path = require("path");

//exports
module.exports = function(app){
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../cash-track/public/index.html"));
  });

  app.get("/log-in", function(req, res) {
    res.send(" This is the Log-In Page");
  });

  app.get("/sign-up", function(req, res) {
    res.send(" This is the Sign-up Page");
  });
};
