var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(request,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        console.log("friends submitted data", req.body)
        var bestFriend = {
            "name": "",
            "photo": "",
            "diff": 200
        };

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference;
        friends.push(userData);

        console.log(userData);
        console.log(userScores)

        for (i = 0; i < friends.length; i++) {
            let friendFriend = friends[i];
            difference = 0;

            for (j = 0; j < friendFriend.scores.length; j++){
                var userScore = userScores[j];
                var friendScore = friendFriend.scores[j];

                totalDifference += Math.abs(parseInt(userScore) - parseInt(friendScore));
            }
            if (totalDifference <= bestFriend.diff){
                bestFriend.name = friendFriend.name;
                bestFriend.photo = friendFriend.photo;
                bestFriend.diff = totalDifference;
            }
        }
        friends.push(userData);

        res.json(bestFriend);
    })
}