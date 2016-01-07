import React from 'react-dom/server';
import mustache from 'mustache';
const fs = require('fs');
var template = fs.readFileSync('./app/index.html').toString();

function uncomment(html) {
  return '-->'+ html +'<!--';
}
function adapt(controller) {
  return function(){
    let views = controller.apply(null, arguments);
    this.res.writeHead(200, { 'Content-Type': 'text/html' })
    this.res.end(
      mustache.render(
        template,
        views.reduce((acc,v,{})=>{
          acc[v.selector] = uncomment(React.renderToString(v.component));
          return acc;
        })));
  }
}

export default function serverAdapter (routes) {
  let serverRoutes = {};
  for (let route in routes) {
    serverRoutes[route] = {
      get: adapt(routes[route])
    }
  }
  return serverRoutes;
}
