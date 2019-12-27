var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (request, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var userData = req.body;
        var userScores = userData.scores[j];
        var bestFriendScore = 0;
        var totalDifference;

        for (i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (j = 0; j < userScores.length; j++) {
                totalDifference += Math.abs(parseInt(friends.score[i]) - parseInt(userScores));
            }
            if (totalDifference === bestFriendScore) {

            };
        };
        friends.push(userData);
        res.json(bestFriend);
    });
};