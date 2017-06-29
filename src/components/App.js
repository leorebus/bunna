var React = require('react');

import Header from './Header';

var App = React.createClass({

  render: function () {
    return (
      <div className="l-main">
        <header className="l-main__head">
          <Header />
        </header>

        <section className="l-main__body">
          {this.props.children}
        </section>

        <footer className="l-main__foot">
          <div className="footer">
            <p>
              Associazione <span className="footer__el">No early marriage - No al matrimonio precoce</span> Onlus
              &bull; <span className="footer__el">via Fiorentina, 1219 I 50036 Pratolino (Firenze)</span>
              &nbsp;&bull; <span className="footer__el">CF 90028910488</span>
              &nbsp;&bull; <span className="footer__el">IBAN: IT16F0616038130100000000316</span>
            </p>
            <p>Copyright (c) 2016 Associazione No early marriage - No al matrimonio precoce Onlus All Rights Reserved</p>
          </div>
        </footer>
      </div>
    )
  }
});

module.exports = App;
