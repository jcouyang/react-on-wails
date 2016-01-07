import React from 'react-dom';

function adapt (controller) {
  return function(){
    let views = controller.apply(null, arguments);
    for (let v of views) {
      React.render(v.component, document.getElementById(v.selector));
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
