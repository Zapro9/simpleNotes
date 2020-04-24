var path = require("path");
var routes = require("express").Router();

routes.get("/notes", function (req, res) {

});

routes.get("*", function (req, res) {

});

module.exports = routes;