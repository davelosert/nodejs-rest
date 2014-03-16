
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
app.use(express.urlencoded()); // Make XHR-Calls
app.use(express.methodOverride()); // Make .del and .put method available
app.use(app.router);

// Littel Error-Handler for Development (not really necessary for this example-app)
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
	res.send('Go to <a href="/cloudspace">/cloudspace</a> to see all folders!');
});
app.get('/cloudspace', cloudspaceCtrl.getRootFolder);

// Set up the basic routes for get, post and delete
app.get('/cloudspace/:folder', cloudspaceCtrl.getFolder);
app.get('/cloudspace/:folder/:subFolder', cloudspaceCtrl.getSubFolder);

app.post('/cloudspace/:folder', cloudspaceCtrl.createFolder);
app.post('/cloudspace/:folder/:subFolder', cloudspaceCtrl.createSubFolder);

app.del('/cloudspace/:folder', cloudspaceCtrl.deleteFolder);
app.del('/cloudspace/:folder/:subFolder', cloudspaceCtrl.deleteSubFolder);

// Start the Web-Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
