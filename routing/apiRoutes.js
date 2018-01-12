var path = require("path");
var friends = require("../data/friends");
var data;


module.exports = function(app) {
  app.post("/api/friends", function(req, res) {
    calculate(req.body.scores, res);
  });
};

function calculate(arr, res) {
  var bestScore = 1000;

  for (var x = 0; x < friends.length; x++) {
    var score = 0;
    
    for (var i = 0; i < arr.length; i++) {
      score += Math.abs(parseInt(arr[i]) - parseInt(friends[x].scores[i]));
    }
    
    if (score < bestScore) {
      bestScore = score;
      data = friends[x];
    }
  }
 
  res.send(data);
}
