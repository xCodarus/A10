var data = require('../users.json');

exports.view = function(req, res) {
	console.log(data);
	res.render('sip', data);
}
