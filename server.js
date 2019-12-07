// DEPENDENCIES
// Requiring the series of npm packages used to give the server useful functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


/**********************************************/
// EXPRESS CONFIGURATION
var app = express();
var PORT = process.env.PORT || 3000;

// Setting up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serving static content for the app from the "public" directory in the app directory
app.use(express.static(process.cwd() + "/app/public"));

/**********************************************/
// Pointing the server to the "route" files
require("./app/routing/apiRoutes")(app);
require("./app/Routing/htmlRoutes.js")(app);


/**********************************************/
// Starting the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});