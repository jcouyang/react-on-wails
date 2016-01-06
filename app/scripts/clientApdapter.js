import React from 'react-dom';

function adapt (controller) {
  return function(){
    let views = controller.apply(null, arguments);
    for (let v in views) {
      React.render(views[v], document.getElementById(v));
    }
  }
}

export default function clientAdapter (routes) {
  let clientRoutes = {};
  for (let route in routes) {
    clientRoutes[route] = adapt(routes[route]);
  }
  return clientRoutes;
}
