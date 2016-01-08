import React from 'react';
const menu = [
  {name: 'Home', link: '/'},
  {name: ''},
]
const Header = React.createClass({
  render() {
    return (
      <div>
        <a href="#" className="mdl-layout__tab" onClick={_=>Router.setRoute('/topstories')}>Home</a>
        <a href="#" className="mdl-layout__tab" onClick={_=>Router.setRoute('/newstories')}>New</a>
        <a href="#" className="mdl-layout__tab">Ask</a>
        <a href="#show" className="mdl-layout__tab">ShowHN</a>
        <a href="#comments" className="mdl-layout__tab">Comments</a>
        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
          <i className="material-icons" role="presentation">add</i>
          <span className="visuallyhidden">Add</span>
        </button>
      </div>
    );
  },
});
export default Header;
