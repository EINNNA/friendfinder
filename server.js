var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.get("/"), function(req,res) {
  console.log('answering')
  res.send('aaa');
  res.sendFile(path.join(__dirname,"./../public/home.html"));
};

app.get("/survey", function(req,res){
  res.sendFile(path.join(__dirname,"./../public/survey.html"));
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });