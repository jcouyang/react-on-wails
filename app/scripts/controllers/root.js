import ReactDOM from 'react-dom';
import React from 'react';
import Header from '../components/header';
import Panels from '../components/pannels';
function root(channel = 'home') {
  ReactDOM.render(<Header />, document.getElementById('header-tabs'));
  ReactDOM.render(<Panels title={channel} />, document.getElementById('tab-panels'));
}

export default root;
