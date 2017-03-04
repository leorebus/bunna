var React = require('react');

import {Link} from 'react-router';
import ArticlesList from './ArticlesList';

var Home = React.createClass({

  render: function () {
    return (
      <div className="l-vl">
        <div className="doormat l-vl__flexel"></div>
        <div className="l-row l-vl__fixel">

          <ArticlesList />

          <div className="column l-row__col">
            <h2 className="column__title">Chi siamo</h2>
            <div>
              Il progetto ‘No early marriage – no al matrimonio precoce’ nasce nel gennaio 2011 per opera di un gruppo di amici, con lo scopo di sostenere all’istruzione secondaria le ragazze di Maymekden - un villaggio non lontano dalla città di Macallè, nel nord dell’Etiopia - ed evitare loro la barbarie del matrimonio precoce, a cui erano destinate dalle famiglie per la mancanza di mezzi economici.
              &nbsp;<Link to="/progetto">Continua a leggere</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
});

module.exports = Home;