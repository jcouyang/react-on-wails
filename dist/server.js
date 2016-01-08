global.self = global;
global.window = global.self;
window.fetch = require('node-fetch');
window.Request = require('node-fetch/lib/request');
window.Headers = require('node-fetch/lib/headers');
window.Response = require('node-fetch/lib/response');
require('babel-register');
var fs = require('fs');
var Header = require('../app/scripts/components/header.jsx').default;
var ReactDOM = require('react-dom/server')
var React = require('react')
var mustache = require('mustache');
var http = require('http'),
    director = require('director');
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')

var template = fs.readFileSync('./app/index.html').toString();
var serverAdapter = require('../app/scripts/serverAdapter').default;
var routes = require('../app/scripts/router').default;
//
// define a routing table.
//
var router = new director.http.Router(serverAdapter(routes));

//
// setup a server and when there is a request, dispatch the
// route that was requested in the request object.
//
var serve = serveStatic('./dist', {'index': false})
var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res)

  router.dispatch(req, res, function (err) {
    if (err) {
      serve(req, res, done)
    }
  });

});

server.listen(8080);
