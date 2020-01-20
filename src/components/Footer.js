var React = require('react');

import EmailLink from './EmailLink';

var App = React.createClass({

  render: function () {
    return (
      <div className="footer">
        <p>
          Associazione <span className="footer__el">No early marriage - No al matrimonio precoce</span> Onlus
          &bull; <EmailLink />
        </p>
        <p>
          <span className="footer__el">via Fiorentina, 1219 I 50036 Pratolino (Firenze)</span>
          &nbsp;&bull; <span className="footer__el">CF 90028910488</span>
        &nbsp;&bull; <span className="footer__el">IBAN: IT16F0616038130100000000316 (codice BIC: CRFIIT3F)</span>
        </p>
        <p>Copyright &copy; 2016 Associazione No early marriage - No al matrimonio precoce Onlus All Rights Reserved</p>
        <p>Creato da <a href="https://onga.ro">Leonardo Ongaro</a>
          &nbsp;&bull; Powered by <a href="https://www.contentful.com" target="_blank">Contentful</a></p>
      </div>
    )
  }
});

module.exports = App;
