var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000


app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/apiroute")(app);
require("./routes/htmlroute")(app);


app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});