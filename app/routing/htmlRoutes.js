var path = require("path");

module.exports = function(app){
    app.get("/", function(req,res) {
        console.log("ROUTE");
        res.sendFile(path.join(__dirname,"/../public/home.html"));
    });

    app.get("/survey", function(req,res){
        console.log("SURVEY");
        res.sendFile(path.join(__dirname,"/../public/survey.html"));
    });
};