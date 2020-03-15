var data = require('../users.json');

exports.viewProject = function(req, res){
	var tempName = req.params.name;
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var youScore = data.users[i].growth;
		} 
		else if (data.users[i].name == tempName) {
			var themName = data.users[i].name;
			var themScore = data.users[i].growth;
		}
	}
	var score = (themScore + youScore);
	var combinedScore = 0;
	if (score < 6) {
		combinedScore = 0;
	}
	else if (score < 11) {
		combinedScore = 1;
	}
	else if (score < 16) {
		combinedScore = 2;
	}
	else {
		combinedScore = 3;
	}
	res.render('shared', {
		"friendName": themName,
		"friendScore": themScore,
		"userScore": youScore,
		"plantScore": combinedScore
	})
}