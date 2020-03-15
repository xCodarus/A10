var data = require("../users.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var friendCheck = false;
	var newFriend = {'name': request.query.name,
						'password': 'password',
						'growth': '0',
						'isUser': false};
		// json object (newFriend) is created
	for (i=0; i < data.users.length; i++) {
		if (data.users[i].name == newFriend.name) {
			var friendCheck = true;
		}
	}
	if (friendCheck == false) {
		data.users.push(newFriend);
	}
	response.render('friends', data);
}
 