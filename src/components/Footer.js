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
        &nbsp;&bull; <span className="footer__el">IT63&nbsp;Z030&nbsp;6938&nbsp;1321&nbsp;0000&nbsp;0000&nbsp;316 (codice BIC: BCITITMM)</span>
        </p>
        <p>Copyright &copy; 2016 Associazione No early marriage - No al matrimonio precoce Onlus All Rights Reserved</p>
        <p>Creato da <a href="https://onga.ro">Leonardo Ongaro</a>
          &nbsp;&bull; Powered by <a href="https://www.contentful.com" target="_blank">Contentful</a></p>
      </div>
    )
  }
});

module.exports = App;
