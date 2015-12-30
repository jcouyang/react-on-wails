import React from 'react';
const Panels = React.createClass({
  render() {
    return (
      <div>
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
            <i className="material-icons">play_circle_filled</i>
          </header>
          <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
            <div className="mdl-card__supporting-text">
              <h4>{this.props.title}</h4>
              Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
            </div>
            <div className="mdl-card__actions">
              <a href="#" className="mdl-button">Read our features</a>
            </div>
          </div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1">
            <li className="mdl-menu__item">Lorem</li>
            <li className="mdl-menu__item" disabled>Ipsum</li>
            <li className="mdl-menu__item">Dolor</li>
          </ul>
        </section>
      </div>
    );
  },
});
export default Panels;
