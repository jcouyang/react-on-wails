import ReactDOM from 'react-dom';
import React from 'react';
import Header from '../components/header';
import Panels from '../components/pannels';
function root(channel = 'home') {
  return [
    {
      selector: 'header-tabs',
      component: <Header />,
    },
    {
      selector: 'tab-panels',
      component: <Panels title={channel} />,
    },
  ]
}

export default root;
