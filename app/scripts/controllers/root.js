import ReactDOM from 'react-dom';
import React from 'react';
import Header from '../components/header';
import Panels from '../components/pannels';
function root(channel = 'home') {
  return {
    'header-tabs': <Header />,
    'tab-panels': <Panels title={channel} />
  }
}

export default root;
