
// path package to get right file for html
var path = require("path");



// ROUTING
module.exports = function (app) {
    // Route that sends the user to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Route that sends the user to the home page //// Instructions say this should be a 'USE' request??
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};