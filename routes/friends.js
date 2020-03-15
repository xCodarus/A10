var data = require('../users.json');

exports.view = function(request, response){
	response.render('friends', data);
}