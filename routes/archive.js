var data = require('../users.json');

exports.view = function(req, res){
  res.render('archive', data);
};