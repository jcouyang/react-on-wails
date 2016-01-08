import ReactDOM from 'react-dom';
import React from 'react';
import Header from '../components/header';
import Panels from '../components/pannels';
function root(channel = 'topstories') {
  return [
    {
      selector: 'header-tabs',
      component: <Header />,
    },
    {
      selector: 'tab-panels',
      component: <Panels channel={channel} />,
    },
  ]
}

export default root;
