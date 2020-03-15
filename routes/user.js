var data = require('../users.json');

exports.getUser = function(request, response) { 
		// Your code goes here
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].isUser == true) {
			var thisUser = data.users[i];
			response.json(thisUser);
		}
	}
}