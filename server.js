var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000
const apiroute = require("./routes/apiroute")
const htmlroute = require("./routes/htmlroute")

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiroute);
app.use("/", htmlroute);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});