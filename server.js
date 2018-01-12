var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var htmlRouter = require("./routing/htmlRoutes");
var apiRouter = require("./routing/apiRoutes");

htmlRouter(app);
apiRouter(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});