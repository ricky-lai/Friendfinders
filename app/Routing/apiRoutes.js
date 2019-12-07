
// path package to get right file for html
var path = require("path");


/**********************************************/
// LOAD DATA
// Linking routes to a series of "data" sources
var friendsData = require("../data/friends");


/**********************************************/
// ROUTING
module.exports = function (app) {
    // Route that sends the user to a page that displays a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // Route that is used to handle incoming survey results & the compatibility logic //// Not coded
    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        res.json(true);
    });
};