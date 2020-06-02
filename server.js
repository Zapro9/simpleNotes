var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", require("./routes/apiroute.js"));
app.use("/", require("./routes/htmlroute.js"));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});