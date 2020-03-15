
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var sip = require('./routes/sip');
var archive = require('./routes/archive');
var friends = require('./routes/friends');
var shared = require('./routes/shared');
var login = require('./routes/login');
var add = require('./routes/add');
var update = require('./routes/update');
var user = require('./routes/user');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
app.get('/sip', sip.view);
app.get('/archive', archive.view);
app.get('/friends', friends.view);
app.get('/shared/:name', shared.viewProject);
app.get('/login', login.auth);
app.get('/add', add.addFriend);
app.get('/update', update.updateUser);
app.get('/user', user.getUser);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
