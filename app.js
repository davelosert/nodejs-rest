
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var cloudspaceCtrl = require('./controller/cloudspace.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
	res.json('Go to /cloudspace to see all folders!');
});
app.get('/cloudspace', cloudspaceCtrl.getRootFolder);

// Set up the basic routes for get, post and del¢[]
app.get('/cloudspace/:folder', cloudspaceCtrl.getFolder);
app.get('/cloudspace/:folder/:subFolder', cloudspaceCtrl.getSubFolder);

app.post('/cloudspace/:folder', cloudspaceCtrl.addFolder);
app.post('/cloudspace/:folder/:subFolder', cloudspaceCtrl.addSubFolder);

app.del('/cloudspace/:folder', cloudspaceCtrl.deleteFolder);
app.del('/cloudspace/:folder/:subFolder', cloudspaceCtrl.deleteSubFolder);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
